import React from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from "./styles";

export default ExpenseList = (props) => {
    return (
        <View
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            <FlatList
                data={props.listData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.budgetRow, item.type == "income" ? styles.incomeBox : styles.expensessBox]}
                        onPress={() => props.onItemPress(item.id)}
                    >
                        <Text style={styles.white}>{item.description}</Text>
                        <Text style={styles.white}>{`${item.amount} rs`}</Text>
                    </TouchableOpacity>
                )}
                removeClippedSubviews={true}
                maxToRenderPerBatch={25}
                updateCellsBatchingPeriod={100}
                initialNumToRender={25}
            />
        </View >
    );
}