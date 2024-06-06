import {Pressable, View, Text, HStack, Slider, Box} from 'native-base';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

export const PlayerControls = props => {
  const {
    playing,
    onPlay,
    onPause,
    skipForwards,
    skipBackwards,
    currentTime,
    duration,
    toggleFullscreen,
    fullscreen,
    onSeek,
  } = props;

  const getMinutesFromSeconds = time => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  };

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={skipBackwards}>
        <Micon name="arrow-u-left-top" color="white" size={25} />
      </Pressable>

      <Pressable onPress={playing ? onPause : onPlay}>
        {playing ? (
          <Micon name="play" color="white" size={45} />
        ) : (
          <Micon name="pause" color="white" size={45} />
        )}
      </Pressable>

      <Pressable onPress={skipForwards}>
        <Micon name="arrow-u-right-top" color="white" size={25} />
      </Pressable>

      <HStack
        style={
          fullscreen
            ? styles.fullscreenBottomActionWrapper
            : styles.bottomActoinWrapper
        }
        alignItems="center"
        justifyContent="space-between">
        <View px="4">
          <Text color="white" fontSize="xs">
            {position} / {fullDuration}
          </Text>
        </View>

        <Pressable
          onPress={toggleFullscreen}
          // hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          style={styles.fullscreenButton}>
          {fullscreen ? (
            <Micon name="fullscreen-exit" color="white" size={25} />
          ) : (
            <Micon name="fullscreen" color="white" size={25} />
          )}
        </Pressable>
      </HStack>

      {fullscreen && (
        <Box style={styles.fullscreenProgressbarWrapper}>
          <Slider
            defaultValue={0}
            value={currentTime}
            minValue={0}
            maxValue={duration}
            onChangeEnd={onSeek}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>

            <Slider.Thumb />
          </Slider>
        </Box>
      )}
    </View>
  );
};
