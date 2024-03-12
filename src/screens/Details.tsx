import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import { ProductDTO } from "../types/Products";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { CartContext } from "../contexts/CartContext";
import { FontAwesome5 } from '@expo/vector-icons';
import { showSuccess } from "../components/Toast";


const Details = () => {
  const routes = useRoute();
  const {title, thumbnail, description, images, price, rating, brand, category, discountPercentage } = routes.params as ProductDTO;
  const product: ProductDTO = routes.params as ProductDTO;

  const { addProduct } = useContext(CartContext);

  const precoComDesconto: number = price - (price * discountPercentage / 100);

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
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={{minWidth: '95%', borderWidth: 2, borderRadius: 5, borderColor: '#e2e8f0', marginTop: 10, padding: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <Image
            resizeMode="contain"
            style={{ width: 280, height: 250 }}
            source={{ uri: thumbnail }}
        />
        <Text style={{position: 'absolute', top: 7, right: 5, fontWeight: 'bold', color: 'white', backgroundColor: '#16a34a', paddingVertical: 6, paddingHorizontal: 8, borderRadius: 5, shadowColor: '#fff', shadowRadius: 5}}>{ discountPercentage }% OFF</Text>
      </View>

        <View style={ styles.viewTitle }>
          <Text style={ styles.title }>{ title }</Text>
        </View>
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
        </View>
        

        <View style={ styles.viewPrice }>
          <Text style={ styles.textPrice }>Price: </Text>

          <View style={{columnGap: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={ styles.price }>${ price.toFixed(2) }</Text>
            <Text style={ styles.priceWithDiscount }>${ precoComDesconto.toFixed(2) }</Text>
          </View>
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            showSuccess('Produto adicionado ao carrinho');
            addProduct(product)}}
        >
          <FontAwesome5 name="cart-plus" size={24} style={{marginRight: 20}} color="white" />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  scroll: {
    alignItems: 'center',
    width: '100%',
    rowGap: 10,
    paddingBottom: 15,
  },
  viewTitle: {
    minWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 2,
    borderBottomWidth: 3,
    borderColor: '#e2e8f0',
    shadowColor: '#ccc',
    shadowOpacity: 0.5,
  },
  title: {
    // width: '100%',
    fontSize: 25,
    // flexShrink: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    minWidth: '90%',
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
    columnGap: 20,
    minWidth: '90%',
    maxWidth: '90%',
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
    alignItems: 'center',
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
    minWidth: '80%',
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
    alignItems: 'center',
  },
  
  viewPrice: {
    minWidth: '80%',
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
    minWidth: "80%",
    height: 50,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20
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

