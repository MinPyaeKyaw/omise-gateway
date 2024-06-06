import {Text, Input, HStack, IInputProps} from 'native-base';
import {UseFormReturn} from 'react-hook-form';

interface Props extends IInputProps {
  placeholder: string;
  label: string;
  required?: boolean;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}

export function TextInput({
  placeholder,
  label,
  required = false,
  name,
  form,
  ...props
}: Props) {
  return (
    <>
      <HStack mb="1" space="1">
        <Text>{label}</Text>
        {required && <Text color="red.500">*</Text>}
      </HStack>
      <Input
        placeholder={placeholder}
        onChangeText={e => form.setValue(name, e)}
        {...props}
      />
      {form.formState.errors[name]?.message && !form.watch(name) && (
        <Text color="error.700" fontSize="xs">
          {form.formState.errors[name].message}
        </Text>
      )}
    </>
  );
}
