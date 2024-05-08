import * as React from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

// Komponen untuk tombol toggle drawer
function DrawerToggle({ isShow, toggleDrawer, label }) {
  const rotateInterpolate = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(rotateInterpolate, {
      toValue: isShow ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isShow]);

  const rotateValue = rotateInterpolate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <TouchableOpacity onPress={toggleDrawer} style={styles.drawerToggle}>
      <Text style={styles.drawerToggleText}>{label?label:'Press Me'}</Text>
      <Animated.View style={{ transform: [{ rotate: rotateValue }] }}>
        <Text style={styles.drawerToggleText}>{isShow ? '▲' : '▼'}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

// Gaya CSS untuk komponen
const styles = StyleSheet.create({
  drawerToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  drawerToggleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DrawerToggle;
