import osusu from './osusu.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="pb-5">Osusu's Profile</h1>
        <img id="profile__img" src={osusu} className="App-logo mb-2 img-fluid border rounded-circle img-thumbnail" alt="logo" />
        <p id="twitter">
          Twitter: Osusu_V_O
        </p>
        <p id="slack" hidden>
          Slack: Osusu Osusu
        </p>

        <a
          className="btn btn-danger mb-2"
          id='btn__zuri'
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri
        </a>
        <a
          className="btn btn-danger mb-2"
          href="http://books.zuri.team/"
          id="books"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Books for design and codings
        </a>
        <a
          className="btn btn-danger mb-2"
          id='book__python'
          href="https://books.zuri.team/python-for-beginners?ref_id=Ayibanimi+Ikoli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Great reads recommended by me
        </a>
        <a
          className="btn btn-danger mb-2"
          id='"pitch'
          href="https://background.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Background check your devs
        </a>
        <a
          className="btn btn-danger mb-5"
          id="book__design"
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paid books written by me
        </a>
      </header>
    </div>
  );
}

export default App;
