import { ReactNode, createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICartItem, ProductDTO } from "../types/Products";
import { showError } from "../components/Toast";

type CartContextProps = {
  cart: ICartItem[];
  getCart: () => void;
  addProduct: (product: ProductDTO) => void;
  removeProduct: (id: number) => void;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ICartItem[] | null>([]);

  const storeCart = async (value: ICartItem[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@cart", jsonValue);
    } catch (error) {
      showError("Não foi possível salvar o carrinho");
    }
  };

  const getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@cart");
      const cartData = jsonValue !== null ? JSON.parse(jsonValue) : null;
      setCart(cartData);
    } catch (error) {
      showError("Não foi possível recuperar o carrinho");
    }
  };

  const addProduct = (value: ProductDTO) => {
    const existingProduct = cart?.find(({ product }) => value.id === product.id);

    if (existingProduct) {
      const newcart = cart?.map((item) =>
        item.product.id === existingProduct.product.id
          ? { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
          : item
      );

      setCart(newcart ?? []);
      storeCart(newcart ?? []);
    } else {
      const newCart = [...cart ?? []];
      const data: ICartItem = { product: value, quantity: 1 };
      newCart.push(data);
      setCart(newCart);
      storeCart(newCart);
    }
    console.log(cart)
  };

  const removeProduct = (value: number) => {
    const newCart = [...cart];

    const itemIndex = newCart.findIndex(({ product }) => value === product.id);
    console.log('achou')
    console.log(itemIndex)
    console.log(newCart[itemIndex].quantity)

    newCart[itemIndex].quantity > 1 ? newCart[itemIndex].quantity-- : newCart.splice(itemIndex, 1) 
    setCart(newCart);
    storeCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, getCart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
