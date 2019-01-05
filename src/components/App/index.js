import React from "react";

import Table from "./table/index";
import View from "./view/index"
import Form from "./form/index"

import{
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

const tableHeaders = ['Name','Alias','Team'];


class App extends React.Component{

    state ={
        tableValues : [
            ['101','Tony Start','Iron Man','Avengers'],
            ['102','Peter Starker','Spider Man','Avengers'],
            ['103','Bruce Wayne','Batman','Justice League']
        ]
    }

    constructor(props){
        super(props)
        this.createRecord = this.createRecord.bind(this)
    }
    createRecord(name, alias, team){
        console.log(name, alias, team)
        const ID = (Math.random() * 100).toString()
        const newRecord = [ID, name, alias, team]
        const newTableValues = [...this.state.tableValues] // used in ES6 to make a copy of the array
        // const newTableValues = this.state.tableValues.map(val => val) // used in ES5
        newTableValues.push(newRecord)
        this.setState({tableValues: newTableValues})
    }


    render(){
       return(
            <Router>
                <Switch>

                    <Route exact path="/list" render={(props) =>{
                        return <Table 
                                    values={this.state.tableValues} 
                                    headers={tableHeaders} 
                                    history={props.history}/>
                    }}/>
                    
                    <Route exact path="/view/:id" render={(props) =>{
                        console.log(props)
                        const data = this.state.tableValues.find(val => val[0] === props.match.params.id)
                        const newRecord = {
                                            name: data[1],
                                            alias: data[2],
                                            team: data[3]
                         }
                        return <View 
                                    name={newRecord.name}
                                    alias={newRecord.alias} 
                                    team={newRecord.team}/>
                    }}/>
                    
                    <Route exact path="/create" render={(props) => {

                        return <Form formSubmitCallback= {this.createRecord} 
                        history={props.history}/>

                    }}/>
                    
                    <Redirect to="/list" />
               
                </Switch>
            </Router>
       );
    }
}

export default App; 
