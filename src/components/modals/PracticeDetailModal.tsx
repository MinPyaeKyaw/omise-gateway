import {HStack, Modal, Text, VStack, useTheme} from 'native-base';
import {useMemo} from 'react';
import Micon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  open: boolean;
  onClose: () => void;
  questions: Record<string, unknown | string>[];
}

const Answer = ({
  label,
  isCorrect,
  answer,
}: {
  label: string;
  isCorrect?: boolean | undefined;
  answer?: boolean | undefined;
}) => {
  const theme = useTheme();

  const color = useMemo(() => {
    if (isCorrect && answer) {
      return theme.colors.success[600];
    } else if (isCorrect) {
      return theme.colors.success[600];
    } else if (isCorrect === undefined && answer === undefined) {
      return theme.colors.text[600];
    } else {
      return theme.colors.error[600];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, isCorrect]);

  const resultIcon = useMemo(() => {
    if (isCorrect && answer) {
      return 'check';
    } else if (isCorrect) {
      return 'check';
    } else if (isCorrect === undefined && answer === undefined) {
      return false;
    } else {
      return 'close';
    }
  }, [answer, isCorrect]);

  return (
    <HStack justifyContent="space-between" alignItems="center" height="8">
      <HStack alignItems="center" space="1">
        <Micon name="radio-button-on" size={20} color={color} />
        <Text color={color}>{label}</Text>
      </HStack>

      {resultIcon && <Micon name={resultIcon} size={20} color={color} />}
    </HStack>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Question = ({question}: {question: any}) => (
  <VStack>
    <Text>{question.question}</Text>
    {question.answers.map(a => (
      <Answer
        label={a.answer}
        answer={a.answer === 'およいで' || undefined}
        isCorrect={a.isCorrect || undefined}
      />
    ))}
    {/* <Answer label="Lee Pl" isCorrect />
    <Answer label="Lee Pl" />
    <Answer label="Lee Pl" /> */}
  </VStack>
);

export function PracticeDetailModal({open, onClose, questions}: Props) {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <Modal.Content width="95%">
        <Modal.CloseButton />
        <Modal.Header>Practice test details</Modal.Header>
        <Modal.Body>
          <VStack space="3">
            {questions.map((q, i) => (
              <Question key={i} question={q} />
            ))}
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
