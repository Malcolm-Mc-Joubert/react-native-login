/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    Image,
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Home = require("./Home");

class Register extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email:'',
        };
    }
 
    render() {
        return (
            <View style={styles.container}>
            
                <Image style={styles.bg} source={require('./images/background.jpg')} />
                <View>
                  <View style={styles.header}>
                <Image style={styles.mark} source={require('./images/Logo-copy.png')} />
                  </View>
                  <Text style={styles.title}>
                    Create an account
                </Text>
                    <TextInput
                        placeholder="Username"
                        onChange={(event) => this.setState({username: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.username} />
                    <TextInput
                        placeholder="Email"
                        onChange={(event) => this.setState({email: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.email} />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        onChange={(event) => this.setState({password: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.password} />
                    <TouchableHighlight onPress={(this.onCreateAccountPressed.bind(this))} style={styles.button}>
                        <Text style={styles.buttonText}>Create an account</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
 onCreateAccountPressed () {
        this.props.navigator.push({
            title: "Home",
            component: Home,
            passProps: {username: this.state.username, email: this.state.email, password: this.state.password},
        });
    }
};
 
var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch",
    },
  bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
  mark: {
        width: 174,
        height: 64,
        marginBottom: 140,
        alignSelf: "center",
        marginTop: 70,
    },

    title: {
        fontSize: 18,
        marginBottom: 10,
        color:'#555555',
        backgroundColor:'#0f1b31',
        fontWeight: 'bold',
        alignSelf: "center"
    },
    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#e54148",
        borderRadius: 8,
        color: "#555555"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: "#e54148",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
        
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center",
        fontWeight: 'bold',
    },
  greyFont: {
      color: '#e54148',
      fontSize: 17,
      backgroundColor:'#0f1b31',
      marginTop: 30,
    },
    whiteFont: {
      color: '#FFF',
       fontSize: 17,
    }

});
 
module.exports = Register;