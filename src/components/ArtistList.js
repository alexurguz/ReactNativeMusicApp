/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtistsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { artists } = this.props;

        return (
            <FlatList
                data={artists}
                renderItem={({item}) => <ArtistBox artist={item} />} />
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
