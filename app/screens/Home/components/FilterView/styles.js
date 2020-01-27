import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 50,
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    filterContainer: {
        marginLeft: 8,
        height: 45,
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#f1f1f1',
        shadowColor: "#000000",
        shadowOpacity: 1,
    },
    clearFilterContainer:{
        marginRight: 8,
        height: 45,
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: '#f1f1f1',
        // shadowColor: "#000000",
        // shadowOpacity: 1,
    },
    textStyle: {
        color: "gray",
        padding: 8
    }
})
