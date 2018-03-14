import React, { Component } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image, SafeAreaView, TextInput } from "react-native";
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
          <View style={styles.rowView}>
            <Image source={Images.mail} style={styles.mail}/>
            <View style={styles.inputView}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput 
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
          <TouchableOpacity style={styles.loginButton} >
            <Text style={styles.loginText}>Log In</Text>
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
