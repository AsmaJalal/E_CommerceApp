// ProductList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectProduct(item.id)}>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ProductList;
