import {Box} from 'native-base';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export function RootLayout({children}: Props) {
  return (
    <Box flex={1} px="5" bg="white">
      {children}
    </Box>
  );
}
