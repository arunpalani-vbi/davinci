import React from 'react'
import _ from 'lodash'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles, { sliderWidth, itemWidth } from '../styles/SliderEntry.style'
import firebaseDb from '../services/firebase'
import { Rating } from 'react-native-ratings'

const TimePeriod = 'JAN2018';
const BehaviourImpact = 'Deliverables';
export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentWillMount() {

        this.questionsRef = firebaseDb.ref("questions");
        this.ratingRef = firebaseDb.ref("rating");
        this.employeeId = this.props.navigation.state.params.user.EmployeeID;

        let filteredQuestionPath = this.questionsRef
            .orderByChild("behaviourImpact")
            .equalTo(BehaviourImpact)
            .limitToFirst(5)
        let filteredRatingPath = this.ratingRef
            .orderByChild("searchKey")
            .equalTo(this.employeeId+BehaviourImpact+TimePeriod)
        let processQuestionSnapshot = (questionSnapshot) => {
            filteredRatingPath.on("value",(ratingSnapshot)=>{
                let ratings=ratingSnapshot.val()?ratingSnapshot.val():{};
                let questions = [];
                let pushToQuestions =(question, questionKey)=> {
                    let ratingKey=this.employeeId+"_"+TimePeriod+"_"+questionKey;
                    if(ratingKey && ratingKey in ratings){
                        question.rating=ratings[ratingKey].value;
                    }
                    else{
                        question.rating=0;
                    }
                    question.key = questionKey;
                    questions.push(question);
                }
                _.each(questionSnapshot.val(), pushToQuestions)
                this.setState({ questions })
            });
        }
        filteredQuestionPath.on("value", processQuestionSnapshot);
    }
    componentWillUnmount() {
        this.questionsRef.off();
        this.ratingRef.off();
    }

    _ratingCompleted(behaviourImpact, questionKey, rating) {
        let ratingKey = this.employeeId + "_"+TimePeriod+ "_" + questionKey;
        this.ratingRef.child(ratingKey).set({
            'employeeId': this.employeeId,
            'question': questionKey,
            'behaviourImpact': behaviourImpact,
            'value': rating,
            'timePeriod': TimePeriod,
            'searchKey':this.employeeId+behaviourImpact+TimePeriod
        });
    }

    _renderItem = ({ item, index }) => {

        return (
            <View
                style={styles.slideInnerContainer}
            >

                <View style={styles.textContainer}>

                    <Text
                        style={styles.title}
                        numberOfLines={2}
                    >
                        {item.behaviouralTrait.toUpperCase()}
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
                    <Rating
                        showRating
                        onFinishRating={this._ratingCompleted.bind(this, item.behaviourImpact, item.key)}
                        imageSize={20}
                        startingValue={item.rating}
                        style={{ paddingVertical: 50 }}
                    />
                </View>
            </View>
        );
    }
    render() {
        if (this.state.questions)
            return (<View>
                <View style={{ height: 100 }} />
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

