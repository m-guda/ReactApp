import React from "react";

import Table from "./table/index";
import View from "./view/index"

import{
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'

const tableValues = [
    ['101','Tony Start','Iron Man','Avengers'],
    ['102','Peter Starker','Spider Man','Avengers'],
    ['103','Bruce Wayne','Batman','Justice League']
];

const tableHeaders = ['Name','Alias','Team'];


class App extends React.Component{

    state ={
        selectedId: -1,
        selectedRecord: {}
    }

    render(){
       return(
            <Router>
                <Switch>

                    <Route exact path="/list" render={(props) =>{
                        return <Table 
                                    values={tableValues} 
                                    headers={tableHeaders} 
                                    history={props.history}/>
                    }}/>
                    
                    <Route exact path="/view/:id" render={(props) =>{
                        console.log(props)
                        const data = tableValues.find(val => val[0] === props.match.params.id)
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
                    
                    <Redirect to="/list" />
               
                </Switch>
            </Router>
       );
    }
}

export default App; 
