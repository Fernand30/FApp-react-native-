import React, { Component } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image, Switch, SafeAreaView, TextInput, FlatList } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'

import styles from './Styles/SettingStyle'

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    this.state=({
      val: false
    })
  }

  goback(){
    this.props.navigation.goBack()
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
            <Text style={styles.title}>Setting</Text>
            <View style={styles.headerRightView}/>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.text}>Notification</Text>
            <Switch onValueChange={()=>this.setState({val: !this.state.val})} value={this.state.val}/>
          </View>
          <View style={styles.bar}/>
          <TouchableOpacity style={styles.rowView}>
            <Text style={styles.text}>Privacy Policies</Text>
            <Image source={Images.play} style={styles.play}/>
          </TouchableOpacity>
          <View style={styles.bar}/>
          <TouchableOpacity style={styles.rowView}>
            <Text style={styles.text}>About Us</Text>
            <Image source={Images.play} style={styles.play}/>
          </TouchableOpacity>
          <View style={styles.bar}/>
          <TouchableOpacity style={styles.rowView}>
            <Text style={styles.text}>Contact Us</Text>
            <Image source={Images.play} style={styles.play}/>
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
