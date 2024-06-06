import {HStack, Text, useTheme} from 'native-base';
import {NavHeaderBackButton} from '../buttons';
import {makeStyle} from './style';

interface Props {
  title: string;
}

export function StackHeader({title}: Props) {
  const theme = useTheme();
  const styles = makeStyle(theme);

  return (
    <HStack style={styles.header} alignItems="center" space={4}>
      <NavHeaderBackButton />

      <Text
        fontFamily="body"
        fontWeight="200"
        fontStyle="normal"
        fontSize="lg"
        color="white">
        {title}
      </Text>
    </HStack>
  );
}
