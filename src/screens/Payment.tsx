import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { showError } from "../components/Toast";
import { SafeAreaView } from "react-native-safe-area-context";



const Payment = () => {
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardSecurityCode, setCardSecurityCode] = useState('');
  const [cardExpireData, setCardExpireDate] = useState('');

  const confirmarCompra = () => {
    if(address && cardNumber && cardSecurityCode && cardExpireData) {
      console.log('compra confirmada')
      
    } else {
      console.log('dados incompletos')
      showError('Dados incompletos')

      // Toast.show("Não foi possível salvar o carrinho", {
      //   duration: 3000,
      //   position: Toast.positions.BOTTOM,
      //   shadow: false,
      //   animation: true,
      //   hideOnPress: true,
      //   delay: 0,
      //   backgroundColor: "red",
      // });
    }
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input} 
          multiline={true}
          numberOfLines={5}
          placeholder="Insert the delivery address"
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input} 
          placeholder="Insert the card number"
          onChangeText={setCardNumber}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Card Security Code</Text>
        <TextInput
          style={styles.input} 
          placeholder="Insert card security code"
          onChangeText={setCardSecurityCode}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Card Expire Date</Text>
        <TextInput
          style={styles.input} 
          placeholder="Insert card expire date"
          onChangeText={setCardExpireDate}
        />
      </View>

      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            confirmarCompra();
          }}
        >
          <Text style={styles.buttonText}>Confirmar Compra</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  viewInput: {
    width: '90%',
    rowGap: 5
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 8,
  },
  input: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 2,
    borderColor: '#e2e8f0'
},
  button: {
    width: "80%",
    height: 60,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    paddingVertical: 20,
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
  },
});
