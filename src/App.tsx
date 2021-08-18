import './App.scss';

import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeaderSlider from './Components/HeaderSlider/HeaderSlider';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeaderSlider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
