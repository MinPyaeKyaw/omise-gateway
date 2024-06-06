import {Box, Text, useTheme} from 'native-base';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {makeStyle} from './style';

interface Props {
  label?: string;
  value: string;
  onChangeValue: (value: string) => void;
  length?: number;
}

export const PinInput = ({value, onChangeValue, length = 6, label}: Props) => {
  const theme = useTheme();
  const styles = makeStyle(theme);

  const ref = useBlurOnFulfill({value, cellCount: length});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeValue,
  });

  return (
    <Box width="100%">
      {label && (
        <Text textAlign="center" mb="3">
          {label}
        </Text>
      )}
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={onChangeValue}
        cellCount={length}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </Box>
  );
};
