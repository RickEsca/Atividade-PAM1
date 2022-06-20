import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'https://m.media-amazon.com/images/I/91V1MB1DI-L._AC_SX425_.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                    Esquadrão suicida é tão ruim que fez eu sair da sessão com 20 minutos de filme
                </Text>
            </View>
        </View>
    );
}