import React, { Component } from "react";
import { Text, View, TouchableOpacity,BackHandler, ImageBackground, Image, SafeAreaView, TextInput, FlatList } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'

import styles from './Styles/CinemasStyle'

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13]; 
class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
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

  goback = () => {
    this.props.dispatch(NavigationActions.back());
  };


  mybooking = () => {
    const mybooking = NavigationActions.navigate({
      routeName: "MyBooking",
      params: { name: "MyBooking" }
    });
    this.props.navigation.dispatch(mybooking);
  };

  _renderItem({item}){
      return(
        <TouchableOpacity onPress={this.mybooking.bind(this)} style={styles.renderView}> 
          <View style={styles.rowRow}>
            <Text style={styles.text1}>DOWNTOWN INDEPENDENT</Text>
            <Text style={styles.text2}>0.2ml</Text>
          </View>
          <View style={styles.street}>
            <Text style={styles.text2}>251 South Main Street</Text>
            <Text style={styles.text2}>Los Angeles, CA90012</Text>
          </View>
        </TouchableOpacity>
      );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View  style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              <Image source={Images.mark} style={styles.mark}/>
            </View>
            <Text style={styles.title}>CINEMAS</Text>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source = {Images.search} style={styles.search}/>
              </TouchableOpacity>
            </View>
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
