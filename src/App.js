import './App.css';
import Address from './components/Profile/Address';
import FullName from './components/Profile/FullName';
import ProfilePhoto from './components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/> 
      <Address/>
    </div>
  );
}

export default App;
