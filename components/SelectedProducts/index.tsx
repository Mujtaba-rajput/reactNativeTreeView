import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./selectedProducts.styles";

type SelectedItemType = {
  id: number;
  modelId: number;
  modelName: string;
  productId: number;
  productName: string;
  specName: string;
  typeId: number;
  typeName: string;
};

type SelectedProductType = {
  products: SelectedItemType[];
};

const SelectedProducts = ({ products }: SelectedProductType) => {
  const renderItems = (item: SelectedItemType) => {
    return (
      <View style={styles.selectedItemStyles}>
        <Text>{item?.typeName + ", "}</Text>
        <Text>{item?.modelName + ", "}</Text>
        <Text>{item?.specName + ", "}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => renderItems(item)}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export default SelectedProducts;
