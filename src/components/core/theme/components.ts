export const components = {
  Button: {
    defaultProps: {
      height: '43px',
      colorSchema: 'primary',
      // bg: 'primary.400',
      rounded: 'full',
      _text: {
        fontWeight: '300',
      },
    },
  },
  Text: {
    defaultProps: {
      fontFamily: 'body',
      fontWeight: '200',
      fontStyle: 'normal',
      color: 'text.600',
    },
  },
  Input: {
    defaultProps: {
      variant: 'outline',
      borderRadius: 'md',
      fontWeight: '200',
      fontSize: 'md',
      bgColor: 'white',
      height: 50,
    },
  },
  TextArea: {
    defaultProps: {
      variant: 'filled',
      fontWeight: '200',
      rounded: 'lg',
    },
  },
  Checkbox: {
    defaultProps: {
      colorSchema: 'primary',
    },
  },
};
