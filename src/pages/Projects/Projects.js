import React, { Component } from 'react'
import NavBar from '../../components/nav/NavBar';

export default class Projects extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: [],
        };
    }
    
    componentDidMount() {
        fetch('http://localhost/family-app/projects.php')
        .then((res)=> {
            console.log(res.data);
            return res;
        })
        .then(response => response.json())
        .then(data => this.setState({ projects: data }));
    }

  render() {
    const { projects } = this.state;

    const rows = projects.map((p)=><tr>
    <td>{p.id}</td>
    <td>{p.family_id}</td>
    <td>{p.title}</td>
    <td>{p.location}</td>
    <td>{p.budget}</td>
    <td>{p.duration}</td>
</tr> );
    return (
        <div>
        <NavBar />
        <div className='container p-3'>
        <h3>
            List of Family Projects <a href='http://localhost/family-app/forms/add_projects.php' className='btn btn-success'>Add a Family Project</a>
        </h3>
         <table class='table border'>
         <thead>
         <th>ID</th>
         <th>Family ID</th>
         <th>Title</th>
         <th>Location</th>
         <th>Budget</th>
         <th>Duration</th>
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
