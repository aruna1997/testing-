import React,{Component} from 'react';

export const doincrement=(prevState)=>({
        counter:prevState.counter+1
}) 
export const dodecrement=(prevState)=>({
    counter:prevState.counter-1
})

export const ok=()=>{
    console.log('check');
    
}

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    increment()
    {
        this.setState(doincrement);
    }
    decrement()
    {
        this.setState(dodecrement);
    }
    
    render()
    {
        const {counter}=this.state;
        return(
            <div>
                <h1>Counter App</h1>
                <p>{counter}</p>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}
export default App;