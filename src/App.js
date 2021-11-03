import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';

import HomePage from './components/HomePage';
import AllProductsPage from './components/AllProductsPage';
import ProductPage from './components/ProductPage';
import DetailsPage from './components/DetailsPage';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      AllProducts: [],
      hasError: false
    }
  }
 
  getProducts = () => {
    axios.get('')
    .then((response) => {
        this.setState( {AllProducts: response.data})
     })  
     .catch((error) => {
      this.setState({
          hasError: true
      })
    })           
  }

  componentDidMount() {
    this.getProducts();
 }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className='container'>
                <h1>Start Page</h1>
                <Link to='/'><h4>Home</h4></Link>
                <Link to='/ProductList'><h4>Product</h4></Link>
            </div>
          </header>
          <main>
             <Route path='/' exact render={ () =>  <HomePage/> } />
             <Route path='/AllProductsPage' render= { () => <AllProductsPage AllProducts={this.state.AllProducts}/>} />
             <Route path='/ProductPage/:id' render = { (props) => <ProductPage  id={props.match.params.id}/>  } />
             <Route path='/DetailsPage/:id' render = { (props) => <DetailsPage id={props.match.params.id} />} />
         </main>
        </div>
      </Router>
    );
  }
}
  
export default App;