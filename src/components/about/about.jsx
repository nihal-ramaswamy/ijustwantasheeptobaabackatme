import React, {useEffect} from 'react';

const About = () => {
    useEffect(() => {
        document.title = "About"
    },[]);
    return (
            <React.Fragment>
                <p>
                    Did you ever baa at a sheep and it did not baa back at you?<br />
                    Me neither.<br />
                    Meet NotMerino1.0 !!<br />
                    NotMerino1.0 will always baa back at you when you speak to him. That is my garuntee :)<br />
                </p>
            </React.Fragment>

    );
}

export default About
