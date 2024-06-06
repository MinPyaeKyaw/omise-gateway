import {
  Box,
  HStack,
  IInputProps,
  Icon,
  Input,
  Pressable,
  Text,
  useTheme,
} from 'native-base';
import {useState} from 'react';
import Ficon from 'react-native-vector-icons/Feather';
import {makeStyle} from './style';
import {PASSWORD_POLICIES} from '../../config/const';
import {UseFormReturn} from 'react-hook-form';

interface Props extends IInputProps {
  placeholder: string;
  label: string;
  showPolicies?: boolean;
  required?: boolean;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}

export function PasswordInput({
  placeholder,
  label,
  showPolicies = false,
  required = false,
  name,
  form,
  ...props
}: Props) {
  const theme = useTheme();
  const styles = makeStyle(theme);

  const [show, setShow] = useState<boolean>(false);
  const [policies, setPolicies] = useState(PASSWORD_POLICIES);

  return (
    <>
      <HStack mb="1" space="1">
        <Text>{label}</Text>
        {required && <Text color="red.500">*</Text>}
      </HStack>
      <Input
        placeholder={placeholder}
        variant="unstyled"
        borderRadius="lg"
        fontWeight="200"
        fontSize="md"
        style={styles.textInput}
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Pressable
            onPress={() => setShow(!show)}
            style={styles.passwordToggle}>
            <Icon
              as={<Ficon name={show ? 'eye' : 'eye-off'} />}
              size={5}
              mr="2"
              color="light.400"
            />
          </Pressable>
        }
        onChangeText={e => form.setValue(name, e)}
        {...props}
      />
      {form.formState.errors[name]?.message && !form.watch(name) && (
        <Text color="error.700" fontSize="xs">
          {form.formState.errors[name].message}
        </Text>
      )}

      {showPolicies && (
        <Box style={styles.policyWrapper}>
          {policies.map(policy => (
            <Policy
              key={policy.id}
              name={policy.name}
              isValid={policy.isPassed}
            />
          ))}
        </Box>
      )}
    </>
  );
}

interface PolicyProps {
  name: string;
  isValid: boolean;
}

function Policy({name, isValid}: PolicyProps) {
  return (
    <Box
      rounded="sm"
      px="2"
      py="1"
      bg={isValid ? 'green.50' : 'gray.100'}
      _text={{
        textAlign: 'center',
        fontSize: 'xs',
        color: isValid ? 'green.600' : 'light.200',
      }}>
      {name}
    </Box>
  );
}
