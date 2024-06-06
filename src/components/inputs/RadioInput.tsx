import {Radio} from 'native-base';
import {useState} from 'react';
import {UseFormReturn} from 'react-hook-form';

interface Props {
  data: DataType[];
  label?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: UseFormReturn<any>;
}

export function RadioInput({data, name, label}: Props) {
  const [value, setValue] = useState('two');

  return (
    <Radio.Group
      name={name}
      accessibilityLabel={label}
      value={value}
      onChange={nextValue => {
        setValue(nextValue);
      }}>
      {data.map(d => (
        <Radio key={d.value} value={d.value} my="2" colorScheme="secondary">
          {d.label}
        </Radio>
      ))}
    </Radio.Group>
  );
}
