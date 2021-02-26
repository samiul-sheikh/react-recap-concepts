import logo from './logo.svg';
import './App.css';

function App() {
    const employees = ['Samiul', 'Chaity', 'Titul']
    return (
        <div className="App">
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