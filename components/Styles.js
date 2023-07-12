import { StyleSheet } from 'react-native';


const Styles = ({height, width}) => StyleSheet.create({
  container: {
    alignItems: 'center',
    height: height,
    width: width // or `${height}px` if height is a number
  }
});

export default Styles