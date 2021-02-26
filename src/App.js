import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    // const employees = ['Samiul', 'Chaity', 'Titul', 'Pollob']
    const employees = [{ name: 'Samiul', role: 'admin' }, { name: 'Chaity', role: 'general member' }, { name: 'Rakhee', role: 'reporter' }, { name: 'Forhad', role: '' }]
    return (
        <div className="App">
            <UserCounter></UserCounter>
            {/* access first component dynamically */}
            {
                // employees.map(emp => <li>{emp}</li>)
                // access static
                // employees.map(emp => <Employee name="Sami"></Employee>)
                // access dynamic array
                // employees.map(emp => <Employee name={emp}></Employee>)
                // access dynamic object
                employees.map(emp => <Employee name={emp.name} role={emp.role}></Employee>)
            }

            {/* using first component */}
            {/* <Employee name={employees[0]} role="admin"></Employee>
            <Employee name={employees[1]} role="general member"></Employee>
            <Employee name="Forhad"></Employee>
            <Employee name="Rakhee"></Employee> */}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

// Event handler state update and pass state Recap
function UserCounter() {
    const [count, setCount] = useState(5);
    // console.log(count, setCount);
    // const handleClick = () => console.log('clicked');
    const handleClick = () => setCount(count + 1);

    return (
        <div>
            <button onClick={handleClick}>Add User</button>
            <h3>Number of Users: {count}</h3>
            {/* using in another component dynamically */}
            <UserDisplay viewers={count}></UserDisplay>
            <UserDisplay viewers={count + 10}></UserDisplay>
        </div>
    )
}
// access from UserCounter components
function UserDisplay(props) {
    return <h4>Our website viewer: {props.viewers}</h4>
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
            <h1>User - {props.name}</h1>
            <h3>user position - {props.role || "Viewer"}</h3>
        </div>
    )
}

export default App;