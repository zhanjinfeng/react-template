import { useState } from 'react';

function About() {
    const [person] = useState({
        name: 'Jeffrey',
        age: 20,
        sex: 'male',
    });

    return (
        <div>
            <h2>About</h2>
            <div>{person.name}</div>
        </div>
    );
}

export default About;
