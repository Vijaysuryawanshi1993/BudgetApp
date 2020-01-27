import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import Modal from "react-native-modal";
import styles from './styles';

export default FilterModal = (props) => {
    return (
        <Modal isVisible={props.isFilterModalVisible}>
            <View style={styles.container}>
                {
                    props.filterList.map((data, index) => {
                        return (
                            <TouchableHighlight style={styles.modalItemContainer} onPress={() => props.onFilterSelect(data)}>
                                <Text style={styles.modalItemText}>
                                    {data}
                                </Text>
                            </TouchableHighlight>
                        )
                    })
                }

                <View style={{ alignItems: "flex-end", marginTop: 20, justifyContent: "flex-end" }}>
                    <Button title="cancel" style={{ width: 70 }} onPress={props.onFilterPress} />
                </View>
            </View>
        </Modal>
    )
}