import React, {useEffect} from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    },[]);
    return (
            <React.Fragment>
                <p>Welcome to the website created by a developer coz he was bored.</p>
            </React.Fragment>
    )
}

export default Home;
