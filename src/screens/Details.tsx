import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Products";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import PagerView from 'react-native-pager-view';


const Details = () => {
  const routes = useRoute();
  const {title, thumbnail, description, images, price, rating, brand, category, stock, discountPercentage } = routes.params as ProductDTO;

  const precoComDesconto: number = Math.round(price - (price * discountPercentage / 100));

  const styles = StyleSheet.create({
    container: {
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
      width: '70%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    viewBrand: {
      flexDirection: 'row',
      columnGap: 5,
      justifyContent: 'center',
      alignContent: 'center',
    },
    viewCategory: {
      flexDirection: 'row',
      columnGap: 5,
      justifyContent: 'center',
      alignContent: 'center'
    },
    inStock: {
      fontSize: 15,
      fontWeight: 'bold',
      color: stock <= 10 ? 'red' : 'black',
    },
    viewPager: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  
  return (
    <View style={ styles.container }>
      <Image
          resizeMode="contain"
          style={{ width: 300, height: 300 }}
          source={{ uri: thumbnail }}
      />

    {/* <View style={{ flex: 1 }}>
        <PagerView style={styles.viewPager} initialPage={0}>
          <View style={styles.page} key="1">
            <Text>First page</Text>
            <Text>Swipe ➡️</Text>
          </View>
          <View style={styles.page} key="2">
            <Text>Second page</Text>
          </View>
          <View style={styles.page} key="3">
            <Text>Third page</Text>
          </View>
        </PagerView>
    </View> */}

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
      
      {/* <View style={ styles.viewPrice }>
        <Text style={ styles.textPrice }>Preço: </Text>
        <Text style={ styles.price }>${ price }</Text>
        <Text style={ styles.priceWithDiscount }>${ precoComDesconto }</Text>
      </View>
      
      <View style={ styles.viewBrand }>
        <MaterialCommunityIcons name="registered-trademark" size={24} color="black" />
        <Text>{ brand }</Text>
      </View>
       */}
      <Text>Rating: { rating }</Text>
      <Ionicons name="pricetag-outline" size={24} color="black" />
      
      {/* <View style={ styles.viewCategory }>
        <AntDesign name="tagso" size={24} color="black" />
        <Text>{ category }</Text>
      </View> */}


      <Text style={ styles.inStock }>In Stock: { stock }</Text>
      <MaterialIcons name="category" size={24} color="black" />
      <Text>Discount: { discountPercentage } %</Text>

      <MaterialIcons name="discount" size={24} color="black" />
    </View>
  );
};

export default Details;

