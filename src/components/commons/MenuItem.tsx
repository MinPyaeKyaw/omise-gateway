import {useNavigation} from '@react-navigation/native';
import {Divider, HStack, Icon, Pressable, Text} from 'native-base';
import Ficon from 'react-native-vector-icons/Feather';

interface Props {
  icon: string;
  label: string;
  route?: boolean | string;
  onPress?: () => void;
}

export function MenuItem({label, icon, route = false, onPress}: Props) {
  const navigation = useNavigation();

  const handleOnPress = () => {
    if (route) {
      navigation.navigate(route as never);
    } else {
      if (onPress) {
        onPress();
      }
    }
  };

  return (
    <>
      <Pressable onPress={handleOnPress} width="100%">
        <HStack
          space={3}
          alignItems="center"
          justifyContent="space-between"
          py="4">
          <HStack space={3} alignItems="center">
            <Icon as={Ficon} name={icon} size="md" color="light.400" />
            <Text fontSize="md">{label}</Text>
          </HStack>

          {route && (
            <Icon
              as={Ficon}
              name={'chevron-right'}
              size="md"
              color="light.400"
            />
          )}
        </HStack>
      </Pressable>

      <Divider bg="muted.200" />
    </>
  );
}
