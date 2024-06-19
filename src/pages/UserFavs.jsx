import "./mostSearchedWords.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function UserFavs() {
    const [favs, setFavs] = useState([])


    const getData = async () => {
        const response = await axios.get("http://localhost:3000/favWords")
        if (response.status === 200) {
            setFavs(response.data)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="mostSearchedWords">
            <div className="container">
                <div className="title">
                    <h2>
                        كلمات أعجبتك..
                    </h2>
                </div>


                <div className="content">

                    {favs.length ? (
                        favs.map((item) => {
                            return <div className="item" key={item.id}>
                                <div className="word">
                                    <h4>{item.word}</h4>
                                </div>
                                <div className="meaning">
                                    <div className="root">
                                        <h5>{`[${item.root}]`}</h5>
                                    </div>
                                    <div className="result">
                                        <h5>
                                            {`مصدر : ${item.source}`}
                                        </h5>

                                        {item.emaxple}
                                    </div>
                                </div>
                                <div className="links">
                                    <button className="addToFav" >إضافة إلي المفضلة</button>
                                    <button className="addToFav" >حذف من المفضلة</button>
                                </div>
                            </div>
                        })
                    ) : <p className="nothingToshow">لا يوجد كلمات لعرضها</p>}

                    <NavLink className="goback" to="/">Go Back Home</NavLink>
                </div>
            </div>
        </div >

    )
}

export default UserFavs