import logo from './logo.svg';
import stormbw from './stormbw.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={stormbw} className="App-logo" alt="Storm" />
        <h1>
        Meet Storm
        </h1>
        <p>
        I am the mother of two sons, Michael and William, both proud EBR students (Go Belaire Bengals and Sherwood Falcons!) 
        I have been honored to serve and teach the children of East Baton Rouge Parish Schools for the last 14 years. 
        During that time I have been an active parent, teacher, and union member whether it 
        be as a special needs advocate, fighting for my students, 
        fighting for the safety of both students and teachers, or participating at board meetings.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
