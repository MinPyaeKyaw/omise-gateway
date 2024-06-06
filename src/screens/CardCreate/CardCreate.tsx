import {Box, Button, HStack, VStack} from 'native-base';
import {RootLayout} from '../../layouts';
import {CardNumberInput, TextInput} from '../../components/inputs';
import {useForm} from 'react-hook-form';
import {createCardSchema} from '../../utils/schema';
import {zodResolver} from '@hookform/resolvers/zod';
import useCardStore from '../../stores/useCard';

export function CardCreate() {
  const {addCard} = useCardStore();
  const form = useForm({
    defaultValues: {
      name: '',
      number: '',
      expiration_date: '',
      security_code: '',
    },
    resolver: zodResolver(createCardSchema),
  });

  const onSubmit = form.handleSubmit(data => {
    const expYear = +data.expiration_date.split('/')[1];
    const expMonth = +data.expiration_date.split('/')[0];
    addCard({
      name: data.name,
      number: data.number,
      expiration_month: expMonth,
      expiration_year: expYear,
      security_code: +data.security_code,
    });
  });

  return (
    <RootLayout>
      <VStack flex={1} justifyContent="space-between">
        <VStack flex={1} space="4">
          <CardNumberInput
            placeholder="0000 0000 0000 0000"
            label="ATM/Debit/Credit card number"
            name="number"
            form={form}
          />

          <TextInput
            placeholder="Name on Card"
            label="Name on Card"
            name="name"
            form={form}
          />

          <HStack space="4">
            <Box flex={1}>
              <TextInput
                placeholder="MM/YY"
                label="Expiry date"
                name="expiration_date"
                form={form}
              />
            </Box>

            <Box flex={1}>
              <TextInput
                placeholder="CVV"
                label="CVV"
                name="security_code"
                form={form}
              />
            </Box>
          </HStack>
        </VStack>

        <Box py="5">
          <Button onPress={form.handleSubmit(onSubmit)}>Add Card</Button>
        </Box>
      </VStack>
    </RootLayout>
  );
}
