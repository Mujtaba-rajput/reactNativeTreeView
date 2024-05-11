import React from "react";
import { Text, FlatList, View, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import ProductTypesList from "../ProductsTypesList";
import styles from "./productCategoryList.styles";

const ProductCategoryList = ({
  item,
  selectedItems,
  onValueChange,
  toggleChildExpansion,
  toggleSelection,
}: {
  item: any;
  selectedItems: any;
  onValueChange?: any;
  toggleChildExpansion?: any;
  toggleSelection?: any;
}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => toggleChildExpansion(item.id)}
      >
        <Checkbox
          style={{ marginRight: 3 }}
          value={selectedItems.includes(item.id)}
          onValueChange={() => toggleSelection(item.id)}
        />
        <Text style={styles.category}>{item.name}</Text>
      </TouchableOpacity>
      {selectedItems.includes(item.id) && item.types && (
        <FlatList
          data={item.types}
          renderItem={({ item }) => {
            return (
              <ProductTypesList
                item={item}
                selectedItems={selectedItems}
                onValueChange={(id: number) => {
                  toggleSelection(id);
                }}
                toggleChildExpansion={(id: number) => {
                  toggleChildExpansion(id);
                }}
                toggleSelection={(id: number) => {
                  toggleSelection(id);
                }}
              />
            );
          }}
          keyExtractor={(type) => type.id.toString()}
        />
      )}
    </View>
  );
};

export default ProductCategoryList;
