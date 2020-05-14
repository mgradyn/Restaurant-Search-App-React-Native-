import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(results => {
            return results.price == price;
        })
    };

    return (
        <>
            <SearchBar term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)} 
                onTermSubmit={() => searchAPI(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultByPrice('$')}
                    title="Cost Effective"
                />
                <ResultsList
                    results={filterResultByPrice('$$')}
                    title="Bit Pricier"
                />
                <ResultsList
                    results={filterResultByPrice('$$$')}
                    title="Big Spender"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;