import React from "react";
import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./specifications.styles";

type ItemType = {
  devices: string;
  id: number;
  name: string;
};

const SpecificationsList = ({
  item,
  selectedItems,
  onValueChange,
}: {
  item: ItemType;
  selectedItems: number[];
  onValueChange?: any;
}) => {
  return (
    <View style={styles.specContainer}>
      <Checkbox
        value={selectedItems.includes(item.id)}
        onValueChange={() => {
          onValueChange(item?.id);
        }}
      />
      <Text style={styles.specText}>{item.name}</Text>
    </View>
  );
};

export default SpecificationsList;
