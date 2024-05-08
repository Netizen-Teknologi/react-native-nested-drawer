import * as React from 'react';
import DrawerToggle from './DrawerToggle';
import DrawerGroupItem from './DrawerGroupItem';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';

function DrawerNested({ children, navigation, label, listStyle }) {
  const [isShow, setShow] = React.useState(false);

  const toggleDrawer = () => {
    setShow(!isShow);
  };

  return (
    <View>
      <DrawerToggle 
        label={label}
        isShow={isShow} 
        toggleDrawer={toggleDrawer} 
        drawerListStyle
      />
      {isShow && (
        <View style={[styles.drawerList, listStyle]}>
         {children}
        </View>
      )}
    </View>
  );
}


export default DrawerNested;


// Gaya CSS untuk komponen
const styles = StyleSheet.create({
  drawerItem: {
    padding: 10,
    backgroundColor: 'red',
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