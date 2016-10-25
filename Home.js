import Lightbox from 'react-native-lightbox'
//import NavigationBar from 'react-native-navbar'
import React, { Component } from 'react';
import {
  Container,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  View,
} from 'react-native'

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            email: this.props.email,
            password: this.props.password 
        };
    }
  
  render() {
    return (
    <ScrollView horizontal={false}>
        <View style={styles.bg}>
          <Text><Image style={styles.bg} source={require('./images/porsche-panamera-217.jpg')} />
            La nouvelle Porshe Panamera brave le quotidien avec un style unique et dynamique renforcé par chacune de ses lignes saillantes. À l'intérieur, tout a été conçu pour faire de votre quotidien une expérience des plus agréables. De la console centrale ergonomique à l'habitacle extrêmement spacieux, le quotidien à bord de cet SUV dépasse toutes vos attentes.
          </Text>
       </View>
        
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
        width:  400 ,
        height:  200 , 
    },
  });
module.exports = Home;
