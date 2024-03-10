import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { showError } from "../components/Toast";
import { CartContext } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cart, getCart } = useContext(CartContext);
  
  let cartTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += Math.round((item.product.price - (item.product.price * item.product.discountPercentage / 100)) * item.quantity);
    })
    return total;
  }

  useEffect(() => {
    const getData = async () => {
      try {
        await getCart();
      } catch (error) {
        showError("Não foi possível recuperar o carrinho");
      }
    };
    getData();
    console.log(cart)
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartCard item={item} />}
        keyExtractor={(item) => item.product.id.toString()}
      />
      <Text>{ cartTotal() }</Text>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
