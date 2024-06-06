import {HStack, ITextAreaProps, Text, TextArea, useTheme} from 'native-base';
import {UseFormReturn} from 'react-hook-form';
import {makeStyle} from './style';

interface Props extends ITextAreaProps {
  placeholder: string;
  label?: string;
  required?: boolean;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}

export function TextAreaInput({
  placeholder,
  label,
  required = false,
  name,
  form,
  ...props
}: Props) {
  const theme = useTheme();
  const styles = makeStyle(theme);

  return (
    <>
      {label && (
        <HStack mb="1" space="1">
          <Text>{label}</Text>
          {required && <Text color="red.500">*</Text>}
        </HStack>
      )}
      <TextArea
        h={30}
        placeholder={placeholder}
        variant="unstyled"
        borderRadius="lg"
        fontWeight="200"
        fontSize="md"
        style={styles.textAreaInput}
        onChangeText={e => form.setValue(name, e)}
        {...props}
      />
      {/* <Input
        placeholder={placeholder}
        variant="unstyled"
        borderRadius="lg"
        fontWeight="200"
        fontSize="md"
        style={styles.textInput}
        onChangeText={e => form.setValue(name, e)}
        {...props}
      /> */}
      {form.formState.errors[name]?.message && !form.watch(name) && (
        <Text color="error.700" fontSize="xs">
          {form.formState.errors[name].message}
        </Text>
      )}
    </>
  );
}
