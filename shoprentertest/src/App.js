import './App.scss';
import { Container } from 'react-bootstrap';

import Header from './component/Header';
import AdvantageBar from './component/AdvantageBar';
import LargeBan from './component/LargeBan';
import Mosaic from './component/Mosaic';
import OnSale from './component/OnSale';
import Dynamic from './component/Dynamic';
import Footer from './component/Footer';
import BottomLogoBar from './component/BottomLogoBar';

function App() {
  return (
    <Container>
      <Header/>
      <AdvantageBar/>
      <LargeBan/>
      <Mosaic/>
      <OnSale/>
      <Dynamic/>
      <Footer/>
      <BottomLogoBar/>
    </Container>
  );
}

export default App;
