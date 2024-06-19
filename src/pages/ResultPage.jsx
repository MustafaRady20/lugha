import Search from "../components/Search/Search"
import "./mostSearchedWords.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
function RsultPage() {
  const location = useLocation()
  const [words, setWords] = useState([])

  useEffect(() => {
    setWords(location.result)
  }, [location])

  const addToFav = async (item) => {
    const response = await axios.post("http://localhost:3000/favWords", item)
    if (response.status !== 201) {
      alert("Somthing Wrong , try again")
    }
  }
  return (
    <div className="mostSearchedWords">
      <div className="container">
        <div className="mb-5">
          <Search />
        </div>

        <div className="content">
          {
            words.map((item) => {
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
                  <button className="addToFav" onClick={() => addToFav(item)} >إضافة إلي المفضلة</button>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </div>

  )
}

export default RsultPage