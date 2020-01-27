import React from 'react';
import { View, TouchableHighlight, Text, Picker } from 'react-native';
import styles from "./styles";

export default FilterView = (props) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={() => props.onFilterPress("filter")} style={styles.filterContainer}>
                <Text style={styles.textStyle}>
                    {props.filterText}
                </Text>
            </TouchableHighlight>
            {
                props.filterText !== "filter" ?
                    <TouchableHighlight style={styles.clearFilterContainer} onPress={props.onClearFilter}>
                        <Text style={styles.textStyle}>
                            reset
                    </Text>
                    </TouchableHighlight>
                    :
                    null
            }

        </View>
    );
}