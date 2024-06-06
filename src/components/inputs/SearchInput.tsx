import {Box, IInputProps, Icon, Input, useTheme} from 'native-base';
import Ficon from 'react-native-vector-icons/Feather';
import {makeStyle} from './style';

export function SearchInput({placeholder, ...props}: IInputProps) {
  const theme = useTheme();
  const styles = makeStyle(theme);

  return (
    <Input
      InputLeftElement={
        <Box style={styles.searchIcon}>
          <Icon as={<Ficon name="search" />} color="light.400" size="lg" />
        </Box>
      }
      placeholder={placeholder}
      variant="unstyled"
      borderRadius="lg"
      fontWeight="200"
      fontSize="md"
      {...props}
      style={styles.searchInput}
    />
  );
}
