import React, {Component} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Stars from 'react-native-stars-rating';
import {TextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = require('../styles/Style');
export default class QuestionCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            showRating: true,
            showReview: false
        };
        this._swapVisibility.bind(this);
    }

    _swapVisibility() {
        this.setState({showRating: !this.state.showRating, showReview: this.state.showReview})
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
                            <TouchableHighlight style={styles.ratingTextMenu} onPress={this._swapVisibility}><Icon
                                name="menu" size={30} color="#074b84"/></TouchableHighlight>
                        </View>
                        <View>
                            {this.state.showRating &&
                            <View>
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
                            </View>}
                            {this.state.showReview &&
                            <View>
                                <TextField
                                    label=''
                                    value={''}
                                    multiline={true}
                                    characterRestriction={300}
                                    onChangeText={(phone) => (console.log(phone))}
                                />
                                <View style={styles.btncontainer}>
                                    <View style={styles.btnbutton}><Text style={styles.btncontent}>Submit</Text></View>
                                    <View style={styles.btnbutton}><Text style={styles.btncontent}>Close</Text></View>
                                </View>
                            </View>}
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}