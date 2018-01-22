import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import Cards from '../components/Cards';
import * as EmployeeService from '../services/employee';
import * as Session from '../services/session';
export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: [],
      token: null,
    };
  }
  async componentWillMount() {
    if (!this.state.token) {
      let token = Session.getToken();
      this.setState({ token });
    }
    EmployeeService.getEmployeeList(this.state.token).then(employeeData => {
      this.setState({ employeeData });
    });
  }
  static navigationOptions = {
    drawerLabel: 'Review Employees',
    drawerIcon: ({ tintColor }) => (
      <Image source={require('../images/ic_rate_review.png')} />
    ),
  };
  render() {
    const employeeCards = this.state.employeeData.map(employee => (
      <Cards employeeData={employee} key={employee.ownerName} />
    ));
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
  }
});
