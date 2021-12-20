import React, {useState, useEffect} from 'react'

function FunctionDisplayKey() {

    const [keyCode, setKeyCode] = useState('');

    const handlekeyCode = e => {
        setKeyCode(e.code);
        console.log("addEventListener activé");
    }

    useEffect(() => {
        document.addEventListener("keyup", handlekeyCode);

        return () => {
            console.log("addEventListener retiré");
            document.removeEventListener("keyup", handlekeyCode);
        }
    }, []);

    return (
        <div>
            <hr/>
                <h1> {keyCode}</h1>
            <hr/>            
        </div>
    )
}

export default FunctionDisplayKey
