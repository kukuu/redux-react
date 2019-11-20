import React from 'react';
import autoBind from 'react-autobind';
import List from '../component/list.js';


let products=['Savings', 'Bonds', 'Private Debts', 
 'Stocks', 'Private Equity', 'Hedge Funds', 'Venture Capital','Register For An Account',
 'Browse Investment Opportunities','Select Investment','Investment is Funded',
 'Track your Investments\’ Performance'];
class ListContainer extends React.Component{
    constructor(){
        super();
        this.state={
            input:""
        }
        autoBind(this);
    }
  handleChange(event){
            this.setState({
                input:event.target.value
            });
        }
   
    render(){
        let filterProducts=products.filter(word =>{
          if(word.toLowerCase().indexOf(this.state.input.toLowerCase())!==-1){
              return true;
          }
        });
        return(
            <List products={filterProducts} input={this.state.input} handleChange={this.handleChange}></List>
        )
    }
}

export default ListContainer;
