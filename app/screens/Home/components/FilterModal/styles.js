import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modalItemContainer: {
        width: "100%",
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor:"gray",
        borderBottomWidth:1
    },
    modalItemText: {
        color: "white",
        fontSize: 16
    }
})