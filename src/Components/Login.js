import React, { Component } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image, SafeAreaView, TextInput } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'


import styles from './Styles/LoginStyle'

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    this.state=({
      email: 'lauran.wilson@gamil.com',
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

  loginother = () => {
    const loginother = NavigationActions.navigate({
      routeName: "LoginOther",
      params: { name: "LoginOther" }
    });
    this.props.navigation.dispatch(loginother);
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
      
        <ImageBackground source={Images.background} style={styles.contentStyle}>
          <Image source={Images.mark} style={styles.mark}/>
          <View style={styles.rowView}>
            <Image source={Images.mail} style={styles.mail}/>
            <View style={styles.inputView}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput 
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({email: text})} 
                  style={styles.textinput} 
                  value={this.state.email}/>
            </View>
          </View>
          <View style={styles.rowView1}>
            <Image source={Images.key} style={styles.key}/>
            <View style={styles.inputView}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput 
                    onChangeText={(text) => this.setState({password: text})}
                    underlineColorAndroid='transparent' 
                    style={styles.textinput} 
                    value={this.state.password}
                    secureTextEntry={true}
                    />
            </View>
          </View>
          <View style={styles.rememberView}>
            <TouchableOpacity onPress={()=>this.setState({check:!this.state.check})} style={styles.commonRowView}>
              <View style={styles.checkView}>
                {(this.state.check)?<Image source={Images.check} style={styles.check}/>:null}
              </View>
              <Text style={styles.text}>Remember Me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgot} onPress={this.forgotpassword}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={this.login} style={styles.loginButton} >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.loginother()}} style={styles.skipButton}>
            <Text style={styles.skipText}>SKIP</Text>
          </TouchableOpacity>
          <Text style={styles.signup} onPress={()=>{this.signup()}}>Don't have an account? SIGN UP</Text>
        </ImageBackground>
   
    );
  }
}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const LoginScreen = connect(mapStateToProps)(Login);

export default LoginScreen;
