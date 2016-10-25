/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  MapView,
  TextInput,
  
} from 'react-native'

class SecureView extends React.Component {

  // Don't need the function keyword when defining functions.
  // The constructor function is executed when a new instance of the Waypoint is being created
  // Props is the object passed new Waypoint(), e.g., new Waypoint({ prop1: value, prop2: value })
  constructor(props) {
    // super(props) creates a new instance of the superclass
    // In this case the superclass is React.Component
    // super(props) does the same thing that SuperClass.call(this, props) does in pseudoclassical style
    // super() MUST be called beforing refering to the 'this' of the Waypoint subclass
    super(props); 
    this.state = {
      position: {
        coords: {}
      }
    };
  } // look ma, no commas!

  getInitialState() {
    return {
      annotations: [{
       
      }]
    }
  }

  //Add title and current location to map
  render() {
    return (
      <View style={styles.container}>
         <TextInput
                        placeholder="Search"
                        onChange={(event) => this.setState({username: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.username} />
        <Text style={styles.title}>
          Waypoint
        </Text>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.position.coords.latitude,
            latitudeDelta: 0.001,
            longitude: this.state.position.coords.longitude,
            longitudeDelta: 0.001,
          }}
          showsUserLocation={true}
          annotations={[{latitude: 48.862725,
                         longitude: 2.287592000000018,
                         title: 'Cafe Venue',
                         subtitle: 'quick noshes'}]}
         />
         <Text style={styles.coords}>
           {this.state.position.coords.latitude}, {this.state.position.coords.longitude}
         </Text>
      </View>
    );
  }

  // this function will execute after rendering on the client occurs
  componentDidMount() {
   
    
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({position}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    navigator.geolocation.watchPosition((position) => {
      this.setState({position});
    });

  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    position: 'absolute',
    top: 10,
    right: 0,
    left: 0,
    padding: 15,
    fontWeight: 'bold',
    fontSize: 20,
    //alignSelf: 'flex-end',
    textAlign: 'center',
    // marginTop: 20,
  },
  
  formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 8,
        color: "#555555",
        backgroundColor:'#0f1b31',
    },
  coords: {
    // fontWeight: 'bold',
    fontSize: 20,
    // color: '#dddddd',
    textAlign: 'center',
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  map: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 60,
    bottom: 60,
    margin: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
  },
});
 
module.exports = SecureView;
