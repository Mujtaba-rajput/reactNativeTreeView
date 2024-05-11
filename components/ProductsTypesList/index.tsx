import React from "react";
import { Text, FlatList, View, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./productTypeList.styles";
import ModalList from "../Models";

const ProductTypesList = ({
  item,
  selectedItems,
  onValueChange,
  toggleChildExpansion,
  toggleSelection,
}: {
  item: any;
  selectedItems: number[];
  onValueChange?: any;
  toggleChildExpansion?: any;
  toggleSelection?: any;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => toggleChildExpansion(item.id)}
      >
        <Checkbox
          value={selectedItems.includes(item.id)}
          onValueChange={() => toggleSelection(item.id)}
        />
        <Text style={styles.typeName}>{item.name}</Text>
      </TouchableOpacity>
      {selectedItems.includes(item.id) && item.models && (
        <FlatList
          data={item.models}
          renderItem={({ item }) => {
            return (
              <ModalList
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
          keyExtractor={(model) => model.id.toString()}
        />
      )}
    </View>
  );
};

export default ProductTypesList;
