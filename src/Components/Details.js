import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList, ImageBackground, Image, SafeAreaView, TextInput } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'
import Modal from "react-native-modal";


import styles from './Styles/DetailsStyle'

const data = ['1','2','3','4','5','6','7']

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    this.state=({
      visible: false
    })
    _keyExtractor = (item, index) => item.id;
  }

  back(){
    this.props.navigation.goBack()
  }

  _renderItem({item}){
      return(
        <View style={styles.renderView}>
          <Image source={Images.woman1} style={styles.woman}/>
          <View style={styles.explainView}>
            <View style={styles.renderRow}>
              <View>
                <Text style={styles.text1}>Ntalia Joseph</Text>
                <Image source={Images.fourstars} style={styles.fourstars}/>
              </View>
              <Text style={styles.text2}>22 mins ago</Text>
            </View>
            <Text style={styles.text3}>
              leram issum dolor sit amet, consectetur adipiscing elit,sed to{'\n'}
              eiusmod tempor incididunt ut labore et dolore magna aligqua.{'\n'}
              Ut enim ad minim veniam, quis nostrud exercitataion ullamco{'\n'}
              aboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
        </View>
      );
  }
  render() {
    return (
        <View style={styles.contentStyle}>
          <ImageBackground source={Images.backdance} style={styles.dance}>
            <TouchableOpacity onPress={()=>this.back()}>
              <Image source={Images.back} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.whiteText}>BEATTY AND THE BEAST</Text>
            <Image source={Images.fourstars} style={styles.fourstars}/>
          </ImageBackground>
          <View style={styles.rowView}>
            <View>
              <Text style={styles.blueText}>Release Date</Text>
              <Text style={styles.text1}>23 February 2017</Text>
            </View>  
            <TouchableOpacity onPress={()=>this.setState({ visible: true})} style={styles.rateView}>
              <Image source={Images.star} style={styles.star}/>
              <Text style={styles.rateText}>Rate Movie</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <View>
              <Text style={styles.blueText}>Geme</Text>
              <Text style={styles.text1}>Fantasy / Romance</Text>
            </View>  
          </View>
          <View style={styles.rowView}>
            <View>
              <Text style={styles.blueText}>Plot</Text>
              <Text style={styles.text1}>Belle, a village girl, embarks on a journey to save her father{'\n'}
                                         from a creature that has locked him in his dungeon.{'\n'}
                                         Eventually, she learns that the creature is an enchancted{'\n'}
                                         prince who has been cursed.</Text>
            </View>  
          </View>
          <View style={styles.review}>
            <Text style={styles.reviewText}>RATINGS & REVIEWS</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={this._renderItem}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>BOOK TICKETS</Text>
          </TouchableOpacity>
          <Modal 
              backdropOpacity={0.5} 
              isVisible={this.state.visible}
              style={{ justifyContent:'flex-end'}}
              >
            <View style={styles.modalView}>
              <View style={styles.titleView}>
                <Image source={Images.close} style={styles.close}/>
                <Text style={styles.modalText}>RATE & REVIEW</Text>
                <View style={styles.close}/>
              </View>
              <Image source={Images.onestars} style={styles.onestars}/>
              <View style={styles.feedbackView}>
                <Text style={styles.modalText}>Feedback</Text>
              </View>
              <TouchableOpacity onPress={()=>this.setState({ visible: false})}>
                <Text style={styles.modalDoneText}>DONE</Text>
              </TouchableOpacity>
            </View>
          </Modal> 
        </View>
    );
  }
}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const LoginScreen = connect(mapStateToProps)(Login);

export default LoginScreen;
