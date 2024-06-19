import { useState } from "react"
import "./search.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Search() {
    const navigate = useNavigate()
    const [word, setWord] = useState()

    const sendData = async () => {
        const response = await axios.get("http://localhost:3000/findMeaning", {
            word
        })

        if (response.status === 200) {
            navigate("/result", { result: response.data })
        }
    }

    return (
        <div className="search">
            <input type="text" placeholder='ابحث عن معنى ...!' onChange={(e) => { setWord(e.target.value) }} />
            <button onClick={() => sendData()}>بحث</button>
        </div>
    )
}

export default Search