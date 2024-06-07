import {VStack, ScrollView, Box} from 'native-base';
import {Card} from '../../components/cards';
import {RootLayout} from '../../layouts';
import useCardStore from '../../stores/useCard';
import {NoCard} from './components';

export function CardLists() {
  const {cards} = useCardStore();

  if (cards.length === 0) {
    return (
      <RootLayout>
        <NoCard />
      </RootLayout>
    );
  }

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <VStack flex={1} space="3" px="5" pb="5">
          {cards.map(card => (
            <Card key={card.number} card={card} />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
