import React from 'react';
import {Text, StyleSheet} from 'react-native'
import * as Const from '../../util/Contstants'

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
    <Text style={{marginHorizontal: 0 }}>
        
        <Text style={styless.dateTime, styless.time}> {this.state.date.toLocaleTimeString()}</Text>
    </Text>
    );
  }
}

const styless = StyleSheet.create({

    dateTime: {
        margin: 0,
        marginHorizontal: 0,
        fontSize: 12,
        color: Const.blueColor,
    },
    time: {
        fontSize: 18,
        marginHorizontal: 0,
        color: Const.blueColor,
    },
    

})