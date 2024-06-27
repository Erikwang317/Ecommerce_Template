import './App.css';
import logo from './logo.svg';
import Header from './home/header';
import Banner from './home/banner';
import Footer from './home/footer';
import { FeaturedProducts, NewProducts } from './home/featuredProducts';
import { featuredProducts, newProducts } from './data/mockdata';
import IndustryGrid from './home/industryGrid';
import CustomerSupport from './home/customerSupport';
import NewCustomer from './home/newCustomer';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Banner/> */}
      <FeaturedProducts products = {featuredProducts}/>
      <IndustryGrid />
      <NewProducts products = {newProducts}/>
      <NewCustomer />
      <CustomerSupport />
      <Footer/>
    </div>
  );
}

export default App;
