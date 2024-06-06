import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  discount: {
    position: 'absolute',
    top: -10,
    left: 15,
    zIndex: 10,
    height: 20,
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineText: {
    textDecorationLine: 'line-through',
  },
  levelCardContainer: {
    backgroundColor: 'white',
    borderRadius: 7,
    width: '100%',
    borderWidth: 1,
    borderColor: 'pink',
  },
  videoCardContainer: {
    backgroundColor: 'white',
    borderRadius: 7,
    width: '100%',
  },
  videoCardImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    borderRadius: 7,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoCardIcons: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 15,
    borderRadius: 7,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseCardContainer: {
    backgroundColor: 'white',
    borderRadius: 7,
    width: '100%',
  },
  exam: {
    width: (Dimensions.get('window').width - 17 * 3) / 2,
    height: 200,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
});
