import { useState } from "react"
import "./search.css"
import { useNavigate } from "react-router-dom"
import { actGetMeaning, cleanPrevData } from "../../store/meaningSlice"

import { useSelector, useDispatch } from 'react-redux'
function Search(props) {
    const navigate = useNavigate()
    const [search, setSearch] = useState()
    const { loading } = useSelector((state) => state.meaning)
    const { username } = useSelector((state) => state.login)
    console.log(username)
    const dispatch = useDispatch()

    const sendData = async () => {
        dispatch(actGetMeaning({ data: search, username: username }))

        if (loading === "faild") {
            dispatch(cleanPrevData())
            return navigate("/error")
        }

        // const response = await axios.get(`http://localhost:8080/lugha/${search}`)
        //  response.data.pageProps

        navigate("/result", { state: { search: search } })

    }

    return (
        <div className="search">
            <input type="text" placeholder={props.placeholder} value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <button onClick={() => sendData()}>بحث</button>
        </div>
    )
}

export default Search