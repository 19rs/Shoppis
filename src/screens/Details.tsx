import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Products";

// interface Props {
//   product: ProductDTO;
// }

// const Details = ({ route }) => {
const Details = (object) => {
  const product: ProductDTO = object.route.params;
  // console.log(product.route.params.title);
  return (
    <View style={ styles.container }>
      <Image
          resizeMode="contain"
          style={{ width: 300, height: 300 }}
          source={{ uri: product.images[0] }}
        />
      <Text style={ styles.title }>{ product.title }</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    rowGap: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#ccc',
    shadowOpacity: 0.5,
  }
});
