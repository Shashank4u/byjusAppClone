import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { subjectDetails } from '../constants/jsonData';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import CustomButton from '../Component/button/CustomButton';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const data = [
  { id: '1', title: 'Byju Raveendran', src: require('../../assets/DashbordImage/hello.mp4') },
  { id: '2', title: 'Byju Shashank', src: require('../../assets/DashbordImage/hello.mp4') },
  { id: '3', title: 'Byju Piyush', src: require('../../assets/DashbordImage/hello.mp4') },
  { id: '4', title: 'Byju Shivam', src: require('../../assets/DashbordImage/hello.mp4') },
];

const Section = ({ route, navigation }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const { title } = route.params;
  const subject = subjectDetails[title];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Gradient Header (now scrollable) */}
      <LinearGradient
        colors={['#FFFFFF', '#FFFFFF', '#F9E9FE']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradientBox}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: height * -0.04, marginBottom: height * 0.05 }}>
          <TouchableOpacity onPress={() => { navigation.pop() }}><Image source={require('../../assets/SectionImages/ArrowIcon.png')} /></TouchableOpacity>
          <Image source={require('../../assets/SectionImages/SerachIcon.png')}/> 
          
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: width * 0.6 }}>
            <Text style={styles.subjectTitle}>{title}</Text>
            <View style={styles.subinfo}>
              <Image source={require('../../assets/SectionImages/bookIcon.png')} />
              <Text>{subject.chaptersCount} Chapters</Text>
              <Image source={require('../../assets/SectionImages/videoIcon.png')} />
              <Text>{subject.videosCount} Videos</Text>
            </View>
          </View>
          <View style={{ height: height * 0.15 }}>
            <Image source={require('../../assets/SectionImages/heroImage.png')} />
          </View>
        </View>
      </LinearGradient>

      {/* Chapters Section */}
      <View style={styles.chaptersHeader}>
        <Image style={{ height: 25, width: 25 }} source={require('../../assets/SectionImages/bookIcon.png')} />
        <Text style={styles.chapterTitle}>Chapters</Text>
      </View>

      {/* Chapter Item */}
      <View style={styles.chapterItem}>
        <View>
          <Text style={styles.chapterName}>Motion and measurements of Distances</Text>
        </View>
        <View style={styles.videoCount}>
          <Text style={styles.chapterVideos}>10 Videos {" >"}</Text>
        </View>
      </View>

      {/* Videos List */}
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.videoItem}>
            <TouchableOpacity
              onPress={() => setPlayingVideoId(playingVideoId === item.id ? null : item.id)}
            >
              <Video
                source={item.src}
                style={styles.videoPlayer}
                muted={false}
                repeat={true}
                resizeMode="cover"
                paused={playingVideoId !== item.id}
              />
              <View style={styles.videoInfo}>
                <Image style={styles.playIcon} source={require("../../assets/DashbordImage/play.png")} />
                <Text style={styles.videoTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
    
          <CustomButton
          onPress={()=>{navigation.push('Test', {title :title})}}
          title="Test"
          width={92}
          height={38}
          backgroundColor="#6A1B9A"
          borderRadius={30}
          fontSize={12}
          fontWeight="700"
          textColor="#FFF"/>
        <CustomButton
          onPress={()=>{navigation.push('Video', {title :title})}}
          title="Start Practice"
          width={161}
          height={38}
          backgroundColor="#6A1B9A"
          borderRadius={30}
          fontSize={12}
          fontWeight="700"
          textColor="#FFF"
        />
      </View>

      {/* Second Chapter Item */}
      <View style={styles.chapterItem}>
        <View>
          <Text style={styles.chapterName}>An Introduction to motion</Text>
        </View>
        <View style={styles.videoCount}>
          <Text style={styles.chapterVideos}>8 Videos ></Text>
        </View>
      </View>

      {/* Second Videos List */}
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.videoItem}>
            <TouchableOpacity
              onPress={() => setPlayingVideoId(playingVideoId === item.id ? null : item.id)}
            >
              <Video
                source={item.src}
                style={styles.videoPlayer}
                muted={false}
                repeat={true}
                resizeMode="cover"
                paused={playingVideoId !== item.id}
              />
              <View style={styles.videoInfo}>
                <Image style={styles.playIcon} source={require("../../assets/DashbordImage/play.png")} />
                <Text style={styles.videoTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollContent: {
    paddingBottom: 20,
  },
  gradientBox: {
    width: width,
    height: 270,
    padding: 16,
    paddingTop: 50,
  },
  subjectTitle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 32,
    color: '#000',
    marginBottom: 10,
  },
  subinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  chaptersHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingLeft: 30,
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -20,
  },
  chapterTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
  },
  chapterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  chapterName: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
    width: width * 0.6,
  },
  chapterVideos: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 18,
    color: '#000',
  },
  videoItem: {
    marginLeft: 10,
  },
  videoPlayer: {
    width: 301,
    height: 184,
    margin: 10,
    borderRadius: 10,
  },
  videoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  playIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  videoTitle: {
    fontSize: 20,
    color: '#222B45',
    fontWeight: '500',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default Section;