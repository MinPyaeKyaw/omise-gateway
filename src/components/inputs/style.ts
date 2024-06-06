import {StyleSheet} from 'react-native';

export const makeStyle = theme =>
  StyleSheet.create({
    searchInput: {
      backgroundColor: 'white',
      color: theme.colors.light[400],
      height: 50,
    },
    searchIcon: {
      backgroundColor: 'white',
      height: 50,
      width: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
    },
    // textInput: {
    //   // backgroundColor: theme.colors.gray[100],
    //   backgroundColor: 'white',
    //   height: 50,
    // },
    passwordToggle: {
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.gray[100],
    },
    phonePrefix: {
      height: 50,
      paddingHorizontal: theme.space[3],
      display: 'flex',
      flexDirection: 'row',
      gap: theme.space[1],
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.gray[100],
      borderRightWidth: 1,
      borderRightColor: theme.colors.light[100],
      // borderRightStyle: 'solid',
    },
    policyWrapper: {
      display: 'flex',
      flexDirection: 'row',
      gap: theme.space[1],
      flexWrap: 'wrap',
      marginTop: theme.space[1],
    },
    cell: {
      width: 50,
      height: 50,
      lineHeight: 50,
      fontSize: theme.fontSizes.lg,
      color: theme.colors.light[400],
      backgroundColor: theme.colors.gray[100],
      borderRadius: theme.radii.lg,
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
    phoneCodeContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
    },
    phoneCodeSafeArea: {
      flex: 1,
      paddingTop: theme.space[1],
    },
    listItemSeperator: {
      width: '100%',
      height: 1,
      borderBottomColor: theme.colors.light[50],
      borderBottomWidth: 1,
    },
    textAreaInput: {
      backgroundColor: theme.colors.gray[100],
    },
    imgContainer: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth: 5,
      borderColor: theme.colors.yellow[500],
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      width: 150,
      height: 150,
      objectFit: 'cover',
    },
    editBtn: {
      position: 'absolute',
      right: -5,
      bottom: 10,
      zIndex: 10,
    },
  });
