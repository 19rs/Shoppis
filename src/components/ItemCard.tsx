import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";

interface Props {
  product: ProductDTO;
}
const ItemCard = ({ product }: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", product)}>
      <View style={ styles.card }>
        <View style={ styles.img }>
          <Image
            resizeMode="center"
            style={{ width: 100, height: 100 }}
            source={{ uri: product.thumbnail }}
          />
        </View>
        <View style={ styles.info }>
          <Text style={ styles.title }>{product.title}</Text>
          <Text style={ styles.description }>{product.description}</Text>
          <Text style={ styles.price }>$ {product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row', 
    columnGap: 10,
    // backgroundColor: '#ddd',
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
//ver essa combinacao
//backgroundColor: '#f8fafc',
//borderColor: '#f1f5f9',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 30,
    paddingHorizontal: 15,
    shadowColor: '#333',
    // shadowRadius: 3,
    shadowOpacity: 0.5,
    maxHeight: 300
  },
  img: {
    flexShrink: 2,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow'
  },
  info: {
    rowGap: 10,
    width: '65%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    // fontSize: 22,
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  description: {
    textAlign: 'justify',
    // fontSize: 15
    fontSize: 13
  },
  price: {
    fontWeight: 'bold',
    color: 'green'
  }
});
