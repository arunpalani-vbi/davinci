import React from 'react'
import _ from 'lodash'
import {ScrollView, Text, View} from 'react-native'
import {LinearGradient} from 'expo';
import styles from '../styles/SliderEntry.style'
import firebaseDb from '../services/firebase'
import QuestionCards from '../components/QuestionCards';

const stylesheet = require('../styles/Style');

const TimePeriod = 'JAN2018';
const BehaviourImpact = 'Deliverables';
export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            questionsSample: [{
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
                }]
        }
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

