export const addProductToCart = (
  cartItems,
  newItem,
  sizeProduct,
  inventory
) => {
  const cartProductIndex = cartItems.findIndex(
    (item) => item.id === newItem.id
  );

  if (cartProductIndex > -1) {
    const cartSizeProductIndex = cartItems[cartProductIndex].sizes.findIndex(
      (size) => size.talle === sizeProduct
    );
    const cartInventoryIndex = cartItems[cartProductIndex].inventory.findIndex(
      (size) => size.size === sizeProduct
    );

    if (cartSizeProductIndex > -1) {
      const newSizes = [...cartItems[cartProductIndex].sizes];
      const newInventory = [...cartItems[cartProductIndex].inventory];
      newSizes[cartSizeProductIndex] = {
        ...newSizes[cartSizeProductIndex],
        quantity: newSizes[cartSizeProductIndex].quantity + 1,
      };
      newInventory[cartInventoryIndex] = {
        ...newInventory[cartInventoryIndex],
        quantity: newInventory[cartInventoryIndex].quantity + 1,
      };

      return cartItems.map((item, index) =>
        index === cartProductIndex
          ? {
              ...item,
              quantity: item.quantity + 1,
              sizes: newSizes,
              inventory: newInventory,
            }
          : item
      );
    } else {
      const newSizes = [
        ...cartItems[cartProductIndex].sizes,
        {
          talle: sizeProduct,
          quantity: 1,
          id: newItem.id + "-" + sizeProduct,
        },
      ];

      const newInventory = [
        ...cartItems[cartProductIndex].inventory,
        {
          id: inventory.id,
          size: inventory.size,
          stock: inventory.stock,
          quantity: 1,
          productId: inventory.productId,
        },
      ];
      return cartItems.map((item, index) =>
        index === cartProductIndex
          ? {
              ...item,
              quantity: item.quantity + 1,
              sizes: newSizes,
              inventory: newInventory,
            }
          : item
      );
    }
  } else {
    return [
      ...cartItems,
      {
        ...newItem,
        quantity: 1,
        sizes: [
          {
            talle: sizeProduct,
            quantity: 1,
            id: newItem.id + "-" + sizeProduct,
          },
        ],
        inventory: [
          {
            id: inventory.id,
            size: inventory.size,
            stock: inventory.stock,
            quantity: 1,
            productId: inventory.productId,
          },
        ],
      },
    ];
  }
};

export const resetShippingCost = (cartItems, shippingCost) => {
  if (cartItems.length === 1 && cartItems[0].quantity === 1) {
    return 0;
  }

  return shippingCost;
};

export const addQuantity = (cartItems, productId, productSize, quantity) => {
  const existingProductIndex = cartItems.findIndex(
    (item) => item.id === productId
  );
  if (existingProductIndex !== -1) {
    const existingSizeIndex = cartItems[existingProductIndex].sizes.findIndex(
      (size) => size.talle === productSize
    );
    if (existingSizeIndex !== -1) {
      const existingSize =
        cartItems[existingProductIndex].sizes[existingSizeIndex];
      const updatedSize = {
        ...existingSize,
        quantity: existingSize.quantity + quantity,
      };
      const updatedSizes = [...cartItems[existingProductIndex].sizes];
      updatedSizes[existingSizeIndex] = updatedSize;
      const updatedProduct = {
        ...cartItems[existingProductIndex],
        quantity: cartItems[existingProductIndex].quantity + quantity,
        sizes: updatedSizes,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex] = updatedProduct;
      return updatedCartItems;
    }
  }
};

export const removeQuantity = (cartItems, productId, productSize, quantity) => {
  const existingProductIndex = cartItems.findIndex(
    (item) => item.id === productId
  );
  if (existingProductIndex !== -1) {
    const existingSizeIndex = cartItems[existingProductIndex].sizes.findIndex(
      (size) => size.talle === productSize
    );
    if (existingSizeIndex !== -1) {
      const existingSize =
        cartItems[existingProductIndex].sizes[existingSizeIndex];
      const updatedSize = {
        ...existingSize,
        quantity: existingSize.quantity - quantity,
      };
      const updatedSizes = [...cartItems[existingProductIndex].sizes];
      updatedSizes[existingSizeIndex] = updatedSize;
      const updatedProduct = {
        ...cartItems[existingProductIndex],
        quantity: cartItems[existingProductIndex].quantity - quantity,
        sizes: updatedSizes,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex] = updatedProduct;
      if (updatedSize.quantity === 0) {
        updatedSizes.splice(existingSizeIndex, 1);
        if (updatedSizes.length === 0) {
          updatedCartItems.splice(existingProductIndex, 1);
        }
      }
      return updatedCartItems;
    }
  }
};
