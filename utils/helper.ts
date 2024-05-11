export const getSelectedItems = (products: any, selectedItems: any) => {
  const selectedProducts: any = [];
  const selectedTypes: any = [];
  const selectedModels: any = [];
  const selectedSpecs: any = [];

  products.forEach((product: any) => {
    if (selectedItems.includes(product.id)) {
      selectedProducts.push({ productName: product.name, id: product?.id });

      product.types.forEach((type: any) => {
        if (selectedItems.includes(type.id)) {
          selectedTypes.push({
            typeName: type.name,
            id: type?.id,
            productId: product?.id,
          });

          type.models.forEach((model: any) => {
            if (selectedItems.includes(model.id)) {
              selectedModels.push({
                modelName: model.name,
                id: model?.id,
                productId: product?.id,
                typeId: type?.id,
              });

              model.specs.forEach((spec: any) => {
                if (selectedItems.includes(spec.id)) {
                  selectedSpecs.push({
                    specName: spec.name,
                    id: spec.id,
                    modelId: model.id,
                    modelName: model.name,
                    productId: product?.id,
                    productName: product.name,
                    typeId: type?.id,
                    typeName: type.name,
                  });
                }
              });
            }
          });
        }
      });
    }
  });

  return { selectedProducts, selectedTypes, selectedModels, selectedSpecs };
};
