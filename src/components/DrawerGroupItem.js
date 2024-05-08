import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';

function DrawerGroupItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default DrawerGroupItem;

// Gaya CSS untuk komponen
const styles = StyleSheet.create({
  drawerItem: {
    padding: 10,
    backgroundColor: 'lightgray',
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