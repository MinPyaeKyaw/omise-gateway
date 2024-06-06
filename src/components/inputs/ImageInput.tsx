import {Box, Center, IconButton, Image, useTheme} from 'native-base';
import {person} from './../../../images';
import Ficon from 'react-native-vector-icons/Feather';
import {makeStyle} from './style';

export function ImageInput() {
  const theme = useTheme();
  const styles = makeStyle(theme);

  return (
    <Center width="100%" pt="8">
      <Box pos="relative">
        <Box style={styles.imgContainer}>
          <Image style={styles.img} source={person} alt="Alternate Text" />
        </Box>
        <IconButton
          onPress={() => console.log('edit')}
          _icon={{
            as: <Ficon name="edit" />,
            name: 'edit',
          }}
          variant="solid"
          size="md"
          borderRadius="full"
          colorScheme="secondary"
          style={styles.editBtn}
        />
      </Box>
    </Center>
  );
}
