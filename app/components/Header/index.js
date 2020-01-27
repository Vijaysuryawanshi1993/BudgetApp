import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native'
import styles from "./styles";
import MenuImage from "../../resources/menu_icon.png";

export default Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={[styles.title, styles.white]}>{`Available Budget in ${props.data.currMonth} ${props.data.currYear}:`}</Text>
            <Text style={[styles.TotalCount, styles.white]}> {`${props.data.total}`} </Text>
            <View style={[styles.box, styles.incomeBox]}>
                <Text style={styles.boxTitle}>INCOME</Text>
                <Text style={[styles.boxCount, styles.white]}>{`+ ${props.data.income}`}</Text>
                
            </View>
            <View style={[styles.box, styles.expensessBox]}>
                <Text style={styles.boxTitle}>EXPENSESS</Text>
                <Text style={[styles.boxCount, styles.white]}>{`- ${props.data.expense}`}</Text>
            </View>
        </View>
    );
}
