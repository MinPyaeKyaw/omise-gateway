import {NativeBaseProvider} from 'native-base';
import {ReactNode} from 'react';
import {theme} from './theme/theme';

interface Props {
  children: ReactNode;
}

export function NativeBaseConfig({children}: Props) {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
}
