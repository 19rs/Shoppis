import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ICartItem } from "../types/Products";
import { CartContext } from "../contexts/CartContext";
import { FontAwesome } from '@expo/vector-icons';

interface Props {
  item: ICartItem;
}

const CartCard = ({ item }: Props) => {
  const { addProduct, removeProduct } = useContext(CartContext);

  const precoComDesconto: number = Math.round(item.product.price - (item.product.price * item.product.discountPercentage / 100));

  return (
    <View style={ styles.card }>
        <View style={ styles.img }>
          <Image
            resizeMode="center"
            style={{ width: 100, height: 100 }}
            source={{ uri: item.product.thumbnail }}
          />
        </View>
        <View style={ styles.info }>
          <Text style={ styles.title }>{item.product.title}</Text>
          <Text style={ styles.description }>{item.product.description}</Text>
          <Text style={ styles.price }>Price: $ {precoComDesconto}</Text>
          <Text >Quantity: {item.quantity}</Text>
          <Text >Subtotal: {precoComDesconto * item.quantity}</Text>
        </View>

        <TouchableOpacity
         
          onPress={() => {
            removeProduct(item.product.id)}}
        >
          <FontAwesome name="minus-circle" size={24} color="red" />
        </TouchableOpacity>

        <TouchableOpacity
         
         onPress={() => {
           addProduct(item.product)}}
       >
        <FontAwesome name="plus-circle" size={24} color="green" />
       </TouchableOpacity>
      </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row', 
    columnGap: 10,
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 30,
    paddingHorizontal: 15,
    shadowColor: '#333',
    shadowOpacity: 0.5,
    maxHeight: 300,
  },
  img: {
    flexShrink: 1,
    width: '30%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  info: {
    rowGap: 10,
    width: '65%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  description: {
    textAlign: 'justify',
    fontSize: 13,
  },
  price: {
    fontWeight: 'bold',
    color: 'green',
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#606060",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText: {
    color: "#fff",
  },
});
