import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const HomeScreen = ({ navigation }) => {
  function navigateToListing() {
    navigation.navigate('listing');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.mainTitle}>Ma librairie en ligne</Text>
      {/* {Data} */}
      <Pressable onPress={() => navigateToListing()}>
        <Text style={styles.button}>Aller à la sélection</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#18b1cc',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default HomeScreen;
