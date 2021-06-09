import NavbarUI from "./Component/NavbarUI";
import FootarUI from "./Component/FootarUI";
import ContactsUI from "./Component/ContactsUI"
import ChooseUI from "./Component/ChooseUI";
import CarouselUI from "./Component/CarouselUI"
import MainUI from "./Component/MainUI"
import './App.css';


function App() {
  return (
    <div className="App">
      <NavbarUI />
      <MainUI />
      <ContactsUI />
      <CarouselUI />
      <ChooseUI />
      <FootarUI />
    </div>
  );
}

export default App;
