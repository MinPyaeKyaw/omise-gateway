import {VStack, ScrollView, Box, useToast} from 'native-base';
import {Card} from '../../components/cards';
import {RootLayout} from '../../layouts';
import useCardStore from '../../stores/useCard';
import {NoCard} from './components';
import Omise from 'omise-react-native';

Omise.config(
  'pkey_test_5wvisbxphp1zapg8ie6',
  'skey_test_5wvisdjjoqmfof5npzw',
  '2017-11-12',
);

export function CardLists() {
  const toast = useToast();
  const {cards} = useCardStore();

  const handlePressCard = async (card: Card) => {
    const data = await Omise.createToken({
      card: {
        name: card.name,
        city: 'Bangkok',
        postal_code: 10320,
        number: card.number,
        expiration_month: card.expiration_month,
        expiration_year: card.expiration_year,
        security_code: card.security_code,
      },
    });

    const omiseTokenId = data.id;

    await Omise.createSource({
      type: 'internet_banking_bbl',
      amount: 500000,
      currency: 'thb',
    });

    await createOmiseCharge(omiseTokenId);
  };

  const createOmiseCharge = async (omiseTokenId: string) => {
    const data = await Omise.createCharge({
      description: 'Sai Min',
      amount: 500000, // 5,000 baht
      currency: 'thb',
      capture: true,
      card: omiseTokenId,
    });

    if (data.paid) {
      toast.show({
        title: 'Successfully Created a Payment!',
        placement: 'top',
      });
    }
  };

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
            <Card
              key={card.number}
              card={card}
              onPressCard={() => handlePressCard(card)}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
