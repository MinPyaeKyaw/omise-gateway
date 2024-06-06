import {Box, HStack, Text, VStack} from 'native-base';
import VisaImg from './../../../images/svg/visa.svg';
import DotImg from './../../../images/svg/dot.svg';
import JcbImg from './../../../images/svg/jcb.svg';
import MasterImg from './../../../images/svg/master.svg';

interface Props {
  card: Card;
}

export function Card({card}: Props) {
  const CardIcon = () => {
    if (card.number[0] === '4') {
      return <VisaImg />;
    }

    if (card.number[0] === '3') {
      return <JcbImg />;
    }

    if (card.number[0] === '5' || card.number[0] === '2') {
      return <MasterImg />;
    }

    return <VisaImg />;
  };

  return (
    <Box width="100%" mt="4" p="5" borderRadius="md" bg="white" shadow="7">
      <VStack>
        <CardIcon />

        <HStack space="4" alignItems="center">
          <HStack>
            <DotImg width={15} />
            <DotImg width={15} />
            <DotImg width={15} />
            <DotImg width={15} />
          </HStack>

          <HStack>
            <DotImg width={15} />
            <DotImg width={15} />
            <DotImg width={15} />
            <DotImg width={15} />
          </HStack>

          <HStack>
            <DotImg width={15} />
            <DotImg width={15} />
            <DotImg width={15} />
            <DotImg width={15} />
          </HStack>

          <Text fontSize="md">
            {card.number.substring(card.number.length - 4, card.number.length)}
          </Text>
        </HStack>

        <HStack justifyContent="space-between">
          <VStack space="3">
            <Text color="muted.400">Name on Card</Text>
            <Text fontWeight="400">{card.name}</Text>
          </VStack>

          <VStack space="3">
            <Text color="muted.400">Expires</Text>
            <Text fontWeight="400">
              {`${card.expiration_month}/${card.expiration_year}`}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
