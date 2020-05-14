import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResults = async (id) => {
        // because the id needs to change alot
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResults(id);
    }, []);

    if(!result) {
        return null;
    }


    return (<View>
        <Text>{result.name}</Text>
        <FlatList 
            data = {result.photos}
            keyExtractor = {(photo) => photo }
            renderItem = {({item}) => {
                return <Image style={styles.image} source = {{uri: item}} />
            }}
        />
    </View>);
};


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});


export default ResultShowScreen;