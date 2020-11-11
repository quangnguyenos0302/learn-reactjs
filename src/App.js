import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Quang'
  const age = 18;
  const isFemale = false;
  const student = {name: 'Easy Frontend'};
  const colorList = ['red', 'green', 'blue'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name} {age} {isFemale ? 'Female' : 'Male'}
          {isFemale ? <p>Female</p> : <p>Male</p>}
          {isFemale && <p>Male</p>}
          {!isFemale && <p>Female</p>}
          {!isFemale && (
            <div>
              <p>Male</p>
              <p>Male</p>
              <p>Male</p>
            </div>
          )}
          {!isFemale && (
            <React.Fragment>
              <p>Male</p>
              <p>Male</p>
              <p>Male</p>
            </React.Fragment>
          )}
          {!isFemale && (
            <>
              <p>Male</p>
              <p>Male</p>
              <p>Male</p>
            </>
          )}
          <p>{student.name}</p>
          <ul>
            {colorList.map(color => {
              return <li key={color} style={{color: color}}>{color}</li>
            })}
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
