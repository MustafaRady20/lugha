import "./mostSearchedWords.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actGetMeaning } from "../store/meaningSlice";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search/Search";


function MostSearchedWords() {
  const [words, setWords] = useState([])
  const navigate = useNavigate()
  const { username } = useSelector((state) => state.login)
  const { loading } = useSelector(state => state.meaning)
  const dispatch = useDispatch()

  const search = (item) => {
    dispatch(actGetMeaning({ data: item, username: username }))
    if (loading === "success") {
      navigate("/result")
    }
    console.log(loading)
  }


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:8080/top10")
      console.log(response)
      if (response.status === 200) {
        setWords(response.data)
      }
    }
    getData()

  }, [])

  return (
    <div className="mostSearchedWords">
      <div className="container">
        <div className="title">
          <h2>
            الكلمات الأكثر بحثًا
          </h2>
        </div>

        {loading === "pending" && <p>Loading .....</p>}
        <div className="subtitle" style={{ width: "100%", textAlign: "center" }}>
          <h2>قم بالضغط على الكلمة للبحث </h2>
        </div>
        <div className="content">

          {words ? (
            words.map((item) => {
              return <div className="topWord" key={item} onClick={() => { search(item) }}>
                <h4>{item}</h4>
              </div>
            })
          ) : <p>لا يوجد كلمات لعرضها</p>}
        </div>
        <br /><br /><br />
        <div className="search">
          <h2>هل تريد البحث عن كلمة اخرى ؟</h2>
          <Search placeholder="ابحث عن معنى اخر" />
        </div>
      </div>
    </div >

  )
}

export default MostSearchedWords