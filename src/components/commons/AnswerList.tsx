import {Box, Text} from 'native-base';

interface Props {
  answers: string[];
  multiple?: boolean;
}

export function AnswerList({answers, multiple}: Props) {
  return (
    <Box>
      {answers.map(ans => (
        <Text key={ans} fontSize="md">
          {ans}
        </Text>
      ))}
    </Box>
  );
}
