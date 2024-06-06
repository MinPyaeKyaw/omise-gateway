import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    position: 'relative',
  },
  bottomActoinWrapper: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
  },
  fullscreenBottomActionWrapper: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    width: '100%',
  },
  fullscreenButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
  progressbarWrapper: {
    width: '100%',
    position: 'absolute',
    zIndex: 30,
    bottom: -8,
  },
  fullscreenProgressbarWrapper: {
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 10,
  },
});
