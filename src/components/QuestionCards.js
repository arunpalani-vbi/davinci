import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

const styles = require('../styles/Style');
export default class QuestionCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        }
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onCardClick}>
                <View style={styles.questionsContainer}>
                    <View style={styles.questionCards}>
                        <Text style={styles.questionCardsHeadFont}>
                            {this.props.employeeData.question}
                        </Text>
                        <Text style={styles.questionCardsDescFont}>{this.props.employeeData.desc}</Text>
                        <AirbnbRating
                            count={5}
                            reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
                            defaultRating={0}
                            size={20}
                        />
                        <Text style={styles.ratingText}>{this.state.rating}/5</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}