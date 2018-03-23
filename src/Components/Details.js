import React, { Component } from "react";
import {
  Text, 
  View, 
  TouchableOpacity, 
  BackHandler,
  ScrollView, 
  FlatList, 
  ImageBackground, 
  Image, 
  SafeAreaView, 
  TextInput,
  Animated,
  StatusBar,
  Platform,
  RefreshControl,
} from "react-native";

import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Colors, Images, Constants } from '../Themes'
import Modal from "react-native-modal";
import { Rating } from 'react-native-ratings';

const HEADER_MAX_HEIGHT = Constants.MARGIN*50;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? Constants.MARGIN*18 : Constants.MARGIN*18;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

import styles from './Styles/DetailsStyle'

const data = ['1','2','3','4','5','6','7']

class Login extends Component {
  static navigationOptions = {
    header: false
  };

  constructor(props){
    super(props)
    this.state=({
      visible: false,
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
      rating: 0
    })
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

ratingCompleted(rating) {
  this.setState({rating: rating})
}

  back(){
    this.props.dispatch(NavigationActions.back());
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

  _renderScrollViewContent() { 
    return (
      <View style={styles.scrollViewContent}>
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
      </View>
    );
  }
  
  render() {
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0],
      extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    modalview = <Modal 
                  backdropOpacity={0.5} 
                  isVisible={this.state.visible}
                  >
                <View style={{flex:1, justifyContent:'flex-end'}}>  
                  <TouchableOpacity onPress={()=>this.setState({ visible: false})} style={styles.touch}/>
                  <View style={styles.modalView}>
                    <View style={styles.titleView}>
                      <Image source={Images.close} style={styles.close}/>
                      <Text style={styles.modalText}>RATE & REVIEW</Text>
                      <View style={styles.close}/>
                    </View>
                    <Rating
                        imageSize={20}
                        rating={1}
                        style={{marginTop:20, marginLeft:20}}
                      />
                    <View style={styles.feedbackView}>
                      <Text style={styles.modalText}>Feedback</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.setState({ visible: false})}>
                      <Text style={styles.modalDoneText}>DONE</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal> 

    return (
        <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={Images.backdance}
          />
         <Animated.Text style={{opacity: imageOpacity,transform: [{ translateY: imageTranslate }],
                        width: Constants.WIDTH, position:'absolute', bottom:Constants.MARGIN*17, left: 0,fontSize:20,color:'white',textAlign:'center'}}>
                    BEAUTY AND THE BEAST
         </Animated.Text>
         <View style={styles.absoluteView}>
           <Animated.Image
              style={[
                styles.stars,
                {
                  opacity: imageOpacity,
                  transform: [{ translateY: imageTranslate }],
                },
              ]}
              source={Images.fourstars}
            />
          </View>  
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
               
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <TouchableOpacity style={styles.backbutton} onPress={this.back.bind(this)} >
            <Image source={Images.back} style={styles.back}/>
          </TouchableOpacity>  
        </Animated.View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>BOOK TICKETS</Text>
        </TouchableOpacity>
        {modalview}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const LoginScreen = connect(mapStateToProps)(Login);

export default LoginScreen;
