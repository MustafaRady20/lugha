import "./mostSearchedWords.css"

import { useSelector } from "react-redux";
import Search from "../components/Search/Search";


import { Navigate } from "react-router-dom"

function UserFavs() {


    const { favsList } = useSelector(state => state.favs)
    const { username } = useSelector((state) => state.login)
    console.log(favsList)



    return (
        username ? <div className="mostSearchedWords">
            <div className="container">
                <div className="title">
                    <h2>
                        {`مرحبًا ${username}`}
                    </h2>
                    <p>كلمات أعجبتك</p>
                </div>
                <div className="content">
                    <div className="item" >
                        {
                            favsList?.length > 0 ? favsList?.map((word) => {
                                return <>
                                    <div className="subword" key={word.entryId} >
                                        <h3>{word.UserSearchWord}</h3>
                                        <div className="subWordContent">
                                            <div className="row">

                                                <span> نوع الكلمة: - {word.mainPOS} / <span className="res">{word.subPOS}</span> `</span>
                                            </div>
                                            <div className="row">
                                                <span>جذر الكلمة : <span className="res">{word.resultSenseDTO[0].root}</span> / وزن الكلمة <span className="res">{word.resultSenseDTO[0].pattern}</span></span>

                                            </div>
                                            <div className="row">
                                                <span>المعنى : <span className="res">{word.resultSenseDTO[0].definition}</span></span>
                                                {word.resultSenseDTO[0].example ? <span>مثال: {word.resultSenseDTO[0].example}</span> : ""}

                                            </div>
                                            <div className="row">
                                                {word.resultSenseDTO[0].coins.length > 0 ? <span>
                                                    <span>
                                                        تعبيرات شائعة :
                                                    </span>
                                                    {

                                                        word.resultSenseDTO[0].coins.map((word, index) => {

                                                            return <span key={word.id} style={{ marginRight: 10, marginLeft: 10 }} className="res">
                                                                {word.word}،
                                                            </span>
                                                        })
                                                    }

                                                </span> : ""}

                                            </div>

                                        </div>
                                    </div >
                                </>
                            }) : ""
                        }
                    </div>
                </div>



                <br /><br /><br />
                <div className="search">
                    <h2>هل تريد البحث عن كلمة اخرى ؟</h2>
                    <Search placeholder="ابحث عن معنى اخر" />
                </div>
            </div>
        </div > : <Navigate to="/sign" />

    )
}

export default UserFavs