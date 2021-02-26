import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* using first component */}
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <Employee></Employee>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

// create first component
function Employee() {
    const employeeStyle = {
        border:'2px solid purple',
        margin: '20px',
        width: '500px'
    }
    return <div style={employeeStyle}>
        <h1>User Details</h1>
        <h3>General Member</h3>
    </div>
}

export default App;