import React from 'react';

// class PersonCard  extends Component{
//     render(){
//         const { first_name, last_name, age , hairColor } = this.props;
//         return <div>
//             <h2>{last_name}, {first_name}</h2>
//             <p>Age: {age}</p>
//             <p>Hair color: {hairColor}</p>
//             </div>;
//     }
// }

const PersonCard = (props) => {
    const { first_name, last_name, age , hairColor } = props;
    return (
        <div>
            <h2>{last_name}, {first_name}</h2>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
        </div>
    );
}

export default PersonCard ;