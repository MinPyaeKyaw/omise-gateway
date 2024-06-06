import {Box} from 'native-base';

interface Props {
  text: string;
  color?: string;
}

export function Badge({text, color = 'primary'}: Props) {
  return (
    <Box
      bg={`${color}.50`}
      rounded="sm"
      px={3}
      py="0.5"
      _text={{
        color: `${color}.600`,
        textAlign: 'center',
        fontSize: 'xs',
      }}>
      {text}
    </Box>
  );
}
