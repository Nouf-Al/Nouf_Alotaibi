import React , {Component} from 'react';

class PersonCard  extends Component{
    constructor(props){
        super(props);
        this.state = {
            incAge: this.props.age
        };
        
    }
    birthday = () => {
        this.setState({incAge: this.state.incAge+1});
    }
    

    render(){
        
        var { first_name, last_name, age , hairColor } = this.props;
        return (
        <div>
            <h2>{last_name}, {first_name}</h2>
            <p>Age: {this.state.incAge}</p>
            <p>Hair color: {hairColor}</p>
            <button className="btn btn-outline-danger" onClick={this.birthday}>Birthday for {first_name} {last_name}</button>
        </div>
        );
            
    }
    

}

export default PersonCard ;