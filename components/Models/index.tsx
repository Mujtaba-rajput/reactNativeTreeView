import React from "react";
import { Text, FlatList, View, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import SpecificationsList from "../Specifications";
import styles from "./models.styles";

const ModalList = ({
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
          value={selectedItems.includes(item.id)}
          onValueChange={() => {
            onValueChange(item?.id);
          }}
        />
        <Text style={styles.model}>{item.name}</Text>
      </TouchableOpacity>
      {selectedItems.includes(item.id) && item.specs && (
        <FlatList
          data={item.specs}
          renderItem={({ item }) => {
            return (
              <SpecificationsList
                item={item}
                selectedItems={selectedItems}
                onValueChange={(id: any) => {
                  toggleSelection(id);
                }}
              />
            );
          }}
          keyExtractor={(spec) => spec.id.toString()}
        />
      )}
    </View>
  );
};

export default ModalList;
