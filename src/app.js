/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import ArtistsList from './components/ArtistList';
import {getArtists} from './apiClient/api-client'

export default class ReactNativeMusicApp extends Component {

    state = {
        artists: []
    }
    componentDidMount(){
        getArtists()
        .then(data => this.setState({artists: data}))
    }

    render() {

        const artists = this.state.artists;

        return (
            /*
            Forma 2: Resolver el problema del scroll de los items usando ListView (FlatList o SectionList).
            Es la forma mas optima para cuando trabajamos con contenido dinamico 
            como en nuestro caso ya que rederiza SOLO los items que se alcancen a mostrar en la pantalla
            y a medida que se hace scroll en la lista se van mostrando los siguientes items.
            */
            <View style={styles.container}>
                <ArtistsList artists={artists} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 20
    }
});

AppRegistry.registerComponent('ReactNativeMusicApp', () => ReactNativeMusicApp);
