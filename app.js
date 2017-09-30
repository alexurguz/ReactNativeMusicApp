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

export default class ReactNativeMusicApp extends Component {
    render() {
        const artist = {
            image: 'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/26/5d/98/265d9849-40fb-34b6-3070-2c9447439164/source/313x0w.jpg',
            name: 'Manolito y su trabuco',
            likes: 200,
            comments: 200
        };
        const artists = Array(500).fill(artist);

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
