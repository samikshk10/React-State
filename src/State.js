import React from "react";

class BgChange extends React.Component{

        constructor(){
                super()
            this.state={
                    color: "white"
            }
            this.bgColorChangeGreen= this.bgColorChangeGreen.bind(this);
            this.bgColorChangeBlue= this.bgColorChangeBlue.bind(this);
            this.bgColorChangeRed= this.bgColorChangeRed.bind(this);
        }

    bgColorChangeGreen(){
        console.log('click1');      
        this.setState({color: "green"});
    }

    bgColorChangeBlue(){
        console.log('click2');
        this.setState({color: "blue"});

    }

    bgColorChangeRed(){
        console.log('click3');
        this.setState({color: "red"});


    }

    render(){
        return(
            <div className="background" style={{ backgroundColor: this.state.color }}>
                <button onClick={this.bgColorChangeGreen}>Green</button>
                <button onClick={this.bgColorChangeRed}>Red</button>
                <button onClick={this.bgColorChangeBlue}>Blue</button>
                
            </div>
        );
            
    }

}

export default BgChange;