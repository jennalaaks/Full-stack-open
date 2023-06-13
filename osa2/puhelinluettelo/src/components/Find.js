import { useState } from 'react'

const Find = ({ persons }) => {
    const [findName, setName] = useState('')

    const handleFind = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(findName.toLowerCase())
    );

    return (
        <div>
            <div>
                filter shown with <input value={findName} onChange={handleFind} />
            </div>
            <ul>
                {filteredPersons.map((person, index) => (
                <li key={index}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Find;