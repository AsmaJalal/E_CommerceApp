import React from 'react';
import { View, Text, FlatList } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const categories = navigation.getParam('categories', []);

  return (
    <View>
      <Text>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
      />
    </View>
  );
};

export default CategoryScreen;
