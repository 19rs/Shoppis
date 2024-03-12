import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { showError, showSuccess } from "../components/Toast";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../contexts/CartContext";



const Payment = ({navigation}: any) => {
  const { clearCart } = useContext(CartContext);

  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardSecurityCode, setCardSecurityCode] = useState('');
  const [cardExpireData, setCardExpireDate] = useState('');

  const confirmarCompra = () => {
    if(address && cardNumber && cardSecurityCode && cardExpireData) {
      clearCart();
      setAddress('');
      setCardNumber('');
      setCardSecurityCode('');
      setCardExpireDate('');
      navigation.navigate('Cart');
      showSuccess('Compra realizada! Obrigado por comprar conosco! :)');
    } else {
      showError('Dados incompletos')
    }
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input} 
          onChangeText={setCardNumber}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Card Security Code</Text>
        <TextInput
          style={styles.input} 
          onChangeText={setCardSecurityCode}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Card Expire Date</Text>
        <TextInput
          style={styles.input} 
          onChangeText={setCardExpireDate}
        />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.inputAddress} 
          multiline={true}
          numberOfLines={6}
          onChangeText={setAddress}
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
inputAddress: {
  width: '100%',
  paddingHorizontal: 10,
  paddingVertical: 10,
  borderWidth: 1,
  marginBottom: 15,
  textAlignVertical: 'top',
  backgroundColor: '#fff',
  borderRadius: 2,
  borderColor: '#e2e8f0'
},
  button: {
    width: "90%",
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
