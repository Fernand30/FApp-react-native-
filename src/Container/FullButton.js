import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FullButton extends Component {

  render () {
    return (
      /*<TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text && this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>*/
      <Button block style={[styles.button, this.props.style]} onPress={this.props.onPress}>
        <Text style={[styles.buttonText, this.props.textStyle]}>{this.props.text && this.props.text}</Text>
      </Button>
    )
  }
}
