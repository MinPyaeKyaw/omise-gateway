import {useNavigation} from '@react-navigation/native';
import {Button, Center, Text, VStack} from 'native-base';
import {SCREEN_NAMES} from '../../../config/const';

export function NoCard() {
  const navigation = useNavigation();

  return (
    <Center flex={1}>
      <VStack space="3">
        <VStack alignItems="center">
          <Text fontSize="3xl">💳</Text>
          <Text>No Cards Found</Text>
        </VStack>

        <VStack alignItems="center">
          <Text>We recommend adding a card</Text>
          <Text>for easy payment</Text>
        </VStack>

        <Button
          onPress={() => navigation.navigate(SCREEN_NAMES.CARD_CREATE as never)}
          variant="ghost">
          Add New Card
        </Button>
      </VStack>
    </Center>
  );
}
