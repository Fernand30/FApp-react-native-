import React, { Component } from "react";
import { Text, View, TouchableOpacity, BackHandler, ImageBackground, Image, SafeAreaView, TextInput, FlatList } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'

import styles from './Styles/MoviesStyle'

const data = [1,2,3,4,5,6,7,8]; 
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
    this.props.navigation.dispatch(login); //dispatch(NavigationActions.back());
  };


  chooseseat = () => {
    const chooseseat = NavigationActions.navigate({
      routeName: "ChooseSeat",
      params: { name: "ChooseSeat" }
    });
    this.props.navigation.dispatch(chooseseat);
  };

  _renderItem({item}){
      return(
        <View style={styles.renderView}>
          <Image source={Images.blackpanther} style={styles.blackpanther}/>
          <View style={styles.explainView}>
            <View style={styles.rowRow}>
              <Text style={styles.text1}>BLACK PANTHER</Text>
              <TouchableOpacity onPress={()=>this.chooseseat()} style={styles.bookView}>
                <Text style={styles.book}>Book</Text>
              </TouchableOpacity>
            </View>
            <Image source={Images.fourstars} style={styles.fourstars}/>
            <Text style={styles.text2}>R, 1hr 22 mins{'\n'}David Oyelowo, Charlize Theron{'\n'}Open Friday</Text>
          </View>
        </View>
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
            <Text style={styles.title}>MOVIES</Text>
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
