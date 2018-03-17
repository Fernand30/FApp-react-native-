import React, { Component } from "react";
import { Text, View, TouchableOpacity, BackHandler, ImageBackground, Image, SafeAreaView, TextInput} from "react-native";
import { NavigationActions } from "react-navigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'

import styles from './Styles/SignUpStyle'

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    this.state=({
      Username: 'Username',
      Email: 'Email',
      Phone: 'Phone Number',
      Password: 'Passwordmail',
      Confirm: 'Confirm EPasswordmail',
      check: false
    })
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
    this.props.navigation.goBack() //dispatch(NavigationActions.back());
  };

  login(){
    const login = NavigationActions.navigate({
      routeName: "Login",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(login);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={Images.background} style={styles.contentStyle}>
          <TouchableOpacity onPress={this.goback}>
            <Image source={Images.back} style={styles.back}/>
          </TouchableOpacity>  
          <KeyboardAwareScrollView>
          
          <Text style={styles.bigText}>CREATE YOUR ACCOUNT</Text>
          
          <TextInput 
                  onChangeText={(text) => this.setState({Username: text})} 
                  underlineColorAndroid='transparent'
                  style={styles.inputText}
                  value={this.state.Username}/>
          <TextInput 
                  onChangeText={(text) => this.setState({Username: text})} 
                  underlineColorAndroid='transparent'
                  style={styles.inputText}
                  value={this.state.Email}/>
          <TextInput 
                  onChangeText={(text) => this.setState({Username: text})} 
                  underlineColorAndroid='transparent'
                  style={styles.inputText}
                  value={this.state.Phone}/>
          <TextInput 
                  onChangeText={(text) => this.setState({Username: text})} 
                  underlineColorAndroid='transparent'
                  style={styles.inputText}
                  value={this.state.Password}/>
          <TextInput 
                  onChangeText={(text) => this.setState({Username: text})} 
                  underlineColorAndroid='transparent'
                  style={styles.inputText}
                  value={this.state.Confirm}/>

          <TouchableOpacity onPress={()=>this.setState({check:!this.state.check})} style={styles.commonRowView}>
            <View style={styles.checkView}>
              {(this.state.check)?<Image source={Images.check} style={styles.check}/>:null}
            </View>
            <Text style={styles.text}>By clicking this box, I have read the{'\n'}Terms & Conditions for this app</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginButton} >
            <Text style={styles.loginText}>Sign UP</Text>
          </TouchableOpacity>
          <Text style={styles.signup} onPress={()=>{this.goback()}}>Already have an account? LOG IN</Text>
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
