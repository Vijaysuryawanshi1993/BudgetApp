import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from './styles';

onSubmitPress = (obj) => {
    let budgetType = obj.budgetType ? "income" : "expense",
        budgetDesc = obj.desciption,
        budgetCost = obj.cost;
    let budgetCategory = obj.category;
    if (budgetDesc !== "" && budgetCost !== "" && budgetCategory !== "select") {
        obj.props.addExpense({ budgetType, budgetDesc, budgetCost, budgetCategory })
    } else {
        alert("Please Add All Values");
    }
}


export default AddBillContainer = (props) => {
    const [budgetType, setBudgetType] = useState(true);
    const [desciption, setDescription] = useState("");
    const [cost, setCost] = useState("");
    const category = props.selectedCategory;


    return (
        <View style={styles.operationWrp}>
            <View style={styles.operation}>
                <TouchableHighlight style={styles.incrementBox} onPress={() => setBudgetType(!budgetType)}>
                    <Text>{budgetType ? "+" : "-"}</Text>
                </TouchableHighlight>
                <View style={styles.addDisc}>
                    <TextInput
                        style={[styles.textInputStyle]}
                        placeholder={'Add Discription'}
                        value={desciption}
                        onChangeText={text => setDescription(text)}
                    />
                </View>
                <View style={styles.addValue}>
                    <TextInput
                        style={[styles.textInputStyle]}
                        placeholder={'Value'}
                        value={cost}
                        onChangeText={text => setCost(text)}
                    />
                </View>

                <TouchableHighlight style={styles.catagorySelectorView} onPress={() => props.addCategory("add")}>
                    <Text style={[styles.textCatagoryType]}>
                        {props.selectedCategory}
                    </Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight style={styles.btn} onPress={() => onSubmitPress({ props, budgetType, desciption, cost, category })}>
                <Text style={[styles.btnText, styles.white]}>Submit</Text>
            </TouchableHighlight>
        </View>
    );
}