import React, { Component } from "react";
import { Text, View, TouchableOpacity, BackHandler, ImageBackground, Image, SafeAreaView, TextInput, FlatList } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'

import styles from './Styles/ProfileStyle'

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
  }

  // componentDidMount() {
  //   that  = this
  //   BackHandler.addEventListener('hardwareBackPress', function() {
  //       that.goback();
  //       return true;
  //   });
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }

  // handleBackButton() {
  //   return true;
  // }

  goback = () => {
    const login = NavigationActions.navigate({
      routeName: "Login",
      params: { name: "login" }
    });
    this.props.navigation.dispatch(login);
  };


  chooseseat = () => {
    const chooseseat = NavigationActions.navigate({
      routeName: "ChooseSeat",
      params: { name: "ChooseSeat" }
    });
    this.props.navigation.dispatch(chooseseat);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.profile} style={styles.contentStyle}>
        <View style={styles.headerView}>
          <View style={styles.headerLeftView}>
            <Image source={Images.mark} style={styles.mark}/>
          </View>
          <Text style={styles.title}>PROFILE</Text>
          <View style={styles.headerRightView}>
            <TouchableOpacity>
              <Image source = {Images.edit} style={styles.search}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:1}}>
          <View style={styles.mainView}>
            <View style={styles.applyView}>
              <Text style={styles.text1}>Name</Text>
              <Text style={styles.text2}>Lauran Wilson</Text>
            </View>
            <View style={styles.applyView}>
              <Text style={styles.text1}>Mobile Number</Text>
              <Text style={styles.text2}>+962 111 234 68</Text>
            </View>
            <View style={styles.applyView}>
              <Text style={styles.text1}>Email</Text>
              <Text style={styles.text2}>laurn.wilson@gmail.com</Text>
            </View>
            <TouchableOpacity style={styles.changeView}>
              <Text style={styles.text2}>CHANGE PASSWORD</Text>
              <Image source={Images.play} style={styles.play}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.goback.bind(this)} style={styles.loginButton} >
              <Text style={styles.loginText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.absoluteView}>
            <Image source={Images.woman2} style={styles.woman}/>
          </View>
        </View>  
        </ImageBackground>
      </SafeAreaView>  
    );
  }
}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const LoginScreen = connect(mapStateToProps)(Login);

export default LoginScreen;
