import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').width * (9 / 16);
const height = Dimensions.get('window').width - StatusBar.currentHeight;

export const styles = StyleSheet.create({
  video: {
    height: windowHeight,
    width: '100%',
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    height: height,
    width: '100%',
    backgroundColor: 'black',
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
  },
  controlOverlayWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  progressbarWrapper: {
    width: '100%',
    position: 'absolute',
    zIndex: 30,
    bottom: -10,
    display: 'flex',
    justifyContent: 'center',
  },
  loader: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
    top: 0,
    left: 0,
  },
});
