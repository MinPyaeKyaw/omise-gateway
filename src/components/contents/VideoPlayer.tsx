import {useRef, useState} from 'react';
import Video, {VideoRef} from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import {styles} from './styles';
import {Center, Pressable, Slider, Spinner, View} from 'native-base';
import {PlayerControls} from './components';
import {useForm} from 'react-hook-form';
import {VIDEO_SKIP_RANGE} from '../../config/const';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export function VideoPlayer() {
  const videoRef = useRef<VideoRef>();
  const navigation = useNavigation();
  const form = useForm({
    defaultValues: {
      currentTime: 0,
    },
  });

  const currentTime = form.watch('currentTime');

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hideSlider, setHideSlider] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [showControl, setShowControl] = useState<boolean>(false);

  const handlePlayPause = () => {
    setPlay(!play);
  };

  const handlePlay = () => {
    setPlay(true);
  };

  const skipBackward = () => {
    form.setValue('currentTime', currentTime - VIDEO_SKIP_RANGE);
    videoRef.current.seek(currentTime - VIDEO_SKIP_RANGE);
  };

  const skipForward = () => {
    form.setValue('currentTime', currentTime + VIDEO_SKIP_RANGE);
    videoRef.current.seek(currentTime + VIDEO_SKIP_RANGE);
  };

  const handleControls = () => {
    setShowControl(!showControl);
  };

  const handleFullscreen = () => {
    if (fullscreen) {
      Orientation.lockToPortrait();
      navigation.setOptions({headerShown: true});
      setFullscreen(false);
      StatusBar.setHidden(false);
    } else {
      Orientation.lockToLandscape();
      navigation.setOptions({headerShown: false});
      setFullscreen(true);
      StatusBar.setHidden(true);
    }
  };

  const onLoadEnd = (data: Record<string, number>) => {
    setDuration(data.duration);
    form.setValue('currentTime', data.currentTime);
  };

  const onProgress = (v: number) => {
    form.setValue('currentTime', v);
  };

  const onSeek = (v: number) => {
    videoRef.current.seek(v);
    form.setValue('currentTime', v);
  };

  const onEnd = () => {
    setPlay(false);
    videoRef.current.seek(0);
  };

  return (
    <Pressable onPress={handleControls} pos="relative">
      {isLoading && (
        <Center width="100%" height="100%" style={styles.loader}>
          <Spinner size="lg" />
        </Center>
      )}

      <Video
        ref={videoRef}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        controls={false}
        resizeMode="contain"
        onLoad={onLoadEnd}
        onProgress={(e: Record<string, number>) => onProgress(e.currentTime)}
        onEnd={onEnd}
        onPlaybackStateChanged={(e: Record<string, boolean>) =>
          setIsLoading(!e.isPlaying)
        }
        paused={play}
        onReadyForDisplay={() => {
          setHideSlider(false);
          setIsLoading(false);
        }}
        style={fullscreen ? styles.fullscreenVideo : styles.video}
      />

      {!hideSlider && !fullscreen && (
        <View style={styles.progressbarWrapper}>
          <Slider
            defaultValue={0}
            value={form.watch('currentTime')}
            minValue={0}
            maxValue={duration}
            onChangeEnd={onSeek}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>

            <Slider.Thumb />
          </Slider>
        </View>
      )}

      {showControl && (
        <View style={styles.controlOverlay}>
          <View style={styles.controlOverlayWrapper}>
            <PlayerControls
              fullscreen={fullscreen}
              currentTime={currentTime}
              duration={duration > 0 ? duration : 0}
              onPlay={handlePlay}
              onPause={handlePlayPause}
              onSeek={onSeek}
              playing={play}
              skipBackwards={skipBackward}
              skipForwards={skipForward}
              toggleFullscreen={handleFullscreen}
            />
          </View>
        </View>
      )}
    </Pressable>
  );
}
