import React, { Component } from "react";
import { Text, View,BackHandler , TouchableOpacity, ImageBackground, Image, SafeAreaView, TextInput} from "react-native";
import { NavigationActions } from "react-navigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'

import styles from './Styles/ForgotPasswordStyle'

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    this.state=({
      email: 'Email',
    })
  }

  goback = () => {
    this.props.navigation.goBack() //dispatch(NavigationActions.back());
  };

  signup(){
    alert('Signup')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={Images.background} style={styles.contentStyle}>
          <TouchableOpacity onPress={this.goback}>
            <Image source={Images.back} style={styles.back}/>
          </TouchableOpacity>  
          <KeyboardAwareScrollView>
          <Image source={Images.password} style={styles.password}/>
          <Text style={styles.bigText}>Forgot Your Password?</Text>
          <Text style={styles.whiteText}>Enter your email & we'll sebd{'\n'}you password</Text>
          <TextInput 
                  onChangeText={(text) => this.setState({email: text})} 
                  underlineColorAndroid='transparent'
                  style={styles.inputText}
                  value={this.state.email}/>
          <TouchableOpacity style={styles.loginButton} >
            <Text style={styles.loginText}>Send</Text>
          </TouchableOpacity>
          </KeyboardAwareScrollView>
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
