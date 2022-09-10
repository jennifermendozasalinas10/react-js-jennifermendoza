import Navbar from "./components/Navbar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
const App = () => {
  return (
  <>
     <Navbar/>
     <ItemListContainer name="Anteojos de sol" color= "gris, negro, marrón" precio= "$1000"/>
     <ItemListContainer name="Gorro de lana" color= "melange, rojo, azul" precio= "$900"/>
     <ItemListContainer name="Medias" color= "rosa, verde, blanco" precio= "$600"/>
     
  </>

  );
}
export default App;
