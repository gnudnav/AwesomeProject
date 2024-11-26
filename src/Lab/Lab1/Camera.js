import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { launchCamera } from 'react-native-image-picker';

const Camera = () => {
    const commonOptions = {
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
    };

    const cameraOptions = {
        cameraType: 'front',
        saveToPhotos: true,
        ...commonOptions,
    };
    const [images, setImages] = useState();

    const onOpenCamera = async () => {
        const response = await launchCamera(cameraOptions);
        if (response?.assets) {
            setImages(response.assets);
        } else {
            Alert.alert('Có lỗi xảy ra', response.errorMessage);
        }
    };

    return (
        <View>
            <Image
                source={{
                    uri:
                        images?.[0]?.uri ||
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png',
                }}
                style={styles.avatar}
            />
            <Button title="Mở Camera" onPress={onOpenCamera} />

        </View>
    )
}

export default Camera

const styles = StyleSheet.create({
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        alignSelf: 'center'
    },
})