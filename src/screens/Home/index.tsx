import React from 'react';
import {
  View, 
  Image, 
  ScrollView
} from 'react-native';
import IconButton from '../../components/IconButton';
import { colors } from '../../constants/theme';
import styles from './styles';

function Home(): JSX.Element {
  const uri = 'http://github.com/cristianprochnow.png';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image style={styles.heroImage} source={{ uri }} />
      </View>
      <View style={styles.buttonsToolbar}>
        <IconButton iconName="arrow-left" iconColor={colors.main100} />
        <View style={styles.buttonsToolbarCenter}>
          <IconButton iconName="maximize" iconColor={colors.main100} />
          <IconButton iconName="image" iconColor={colors.main100} />
          <IconButton iconName="download" iconColor={colors.main100} />
        </View>
        <IconButton iconName="arrow-right" iconColor={colors.main100} />
      </View>
    </ScrollView>
  );
}

export default Home;