import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function SplashView() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/whatsapp-logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <ActivityIndicator size="large" color="#128C7E" style={styles.loader} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 100,
        height: 100,
    },
    loader: {
        marginTop: 20,
    },
});
