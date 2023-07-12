import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles({width}).container}>
      <Text style={styles({width}).title}>StreakFit</Text>
    </View>
  );
};

const styles = ({width}) => StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: `Avenir, sans-serif`,
    color: '#333',
  },
});

export default Header;
