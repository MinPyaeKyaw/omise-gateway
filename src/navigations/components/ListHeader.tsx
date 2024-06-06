import {HStack, Pressable, Text} from 'native-base';
import Eicon from 'react-native-vector-icons/Entypo';
import {ICON_SIZES, SCREEN_NAMES} from '../../config/const';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title?: string;
}

export function ListHeader({title}: Props) {
  const navigation = useNavigation();

  return (
    <HStack
      px="4"
      h={60}
      bg="white"
      alignItems="center"
      justifyContent="space-between">
      <Pressable onPress={() => navigation.goBack()}>
        <Eicon name="chevron-left" size={ICON_SIZES.md} color="black" />
      </Pressable>

      <Text fontSize="lg" fontWeight="400">
        {title}
      </Text>

      <Pressable
        onPress={() => navigation.navigate(SCREEN_NAMES.CARD_CREATE as never)}>
        <Eicon name="plus" size={ICON_SIZES.md} color="black" />
      </Pressable>
    </HStack>
  );
}
