import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerGroup } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import DrawerHeader from './src/components/DrawerHeader';
import DrawerNested from './src/components/DrawerNested';

// Komponen untuk item grup dalam drawer
function DrawerGroupItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

function CustomDrawerContent({ navigation }) {

  return (
    <DrawerContentScrollView>
      <DrawerHeader navigation={navigation} />
      <DrawerNested
        label="Home"
      >
        <DrawerGroupItem label="Screen 1" onPress={() => navigation.navigate('Screen1')} />
        <DrawerGroupItem label="Screen 2" onPress={() => navigation.navigate('Screen2')} />
      </DrawerNested>
        <DrawerGroupItem label="Screen 3" onPress={() => navigation.navigate('Screen3')} />
        <DrawerGroupItem label="Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </DrawerContentScrollView>
  );
}

// Layar Home
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

// Layar  Screen 1
function Screen1() {
  return (
    <View style={styles.screenContainer}>
      <Text> Screen 1</Text>
    </View>
  );
}

// Layar  Screen 2
function Screen2() {
  return (
    <View style={styles.screenContainer}>
      <Text> Screen 2</Text>
    </View>
  );
}

// Layar Screen3
function Screen3() {
  return (
    <View style={styles.screenContainer}>
      <Text>Screen 3</Text>
    </View>
  );
}

// Layar Screen4
function Screen4() {
  return (
    <View style={styles.screenContainer}>
      <Text>Screen 4</Text>
    </View>
  );
}

// Inisialisasi drawer navigator
const Drawer = createDrawerNavigator();

// Komponen App dengan drawer navigator
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Screen1" component={Screen1} />
        <Drawer.Screen name="Screen2" component={Screen2} />
        <Drawer.Screen name="Screen3" component={Screen3} />
        <Drawer.Screen name="Screen4" component={Screen4} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Gaya CSS untuk komponen
const styles = StyleSheet.create({
  drawerItem: {
    padding: 10,
    // backgroundColor: '#f1f1f1',
    // borderRadius: 10,
    borderBottomWidth: 1,
  },
  drawerItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
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
  drawerList: {
    marginLeft: 10,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
