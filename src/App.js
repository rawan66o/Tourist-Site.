import logo from './logo.svg';
import './App.css';
import Card from './COMPONNENT/CARD/card';
import Discount from './COMPONNENT/DISCOUNT/discount';
import Footer from './COMPONNENT/FOOTER/footer';
import Homes from './COMPONNENT/HOMES/homes';
import Navbar from './COMPONNENT/NAVBAR/navbar';
import Reviow from './COMPONNENT/REVIOW/reviow';
import Staff from './COMPONNENT/STAFF/staff';
import Tours from './COMPONNENT/TOURS/tours';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Navbar/> 
         <Homes/>
         <Card/>
         <Tours/>
         <Discount/>
         <Reviow/>
         <Staff/>
         <Footer/>


    
      </header>
    </div>
  );
}

export default App;
