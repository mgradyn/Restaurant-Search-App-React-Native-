import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput style={styles.inputStyle} 
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)} // u could also do onChangeText={onTermChange}
                onEndEditing={()=> onTermSubmit()}              // u could also do onEndEditing={onTermSubmit} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#dcdcdc', 
        height: 50,
        borderRadius: 8,
        marginHorizontal: 18,
        marginTop : 15,
        marginBottom: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex : 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }

});

export default SearchBar;