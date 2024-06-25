import './App.css';
import logo from './logo.svg';
import Header from './home/header';
import Banner from './home/banner';
import Footer from './home/footer';
import { FeaturedProducts, NewProducts } from './home/featuredProducts';
import products from './data/mockdata';
import IndustryGrid from './home/industryGrid';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <FeaturedProducts products = {products}/>
      <IndustryGrid />
      <NewProducts products = {products}/>
      <Footer/>

    </div>
  );
}

export default App;
