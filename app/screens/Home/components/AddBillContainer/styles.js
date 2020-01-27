import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  white: {
    color: 'white'
  },
  header: {
    flex: 1,
    backgroundColor: '#465465',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 14,
    textAlign: 'center'
  },
  TotalCount: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 15
  },
  box: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    marginBottom: 10
  },
  incomeBox: {
    backgroundColor: '#1baeab',
  },
  expensessBox: {
    backgroundColor: '#fa443f'
  },
  boxTitle: {
    flex: 0.6
  },
  boxCount: {
    flex: 0.3,
    textAlign: 'right'
  },
  boxIconWrp: {
    flex: 0.1,
    textAlign: 'center',
    marginHorizontal: 8
  },
  iconBgColor: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 2
  },
  operationWrp: {
    backgroundColor: '#f1f1f1',
    shadowColor: "#000000",
    shadowOpacity: 4,
    padding: 10
  },
  operation: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  incrementBox: {
    flex: 0.1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  textInputStyle: {
    height: 40,
    padding: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  catagorySelectorView: {
    alignItems: "center",
    justifyContent: "center",
    // flex: 0.3
  },
  textCatagoryType: {
    height: 40,
    alignSelf:"center",
    padding: 5,
    borderColor: '#ddd',
    borderWidth: 1
  },
  addDisc: {
    flex: 0.6,
    marginHorizontal: 10
  },
  addValue: {
    flex: 0.3
  },
  btn: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#73b4aa',
    marginTop: 10
  },
  budgetRow: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  scrollView: {
    padding: 20
  }
})