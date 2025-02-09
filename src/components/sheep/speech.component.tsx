import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/button.component';
import { RootState } from '../../store';
import { toggleMouth } from '../../reducers/toggleMouth.reducer';
import 'regenerator-runtime/runtime'
import { useVoiceToText } from "react-speakup";
import { useEffect } from 'react';



const MagicButton = () => {
	const { startListening, stopListening, transcript, reset } = useVoiceToText({
		continuous: true,
		lang: "en-US",
	});

	const dispatch = useDispatch();
	const sheepState = useSelector((state: RootState) => state.toggleMouth.value);

	useEffect(() => {
		if (transcript === "") {
			return
		}

		if (sheepState == true) {
			stopListening();
			reset();
			return;
		}

		dispatch(toggleMouth(true))

		stopListening();
		reset();

	}, [transcript]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<div>
				<Button clickHandler={startListening}>Listen</Button>
			</div>
			<h2>{transcript}</h2>
		</div>
	);
}

export default MagicButton;
