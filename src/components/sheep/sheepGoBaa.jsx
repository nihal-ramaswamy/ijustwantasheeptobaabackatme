import React, {useEffect} from 'react';
import Sheep from './sheep.jsx';
import Speech from './speech.jsx';

const SheepGoBaa = () => {
    useEffect(() => {
        document.title = "SheepGoBaa"
    },[]);
    return (
            <React.Fragment>
                <Sheep />
                <Speech />
            </React.Fragment>
    )
}

export default SheepGoBaa;
