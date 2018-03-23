import React, { Component } from "react";
import { Text, View, TouchableOpacity, BackHandler, FlatList, ImageBackground, Image, SafeAreaView, TextInput } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'
import Modal from "react-native-modal";


import styles from './Styles/BookingStyle'

const timeArray = [ {id:0,array:[{id:0,time:'8:00 AM',selected:true},{id:1,time:'12:00 PM',selected:false},{id:2,time:'4:00 PM',selected:false},{id:3,time:'8:00 PM',selected:false},{id:4,time:'12:00 PM',selected:false}]},
                    {id:1,array:[{id:0,time:'8:00 AM',selected:false},{id:1,time:'12:00 PM',selected:false},{id:2,time:'4:00 PM',selected:false},{id:3,time:'8:00 PM',selected:false},{id:4,time:'12:00 PM',selected:false}]},
                    {id:2,array:[{id:0,time:'8:00 AM',selected:false},{id:1,time:'12:00 PM',selected:false},{id:2,time:'4:00 PM',selected:false},{id:3,time:'8:00 PM',selected:false},{id:4,time:'12:00 PM',selected:false}]},
                    {id:3,array:[{id:0,time:'8:00 AM',selected:false},{id:1,time:'12:00 PM',selected:false},{id:2,time:'4:00 PM',selected:false},{id:3,time:'8:00 PM',selected:false},{id:4,time:'12:00 PM',selected:false}]},
                    {id:4,array:[{id:0,time:'8:00 AM',selected:false},{id:1,time:'12:00 PM',selected:false},{id:2,time:'4:00 PM',selected:false},{id:3,time:'8:00 PM',selected:false},{id:4,time:'12:00 PM',selected:false}]},
                  ]
function copy(o) {
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? copy(v) : v;
   }
   return output;
}
class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    this.state=({
      visible: false,
      timeArray: timeArray
    })
    _keyExtractor = (item, index) => item.id;
  }

  componentDidMount() {
    that  = this
    BackHandler.addEventListener('hardwareBackPress', function() {
        that.back();
        return true;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  back(){
    this.props.dispatch(NavigationActions.back());
  }

  selectbook(movid, timeid){

    ary = copy(this.state.timeArray)

    ary[movid].array[timeid].selected=true
    ary[movid].array.map(function(item) {
      if(item.id==timeid) item.selected=true
      else item.selected = false
    })

    this.setState({
      timeArray: ary
    })
    
  }

  _renderItem({item}){
      that = this
      id = item.id
      
      eachArray = item.array
      times  = eachArray.map(function(item) {
        
       if(item.selected){
         image = Images.selectborder
         color = '#007ab9'
       }else{
        image = Images.border
        color = 'black'
       }
        return (
            <TouchableOpacity onPress={that.selectbook.bind(that,id,item.id)} key={item.id}>
                <ImageBackground source={image} style={styles.border} >
                    <Text style={[styles.timeText,{color:color}]}>{item.time}</Text>
                </ImageBackground>
            </TouchableOpacity>    
            );
      })
      return(
        <View style={styles.renderView}>
          <Text style={styles.text2}>Carnival: ABC Mail</Text>
          <View style={styles.wrapView}>
            {times}
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
            <Text style={styles.text1}>TYE, 6 MAR</Text>
            <TouchableOpacity onPress={()=>this.setState({ visible: true})}>
              <Image source={Images.sortdown} style={styles.sortdown}/>
            </TouchableOpacity>
          </View>
          
            <FlatList
              showsVerticalScrollIndicator={false}
              data={this.state.timeArray}
              keyExtractor={(item, index) => index}
              renderItem={this._renderItem.bind(this)}
            />
          
          <Modal 
              backdropOpacity={0.5} 
              isVisible={this.state.visible}
              >
              <View style={{flex:1}}>  
              <TouchableOpacity onPress={()=>this.setState({ visible: false})} style={styles.touch1}/>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Number Of Persons</Text>
                  <Image source={Images.group} style={styles.group}/>
                  <View style={styles.modalRow}>
                    <Text style={styles.modalText}>Children</Text>
                    <View style={styles.dropView}>
                      <Text style={styles.modalText}>0</Text>
                      <Image source={Images.sortdown} style={styles.sortdown}/>
                    </View>
                  </View>
                  <View style={styles.modalRow}>
                    <Text style={styles.modalText}>Adults</Text>
                    <View style={styles.dropView}>
                      <Text style={styles.modalText}>0</Text>
                      <Image source={Images.sortdown} style={styles.sortdown}/>
                    </View>
                  </View>
                  <View style={styles.modalRow}>
                    <Text style={styles.modalText}>Senior</Text>
                    <View style={styles.dropView}>
                      <Text style={styles.modalText}>0</Text>
                      <Image source={Images.sortdown} style={styles.sortdown}/>
                    </View>
                  </View>
                  <View style={styles.modalRow}>
                    <Text style={styles.modalText}>Total No. of Tickets</Text>
                    <Text style={styles.modalText}>1</Text>
                  </View>
                  <View style={styles.buttonView}>
                    <TouchableOpacity onPress={()=>this.setState({ visible: false})}>
                      <Text style={styles.blueText1}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({ visible: false})}>
                      <Text style={styles.blueText}>DONE</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              <TouchableOpacity onPress={()=>this.setState({ visible: false})} style={styles.touch}/>
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
