import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {openSheepMouth} from '../../actions';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Button from '../button/button.jsx';

const MagicButton = () => {
    const sheepState = useSelector(state => state.sheepStateReducer);
    const commands = [
        {
            command: "*",
            callback: () => {
                if (sheepState) {
                    return;
                }
                console.log(transcript);
                    setTimeout(() => {return;}, 500);
                    dispatch(openSheepMouth());
            },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.4
        }
    ]

    const { transcript } = useSpeechRecognition({commands});
    const dispatch = useDispatch();

    const openSheepMouthHandler = () => {
        SpeechRecognition.startListening({ continuous: true });
        // dispatch(openSheepMouth());
    }

    useEffect(() => {
        return () => {
            SpeechRecognition.stopListening();
        }
    }, []);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div>
            <Button clickHandler = {() => openSheepMouthHandler()}> Listen </Button>
            <Button clickHandler = {SpeechRecognition.stopListening}> Stop </Button>
        </div>
    )
}

export default MagicButton;