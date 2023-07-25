import React, { useState } from 'react';
import {
  View, 
  Image, 
  ScrollView,
  Alert
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import IconButton, {
  defaultValues as defaultsIconButton 
} from '../../components/IconButton';
import { colors } from '../../constants/theme';
import styles from './styles';
import InfoCard from '../../components/InfoCard';
import ExpandedView from '../../components/ExpandedView';

function Home(): JSX.Element {
  const [isModalVisible, setModalVisible] = useState(false);

  const uri = 'http://github.com/cristianprochnow.png';
  const iconSizeArrowButton = defaultsIconButton.iconSize * 0.64;
  const insets = useSafeAreaInsets();

  function onOpenModal() {
    setModalVisible(true);
  }

  function onCloseModal() {
    setModalVisible(false);
  }

  return (
    <>
      <ExpandedView
        isVisible={isModalVisible} 
        onClose={onCloseModal} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Image style={styles.heroImage} source={{ uri }} />
          <View style={styles.heroGradientContainer}>
            <LinearGradient style={styles.heroGradient} colors={colors.fadeDarker}></LinearGradient>
          </View>
        </View>
        <View style={{ paddingBottom: insets.bottom + 16, ...styles.content }}>
          <View style={styles.buttonsToolbar}>
            <View>
              <IconButton iconName="arrow-left" iconColor={colors.main100} iconSize={iconSizeArrowButton} />
            </View>
            <View style={styles.buttonsToolbarCenter}>
              <IconButton 
                onPress={onOpenModal} 
                iconName="maximize" 
                iconColor={colors.main100} />
              <IconButton iconName="image" iconColor={colors.main100} />
              <IconButton iconName="download" iconColor={colors.main100} />
            </View>
            <View>
              <IconButton iconName="arrow-right" iconColor={colors.main100} iconSize={iconSizeArrowButton} />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoWrapper}>
              <InfoCard  />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Home;