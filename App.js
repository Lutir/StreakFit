import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, useWindowDimensions } from 'react-native';
import background from './assets/home.jpg'
import Styles from './components/Styles';
import HomeContent from './components/HomeContent';


export default function App() {
  const { height, width } = useWindowDimensions();
  const containerStyles = Styles({height, width});

  return (
      <View>
        <ImageBackground source={background} resizeMode="cover" style={containerStyles.container}>
          <HomeContent />
        </ImageBackground>
      </View>
  );
}




