import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import Cards from '../components/Cards';
import * as EmployeeService from '../services/employee';
import * as Session from '../services/session';
export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: null,
      token: null,
    };
  }
  setEmployeeData(token){
    EmployeeService.getEmployeeList(token).then((employeeData)=>{
      if(employeeData.errorMessage){
        return;
      }
      this.setState({ employeeData });
    });
  }
  componentWillMount() {
    if (!this.state.token) {
      Session.getToken().then((token)=>{
        this.setState({ token });
        this.setEmployeeData(token)
      });
    }
    else{
      this.setEmployeeData(this.state.token);
    }
    
  }
  static navigationOptions = {
    drawerLabel: 'Review Employees',
    drawerIcon: ({ tintColor }) => (
      <Image source={require('../images/ic_rate_review.png')} />
    ),
  };
  render() {
    if(!this.state.employeeData){
      return(null);
    }
    const employeeCards = this.state.employeeData.map(employee => (
      <Cards navigateToQuestion={this.props.screenProps.navigateToQuestion} employeeData={employee} key={employee.ownerName} />
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
