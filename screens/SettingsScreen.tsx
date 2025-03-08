import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SideNavigator from '../components/SideNavigator';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <SideNavigator />
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Settings Screen</Text>
          <Text>Adjust your app settings here</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    marginLeft: 60,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});