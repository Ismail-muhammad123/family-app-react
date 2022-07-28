import React, { Component } from 'react';
import NavBar from '../../components/nav/NavBar';

export default class Expenses extends Component {
    constructor(props){
        super(props);

        this.state = {
            expenses: [],
        };
    }
    
    componentDidMount() {
        fetch('http://localhost/family-app/expenses.php')
        .then((res)=> {
            console.log(res.data);
            return res;
        })
        .then(response => response.json())
        .then(data => this.setState({ expenses: data }));
    }

  render() {
    const { expenses } = this.state;

    const rows = expenses.map((p)=><tr>
    <td>{p.id}</td>
    <td>{p.family_id}</td>
    <td>{p.amount}</td>
    <td>{p.date}</td>
  
</tr> );
    return (
        <div>
        <NavBar />
        <div className='container p-3'>
        <h3>
            List of Family Expenses <a href='http://localhost/family-app/forms/add_expense.php' className='btn btn-success'>Add a Family Expense</a>
        </h3>
         <table class='table border'>
         <thead>
         <th>ID</th>
         <th>Family ID</th>
         <th>Amount</th>
         <th>Date</th>
         </thead>
        <tbody>
            {rows}
        </tbody>
         </table>
        </div>
      </div>
    )
  }
}
