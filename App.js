import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import JWPlayer from 'react-native-jw-media-player';

const {width} = Dimensions.get('window');

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.playerContainer}>
          <JWPlayer
            style={styles.player}
            playlistItem={{
              mediaId: '1',
              file: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
              autostart: true,
            }}
            onBeforePlay={() => console.log('onBeforePlay()')}
            onPlay={() => console.log('onPlay()')}
            onPause={() => console.log('onPause()')}
            onIdle={() => console.log('onIdle')}
            onSetupPlayerError={event => console.log('onPlayerError(event)')}
            onPlayerError={event => console.log('onPlayerError(event)')}
            onFullScreen={() => console.log('onFullScreen()')}
            onFullScreenExit={() => console.log('onFullScreenExit()')}
            nativeFullScreen={true} // when undefined or false you will need to handle the player styles in onFullScreen & onFullScreenExit callbacks
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  playerContainer: {
    height: 300,
    width: width - 40,
    margin: 40,
  },
  player: {
    flex: 1,
  },
});

export default App;
