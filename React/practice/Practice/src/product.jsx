import { useState } from 'react';

function Profile() { 
    const [name, setName] = useState("")
    const[output,setOutput] = useState("")
    
    function onHandel() {
        setOutput(name)
    }
    return (
        <div className=" h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className=" w-80 h-80 ">
                <h1 className=" text-center text-4xl mb-10">Welcome</h1>
            <input type='text' placeholder='Enter yout name'className = "w-full px-4 py-3 border border-gray-300 rounded-xl outline-none transition focus:border-[#015844] focus:ring-2 focus:ring-[#015844]/20 text-center" onChange={(e) => setName(e.target.value)} />
            <br></br><br></br>
            <button onClick={onHandel}className="w-full py-3 bg-[#015844] text-white font-semibold rounded-xl shadow-md hover:bg-[#014936] hover:shadow-lg active:scale-[0.98] transition duration-200">Click me</button>
            <br></br><br></br>
            <h2 className = "w-full h-35 px-4 py-3 border border-gray-300 rounded-xl outline-none transition focus:border-[#015844] focus:ring-2 focus:ring-[#015844]/20 text-center">{ output}</h2>
            </div>
            </div>
)

}



export default Profile;