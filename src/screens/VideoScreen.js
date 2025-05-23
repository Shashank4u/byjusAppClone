import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Video from 'react-native-video';
import { videoDetails } from '../constants/VideoData';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const VideoScreen = ({ route }) => {
    const { title } = route.params;
    const subject = videoDetails[title];
    const [videoObj, setVideoObj] = useState([]);
    const [playing, setPlaying] = useState(subject.Videos[0].src);
    const [currentTitle, setCurrentTitle] = useState(subject.Videos[0].title);

    useEffect(() => {
        setVideoObj(subject.Videos);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                <Video
                    style={{ flex: 1, height: height*0.5, width: width, backgroundColor: 'black' }}
                    source={playing}
                    resizeMode="cover"
                    repeat
                    controls={true}
                    hideDuration={true}
                />
            </View>

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{currentTitle}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/Videos/shearLogo.png')} />
                        <Image style={{ marginLeft: 10 }} source={require('../../assets/Videos/saveLogo.png')} />
                    </View>
                </View>

                <Text style={styles.Header}>{currentTitle}</Text>

                <View style={{ flexDirection: 'row', marginTop: height * 0.02 }}>
                    <Image style={{ height: 19, width: 19 }} source={require('../../assets/Videos/Time.png')} />
                    <Text style={{ marginLeft: 5 }}>{subject.totalVideosDuration}</Text>
                    <Image style={{ marginLeft: 10, height: 19, width: 19 }} source={require('../../assets/Videos/VideoLogo.png')} />
                    <Text style={{ marginLeft: 5 }}>{subject.videoCount} Videos</Text>
                </View>

                <View style={{ marginTop: height * 0.03 }}>
                    <Text style={styles.Header}>Videos</Text>
                </View>

                <ScrollView>
                    {videoObj.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => {
                                setPlaying(item.src);
                                setCurrentTitle(item.title);
                            }}
                            style={styles.videoList}
                        >
                            <View style={styles.insideVideoList}>
                                <View style={styles.imageVideo}>
                                    <Image
                                        style={{ height: '100%', width: '100%' }}
                                        source={eval(item.thumbnail)}
                                    />
                                </View>
                                <View style={styles.videoContent}>
                                    <Text style={{ fontSize: 16, marginBottom: 20, lineHeight: 24 }}>
                                        {item.title}
                                    </Text>
                                    <Text>{item.duration}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default VideoScreen;



const styles = StyleSheet.create({
    insideVideoList: {
        flex: 0.8,
        width: '90%',
        flexDirection: 'row',
    },
    container: {
        flex: 1,
    },
    videoContainer: {
        height: height * 0.4,
        width: width,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    contentContainer: {
        height: height * 0.7,
        backgroundColor: 'white',
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        width: width,
        marginTop: height * 0.37,
        padding: 15,
    },
    Header: {
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0.4,
        marginBottom: 10,
    },
    videoList: {
        height: height * 0.11,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageVideo: {
        width: '35%',
        height: '100%',
    },
    videoContent: {
        height: '100%',
        width: '61%',
        marginLeft: width * 0.03,
    },
});
