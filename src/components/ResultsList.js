import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';


const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return (<View style={styles.container}>
        <Text style = {styles.titleStyle} >{ title }</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={( {item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                );
            }}
        />
    </View>);
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 18,
        marginBottom: 5 
    },
    container: {
        marginBottom: 10
    }

});

//navigation 
export default withNavigation(ResultsList);