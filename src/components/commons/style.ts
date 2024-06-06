import {StyleSheet} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makeStyle = (theme: any) =>
  StyleSheet.create({
    header: {
      backgroundColor: theme.colors.primary[400],
      height: 60,
    },
  });
