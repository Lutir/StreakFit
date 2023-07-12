import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions, Button } from 'react-native';
import RoundedButton from './RoundedButton';

const HomeContent = () => {
  const { height } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
      color: '#fff',
      fontFamily: 'Avenir',
      textAlign: 'center',
    },

  });

  return (
    <View style={[styles.container, { height }]}>
      <Text style={styles.title}>Welcome to StreakFit!</Text>
      <Text style={styles.description}>
        Start your journey towards consistent health habits now. 
      </Text>
      <RoundedButton style={styles.button} title="Let's Start!"></RoundedButton>
    </View>
  );
};

export default HomeContent;
