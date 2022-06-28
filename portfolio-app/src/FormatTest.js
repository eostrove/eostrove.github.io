import './css/App.css';
//import './css/main.css';

function Format() {
  return (
    <div className="body">
      <header className="header">
        header
      </header>
      <header className="header p">
        header p
      </header>
      <header className="header h2 + p">
        header h2 + p
      </header>
      <header className="header.major h2">
        header major
      </header>
      <a>this is the A tag</a>
      <textarea>input goes here </textarea>
    </div>
  );
}

export default Format;
