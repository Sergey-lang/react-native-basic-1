import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const PostScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Post screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

