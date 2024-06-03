
import {Component} from 'react'
import './index.css'

class ClickCount extends Component{
    state = {count :0}

     

    onIncrement = () => {
        this.setState((prevState) => {
            console.log(`prevState value: ${prevState.count}`);
            return { count: prevState.count + 1 };
        });
    };

    onReset = () => {
        this.setState((prevState) => {
            console.log(`prevState value: ${prevState.count}`);
            return { count: 0 };
        });
    };



    render(){

        const {count}=this.state
    return(
        <div className="container">
            <h1 className='heading'>The Button has clicked <br/><space className='count'>{count}</space> times</h1>
            <p className='="para'>Click the Button to increase the count</p>
            <div className='cont2'>
                <button className='btn' onClick={this.onIncrement}>Click me</button>
                <button className='btn' onClick={this.onReset}>Reset</button>
            </div>
        </div>

    )

    }

}

export default ClickCount;