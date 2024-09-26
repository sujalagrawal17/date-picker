import './App.css';
import{DateProvider}from './components/DateContext'
import DatePicker from './components/DatePicker'
function App() {
  return (
    <div >
    <div className="App">
       <DateProvider>
          <DatePicker />
       </DateProvider>
    </div>
    </div>
  );
}

export default App;
