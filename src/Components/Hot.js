import React, { Component } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image, SafeAreaView, TextInput, ScrollView } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'
import ImageSlider from 'react-native-image-slider';
import Modal from "react-native-modal";

import styles from './Styles/HotStyle'

const images = [
      Images.evil,
      Images.deadwish,
      Images.evil,
      Images.deadwish,
      Images.evil,
      Images.deadwish
    ]; 
class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    this.state=({
      email: 'lauran.wilson@gamil.com',
      password: '0123456789',
      check: true,
      visible: false,
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

  booking(){
    this.setState({visible: false})
    const booking = NavigationActions.navigate({
      routeName: "Booking",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(booking);
  }

  setting(){
    this.setState({visible: false})
    const setting = NavigationActions.navigate({
      routeName: "Setting",
      params: { name: "Setting" }
    });
    this.props.navigation.dispatch(setting);
  }

  details(){
    const details = NavigationActions.navigate({
      routeName: "Details",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(details);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View  style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              <Image source={Images.mark} style={styles.mark}/>
            </View>
            <Text style={styles.title}>WHAT'S HOT</Text>
            <View style={styles.headerRightView}>
              <TouchableOpacity onPress={()=>this.details()}>
                <Image source = {Images.search} style={styles.search}/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress = {()=>this.setState({ visible: true})}>
                <Image source = {Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
        <ScrollView>

          <Image source={Images.dance} style={styles.dance}/>
          <View style={styles.sliderView}>
            
            <View style={styles.rowView}>
              <Text style={styles.text1}>Just Released</Text>
              <Text style={styles.redtext}>See All</Text>
            </View> 
            <ImageSlider
              images={images}
              position={false}
              customSlide={({ index, item, style, width }) => (
                // It's important to put style here because it's got offset inside
                <View key={index} style={styles.customSlide}>
                  <Image source={item } style={styles.renderImage} />
                  <View style={styles.explainView}>
                    <Text style={styles.text2}>Black Panther</Text>
                    <View style={styles.bookView}>
                      <Text style={styles.book}>Book</Text>
                    </View>
                  </View>
                </View>
              )}
              customButtons={(position, move) => (
                <View style={{flex:0}}/>
              )}
            />
            <View style={styles.rowView}>
              <Text style={styles.text1}>Highest Rating</Text>
              <Text style={styles.redtext}>See All</Text>
            </View>  
            <ImageSlider
              images={images}
              position={false}
              customSlide={({ index, item, style, width }) => (
                // It's important to put style here because it's got offset inside
                <View key={index} style={styles.customSlide}>
                  <Image source={item } style={styles.renderImage} />
                  <View style={styles.explainView}>
                    <View>
                      <Text style={styles.text2}>Black Panther</Text>
                      <Image source={Images.fourstars} style={styles.fourstars}/>
                    </View>
                    <View style={styles.bookView}>
                      <Text style={styles.book}>Book</Text>
                    </View>
                  </View>
                </View>
              )}
              customButtons={(position, move) => (
                <View style={{flex:0}}/>
              )}
            />
          </View>
          <View style={styles.newsView}>
            <Text style={styles.text1}>News</Text>
            <View style={styles.newsRowView}>
              <Image source={Images.movie1} style={styles.movie}/>
              <View style={{flex:1}}>
                <Text style={styles.text2}>9 Diverse Marvel Heroes We Want To See{'\n'}On The Big Screen</Text>
                <Text style={styles.text3}>There havve been multiple studies showing that diversity{'\n'}helps box office performance</Text>
                <Text style={styles.text4}>2 Mar 2018</Text>
              </View>
            </View>
            <View style={styles.newsRowView}>
              <Image source={Images.movie1} style={styles.movie}/>
              <View style={{flex:1}}>
                <Text style={styles.text2}>9 Diverse Marvel Heroes We Want To See{'\n'}On The Big Screen</Text>
                <Text style={styles.text3}>There havve been multiple studies showing that diversity{'\n'}helps box office performance</Text>
                <Text style={styles.text4}>2 Mar 2018</Text>
              </View>
            </View>
          </View>
        </ScrollView> 
        <Modal 
            backdropOpacity={0.5} 
            animationIn='slideInDown' 
            isVisible={this.state.visible} 
            animationOut = 'slideOutUp' 
            style={{flex: 1, alignItems:'flex-start',justifyContent:'flex-start'}}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={()=>this.booking()} style={styles.eachView}>
              <Image source={Images.tickets} style={styles.tickets}/>
              <Text style={styles.booking}>My Booking</Text>
            </TouchableOpacity>
            <View style={styles.barView}/>
            <TouchableOpacity onPress={()=>this.setting()} style={styles.eachView}>
              <Image source={Images.settings} style={styles.settings}/>
              <Text style={styles.booking}>Settings</Text>
            </TouchableOpacity>
          </View>
        </Modal> 
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
