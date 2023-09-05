// CategoryList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectCategory(item)}>
          <View>
            <Text>{item}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  );
};

export default CategoryList;
