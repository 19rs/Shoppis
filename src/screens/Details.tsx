import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Products";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import PagerView from 'react-native-pager-view';
import { FontAwesome } from '@expo/vector-icons';


const Details = () => {
  const routes = useRoute();
  const {title, thumbnail, description, images, price, rating, brand, category, discountPercentage } = routes.params as ProductDTO;

  const precoComDesconto: number = Math.round(price - (price * discountPercentage / 100));

    const ratingIcon = () => {
    const nota = Math.trunc(rating);
    let array: any[] =  []

    for(let i = 0; i < nota; i++) {
      array.push(
      <FontAwesome name="star" size={24} color="gold" key={i}/>
      )
    }
    if(nota < 5 && (rating - nota) >= 0.5) {
      array.push(<FontAwesome name="star-half" size={24} color="gold" key='5'/>);
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
        {/* <MaterialIcons name="discount" size={24} color="black" /> */}

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
        
        <Text>Rating: { rating }</Text>
        <Ionicons name="pricetag-outline" size={24} color="black" />
        
       
        <View style={{flexDirection: 'row'}}>
          { ratingIcon() }
        </View>
        <MaterialIcons name="category" size={24} color="black" />
        <Text>Discount: { discountPercentage } %</Text>

        <View style={ styles.viewPrice }>
          <Text style={ styles.textPrice }>Preço: </Text>
          <Text style={ styles.price }>${ price }</Text>
          <Text style={ styles.priceWithDiscount }>${ precoComDesconto }</Text>
        </View>
        
  
       

        
      {/* </View> */}
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
    // backgroundColor: '#fff',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 2,
    borderBottomWidth: 3,
    // borderColor: '#ccc',
    borderColor: '#e2e8f0',
    shadowColor: '#ccc',
    shadowOpacity: 0.5,
  },
  description: {
    // width: '100%',
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
  viewPrice: {
    width: '80%',
    flexDirection: 'row',
    columnGap: 5,
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
  viewBrandCategory: {
    // width: '70%',
    paddingHorizontal: 30,
    // backgroundColor: 'red',
    alignItems: 'flex-start'
  },
  viewBrand: {
    flexDirection: 'row',
    columnGap: 5,
    justifyContent: 'center',
    // alignContent: 'center',
  },
  viewCategory: {
    flexDirection: 'row',
    columnGap: 5,
    justifyContent: 'center',
    // alignContent: 'center'
  },
  // inStock: {
  //   fontSize: 15,
  //   fontWeight: 'bold',
  //   color: stock <= 10 ? 'red' : 'black',
  // },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;

