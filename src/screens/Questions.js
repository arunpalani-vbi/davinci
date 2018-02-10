import React from 'react'
import _ from 'lodash'
import {ScrollView, Text, TouchableHighlight, View} from 'react-native'
import {LinearGradient} from 'expo';
import styles from '../styles/SliderEntry.style'
import firebaseDb from '../services/firebase'
import QuestionCards from '../components/QuestionCards';

const stylesheet = require('../styles/Style');

const TimePeriod = 'JAN2018';
const BehaviourImpact = 'Deliverables';

class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('tab');
        return <TouchableHighlight
            style={this.props.istabActive ? stylesheet.tabsTouchableContainer : stylesheet.tabsTouchableContainer}
            onPress={this.props._setActiveTab}
        >
            <Text style={stylesheet.tabContext}>{this.props.content}</Text>
        </TouchableHighlight>
    }
}

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            questionsSample: [
                {
                    id: 1,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 2,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 3,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 4,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 5,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 6,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 7,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 8,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 9,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 10,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 11,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 12,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 13,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                },
                {
                    id: 14,
                    ownerName: 'Harvey Spector',
                    question: 'Question Head',
                    desc: 'This is sample question content, Hi there how are you :->This is sample question content, Hi there how are you :->'
                }],
            tabs: [
                {
                    id: 'tab1',
                    name: 'Cat 1',
                    group: 'GP1'
                },
                {
                    id: 'tab2',
                    name: 'Cat 2',
                    group: 'GP2'
                },
                {
                    id: 'tab3',
                    name: 'Cat 3',
                    group: 'GP3'
                },
                {
                    id: 'tab4',
                    name: 'Cat 4',
                    group: 'GP4'
                },
                {
                    id: 'tab5',
                    name: 'Cat 5',
                    group: 'GP5'
                }
            ],
            activeTab: 'tab1'
        };
        this._tabSwitch = this._tabSwitch.bind(this);
    }

    componentWillUnmount() {
        this.questionsRef.off();
        this.ratingRef.off();
    }

    _ratingCompleted(behaviourImpact, questionKey, rating) {
        let ratingKey = this.employeeId + "_" + TimePeriod + "_" + questionKey;
        this.ratingRef.child(ratingKey).set({
            'employeeId': this.employeeId,
            'question': questionKey,
            'behaviourImpact': behaviourImpact,
            'value': rating,
            'timePeriod': TimePeriod,
            'searchKey': this.employeeId + behaviourImpact + TimePeriod
        });
    }

    componentWillMount() {

        this.questionsRef = firebaseDb.ref("questions");
        this.ratingRef = firebaseDb.ref("rating");
        this.employeeId = this.props.navigation.state.params.user.EmployeeID;

        let filteredQuestionRef = this.questionsRef
            .orderByChild("behaviourImpact")
            .equalTo(BehaviourImpact)
            .limitToFirst(5);
        let filteredRatingRef = this.ratingRef
            .orderByChild("searchKey")
            .equalTo(this.employeeId + BehaviourImpact + TimePeriod);
        let processQuestionSnapshot = (questionSnapshot) => {
            filteredRatingRef.on("value", (ratingSnapshot) => {
                let ratings = ratingSnapshot.val() ? ratingSnapshot.val() : {};
                let questions = [];
                let pushToQuestions = (question, questionKey) => {
                    let ratingKey = this.employeeId + "_" + TimePeriod + "_" + questionKey;
                    if (ratingKey && ratingKey in ratings) {
                        question.rating = ratings[ratingKey].value;
                    }
                    else {
                        question.rating = 0;
                    }
                    question.key = questionKey;
                    questions.push(question);
                };
                _.each(questionSnapshot.val(), pushToQuestions);
                this.setState({questions})
            });
        };
        filteredQuestionRef.on("value", processQuestionSnapshot);
    }

    _tabSwitch() {

    }

    _istabActive(id) {
        return this.state.activeTab === id;
    }

    _setActiveTab(id) {
        console.log(id);
        this.setState({activeTab: id})
    }
    render() {
        if (this.state.questions) {
            const userName = 'Arunkumar Palaniappan';
            const fullName = userName.split(' ');
            let userInitials = '';
            if (fullName.length > 1) {
                userInitials = fullName[0][0].toUpperCase() + fullName[1][0].toUpperCase();
            } else {
                userInitials = fullName[0][0].toUpperCase();
            }
            const employeeCards = this.state.questionsSample.map(employee => (
                <QuestionCards employeeData={employee} key={employee.id}/>
            ));
            const tabsMenu = this.state.tabs.map(tab => (
                <Tab key={tab.id}
                     style={stylesheet.tabsTouchableContainer}
                     istabActive={this._istabActive(tab.id)}
                     _setActiveTab={this._setActiveTab.bind(tab.id)}
                     content={tab.id}>
                </Tab>
            ));
            return (<View>

                <View style={stylesheet.questionsHeader}>
                    <LinearGradient
                        style={stylesheet.cardHeader}
                        colors={['#548ee8', '#133bd0']}>
                        <View style={stylesheet.cardHeaderImage}>
                            <Text style={stylesheet.imageContainer}>
                                {userInitials}
                            </Text>
                        </View>
                        <Text style={stylesheet.cardHeaderFont}>{fullName}</Text>
                    </LinearGradient>
                </View>
                <ScrollView>
                    <ScrollView style={{flex: 1, flexDirection: 'row'}} directionalLockEnabled={false}
                                horizontal={true}>
                        {tabsMenu}
                    </ScrollView>
                    <View style={styles.questionsMainContainer}>
                        {employeeCards}
                    </View>

                </ScrollView>
            </View>);
        }
        else
            return (null)
    }
}

