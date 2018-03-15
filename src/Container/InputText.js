import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Colors } from '../Themes/'
import { TextInput } from "react-native";

export default class InputText extends Component {

  render () {
    return (
            <TextInput placeholder={this.props.placeholder}
                     style={[styles.input, this.props.style]}
                     textAlign={'left'}
                     fontSize={this.props.fontSize}
                     placeholderTextColor={Colors.coal}                     
                     returnKeyType='done'                
                     autoCapitalize='none'
                     autoCorrect={false}
                     autoFocus={this.props.autoFocus}    
                     secureTextEntry={this.props.secureTextEntry}                   
                     underlineColorAndroid='transparent'
                     onSubmitEditing={() => {}}
              />
    )
  }
}
