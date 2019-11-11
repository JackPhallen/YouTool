import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions$tagsFetch} from "../actions/tags.actions";
import {actions$postsFetch} from "../actions/posts.actions";
import {actions$fieldsFetch} from "../actions/fields.actions";

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allTags: ['cow', 'pig', 'duck'],
            userInput: "",
            selectedTags: ['test']
        };
    }

    componentDidMount() {
        this.props.actions$tagsFetch();
    }


    /*
        Take user input -> filter allTags down to only tags in the user input -> assign to selected tags
        example: user inputs "I have a cow a pig and a dog" -> selectedTags = ['cow', 'pig']
     */

    render() {
        return (
            <View style={styles.main}>
                <Text> { this.props.tagState.tags.toString() } </Text>
                <Button
                    title={"Fetch posts"}
                    onPress={() => this.props.actions$postsFetch(this.props.tagState.tags)}
                    />
                <Button
                    title={"Fetch stream"}
                    onPress={() => this.props.actions$fieldsFetch(this.props.postState.posts[0])}
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        tagState: state.tags,
        postState: state.posts,
        fieldsState: state.fields
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        actions$tagsFetch,
        actions$postsFetch,
        actions$fieldsFetch
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});