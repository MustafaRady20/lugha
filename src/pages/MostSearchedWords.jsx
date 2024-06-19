import "./mostSearchedWords.css"
import { useEffect, useState } from "react";
import axios from "axios";



function MostSearchedWords() {
  const [words, setWords] = useState([])


  const getData = async () => {
    const response = await axios.get("http://localhost:3000/mostSearchedWords")
    if (response.status === 200) {
      setWords(response.data)
    }
  }

  const addToFav = async (item) => {
    const response = await axios.post("http://localhost:3000/favWords", item)
    if (response.status !== 201) {
      alert("Somthing Wrong , try again")
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
            الكلمات الأكثر بحثًا
          </h2>
        </div>


        <div className="content">

          {words.length ? (
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
                  <button className="addToFav" onClick={() => addToFav(item)}>إضافة إلي المفضلة</button>
                </div>
              </div>
            })
          ) : <p>لا يوجد كلمات لعرضها</p>}
        </div>
      </div>
    </div >

  )
}

export default MostSearchedWords