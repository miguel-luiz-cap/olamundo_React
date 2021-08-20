import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}> 
      <Text style={estilo.titulo}> Ola Mundo!! 
      </Text>
      <Image style={estilo.imagem} source={require('/assets/Avatar_Craxeta.png')} />
    </View>
  
  );
}

const estilo = StyleSheet.create({
  container:{
    alignItems: 'center',
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#000',
  
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFF',
    //backgroundColor: '#FF3A00',
    fontWeight: 'bold',
    //shadowColor: '#FF0000',
    textShadowColor: '#FF00FF',
    textShadowRadius: 30,
  },
  imagem: {
    textShadowColor: '#FF3A00',
    height: 128,
    width: 128,
    paddingTop: 30,
    marginTop: 30,
    borderRadius: 100,
    borderColor: '#FF00FF',
  },
});

