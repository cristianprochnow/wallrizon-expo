import React from 'react';
import {
  View, 
  Image, 
  ScrollView,
  Pressable
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';

function Home(): JSX.Element {
  const uri = 'http://github.com/cristianprochnow.png';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image style={styles.heroImage} source={{ uri }} />
      </View>
      <View style={styles.buttonsToolbar}>
        <Pressable>
          <Feather name="arrow-left" size={32} color="#FFF" />
        </Pressable>
        <View style={styles.buttonsToolbarCenter}>
          <Pressable>
            <Feather name="maximize" size={32} color="#FFF" />
          </Pressable>
          <Pressable>
            <Feather name="image" size={32} color="#FFF" />
          </Pressable>
          <Pressable>
            <Feather name="download" size={32} color="#FFF" />
          </Pressable>
        </View>
        <Pressable>
          <Feather name="arrow-right" size={32} color="#FFF" />
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Home;