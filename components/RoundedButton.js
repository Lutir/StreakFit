import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundedButton = ({ title }) => {

  const buttonStyle = [styles.button];
  const textStyle = styles.buttonText;

  return (
    <TouchableOpacity style={buttonStyle} activeOpacity={0.6}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
});

export default RoundedButton;
