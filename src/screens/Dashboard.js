import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native';
import CustomButton from '../Component/button/CustomButton';
import Video from 'react-native-video';
// import Video from 'react-native-video';



const subjects = [
  {
    title: 'Mathematics',
    color: '#E3F2FD',
    image: require('../../assets/DashbordImage/math.png'), // Replace with actual path
  },
  {
    title: 'Physics',
    color: '#F3D9FA',
    image: require('../../assets/DashbordImage/Physics.png'),
  },
  {
    title: 'Chemistry',
    color: '#FFEDE3',
    image: require('../../assets/DashbordImage/che.png'),
  },
  {
    title: 'Biology',
    color: '#E6F6ED',
    image: require('../../assets/DashbordImage/biooo.png'),
  },
];
const data = [
  { id: '1', title: 'Byju Raveendran', src: require('../../assets/DashbordImage/hello.mp4') },
  { id: '2', title: 'Byju Shashank', src: require('../../assets/DashbordImage/hello.mp4') },
  { id: '3', title: 'Byju Piyush', src: require('../../assets/DashbordImage/hello.mp4') },
  { id: '4', title: 'Byju Shivam', src: require('../../assets/DashbordImage/hello.mp4') },
];
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Dashboard = ({ navigation }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logsViews}>
        <View><Image source={require('../../assets/DashbordImage/Frame.png')} /></View>
        <View><Image style={{
          width: width * 0.4,
          height: width * 0.1,
          // backgroundColor: 'red', 
          resizeMode: 'contain',
        }} source={require('../../assets/DashbordImage/Logo.png')} /></View>
        <View><Image source={require('../../assets/DashbordImage/img.png')} /></View>
      </View>
      <Text style={styles.header}>All Subjects</Text>
      <View style={styles.grid}>
        {subjects.map((subject, index) => (
          <TouchableOpacity onPress={() => navigation.push('Section', { title: subject.title })} key={index} style={[styles.card, { backgroundColor: subject.color }]}>
            <Text style={styles.cardText}>{subject.title}</Text>
            <Image source={subject.image} style={styles.cardImage} />
          </TouchableOpacity>
        ))}
      </View>
      <View><Text style={styles.header}>BYJU’S Classes</Text></View>
      <View style={styles.HeroView}>
        <View style={styles.inside}>
          <View style={styles.insideContent}>
            <Text style={{ fontFamily: 'Roboto_Condensed-ExtraLightItalic', color: 'white' }}>BYJU’S Classes</Text>
            <Text style={{ fontWeight: '600', fontSize: 16, paddingBottom: 6, textAlign: 'left', color: 'white' }}>Online tuitions by india’s best teachers</Text>
          </View>
          <CustomButton
            title="Book a Free Trial"
            width={142}
            height={38}
            backgroundColor="#FFFFFF"
            borderRadius={30}
            fontSize={12}
            fontWeight="700"
            textColor="#222B45"
          />
        </View>
        <View style={[styles.inside, {}]}>
          <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }} source={require('../../assets/DashbordImage/Hero.png')} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 23 }}>
        <Text style={styles.header}>BYJU’S Corner</Text>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: height * 0.03,
          color: '#111',
        }}> {'View All  >'} </Text>
      </View>
      <View style={styles.Listcontainer}>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => setPlayingVideoId(playingVideoId === item.id ? null : item.id)}
                style={styles.opcitem}
              >
                <Video source={item.src}
                  style={{ width: 301, height: 184 }}
                  muted={false}
                  repeat={true}
                  resizeMode="cover"
                  paused={playingVideoId !== item.id} />
                <View style={{
                  flexDirection: 'row',
                }}>
                  <Image style={{ height: 25, width: 25, marginTop: 'auto', marginRight: 10 }} source={require("../../assets/DashbordImage/play.png")} />
                  <Text style={{ fontSize: 25, color: '#222B45' }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <View>
          <Text style={styles.header}>Share the app</Text>
        </View>
        <View style={[styles.HeroView, { backgroundColor: '#F2F1FF', marginBottom: '50' }]}>
          <View style={styles.inside}>
            <View style={styles.insideContent}>
              <Text style={styles.robotoText}>Your text here</Text>
              <Text style={{ fontWeight: '600', fontSize: 16, paddingBottom: 6, textAlign: 'left', color: '#8A96AD' }}>Help your friends fall in love with learning through Byju’s!</Text>
            </View>
          </View>
          <View style={[styles.inside, { height: 'auto', marginBottom: 80 }]}>
            <Image style={{ resizeMode: 'contain', height: '180%', width: '180%', }} source={require('../../assets/DashbordImage/lastHero.png')} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white'
  },
  robotoText: {
    fontFamily: 'Roboto-Medium', // Make sure this matches the font variant you loaded
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.34,
    color: '#000', // Optional
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
    fontFamily: 'Roboto_Condensed-ExtraLightItalic'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (width - 43) / 2, // Two cards with margin
    height: 100,
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  cardImage: {
    width: 80,
    height: 65,
    alignSelf: 'flex-end',
    resizeMode: 'contain',

  },
  logsViews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
    marginBottom: height * 0.03,
    // backgroundColor: 'red'

  },
  HeroView: {
    width: width * 0.95,
    height: height * 0.20,
    marginTop: height * 0.01,
    alignSelf: 'center',
    backgroundColor: '#2C2749',
    flexDirection: 'row',
    borderRadius: 6
  },
  inside: {
    width: '50%',
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  insideContent: {
    // backgroundColor: 'green',
    width: '90%',
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  opcitem: {
    // backgroundColor: '#f0a',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },


});
