import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import Cards from '../components/Cards';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeData: [
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 1
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 2
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 3
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 4
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 5
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 6
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 7
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 8
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 9
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 10
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 11
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 12
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 13
                },
                {
                    "name": "Harmonic Convergence",
                    "progress": 63,
                    "recentReviewAvg": 4.85,
                    "endDate": "01/31/2018",
                    "startDate": "02/01/2018",
                    "questionsCount": {
                        "total": 50,
                        "completed": 15
                    },
                    "id": 14
                }
            ]
        }
    }
    static navigationOptions = {
        drawerLabel: 'Review Employees',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/ic_rate_review.png')}
          />
        ),
      };
    render() {
        const employeeCards = this.state.employeeData.map(employee => <Cards employeeData={employee}
                                                                             key={employee.id}/>);
        return (
            <ScrollView style={styles.container}>
                {employeeCards}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    cards: {
        width: '100%'
    }
});
