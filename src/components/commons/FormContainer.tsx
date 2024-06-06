import {VStack} from 'native-base';
import {IVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export function FormContainer({children, ...props}: Props & IVStackProps) {
  return (
    <VStack {...props} space={4}>
      {children}
    </VStack>
  );
}
