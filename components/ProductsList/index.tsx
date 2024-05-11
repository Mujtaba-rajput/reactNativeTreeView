import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ProductCategoryList from "../ProductCategoryList";

type ProductListType = {
  data: any[];
  getSelections: any;
};

const ProductList = ({ data, getSelections }: ProductListType) => {
  const [selectedItems, setSelectedItems] = useState<any>([]);

  useEffect(() => {
    if (selectedItems.length > 0) {
      getSelections(selectedItems);
    }
  }, [selectedItems]);

  const toggleSelection = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId: number) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const toggleChildExpansion = (id: number) => {
    if (!selectedItems.includes(id)) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((itemId: number) => itemId !== id));
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <ProductCategoryList
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
      keyExtractor={(category) => category.id.toString()}
    />
  );
};

export default ProductList;
