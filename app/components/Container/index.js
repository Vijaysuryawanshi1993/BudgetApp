import React from 'react';
import { View, SafeAreaView } from 'react-native';

class Container extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1}}>
                {this.props.children}
            </SafeAreaView>
        );
    }
}

export default Container;