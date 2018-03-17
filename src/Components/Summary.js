import React, { Component } from "react";
import { Text, View, TouchableOpacity,BackHandler, ImageBackground, Image, ScrollView, SafeAreaView, TextInput, FlatList } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'

import styles from './Styles/SummaryStyle'

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    item = this.props.navigation.state.params.item
  }

  signup(){
    const signup = NavigationActions.navigate({
      routeName: "SignUp",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(signup);
  }

  componentDidMount() {
    that  = this
    BackHandler.addEventListener('hardwareBackPress', function() {
        that.goback();
        return true;
    });
  }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }

  handleBackButton() {
    return true;
  }

  goback = () => {
    this.props.dispatch(NavigationActions.back());
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View  style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerRightView}>
              <TouchableOpacity onPress={()=>this.goback()}>
                <Image source={Images.back} style={styles.back}/>
              </TouchableOpacity> 
            </View> 
            <Text style={styles.title}>Summary</Text>
            <View style={styles.headerRightView}/>
          </View>
          <View style={styles.commonRowView}>
            <Image source={item.scene} style={styles.summary}/>
            <View style={styles.summaryView}>
              <Text style={styles.text1}>BEAUTY AND THE BEAST</Text>
              <Text style={styles.text2}>{item.date}</Text>
              <Text style={styles.text2}>Carnival: ABC Mail</Text>
              <View style={styles.goldView}>
                <View style={styles.ticketView}>
                  <Text style={styles.text}>2</Text>
                  <Text style={styles.tickets}>Tickets</Text>
                </View>
                <View style={styles.bar}/>
                <Text style={styles.gold}>Gold - F9,F10</Text>
              </View>
            </View>
          </View>

          <View style={styles.columnView}>
            <View style={styles.rowView}>
              <Text style={styles.text2}>Subtotal</Text>
              <Text style={styles.text2}>$100</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.text2}>Tax</Text>
              <Text style={styles.text2}>$5</Text>
            </View> 
            <View style={styles.underline}/> 
            <View style={styles.rowView}>
              <Text style={styles.text2}>Total</Text>
              <Text style={styles.text2}>$105</Text>
            </View>  
          </View>
          <Text style={styles.payment}>Payment Method</Text>
          <View style={styles.visaView}>
            <View>
              <Text style={styles.text1}>Lauran Wilson</Text>
              <Text style={styles.text1}>****1640</Text>
            </View>
            <Image source={Images.visa} style={styles.visa}/>
          </View>
          <Text style={styles.enter}>Enter CVV</Text>
          <TouchableOpacity onPress={this.login} style={styles.loginButton} >
            <Text style={styles.loginText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>  
    );
  }
}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const LoginScreen = connect(mapStateToProps)(Login);

export default LoginScreen;
