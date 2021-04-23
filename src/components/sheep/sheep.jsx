import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {openSheepMouth, closeSheepMouth} from '../../actions';
import sheep_open from '../../assets/sheep_open.png'
import sheep_closed from '../../assets/sheep_closed.png'
import sheepNoise from '../../assets/SheepNoise.mp3';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = (playingState) => setPlaying(playingState);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [toggle];
};


const Sheep = (props) => {

    // let [sheep, setSheep] = useState(props.sheepState);
    const sheepState = useSelector(state => state.sheepStateReducer);
    const [toggle] = useAudio(sheepNoise);

    useEffect(() => {
        if (sheepState === 1) {
            toggle(1);
            setTimeout(() => props.closeSheepMouth(), 2000);
        }
    }, [sheepState]);// eslint-disable-line react-hooks/exhaustive-deps

    const sheepImage = () => {
        if (sheepState === 1) {
            return (<img width="480px" height="480px" src={sheep_open} alt="imagine sheep with open mouth here"/>)
        }
        else {
            return (<img width="480px" height="480px" src={sheep_closed} alt="imagine sheep with closed mouth here"/>)
        }
    }
    return (
            <div>
                {sheepImage()}
            </div>
    );
}

const mapStateToProps = state => {
    return {
        sheepState: state.sheepState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openSheepMouth: () => dispatch(openSheepMouth()),
        closeSheepMouth: () => dispatch(closeSheepMouth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sheep);
