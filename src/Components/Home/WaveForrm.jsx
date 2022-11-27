import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { PlayButton, Wave, WaveformContianer } from './styleComponents';


class Waveform extends Component {  
  constructor(props){
      super(props);
      this.state = {
          playing : false,
        }
    }
    //     state = {
        //     playing: false,
        //   };
        
        componentDidMount() {
    const track = document.querySelector('#track');
      console.log(this.props);

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 80,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
  };
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
};
  render() {
    const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3';
    // const url = this.props.url;
    return (
      <WaveformContianer>
        <PlayButton onClick={this.handlePlay} >
          {!this.state.playing ? 'Play' : 'Pause'}
        </PlayButton>
        <Wave id="waveform" />
        <audio id="track" src={url} />
      </WaveformContianer>
    );
  }
};

export default Waveform;