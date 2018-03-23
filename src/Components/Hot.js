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
import ImageSlider from 'react-native-image-slider';
import Modal from "react-native-modal";

const HEADER_MAX_HEIGHT = Constants.MARGIN*60;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? Constants.MARGIN*15 : Constants.MARGIN*15;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

import styles from './Styles/HotStyle'

const images = [
      Images.evil,
      Images.deadwish,
      Images.evil,
      Images.deadwish,
      Images.evil,
      Images.deadwish
    ]; 
const news = [1,2,3,4]
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
    this.props.dispatch(NavigationActions.back());
  };

  forgotpassword = () => {
    const forgotpassword = NavigationActions.navigate({
      routeName: "ForgotPassword",
      params: { name: "Shubhnik" }
    });
    this.props.navigation.dispatch(forgotpassword);
  };

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

  _renderImage({item}){
      return(
        <View style={{marginRight:10}}>
          <Image source={item } style={styles.renderImage} />
          <View style={styles.explainView}>
            <Text style={styles.text2}>Black Panther</Text>
            <View style={styles.bookView}>
              <Text style={styles.book}>Book</Text>
            </View>
          </View>
        </View>
      );
  }

  _renderNews({item}){
      return(
        <View style={styles.newsRowView}>
          <Image source={Images.movie1} style={styles.movie}/>
          <View style={{flex:1}}>
            <Text style={styles.text2}>9 Diverse Marvel Heroes We Want To See{'\n'}On The Big Screen</Text>
            <Text style={styles.text3}>There havve been multiple studies showing that diversity{'\n'}helps box office performance</Text>
            <Text style={styles.text4}>2 Mar 2018</Text>
          </View>
        </View>
      );
  }

  _renderScrollViewContent() { 
    i  = 0;
    json = images.map(function(item) { 
      i ++;
      return(
          <View key = {i} style={{marginRight:10}}>
          <Image source={item } style={styles.renderImage} />
          <View style={styles.explainView}>
            <Text style={styles.text2}>Black Panther</Text>
            <View style={styles.bookView}>
              <Text style={styles.book}>Book</Text>
            </View>
          </View>
        </View>
        ) 
    })

    return (
      <View style={styles.scrollViewContent}>
        <View style={styles.sliderView}>
            
            <View style={styles.rowView}>
              <Text style={styles.text1}>Just Released</Text>
              <Text style={styles.redtext}>See All</Text>
            </View>  
            <ScrollView showsHorizontalScrollIndicator={false} horizontal = {true}>
              {json}
            </ScrollView>
            
            <View style={styles.rowView}>
              <Text style={styles.text1}>Highest Rating</Text>
              <Text style={styles.redtext}>See All</Text>
            </View>  
            <ScrollView showsHorizontalScrollIndicator={false} horizontal = {true}>
              {json}
            </ScrollView>
          </View>
          <View style={styles.newsView}>
            <Text style={styles.text1}>News</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={news}
              keyExtractor={(item, index) => index}
              renderItem={this._renderNews}
            />
          </View>
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
     outputRange: [0, 0],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE/2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    modalview = <Modal 
                  backdropOpacity={0.5} 
                  animationIn='slideInDown' 
                  isVisible={this.state.visible} 
                  animationOut = 'slideOutUp' 
                  style={{flex: 1}}>
                <TouchableOpacity onPress={()=>this.setState({ visible: false})} style={styles.touch1}/>
                <View style={styles.modalView}>
                  <TouchableOpacity onPress={()=>this.booking()} style={styles.eachView}>
                    <View style={styles.fixView}>
                      <Image source={Images.tickets} style={styles.tickets}/>
                    </View>
                    <Text style={styles.booking}>My Bookings</Text>
                  </TouchableOpacity>
                  <View style={styles.barView}/>
                  <TouchableOpacity onPress={()=>this.setting()} style={styles.eachView}>
                    <View style={styles.fixView}>
                      <Image source={Images.settings} style={styles.settings}/>
                    </View>
                    <Text style={styles.booking}>Settings</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>this.setState({ visible: false})} style={styles.touch2}/>
              </Modal> 
    return (
      <SafeAreaView style={styles.container}>
        <View  style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              <Image source={Images.mark} style={styles.mark}/>
            </View>
            <Text style={styles.title}>WHAT'S HOT</Text>
            <View style={styles.headerRightView}>
              <TouchableOpacity onPress={()=>this.details()} style={styles.searchbutton}>
                <Image source = {Images.search} style={styles.search}/>
              </TouchableOpacity>
              
              <TouchableOpacity onPress = {()=>this.setState({ visible: true})} style={styles.menubutton}>
                <Image source = {Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:1}}>
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
                  progressViewOffset={Constants.MARGIN*20}
                />
              }
              // iOS offset for RefreshControl
              contentInset={{
                top: Constants.MARGIN*60,
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
                source={Images.dance}
              />
            </Animated.View>
          </View>  
        {modalview}
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
