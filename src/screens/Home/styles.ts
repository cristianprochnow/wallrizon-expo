import { StyleSheet, Dimensions } from 'react-native';

const screenDimensions = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    width: screenDimensions.width,
    height: screenDimensions.height * 0.8
  },
  heroImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  buttonsToolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonsToolbarCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;