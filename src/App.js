import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const employees = ['Samiul', 'Chaity', 'Titul']
    return (
        <div className="App">
            <UserCounter></UserCounter>
            {/* using first component */}
            <Employee name={employees[0]} role="admin"></Employee>
            <Employee name={employees[1]} role="general member"></Employee>
            <Employee name="Forhad"></Employee>
            <Employee name="Rakhee"></Employee>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

// state function
function UserCounter() {
    // de-structure useState
    const result = ['abc', 'def']
    console.log(result[0], result[1])

    const [first, second] = ['abc', 'def']
    console.log(first, second)

    const [count, setCount] = useState(0);
    console.log(count, setCount);
    return (
        <div>
            <button>Add User</button>
            <h3>Number of User: </h3>
        </div>
    )
}

// create first component
function Employee(props) {
    // show data details
    console.log(props)
    const employeeStyle = {
        border: '2px solid purple',
        borderRadius: '10px',
        margin: '20px',
        width: '500px'
    }
    return (
        <div style={employeeStyle}>
            <h1>User-{props.name}</h1>
            <h3>user position {props.role || "website viewer"}</h3>
        </div>
    )
}

export default App;