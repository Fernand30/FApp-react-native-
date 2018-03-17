import React, { Component } from "react";
import { Text, View, TouchableOpacity, ImageBackground, BackHandler, Image, ScrollView, SafeAreaView, TextInput, FlatList } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'

import styles from './Styles/ChooseSeatStyle'
seat = [
 ['GOLD-RS.150'],
 [{state:0, number:0},{state:1,number:1},{state: 1, number: 2},{state: 2,number:3},{state:2, number: 4},{state:2, number:5},{state:2, number: 6},{state:2, number:7},{state:2, number:8},{state:2, number: 9},{state:2, number: 10},{state:2, number: 11},{state:2, number:12},{state:2, number: 13},{state:2, number: 14},{state:2, number:15},{state:2, number: 16}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 0,number:3},{state:0, number: 4},{state:0, number:5},{state:2, number: 4},{state:2, number:5},{state:2, number:6},{state:2, number: 7},{state:2, number: 8},{state:2, number: 9},{state:2, number:10},{state:2, number: 11},{state:2, number: 12}],
 [{state:1, number:1},{state:1,number:2},{state: 1, number: 3},{state: 0,number:3},{state:0, number: 4},{state:0, number:4},{state:1, number: 4},{state:1, number:5},{state:1, number:6},{state:1, number: 7},{state:1, number: 8},{state:1, number: 9},{state:1, number:10},{state:1, number: 11},{state:1, number: 12}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10},{state:2, number:11},{state:2, number: 12},{state:2, number: 13},{state:2, number: 14}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:0, number: 8},{state:0, number: 9},{state:0, number: 10},{state:0, number:8},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:0, number: 8},{state:0, number: 9},{state:0, number: 10},{state:0, number:8},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:0, number: 8},{state:0, number: 9},{state:0, number: 10},{state:0, number:8},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:0, number: 8},{state:0, number: 9},{state:0, number: 10},{state:0, number:8},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10}],
 ['MVC-RS.115'],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:0, number: 8},{state:0, number: 9},{state:0, number: 10},{state:0, number:8},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:0, number: 8},{state:0, number: 9},{state:0, number: 10},{state:0, number:8},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10}],
 ['SILVER-RS.115'],
 [{state:1, number:1},{state:1,number:2},{state: 1, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10},{state:2, number:11},{state:2, number: 12},{state:2, number: 13},{state:2, number: 14}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10},{state:2, number:11},{state:2, number: 12},{state:2, number: 13},{state:2, number: 14}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10},{state:2, number:11},{state:2, number: 12},{state:2, number: 13},{state:2, number: 14}],
 [{state:2, number:1},{state:2,number:2},{state: 2, number: 3},{state: 2,number:4},{state:0, number: 4},{state:0, number:4},{state:2, number: 5},{state:2, number:6},{state:2, number:7},{state:2, number: 8},{state:2, number: 9},{state:2, number: 10},{state:2, number:11},{state:2, number: 12},{state:2, number: 13},{state:2, number: 14}]
 ]
class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    i = 0
  }

  componentDidMount() {
    that  = this
    BackHandler.addEventListener('hardwareBackPress', function() {
        that.goback();
        return true;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  goback(){
    //this.props.navigation.goBack()
    this.props.dispatch(NavigationActions.back());
  }

  _renderItem({item}){
      if(item.length==1){
        return (<Text style={styles.seatlevel}>{item}</Text>)
      }
      seatposition =  item.map(function(item) {
        i++;
        if(item.state==0){
          return(
              <View key={i} style={styles.emptyView}/>
          ) 
        }else if(item.state==1){
          return(
            <TouchableOpacity key={i} style={styles.disableseatView}>
              <Text style={styles.disableseat}>{item.number}</Text>
            </TouchableOpacity>
          )  
        }else{
          return(
            <TouchableOpacity key={i} style={styles.seatView}>
              <Text style={styles.seat}>{item.number}</Text>
            </TouchableOpacity>
          )
        }
      })
      return(
        <View style={styles.renderView}>
          {seatposition}
        </View>
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
            <Text style={styles.title}>Choose Seats</Text>
            <View style={styles.headerRightView}/>
          </View>
          <View style={styles.beautyView}>
            <Text style={styles.beauty}>BEAUTY AND THE BEAUTY</Text>
            <Text style={styles.text1}>Carnival: ABC Mail</Text>
            <View style={styles.rowView}>
              <View style={styles.eachView}>
                <Text style={styles.text2}>No. of Tickets</Text>
                <Text style={styles.text3}>2</Text>
              </View>
              <View style={styles.bar}/>
              <View style={styles.eachView}>
                <Text style={styles.text2}>Showtime</Text>
                <Text style={styles.text3}>8:00PM</Text>
              </View>
            </View>
          </View>
          <ScrollView directionalLockEnabled={false}
            horizontal={true} style={styles.mainView}>
            <FlatList
              data={seat}
              keyExtractor={(item, index) => index}
              renderItem={this._renderItem}
            />
          </ScrollView>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text3}>PROCEED</Text>
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
