import React, { Component } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image, ScrollView, SafeAreaView, TextInput, FlatList } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'

import styles from './Styles/MyBookingStyle'
const data = [{scene:Images.backdance, date:'Thu, 07 Mar 2018'},
              {scene:Images.blackpanther, date:'Fri, 15 Sep 2017'},
              {scene:Images.kingsman, date:'Mon, 26 Mar 2017'},
              {scene:Images.movie1, date:'Sun, 12 Mar 2016'},
              {scene:Images.movie2, date:'Thu, 30 Mar 2017'},
              {scene:Images.summary, date:'Thu, 10 Mar 2017'}];   

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
  }

  summary(item){
    const summary = NavigationActions.navigate({
      routeName: "Summary",
      params: { item: item }
    });
    this.props.navigation.dispatch(summary);
  }

  goback(){
    this.props.navigation.goBack()
  }

  _renderItem({item}){
      return(
        <TouchableOpacity onPress={this.summary.bind(this,item)} style={styles.renderView}> 
          <Text style={styles.blueText}>{item.date}</Text>
          <View style={styles.commonRowView}>
            <Image source={item.scene} style={styles.summary}/>
            <View style={styles.summaryView}>
              <Text style={styles.text1}>BEAUTY AND THE BEAST</Text>
              <Text style={styles.text2}>Thu, 07 Nar 8:00AM</Text>
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
        </TouchableOpacity>
      );
  }

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
            <Text style={styles.title}>My Bookings</Text>
            <View style={styles.headerRightView}/>
          </View>

          <View style={styles.mainView}>
            <FlatList
              data={data}
              keyExtractor={(item, index) => index}
              renderItem={this._renderItem.bind(this)}
            />
          </View>

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
