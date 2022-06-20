import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Titulo(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Filmes Péssimos
            </Text>
        </View>
    );
}