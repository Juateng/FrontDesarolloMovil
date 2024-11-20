import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

function AppText({texto}) {
    return (
        <Text style={styles.text}>
            {texto}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? 'Roboto': 'Avenir',
        fontWeight: 'bold'

    },  
})

export default AppText;