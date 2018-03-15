import React, { Component } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image, SafeAreaView, TextInput } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'


import styles from './Styles/LoginOtherStyle'

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    this.state=({
      email: 'Email',
      password: '0123456789',
      check: true
    })
  }

  forgotpassword = () => {
    const forgotpassword = NavigationActions.navigate({
      routeName: "ForgotPassword",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(forgotpassword);
  };

  login = () => {
    const login = NavigationActions.navigate({
      routeName: "TabNavigatorStack",
      params: { name: "login" }
    });
    this.props.navigation.dispatch(login);
  };

  signup(){
    const signup = NavigationActions.navigate({
      routeName: "SignUp",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(signup);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={Images.background} style={styles.contentStyle}>
          <Image source={Images.mark} style={styles.mark}/>
          <TextInput 
                  onChangeText={(text) => this.setState({email: text})} 
                  underlineColorAndroid='transparent'
                  style={styles.inputText}
                  value={this.state.email}/>
          <TextInput 
                  onChangeText={(text) => this.setState({password: text})} 
                  underlineColorAndroid='transparent'
                  style={styles.inputText}
                  placeholder='Password'
                  secureTextEntry={true}
                  value={this.state.password}/>
          <TouchableOpacity onPress={()=>this.setState({check:!this.state.check})} style={styles.commonRowView}>
            <View style={styles.checkView}>
              {(this.state.check)?<Image source={Images.check} style={styles.check}/>:null}
            </View>
            <Text style={styles.text}>Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.login} style={styles.loginButton} >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgot} onPress={this.forgotpassword}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
          <Text style={styles.signup} onPress={()=>{this.signup()}}>Don't have an account? SIGN UP</Text>
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
