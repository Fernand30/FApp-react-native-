import { StyleSheet } from 'react-native'
import { Constants, Colors } from '../../Themes/'

export default StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: 'white'
  },
  dance: {
    width: Constants.WIDTH,
    height: Constants.MARGIN*44,
    paddingTop: Constants.MARGIN*7,
    paddingLeft: Constants.MARGIN*5
  },
  back: {
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5,
  },
  whiteText:{
    color: 'white',
    fontSize: Constants.FONT*23,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: Constants.MARGIN*9
  },
  fourstars:{
    width:Constants.MARGIN*20,
    height: Constants.MARGIN*20/1780*288,
    alignSelf: 'center',
    marginTop: Constants.MARGIN*2
  },
  star:{
    width: Constants.MARGIN*4,
    height: Constants.MARGIN*4
  },
  review:{
    borderTopWidth: 2,
    borderColor: Colors.grayColor,
    height: Constants.MARGIN*10,
    justifyContent: 'center',
    paddingHorizontal: Constants.MARGIN*4,
    marginTop: Constants.MARGIN*3
  },
  reviewText:{
    fontSize: Constants.FONT*16
  },
  rateView:{
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal: Constants.MARGIN*3,
    width: Constants.MARGIN*30,
    height: Constants.MARGIN*9,
    borderRadius: Constants.MARGIN*4.5
  },
  rowView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Constants.MARGIN*4,
    paddingVertical: Constants.MARGIN*3.5
  },
  text1:{
    fontSize: Constants.FONT*15,
  },
  modalView:{
    width:Constants.MARGIN*90,
    height: Constants.MARGIN*121,
    backgroundColor:'white',
    borderRadius: Constants.MARGIN*2,
    marginTop: Constants.MARGIN*13,
    paddingVertical: Constants.MARGIN*5 
  },
  rateText:{
    color: 'white',
    fontSize: Constants.FONT*17,
  },
  blueText:{
    fontSize: Constants.FONT*15,
    color: Colors.buttonColor,
    marginBottom: Constants.MARGIN
  },
  modalDoneText:{
    fontSize: Constants.FONT*20,
    color: Colors.buttonColor,
    marginTop: Constants.MARGIN*5,
    textAlign: 'right',
    marginRight: Constants.MARGIN*5,
    fontWeight: '800'
  },
  text2:{
    fontSize: Constants.FONT*15,
  },
  feedbackView:{
    backgroundColor: Colors.grayColor,
    paddingHorizontal: Constants.MARGIN*3,
    height: Constants.MARGIN*36,
    marginHorizontal: Constants.MARGIN*5,
    marginTop: Constants.MARGIN*9,
    paddingVertical: Constants.MARGIN*3
  },
  titleView:{
    paddingHorizontal: Constants.MARGIN*5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: Constants.MARGIN*4
  },
  onestars:{
    width: Constants.MARGIN*55,
    height: Constants.MARGIN*55/692*122,
    alignSelf: 'center',
    marginTop: Constants.MARGIN*8
  },
  modalText:{
    fontSize: Constants.FONT*20
  },
  close:{
    width: Constants.MARGIN*5,
    height: Constants.MARGIN*5
  },
  modalView:{
    marginBottom: -Constants.MARGIN*5,
    marginLeft: -Constants.MARGIN*5,
    width: Constants.WIDTH,
    height: Constants.MARGIN*88,
    backgroundColor:'white'
  },
  text3:{
    fontSize: Constants.FONT*13,
  },
  sortdown:{
    width: Constants.MARGIN*3,
    height: Constants.MARGIN*3
  },
  renderRow:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: Constants.MARGIN*2,
  },
  button:{
    backgroundColor: Colors.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: Constants.MARGIN*14
  },
  buttonText:{
    color: 'white',
    fontSize: Constants.FONT*20
  },
  woman:{
    width: Constants.MARGIN*10,
    height: Constants.MARGIN*10,
    borderRadius: Constants.MARGIN*5
  },
  explainView:{
    marginLeft: Constants.MARGIN*2
  },
  renderView:{
    flexDirection: 'row',
    paddingVertical: Constants.MARGIN*3,
    paddingHorizontal: Constants.MARGIN*3,
    borderBottomWidth: 0.5,
    borderColor: Colors.grayColor
  },
  timeView:{
    width: Constants.MARGIN*19,
    height: Constants.MARGIN*6,
    borderRadius: Constants.MARGIN*3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    marginLeft: Constants.MARGIN*3,
    marginTop: Constants.MARGIN*3
  },
  timeText:{
    fontSize: Constants.FONT*14
  },
  wrapView:{
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})

















