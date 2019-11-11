import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';


export default class SplashError extends React.Component {

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
                <Text>Failed To Load Content</Text>
                <Button
                    title={"Try Again"}
                    onPress={() => this._navigateTo('SplashScreen')}
                />
            </View>
        )
    }

}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightblue",
    }
});