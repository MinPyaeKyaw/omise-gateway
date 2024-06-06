import {VStack} from 'native-base';
import {Card} from '../../components/cards';
import {RootLayout} from '../../layouts';
import useCardStore from '../../stores/useCard';
import {NoCard} from './components';

export function CardLists() {
  const {cards} = useCardStore();

  console.log('cards', cards);

  if (cards.length === 0) {
    return (
      <RootLayout>
        <NoCard />
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <VStack flex={1} space="3">
        {cards.map(card => (
          <Card key={card.number} card={card} />
        ))}
      </VStack>
    </RootLayout>
  );
}
