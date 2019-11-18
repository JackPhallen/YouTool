import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allTags: ['cow', 'pig', 'duck'],
            userInput: "",
            selectedTags: ['test']
        };
    }

    /*
        Take user input -> filter allTags down to only tags in the user input -> assign to selected tags
        example: user inputs "I have a cow a pig and a dog" -> selectedTags = ['cow', 'pig']
     */


    render() {
        return (
            <View style={styles.main}>
                <TextInput
                        style={{ height: 25, borderColor: 'gray', borderWidth: 3 }}
                        onChangeText={userInput => this.setState({ userInput })}
                        value={this.state.userInput}
                        placeholder="Search"
                      />
                <Text> { this.state.selectedTags.toString() } </Text>
                {/*Test displays that user input is being recorded*/}
                <Text> {this.state.userInput} </Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});