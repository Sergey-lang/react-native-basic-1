import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Toggle Drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
      ),
      title: 'About Application',
    });
  }, [navigation]);

  return (
    <View style={styles.center}>
      <Text style={styles.text}>It's base app for learning react native.</Text>
      <Text style={styles.text}>App version <Text style={styles.version}>1.0.0</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  version: {
    fontFamily: 'open-sans-bold'
  },
  text: {
    textAlign: 'center'
  }
});
