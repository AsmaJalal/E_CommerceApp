import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getCategories, getProducts } from '../ApiEndPoints/api';

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories and products here and update the state
    const fetchCategoriesAndProducts = async () => {
      const categoriesData = await getCategories();
      const productsData = await getProducts();
      setCategories(categoriesData);
      setProducts(productsData);
    };

    fetchCategoriesAndProducts();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="View Categories"
        onPress={() => navigation.navigate('Category', { categories })}
      />
      <Button
        title="View Cart"
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

export default HomeScreen;
