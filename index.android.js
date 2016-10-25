/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

var LoginView = require("./LoginView");
var Project = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={styles.navigationContainer}
                initialRoute={{
                title: "THEMAGIK6",
                component: LoginView,
            }} />
        );
    }
});

var styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
    }
});

AppRegistry.registerComponent('Project', () => Project);
