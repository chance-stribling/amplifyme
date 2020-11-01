import logo from './logo.svg';
import stormbw from './stormbw.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Meet Storm
        </h1>
        <img src="https://amplifymeimagesmaybe142008-dev.s3.us-east-2.amazonaws.com/stormbw.jpeg" alt="Storm" />
        <p>
        I am the mother of two sons, Michael and William, both proud EBR students
        </p>
        
        <h3>
        Go Belaire Bengals and Sherwood Falcons!
        </h3>
        
        <p>
        I have been honored to serve and teach the children of East Baton Rouge Parish Schools for the last 14 years. 
        During that time I have been an active parent, teacher, and union member whether it 
        be as a special needs advocate, fighting for my students, 
        fighting for the safety of both students and teachers, or participating at board meetings.
        </p>
        
        <p>
        I hold a Bachelors degree in English and a Bachelors in Afican American Studies from Purdue University and 
        obtained Alternate Certification in Middle School English from TeachBatonRouge.  
        </p>
        <a
          className="App-link"
          href="https://secure.anedot.com/storm-matthews/campaign-slug"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </a>
      </header>
    </div>
  );
}

export default App;
