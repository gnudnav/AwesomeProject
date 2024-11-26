import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import TrackPlayer, { Capability, usePlaybackState, State } from 'react-native-track-player';

// Danh sách bài hát
const songs = [
    {
        id: 1,
        title: '19th Floor',
        artist: 'Bobby Richards',
        artwork: 'https://bigwalldecor.com/wp-content/uploads/2019/11/Large-Wall-Art-With-Floral-Head.jpg',
        url: require('../assets/Video/dienvientoi.mp3'), // Đảm bảo đường dẫn đúng
    },
];

const Video = () => {
    const playbackState = usePlaybackState();

    // Thiết lập TrackPlayer khi component được mount
    useEffect(() => {
        const setupPlayer = async () => {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.updateOptions({
                capabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext, Capability.SkipToPrevious],
            });
            await TrackPlayer.add(songs);
        };

        setupPlayer();

        return () => {
            TrackPlayer.destroy();
        };
    }, []);

    const onTogglePlayTrack = async () => {
        const currentState = await TrackPlayer.getState();
        if (currentState === State.Playing) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    const onSkipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const onSkipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{songs[0].title}</Text>
            <Text style={styles.artist}>{songs[0].artist}</Text>
            <Image source={{ uri: songs[0].artwork }} style={styles.artwork} />
            <View style={styles.controls}>
                <Button title="Previous" onPress={onSkipToPrevious} />
                <Button title={playbackState === State.Playing ? "Pause" : "Play"} onPress={onTogglePlayTrack} />
                <Button title="Next" onPress={onSkipToNext} />
            </View>
        </View>
    );
};

export default Video;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    artist: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 20,
    },
    artwork: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
});
