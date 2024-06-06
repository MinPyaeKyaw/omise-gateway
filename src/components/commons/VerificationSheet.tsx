import {Actionsheet, Text, Button} from 'native-base';
import {PinInput} from '../inputs';
import {useState} from 'react';

interface Props {
  isOpen: boolean;
  description: string;
  isLoading: boolean;
  onVerify: () => void;
  onClose: () => void;
}

export function VerificationSheet({
  isOpen,
  onClose,
  description,
  isLoading,
  onVerify,
}: Props) {
  const [pinCode, setPinCode] = useState<string>('');

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content w="100%" p="4">
        <Text fontSize="2xl" fontWeight="400" color="primary.400">
          Verification
        </Text>

        <Text textAlign="center" mb="4">
          {description}
        </Text>

        <PinInput value={pinCode} onChangeValue={setPinCode} />

        <Button onPress={onVerify} isLoading={isLoading} width="100%" mt="4">
          Verify
        </Button>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
