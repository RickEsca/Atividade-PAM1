import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'https://pbs.twimg.com/media/FR2wILMXEAEHuO8.png'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                    Após anos de espera por um segundo filme, essa porra foi mal feita para caralho!!!
                </Text>
            </View>
        </View>
    );
}