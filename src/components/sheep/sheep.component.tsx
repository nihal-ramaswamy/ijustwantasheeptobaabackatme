import sheep_open from '../../assets/sheep_open.png'
import sheep_closed from '../../assets/sheep_closed.png'
import sheepNoise from '../../assets/SheepNoise.mp3';
import useAudio from '../../hooks/useAudio.hook';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import type { RootState } from '../../store'
import { toggleMouth } from '../../reducers/toggleMouth.reducer';

const Sheep = () => {
	const sheepState = useSelector((state: RootState) => state.toggleMouth.value);
	const [toggle] = useAudio(sheepNoise);
	const dispatch = useDispatch();

	useEffect(() => {
		if (sheepState === true) {
			toggle(true);
			setTimeout(() => dispatch(toggleMouth(false)), 2000);
		}
	}, [sheepState]);// eslint-disable-line react-hooks/exhaustive-deps

	const sheepImage = () => {
		if (sheepState === true) {
			return (<img width="480px" height="480px" src={sheep_open} alt="imagine sheep with open mouth here" />)
		}
		else {
			return (<img width="480px" height="480px" src={sheep_closed} alt="imagine sheep with closed mouth here" />)
		}
	}
	return (
		<div>
			{sheepImage()}
		</div>
	);
}

export default Sheep;
