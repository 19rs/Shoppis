import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ProductDTO } from "../types/Products";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import PagerView from 'react-native-pager-view';
import { FontAwesome } from '@expo/vector-icons';
import { CartContext } from "../contexts/CartContext";


const Details = () => {
  const routes = useRoute();
  const {title, thumbnail, description, images, price, rating, brand, category, discountPercentage } = routes.params as ProductDTO;
  const product: ProductDTO = routes.params as ProductDTO;

  const { addProduct } = useContext(CartContext);

  const precoComDesconto: number = Math.round(price - (price * discountPercentage / 100));

  const ratingIcon = () => {
    const nota = Math.trunc(rating);
    let array: any[] =  []

    for(let i = 0; i < nota; i++) {
      array.push(
      <FontAwesome name="star" size={20} color="gold" key={i}/>
      )
    }
    if(nota < 5 && (rating - nota) >= 0.5) {
      array.push(<FontAwesome name="star-half" size={20} color="gold" key='5'/>);
    }
    return array;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '95%', borderWidth: 2, borderRadius: 5, borderColor: '#e2e8f0', marginTop: 10, padding: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <Image
            resizeMode="contain"
            style={{ width: 280, height: 250 }}
            source={{ uri: thumbnail }}
        />
      </View>

        <Text style={ styles.title }>{ title }</Text>
        <Text style={ styles.description }>{ description }</Text>

        <View style={ styles.viewBrandCategory }>
          <View style={ styles.viewBrand }>
            <MaterialCommunityIcons name="registered-trademark" size={24} color="black" />
            <Text>{ brand }</Text>
          </View>
          <View style={ styles.viewCategory }>
            <AntDesign name="tagso" size={24} color="black" />
            <Text>{ category }</Text>
          </View>            
        </View>

        <View style={ styles.viewRatingDiscount }>
          <View style={ styles.viewRating }>
            <Text>Rating:</Text>
            { ratingIcon() }
          </View>
          {/* <Text>Discount: { discountPercentage } %</Text> */}
        </View>
        
        
       
        
        {/* <Text>Discount: { discountPercentage } %</Text> */}

        <View style={ styles.viewPrice }>
          <Text style={ styles.textPrice }>Price: </Text>
          <Text style={ styles.price }>${ price }</Text>
          <Text style={ styles.priceWithDiscount }>${ precoComDesconto }</Text>
          {/* <Text>{ discountPercentage }% OFF</Text> */}
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log(product)
            addProduct(product)}}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    rowGap: 10,
    alignItems: 'center',
  },
  title: {
    width: '100%',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 2,
    borderBottomWidth: 3,
    borderColor: '#e2e8f0',
    shadowColor: '#ccc',
    shadowOpacity: 0.5,
  },
  description: {
    justifyContent: 'center',
    textAlign: 'justify',
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#000',
    fontSize: 20,
    marginHorizontal: 10,
  },
  viewBrandCategory: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 50,
    width: '95%',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
  viewBrand: {
    flexDirection: 'row',
    columnGap: 5,
    alignContent: 'center',
  },
  viewRating: {
    flexDirection: 'row',
    columnGap: 5,
    alignContent: 'center',
  },
  viewRatingDiscount: {
    flexDirection: 'row',
    paddingHorizontal: 35,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    width: '95%',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
  viewCategory: {
    flexDirection: 'row',
    columnGap: 5,
    justifyContent: 'center',
  },
  
  viewPrice: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 5,
    marginVertical: 10
  },
  textPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'brown',
    textDecorationLine: 'line-through',
  },
  priceWithDiscount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;

