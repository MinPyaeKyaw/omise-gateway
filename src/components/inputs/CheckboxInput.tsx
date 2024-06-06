import {Text, Checkbox, Box} from 'native-base';
import {UseFormReturn} from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}

export function CheckboxInput({label, name, form}: Props) {
  return (
    <Box>
      <Checkbox onChange={e => form.setValue('terms', e)} value="">
        <Text fontSize="xs">{label}</Text>
      </Checkbox>
      {form.formState.errors[name]?.message && !form.watch(name) && (
        <Text color="error.700" fontSize="xs">
          {form.formState.errors[name].message}
        </Text>
      )}
    </Box>
  );
}
