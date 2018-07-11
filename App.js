import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Audio } from 'expo';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isPlaying: false,
      label: 'Si',
    }
  }
  componentDidMount() {
    this.soundObject = new Audio.Sound();
    this.soundObject.loadAsync(require('./source.mp3'));
  }
  onPress() {
    if(this.state.isPlaying) {
      this.stop()
    }
    else{
      this.play()
    }
  }
  play() {
    try {
      this.soundObject.playAsync();
      this.setState({
        isPlaying: true,
        label: 'Ya no',
      })
    } catch (error) {
      console.log(error)
    }
  }
  stop() {
    this.soundObject.stopAsync();
    this.setState({
      isPlaying: false,
      label: 'Si',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¿Tienes penita?</Text>
        <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.button}>{this.state.label}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF476F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 2.3 * 16,
    color: '#fff',
    marginBottom: 1.5 * 16,
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
  },
  button: {
    width: '100%',
    padding: 2 * 16,
    borderRadius: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 2 * 16,
    borderWidth: 2,
    borderColor: 'white',
    textAlign: 'center',
  },
  hidden: {
    display: 'none',
  },
});
