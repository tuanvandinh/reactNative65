import React, {useState, useRef} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  // The video we will play on the player.
  const video = ''; // require('~src/assets/video/production2.mp4');

  const videoPlayer = useRef(null);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);
  //  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  const [isLoading, setIsLoading] = useState(true);

  const onSeek = seek => {
    videoPlayer?.current.seek(seek);
  };

  const onSeeking = currentVideoTime => setCurrentTime(currentVideoTime);

  const onPaused = newState => {
    setPaused(!paused);
    //   setPlayerState(newState);
  };

  const onReplay = () => {
    videoPlayer?.current.seek(0);
    setCurrentTime(0);
    if (Platform.OS === 'android') {
      //    setPlayerState(PLAYER_STATES.PAUSED);
      setPaused(true);
    } else {
      //   setPlayerState(PLAYER_STATES.PLAYING);
      setPaused(false);
    }
  };

  const onProgress = data => {
    if (!isLoading) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = data => {
    setDuration(Math.round(data.duration));
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    //setPlayerState(PLAYER_STATES.ENDED);
    setCurrentTime(duration);
  };

  return (
    <View style={styles.container}>
      <Video
        repeat
        //        onEnd={onEnd}
        //        onLoad={onLoad}
        //        onLoadStart={onLoadStart}
        posterResizeMode={'cover'}
        //      onProgress={onProgress}
        //       paused={paused}
        ref={ref => (videoPlayer.current = ref)}
        resizeMode={'cover'}
        source={video}
        //        style={styles.backgroundVideo}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    height: 250,
    width: '100%',
  },
  mediaControls: {
    height: '100%',
    flex: 1,
    alignSelf: 'center',
  },
});

export default VideoPlayer;
