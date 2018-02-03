import React, {Component} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {LinearGradient} from 'expo';

const ProgressBar = require("./ProgressBar");
const styles = require('../styles/Style');
export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    _onCardClick=()=>{
        this.props.navigateToQuestion(this.props.employeeData);
    };

    render() {
        const percentage = (40 / 100) * 100;
        return (
            <TouchableHighlight onPress={this._onCardClick}>
            <View style={styles.container} >

                <View>
                    <LinearGradient
                        style={styles.cardHeader}
                        colors={['#548ee8', '#133bd0']}>
                        <Image style={styles.cardHeaderImage} source={{
                            uri: 'https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png'
                        }}/>
                        <Text style={styles.cardHeaderFont}>{this.props.employeeData.ownerName}</Text>
                    </LinearGradient>
                </View>
                <View style={styles.cardInfo}>
                    <View>
                        <ProgressBar
                            progress={percentage}
                            progressStyle={{backgroundColor: "rgb(57,88,150)"}}
                            incompleteStyle={{backgroundColor: "rgb(243,243,243)"}}
                        />
                        <Text style={styles.progressText}>
                            {40 + '/' + 100 + ' (' + percentage + '%)'}
                        </Text>
                    </View>
                </View>
                
            </View>
            </TouchableHighlight>
        );
    }
}

