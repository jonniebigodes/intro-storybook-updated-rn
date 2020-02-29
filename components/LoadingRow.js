import React, { useState, useEffect } from 'react';
import { Animated, Text, View, Easing, SafeAreaView } from 'react-native';
import { styles } from '../constants/globalStyles';

const GlowView = props => {
  const [glowAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(glowAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.inOut(Easing.quad),
      })
    ).start();
  }, []);
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: glowAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const LoadingRow = () => (
  <SafeAreaView style={{ padding: 12 }}>
    <GlowView>
      <View style={styles.LoadingItem}>
        <View style={styles.GlowCheckbox} />
        <Text style={styles.GlowText}>Loading</Text>
        <Text style={styles.GlowText}>cool</Text>
        <Text style={styles.GlowText}>state</Text>
      </View>
    </GlowView>
  </SafeAreaView>
);

export default LoadingRow;