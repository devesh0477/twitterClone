import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from "./Widgets";

function App() {
  return (
    //  BEM
    <div className="app">

      {/* Side Bar */}
      <Sidebar />

       {/* Feeds */}
       <Feed />

        {/* Widgets */}
        <Widget />

    </div>
  );
}

export default App;
