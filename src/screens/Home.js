import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import CustomButton from '../Component/button/CustomButton';
import AppIntroSlider from 'react-native-app-intro-slider';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const textSlides = [
  {
    key: '1',
    title: 'Watch Videos to Learn',
    description: 'We have amazing videos that can help you understanding the concepts much easily',
  },
  {
    key: '2',
    title: 'Explore Concepts Visually',
    description: 'Animations and visuals to strengthen your understanding.',
  },
  {
    key: '3',
    title: 'Practice with Quizzes',
    description: 'Interactive quizzes to test what you’ve learned.',
  },
];

const Home = ({ navigation }) => {
  const sliderRef = useRef(null);
  
  const goToNextSlide = () => {
    
    if (sliderRef.current) {
      if((sliderRef.current.state.activeIndex)===2){
          navigation.push('login')
      }else{
      sliderRef.current.goToSlide(sliderRef.current.state.activeIndex + 1);
      }
    }
    
   
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <View style={styles.HeroimgView}>
        <Image style={styles.HeroImage} source={require('../../assets/HomeImage/Hero.png')} />
      </View>

      {/* Text Slider */}
      <View style={styles.Textarea}>
        <AppIntroSlider
          ref={sliderRef}
          data={textSlides}
          renderItem={({ item }) => (
            <View style={styles.textSlide}>
              <Text style={styles.textStyle}>{item.title}</Text>
              <Text style={styles.paraText}>{item.description}</Text>
            </View>
          )}
          showNextButton={false}
          showDoneButton={false}
          showSkipButton={false}
          dotStyle={{ backgroundColor: '#ccc' }}
          activeDotStyle={{ backgroundColor: '#6A1B9A' }}
        />
      </View>

      {/* Bottom Button */}
      <View style={styles.coustomButoon}>
        <CustomButton
          title="Next"
          onPress={goToNextSlide}
          width={157}
          height={56}
          backgroundColor="#6A1B9A"
          borderRadius={30}
          fontSize={18}
          fontWeight="700"
          textColor="#FFF"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  HeroimgView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.1,
  },
  HeroImage: {
    width: 373.8,
    height: 364.49,
    resizeMode: 'contain',
  },
  Textarea: {
    height: height * 0.25,
    width: width,
  },
  textSlide: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: '100%',
  },
  textStyle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: 0,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  paraText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#444',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  coustomButoon: {
    marginBottom: height * 0.1,
  },
});
