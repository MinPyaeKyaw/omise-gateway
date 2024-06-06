import {Box, ScrollView} from 'native-base';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export function RootLayout({children}: Props) {
  return (
    <Box flex={1}>
      <ScrollView bg="white" flex={1}>
        <Box px="5" bg="white">
          {children}
        </Box>
      </ScrollView>
    </Box>
  );
}
