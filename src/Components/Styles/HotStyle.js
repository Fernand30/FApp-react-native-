import { StyleSheet, Platform } from 'react-native'
import { Constants, Colors } from '../../Themes/'

const HEADER_MAX_HEIGHT = Constants.MARGIN*50;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : Constants.MARGIN*18;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  contentStyle: {
    flex: 1,
    width: null,
    height: null,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    backgroundColor: '#fefefe'
  },
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor:'transparent',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  dance:{
    width: Constants.WIDTH,
    height: Constants.WIDTH/1080*550,
  },
  headerView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    height: Constants.MARGIN*12.5,
    paddingHorizontal: Constants.MARGIN*3
  },
  mark:{
    width: Constants.MARGIN*6,
    height: Constants.MARGIN*6/650*694,
  },
  redtext:{
    color: 'red',
    fontSize: Constants.FONT*12,
    marginRight: Constants.MARGIN*3
  },
  title: {
    color: 'white',
    fontSize: Constants.FONT*20,
    textAlign: 'center',
    fontWeight: '700',  
    marginTop: Constants.MARGIN
  },
  headerLeftView:{
    width: Constants.MARGIN*30
  },
  headerRightView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Constants.MARGIN*30
  },
  search: {
    width: Constants.MARGIN*4.5,
    height: Constants.MARGIN*4.5,
  },
  menu: {
    width: Constants.MARGIN*1.2,
    height: Constants.MARGIN*1.2/12*48,
  },
  searchbutton: {
    width: Constants.MARGIN*10,
    alignItems: 'center'
  },
  menubutton: {
    width: Constants.MARGIN*10,
    alignItems: 'center'
  },
  customSlide:{
    paddingTop: Constants.MARGIN*3,
    width: Constants.WIDTH/2.2,
    height: Constants.WIDTH/2.2,
    backgroundColor: Colors.grayColor
  },
  text1:{
    fontSize: Constants.FONT*20,
    fontWeight: '700'
  },
  text2:{
    fontSize: Constants.FONT*16,
    color: 'black'
  },
  text3:{
    fontSize: Constants.FONT*12,
    color: 'black'
  },
  text4:{
    fontSize: Constants.FONT*14,
    color: 'black',
    textAlign: 'right'
  },
  newsRowView:{
    flexDirection: 'row',
    marginTop: Constants.MARGIN*3
  },
  bookView:{
    width: Constants.MARGIN*10,
    height: Constants.MARGIN*4,
    borderRadius: Constants.MARGIN*2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  book:{
    color: 'white',
    fontSize: Constants.FONT*12
  },
  modalView:{ 
    height: Constants.MARGIN*31,
    backgroundColor:'#015885',
    flexDirection:'row',
    paddingVertical: Constants.MARGIN*3,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  touch1:{
    height:Constants.MARGIN*12.7,
  },
  touch2:{
    flex:1
  },
  eachView:{
    alignItems: 'center',
    flex:1,
  },
  fourstars:{
    width: Constants.MARGIN*14,
    height: Constants.MARGIN*14/1780*288,
  },
  tickets:{
    width: Constants.MARGIN*12,
    height: Constants.MARGIN*12,
  },
  settings:{
    width: Constants.MARGIN*10,
    height: Constants.MARGIN*10,
  },
  booking:{
    color: 'white',
    fontSize: Constants.FONT*20,
    marginTop: Constants.MARGIN*3
  },
  fixView:{
    height: Constants.MARGIN*12,
    justifyContent:'flex-end'
  },
  barView:{
    width: 1,
    height: Constants.MARGIN*14,
    backgroundColor: 'white',
    opacity: 0.5
  },
  explainView:{
    paddingVertical: Constants.MARGIN*2,
    width: Constants.WIDTH/2.3,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: Constants.MARGIN,
    justifyContent: 'space-between'
  },
  sliderView:{
    backgroundColor: Colors.grayColor,
    paddingLeft: Constants.MARGIN*3,
    paddingVertical: Constants.MARGIN*2,
    justifyContent: 'center',
  },
  renderImage:{
    width: Constants.WIDTH/2.3,
    height: Constants.WIDTH/3.1,
    shadowOffset:{  width: 10,  height: 0,  },
    shadowColor: 'black',
    shadowOpacity: 0.9,
  },
  commonRowView:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Constants.MARGIN*2
  },
  checkView:{
    width: Constants.MARGIN*4.2,
    height: Constants.MARGIN*4.2,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  newsView:{
    paddingVertical: Constants.MARGIN*2,
    backgroundColor: 'white',
    paddingHorizontal: Constants.MARGIN*3
  },
  movie:{
    width: Constants.MARGIN*20,
    height: Constants.MARGIN*20,
    marginRight: Constants.MARGIN*2
  },
  check:{
    width: Constants.MARGIN*3,
    height: Constants.MARGIN*3/36*27
  },
  text:{
    fontSize: Constants.FONT*17,
    color: 'white',
    marginLeft: Constants.MARGIN*3
  },
  forgot:{
    marginLeft: Constants.MARGIN*11
  },
  forgotText:{
    fontSize: Constants.FONT*17,
    color: 'white',
  },
  loginButton:{
    height: Constants.MARGIN*12,
    borderRadius: Constants.MARGIN*6,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.MARGIN*10,
    marginHorizontal: Constants.MARGIN*20,
  },
  loginText:{
    color: Colors.background,
    fontSize: Constants.FONT*23
  },
  skipButton:{
    height: Constants.MARGIN*9,
    borderRadius: Constants.MARGIN*4.5,
    backgroundColor:Colors.skipColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.MARGIN*8,
    marginHorizontal: Constants.MARGIN*39,
    borderWidth: 2,
    borderColor: 'white'
  },
  skipText:{
    color: 'white',
    fontSize: Constants.FONT*19
  },
  signup:{
    color: 'white',
    fontSize: Constants.FONT*20,
    alignSelf: 'center',
    marginTop: Constants.MARGIN*11
  }
})

















