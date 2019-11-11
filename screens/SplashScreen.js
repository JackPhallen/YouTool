import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {actions$tagsFetch} from "../actions/tags.actions";
import {NavigationActions, StackActions} from 'react-navigation';


class SplashScreen extends React.Component {

    componentDidMount() {
        this.props.actions$tagsFetch();
    }

    componentDidUpdate() {
        if (!this.props.tagState.isFetching) {
            if(this.props.tagState.isError) {
                this._navigateTo('SplashError');
            } else {
                this._navigateTo('MainStack')
            }
        }
    }

    _navigateTo = (routeName) => {
        const actionToDispatch = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: routeName })]
        });
        this.props.navigation.dispatch(actionToDispatch)
    };

    render() {
        return(
            <View style={styles.main}>
                <Text>LOADING</Text>
            </View>
        )
    }

}

function mapStateToProps(state) {
    return {
        tagState: state.tags,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        actions$tagsFetch,
    }, dispatch);
}

export const SplashScreenConnect = connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightblue",
    }
});