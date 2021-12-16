import React,{useState, useEffect} from 'react'

const FunctionCount = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    useEffect(() => {
        // setTimeout(()=> {
            document.title = `Vous avez cliqué ${count} fois`;
        // },5000)
            console.log("Mise à jour du titre via useEffect");
    }, []) /* Ceci a le meme comportement que le componentDidMount */
    // }, [count])

    return (
        <div className='text-center'>
            <h1>{count}</h1> 
            <button onClick={()=> setCount(count+1)} className='btn btn-success'>+</button> 
            <input value={name} onChange={(e) => setName(e.target.value)} />     
        </div>
    )
}

export default FunctionCount
