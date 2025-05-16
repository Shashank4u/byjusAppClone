import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
  onPress,
  title = "Button",
  width = 157,
  height = 56,
  backgroundColor = '#8C2C8C',
  borderRadius = 28,
  textColor = 'white',
  fontSize = 16,
  fontWeight = '600',
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width, height, backgroundColor, borderRadius },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.text,
          { color: textColor, fontSize, fontWeight },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default CustomButton;
    