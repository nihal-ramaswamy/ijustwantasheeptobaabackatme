import Sheep from './sheep.component';
import Speech from './speech.component';

const SheepGoBaa = () => {
	return (
		<div className="flex items-center justify-center h-screen p-1 m-1">
			<div>
				<Sheep />
			</div>
			<div>
				<Speech />
			</div>
		</div>
	)
}

export default SheepGoBaa;
