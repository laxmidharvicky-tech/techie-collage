import {useState,useEffect} from 'react'

function Case() {
    const [name,setName] = useState("")
    useEffect(() => {
        console.log("name change",name)
    },[name]);
    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <h1>hello{ name}</h1>
        </>
)
}

export default Case;