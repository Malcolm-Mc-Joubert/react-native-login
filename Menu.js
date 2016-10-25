import React, { Component } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text } from 'native-base';

export default class ListAvatarExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail source={require('./img/hyundai-logo.png')} />
                            <Text>Hyundai</Text>
                            <Text note>1967</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail source={require('./img/fiat-logo.jpg')} />
                            <Text>Fiat</Text>
                            <Text note>2007</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
var styles = StyleSheet.create({
    
});