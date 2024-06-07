import {Text, Input, IInputProps, Box, HStack} from 'native-base';
import {UseFormReturn} from 'react-hook-form';
import {useState} from 'react';
import MasterCard from './../../../images/svg/master.svg';
import VisaCard from './../../../images/svg/visa.svg';
import JcbCard from './../../../images/svg/jcb.svg';

interface Props extends IInputProps {
  placeholder: string;
  label: string;
  required?: boolean;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}

export function CardNumberInput({
  placeholder,
  label,
  name,
  form,
  ...props
}: Props) {
  const [cardNumber, setCardNumber] = useState<string>(form.watch(name));

  const handleCardNumberChange = (number: string) => {
    // Remove all non-digit characters
    const sanitizedNumber = number.replace(/\D/g, '');

    // Add a space every 4 digits
    const formattedNumber = sanitizedNumber.replace(/(.{4})/g, '$1 ').trim();

    if (formattedNumber.length <= 19) {
      setCardNumber(formattedNumber);
      form.setValue(name, formattedNumber.split(' ').join(''));
    }
  };

  const CardImg = () => {
    return (
      <HStack>
        <MasterCard width={30} height={30} />
        <VisaCard width={30} height={30} />
        <JcbCard width={30} height={30} />
      </HStack>
    );
  };

  return (
    <>
      <Text mb="1">{label}</Text>
      <HStack
        alignItems="center"
        overflow="hidden"
        borderWidth="1"
        borderColor="muted.300"
        borderRadius="lg"
        pr="2"
        bgColor="white">
        <Input
          flex={1}
          variant="unstyled"
          placeholder={placeholder}
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          {...props}
        />
        <Box>
          <CardImg />
        </Box>
      </HStack>
      {form.formState.errors[name]?.message && !form.watch(name) && (
        <Text color="error.700" fontSize="xs">
          {form.formState.errors[name].message}
        </Text>
      )}
    </>
  );
}
