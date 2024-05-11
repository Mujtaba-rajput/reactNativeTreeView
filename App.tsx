import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { products } from "./utils/mocData";
import styles from "./components/styles";
import ProductList from "./components/ProductsList";
import { getSelectedItems } from "./utils/helper";
import SelectedProducts from "./components/SelectedProducts";

export default function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const { selectedProducts, selectedTypes, selectedModels, selectedSpecs } =
    getSelectedItems(products, selectedItems);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Browse Products</Text>
      </View>
      <View style={styles.listContainer}>
        <ProductList
          data={products}
          getSelections={(item: any) => {
            setSelectedItems(item);
          }}
        />
      </View>
      <View style={styles.selectedContainer}>
        <View>
          <Text style={styles.title}>Selected Variants</Text>
        </View>
        <SelectedProducts products={selectedSpecs} />
      </View>
    </SafeAreaView>
  );
}
