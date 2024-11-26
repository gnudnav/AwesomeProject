import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Comp3Lab1 = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ marginHorizontal: 50 }}>
                <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../Lab/assets/ImagesLab/iconBackC3ToC2.png')}
                            style={{ width: 13, height: 13 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 24, color: '#9292A2' }}>Harry Potter and the Sorc...</Text>
                    <Image source={require('../../Lab/assets/ImagesLab/iconCham.png')}
                        style={{ width: 15, height: 5 }} />
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Image source={require('../../Lab/assets/ImagesLab/imgDetail.png')}
                        style={{
                            width: 260,
                            height: 260
                        }} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', lineHeight: 30, color: '#010104' }}>
                        Harry Potter and the Sorcer...
                    </Text>
                    <Text style={{ marginTop: 5, color: '#9292A2', fontSize: 16, fontWeight: '400', lineHeight: 24 }}>
                        J.K.Rowing
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
                    <Image source={require('../../Lab/assets/ImagesLab/iconStar1.png')}
                        style={{ width: 136, height: 24, marginRight: 20 }} />
                    <Text style={{ fontSize: 20, fontWeight: '400', lineHeight: 30 }}>
                        4.0
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200, marginTop: 10 }}>
                    <View style={{ borderWidth: 1, borderRadius: 24, borderColor: '#6A6A6B', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: '600', lineHeight: 18, color: '#6A6A6B' }}>
                            Fantasy
                        </Text>
                    </View>
                    <View style={{ borderWidth: 1, borderRadius: 24, borderColor: '#6A6A6B', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: '600', lineHeight: 18, color: '#6A6A6B' }}>
                            Drama
                        </Text>
                    </View>
                    <View style={{ borderWidth: 1, borderRadius: 24, borderColor: '#6A6A6B', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight: '600', lineHeight: 18, color: '#6A6A6B' }}>
                            Fiction
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ backgroundColor: '#4838D1', borderRadius: 8, width: 138, height: 53, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../Lab/assets/ImagesLab/iconPlay.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 21, color: 'white', marginLeft: 10 }}>Play Audio</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'white', borderRadius: 8, width: 138, height: 53, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#4838D1' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../Lab/assets/ImagesLab/iconDocument.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 21, color: '#4838D1', marginLeft: 10 }}>Read book</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: '#9292A2', fontSize: 14, fontWeight: '600' }}>
                        Summary
                    </Text>
                    <Text style={{
                        color: '#6A6A8B',
                        fontSize: 14,
                        fontWeight: '300',
                        lineHeight: 21
                    }}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </Text>
                    <Text style={{
                        color: '#6A6A8B',
                        fontSize: 14,
                        fontWeight: '300',
                        lineHeight: 21,
                        marginTop: 20
                    }}>
                        Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                    </Text>
                    <Text style={{
                        color: '#6A6A8B',
                        fontSize: 14,
                        fontWeight: '300',
                        lineHeight: 21,
                        marginTop: 20
                    }}>
                        Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text>
                        Review
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Image source={require('../../Lab/assets/ImagesLab/imgProfile.png')}
                            style={{ width: 48, height: 48, marginRight: 30 }} />
                        <View>
                            <Text style={{ marginTop: 2, fontSize: 14, fontWeight: '500', lineHeigh: 21, color: '#9292A2' }}>
                                Ronald Richards
                            </Text>
                            <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                                <Image source={require('../../Lab/assets/ImagesLab/iconStar.png')}
                                    style={{ width: 103, height: 16 }} />
                                <Text style={{ marginLeft: 10, fontSize: 10, fontWeight: '400', lineHeight: 15, color: '#92929A2' }}>
                                    2 days ago
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 14, fontWeight: '300', lineHeight: 21, color: '#6A6A8B' }}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.
                        </Text>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 30 }}>
                        <Image source={require('../../Lab/assets/ImagesLab/iconCarousel.png')}
                            style={{ width: 60, height: 12 }} />
                        <Text style={{ fontSize: 14, fontWeight: '500', lineHeigh: 21, color: '#F77A55' }}>
                            View more
                        </Text>
                    </View>

                </View>
            </View>
        </ScrollView >
    )
}

export default Comp3Lab1

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    }
})