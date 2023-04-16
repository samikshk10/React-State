import React from "react";
class Listitem extends React.Component{
   constructor(){
    super();

    this.state={
        task: "",
        items: []
    }
   }

    componentDidMount(){
        console.log('component mounted');
    }
    
    

    addItem(){
        console.log(this.state.task);
        this.setState({task: ""});
        
         this.state.items.push(this.state.task);
    }


    render(){
        return(
            <div> 
                <input type="text"  onChange={(e)=>this.setState({task: e.target.value})} />
                <button onClick={()=>{this.addItem()}}>Add</button>
                <table border={1}>
                    <tr>
                        <th>Items</th>
                    </tr>
                {this.state.items.map(item => (
                    <tr>
                    <td>{item}</td>
                    </tr>
                    ))}

                        </table>
            </div>

        );
    }

}

export default Listitem;