import './App.scss';

import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import HeaderSlider from './Components/HeaderSlider/HeaderSlider';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeaderSlider />
      <Content />
    </div>
  );
}

export default App;
