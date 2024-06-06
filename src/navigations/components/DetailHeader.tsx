import {HStack, Pressable} from 'native-base';
import Eicon from 'react-native-vector-icons/Entypo';
import {ICON_SIZES} from '../../config/const';
import {useNavigation} from '@react-navigation/native';

export function DetailHeader() {
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
    </HStack>
  );
}
