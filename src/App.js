import React, {
  Component
} from 'react';
import './App.css';
import MenuAppBar from "./components/Header";
import Home from './pages/Home';
import Detail from './pages/Detail';
import ProductService from "./services/product-service";
const parseString = require('xml2js').parseString;


class App extends Component {

  state = {
    bookResults: [],
    showBooks: true
  };

  constructor() {
    super();
    this.service = new ProductService();
  }

  searchItem = (value) => {
    if (value !== '' && value !== undefined && value != null) {
      this.fetchProductData(value)
    }else{
      this.setState({
        bookResults: []
      });
    }
  };

  fetchProductData = (value) => {
    this.service.getProductData(value).then((data) => {
      this.convertToJson(data).then((resultsInJSON) => {
        console.log(resultsInJSON['GoodreadsResponse']['search'][0]['results'][0]);
         if(resultsInJSON['GoodreadsResponse']['search'][0]['results'][0]['work'] !== undefined){
          this.setState({
            bookResults: resultsInJSON['GoodreadsResponse']['search'][0]['results'][0]['work'],
            showBooks: true
          });
         }else{
           this.setState({
             bookResults:[{
               noResults: true
             }],
             showBooks: true
           })
         }
   
      }).catch((e) => {
        console.log(e);
      });
    }).catch((err) => {
      console.log(err);
    });
  };

  convertToJson = (xmlData) => {
    return new Promise((resolve, reject) => {
      parseString(xmlData, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  selected = (detail) =>{
    console.log(detail);
    this.setState({
      detail: detail,
      showBooks: false
    })
  };

  changeView = () =>{
    this.setState({
      showBooks: true
    })
  }

  render() {
    return ( < div className = "App" >
      <div className = "header" >
      <MenuAppBar search = {
        this.searchItem
      }/>
        </div>
          <div > {
        this.state.showBooks ? <Home books={this.state.bookResults} selectedBook={this.selected}/> : <Detail details={this.state.detail} show={this.changeView}/>
      } </div>
        </div >
    );
  }
}

export default App;