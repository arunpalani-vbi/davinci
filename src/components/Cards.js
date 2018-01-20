import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

const ProgressBar = require("./ProgressBar");
const styles = require('../styles/Style');
export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const percentage = (this.props.employeeData.questionsCount.completed / this.props.employeeData.questionsCount.total) * 100;
        return (
            <View style={styles.container}>
                <View style={styles.cardHeader}>
                    <Image style={styles.cardHeaderImage} source={{
                        uri: 'https://www.communitylandtrust.ca/wp-content/uploads/2015/10/placeholder.png'
                    }}/>
                    <Text style={styles.cardHeaderFont}>{this.props.employeeData.name}</Text>
                </View>
                <View style={styles.cardInfo}>
                    <View>
                        <ProgressBar
                            progress={percentage}
                            progressStyle={{backgroundColor: "rgb(57,88,150)"}}
                            incompleteStyle={{backgroundColor: "rgb(243,243,243)"}}
                        />
                        <Text style={styles.progressText}>
                            {this.props.employeeData.questionsCount.completed + '/' + this.props.employeeData.questionsCount.total + ' (' + percentage + '%)'}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

