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
            fuzzyMatchingThreshold: 0.7
        }
    ]

    const { transcript, resetTranscript } = useSpeechRecognition({commands});
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

    const isSupported = () => {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            return (
                    <div>
                        <p> Not supported on this browser uwu :( </p>
                    </div>
            )
        }
        else {
            return (
                <div>
                    <Button clickHandler = {() => openSheepMouthHandler()}> Listen </Button>
                    <Button clickHandler = {SpeechRecognition.stopListening}> Stop </Button>
                    <Button clickHandler = {resetTranscript}> Reset </Button>
                    <p>{ transcript }</p>
                </div>
            )
        }
    }


    return (
        <div>
            {isSupported()}
        </div>
    )
}

export default MagicButton;
