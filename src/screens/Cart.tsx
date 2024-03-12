import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { showError } from "../components/Toast";
import { CartContext } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CartCard from "../components/CartCard";

const Cart = ({navigation}: any) => {
  const { cart, getCart } = useContext(CartContext);
  
  let cartTotal = () => {
    let total: number = 0;

    if(cart) {
      cart.forEach(item => {
        total += (item.product.price - (item.product.price * item.product.discountPercentage / 100)) * item.quantity;
      })
    }
      return total.toFixed(2);
  }

  const checkCart = () => {
    if(!cart.length) {
      showError("Sem itens no carrinho");
    } else {
      navigation.navigate('Payment');
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        await getCart();
      } catch (error) {
        showError("Não foi possível recuperar o carrinho");
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartCard item={item} />}
        keyExtractor={(item) => item.product.id.toString()}
      />
      
      <View style={styles.viewTotalCompra}>
        <Text style={styles.valorCompra}>Cart Total: ${ cartTotal() }</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            checkCart();
          }}
        >
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
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
  viewTotalCompra: {
    width: '100%',
    rowGap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 4,
    borderColor: '#e2e8f0',
    shadowColor: '#ccc',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    paddingVertical: 20
  },
  valorCompra: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  },
});
