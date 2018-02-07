import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Stars from 'react-native-stars-rating';
import Icon from 'react-native-fa-icons';

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
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.questionCardsHeadFont}>
                                {this.props.employeeData.question}
                            </Text>
                            <Text><Icon name='address-book' style={{fontSize: 45, color: 'green'}}/></Text>
                        </View>
                        <Text style={styles.questionCardsDescFont}>{this.props.employeeData.desc}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Stars
                                isActive={true}
                                rateMax={5}
                                isHalfStarEnabled={true}
                                onStarPress={(rating) => this.setState({rating})}
                                rate={0}
                                size={40}
                            />
                            <Text style={styles.ratingText}>{this.state.rating} / 5</Text>
                        </View>

                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}