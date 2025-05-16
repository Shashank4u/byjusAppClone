import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const SplashScreen = ({navigation}) => {
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.replace('home'); // Replaces Splash with Home
        }, 2000); // 2 seconds

        return () => clearTimeout(timeout);
    }, [navigation]);
    return (
         <LinearGradient
            colors={['#C057C0', '#9E329E', '#8C2C8C', '#8C2C8C']}
            locations={[0, 0.19, 0.56, 0.95]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.74, y: 1 }}
             style={styles.container}
        >
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/splashPhotos/Bitmap.png')}

                    resizeMode="contain"
                />
            </View>
            <View style={styles.cloud}>
                <Image style={{
                    height:height*0.3,
                    width:width ,
                    // backgroundColor:'red'
                }} source={require('../../assets/splashPhotos/Vector1.png')}
                />
            </View>
            </View>


         </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cloud: {
        flex : 1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    content: {
        flex: 1.2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold', // Added for better visibility
    },
});

export default SplashScreen;