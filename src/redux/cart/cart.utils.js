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

    const stock = cartItems[cartProductIndex].inventory.map((s) => s.stock);

    if (cartSizeProductIndex > -1) {
      const newSizes = [...cartItems[cartProductIndex].sizes];
      const newInventory = [...cartItems[cartProductIndex].inventory];

      if (newInventory[cartInventoryIndex].quantity < stock[0]) {
        newSizes[cartSizeProductIndex] = {
          ...newSizes[cartSizeProductIndex],
          quantity: newSizes[cartSizeProductIndex].quantity + 1,
        };

        newInventory[cartInventoryIndex] = {
          ...newInventory[cartInventoryIndex],
          quantity: newInventory[cartInventoryIndex].quantity + 1,
        };
      }

      // return cartItems.map((item, index) =>
      //   index === cartProductIndex
      //     ? {
      //         ...item,
      //         quantity: item.quantity + 1,
      //         sizes: newSizes,
      //         inventory: newInventory,
      //       }
      //     : item
      // );
      const accumulatedQuantity = newInventory.reduce(
        (acc, inventoryItem) => acc + inventoryItem.quantity,
        0
      );

      const updatedCartItems = cartItems.map((item, index) => {
        if (index === cartProductIndex) {
          return {
            ...item,
            quantity: accumulatedQuantity,
            sizes: newSizes,
            inventory: newInventory,
          };
        } else {
          return item;
        }
      });

      return updatedCartItems;
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
    const cartInventoryIndex = cartItems[
      existingProductIndex
    ].inventory.findIndex((size) => size.size === productSize);

    const stock = cartItems[existingProductIndex].inventory.map((s) => s.stock);
    if (existingSizeIndex !== -1) {
      const existingSize =
        cartItems[existingProductIndex].sizes[existingSizeIndex];

      const newInventory = [...cartItems[existingProductIndex].inventory];

      if (newInventory[cartInventoryIndex].quantity < stock[0]) {
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
          inventory: newInventory,
        };

        newInventory[cartInventoryIndex] = {
          ...newInventory[cartInventoryIndex],
          quantity: newInventory[cartInventoryIndex].quantity + quantity,
        };

        const updatedCartItems = [...cartItems];
        updatedCartItems[existingProductIndex] = updatedProduct;

        console.log(cartItems);
        return updatedCartItems;
      }
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
    const cartInventoryIndex = cartItems[
      existingProductIndex
    ].inventory.findIndex((size) => size.size === productSize);

    if (existingSizeIndex !== -1) {
      const existingSize =
        cartItems[existingProductIndex].sizes[existingSizeIndex];
      const updatedSize = {
        ...existingSize,
        quantity: existingSize.quantity - quantity,
      };
      const updatedSizes = [...cartItems[existingProductIndex].sizes];
      updatedSizes[existingSizeIndex] = updatedSize;

      const newInventory = [...cartItems[existingProductIndex].inventory];

      newInventory[cartInventoryIndex] = {
        ...newInventory[cartInventoryIndex],
        quantity: newInventory[cartInventoryIndex].quantity - quantity,
      };

      const updatedProduct = {
        ...cartItems[existingProductIndex],
        quantity: cartItems[existingProductIndex].quantity - quantity,
        sizes: updatedSizes,
        inventory: newInventory,
      };

      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex] = updatedProduct;
      if (
        updatedSize.quantity === 0 &&
        newInventory[cartInventoryIndex].quantity === 0
      ) {
        updatedSizes.splice(existingSizeIndex, 1);
        newInventory.splice(cartInventoryIndex, 1);
        if (updatedSizes.length === 0 && newInventory.length === 0) {
          updatedCartItems.splice(existingProductIndex, 1);
        }
      }
      return updatedCartItems;
    }
  }
};
