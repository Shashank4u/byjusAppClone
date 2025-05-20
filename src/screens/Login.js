import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Login = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [withCallingCode, setWithCallingCode] = useState(true);
  const [phone, setPhone] = useState('');

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  function disableHandler(){
    if(phone.length < 10){
      return 1;
  }
    return 0;
  }
  


  return (
    <View style={styles.container}>
      <View style={styles.LogoView}>
        <Image source={require('../../assets/login/Logo.png')}/>
      </View>
      <View>
        <Text style={styles.heading}>Enter Phone Number</Text>

        {/* Country Picker + Phone Input */}
        <View style={styles.inputWrapper}>
          <View style={styles.phoneRow}>
            <CountryPicker
              countryCode={countryCode}
              withFlag
              withCallingCode
              withFilter
              onSelect={onSelect}
              containerButtonStyle={styles.countryPicker}
            />
            <Text style={styles.callingCode}>+{callingCode}</Text>
            <TextInput
              placeholder="9876543210"
              keyboardType="phone-pad"
              style={styles.phoneInput}
              value={phone}
              onChangeText={setPhone}
              maxLength={10}
            />
          </View>
        </View>

        <Text style={styles.subtext}>
          We'll send you a code by SMS to confirm your phone number.
        </Text>
        
        <TouchableOpacity style={styles.button} disabled={phone.length < 10 ? true : false} onPress={()=>{navigation.push('Dashboard')}}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
  },
  inputWrapper: {
    width: 368,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    padding: 12,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryPicker: {
    marginRight: 8,
  },
  callingCode: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 12,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 4,
  },
  subtext: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginTop: 12,
    width: 300,
    margin:"auto"
  },
  button: {
    backgroundColor: '#9C27B0',
    width: 200,
    height: 56,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    margin:'auto'
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  LogoView:{
    marginBottom:height*0.09
  }
});
