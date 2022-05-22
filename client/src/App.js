import Modal from "react-modal";
import Calendar from "./Components/Calendar"
import "react-datepicker/dist/react-datepicker.css"


Modal.setAppElement('#root');


function App() {
  return (
    <div className="App">
        <Calendar></Calendar>
    </div>
  );
}

export default App;
