import React from 'react';
import { View, Text, ScrollView, Modal, TouchableHighlight } from 'react-native';
import styles from "./styles";
import Header from "../../components/Header";
import AddBillContainer from "./components/AddBillContainer";
import ExpenseList from "./components/ExpenseList";
import bills from "../../resources/bills.json";
import FliterView from "./components/FilterView";
import FilterModal from "./components/FilterModal";
import ChartView from "./components/ChartView";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    applyFilter,
    resetFilter,
    updateBudget
} from '../../actions';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBudget: 0,
            income: 0,
            expense: 0,
            bills: this.props.expenseList,
            currMonth: "January",
            currYear: "2020",
            isFilterModalVisible: false,
            filterList: [],
            selectedCategory: "select",
            filterPressType: ""
        }
    }

    componentDidMount() {
        this.setState({
            // bills: this.props.expenseList,
            filterList: this.props.filterList
        })
        this.updateBudget()
    }

    onListItemPress = (itemId) => {
        //need to implement edit nad delete in next page or this page itself
    }

    updateBudget = () => {
        let sum = 0, income = 0, expense = 0;

        this.state.bills.forEach(element => {
            if (element.type == "income") {
                income = income + parseFloat(element.amount)
            } else {
                expense = expense + parseFloat(element.amount)
            }
        });

        sum = income - expense;

        this.setState({
            totalBudget: sum,
            income,
            expense
        })

        // this.props.updateBudget(this.state.bills)
    }

    addExpense = (obj) => {
        let self = this;
        let maxId = Math.max.apply(Math, this.state.bills.map((item) => { return item.id; }));
        let objToBePushed = {
            "id": maxId != "-Infinity" ? maxId + 1 : 1,
            "description": obj.budgetDesc,
            "category": obj.budgetCategory,
            "amount": obj.budgetCost,
            "date": "01-06-2020",
            "type": obj.budgetType
        }

        this.setState({
            bills: [...this.state.bills, objToBePushed]
        }, () => self.updateBudget())
    }

    deleteExpense = (id) => {
        // console.log(id)
        let self = this
        this.setState({
            bills: this.state.bills.filter((item) => { return item.id !== id })
        },
            () => self.updateBudget()
        )
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.expenseList !== nextProps.expenseList) {
            this.setState({
                bills: nextProps.expenseList
            })
        }
    }

    onFilterPress = (type) => {
        this.setState({
            isFilterModalVisible: !this.state.isFilterModalVisible,
            filterPressType: type
        })
    }

    onFilterSelect = (filter) => {
        this.onFilterPress(this.state.filterPressType)
        if (this.state.filterPressType == "add") {
            this.setState({
                selectedCategory: filter
            })
        } else {
            this.props.applyFilter(filter);
        }
    }

    componentWillUnmount() {
        this.props.resetFilter();
    }

    onClearFilter = () => {
        this.props.resetFilter();
    }

    render() {
        // console.log(this.state.bills);
        return (
            <View style={styles.container}>
                <Header data={{
                    total: this.state.totalBudget,
                    income: this.state.income,
                    expense: this.state.expense,
                    currMonth: this.state.currMonth,
                    currYear: this.state.currYear
                }}
                />
                <View style={styles.body}>
                    <AddBillContainer addExpense={this.addExpense} selectedCategory={this.state.selectedCategory} addCategory={this.onFilterPress} />
                    <FliterView filterText={this.props.appliedFilterTxt}
                        onFilterPress={this.onFilterPress}
                        onClearFilter={this.onClearFilter}
                    />

                    <ScrollView style={{ flex: 2, height: "100%" }}>
                        <ExpenseList listData={this.state.bills} onItemPress={this.deleteExpense} />
                        <ChartView />
                    </ScrollView>
                </View>

                <FilterModal
                    isFilterModalVisible={this.state.isFilterModalVisible}
                    onFilterPress={this.onFilterPress}
                    onFilterSelect={this.onFilterSelect}
                    filterList={this.props.filterList}
                />
            </View>
        );
    }
}
mapStateToProps = (state) => {
    let { expenseList, filterList, appliedFilterTxt } = state.persistedReducer;

    return {
        expenseList,
        filterList,
        appliedFilterTxt
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        applyFilter,
        resetFilter,
        updateBudget
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
