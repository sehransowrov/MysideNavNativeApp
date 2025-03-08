import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const ROUTES = [
  { name: 'Home', title: 'Home' },
  { name: 'Profile', title: 'Profile' },
  { name: 'Settings', title: 'Settings' },
  { name: 'About', title: 'About' }
];

export default function SideNavigator() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      {ROUTES.map((item) => (
        <TouchableOpacity
          key={item.name}
          style={[
            styles.navItem,
            route.name === item.name && styles.activeNavItem
          ]}
          onPress={() => navigation.navigate(item.name)}
        >
          <Text style={[
            styles.navText,
            route.name === item.name && styles.activeNavText
          ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    backgroundColor: '#f8f9fa',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 100,
    paddingTop: 20,
    borderRightWidth: 1,
    borderRightColor: '#e9ecef'
  },
  navItem: {
    height: 120,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeNavItem: {
    backgroundColor: '#e9ecef'
  },
  navText: {
    transform: [{ rotate: '-90deg' }],
    width: 120,
    textAlign: 'center',
    color: '#495057',
    fontSize: 16,
    fontWeight: '500'
  },
  activeNavText: {
    color: '#228be6',
    fontWeight: '600'
  }
});