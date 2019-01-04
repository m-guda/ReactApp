import React from "react";

class Child extends React.Component{
render(){
    return(
        <div>
            <span>The number is {this.props.count > 5 ? 'greater than' : 'lesser than'} 5</span>
        </div>
    )
}
}
export default Child;