import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles,{sliderWidth, itemWidth} from '../styles/SliderEntry.style';
import firebaseDb from '../services/firebase'

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentWillMount() {
        this.ref = firebaseDb.ref("questions");
        this.ref.limitToFirst(10).on("value", (snapshot) => {
            this.setState({ questions: snapshot.val() })
        });
    }
    componentWillUnmount() {
        this.ref.off();
    }

    _renderItem({ item, index }) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => { alert(`You've clicked`); }}
            >

                <View style={styles.textContainer}>
                   
                    <Text
                        style={styles.title}
                        numberOfLines={2}
                    >
                        {item.behaiouralTrait.toUpperCase()}
                    </Text>
                    <Text
                        style={styles.subtitle}
                        numberOfLines={2}
                    >
                        {item.evidence}
                    </Text>
                    <Text
                        style={styles.subtitle}
                        numberOfLines={2}
                    >
                        {item.evidence}
                    </Text>
                    <Text
                        style={styles.subtitle}
                        numberOfLines={2}
                    >
                        {item.evidence}
                    </Text>
                    <Text
                        style={styles.subtitle}
                        numberOfLines={2}
                    >
                        {item.evidence}
                    </Text>
                    <Text
                        style={styles.subtitle}
                        numberOfLines={2}
                    >
                        {item.evidence}
                    </Text>
                    <Text
                        style={styles.subtitle}
                        numberOfLines={2}
                    >
                        {item.evidence}
                    </Text>
                    <Text
                        style={styles.subtitle}
                        numberOfLines={2}
                    >
                        {item.evidence}
                    </Text>
                    <Text
                        style={styles.subtitle}
                        numberOfLines={2}
                    >
                        {item.evidence}
                    </Text>
                    <Text
                        style={styles.subtitle}
                        numberOfLines={2}
                    >
                        {item.evidence}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        console.log(this.props.navigation.state.params);
        console.log(this.state.questions);
        if (this.state.questions)
            return (<View>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.questions}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
            </View>);
        else
            return (null)
    }
}
