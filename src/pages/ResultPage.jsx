import Search from "../components/Search/Search"
import "./resultPage.css"
import axios from "axios"
import { useEffect, useState, } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToFav } from "../store/favSlice"
function RsultPage() {

  const navigate = useNavigate()
  const { data, loading } = useSelector((state) => state.meaning)
  const dispatch = useDispatch()
  const [searchInContext, setSearchInConytext] = useState(false)
  const [context, setContext] = useState()
  const [meaningInGeneralDic, setMeaningInGeneralDic] = useState("")
  const [wordIndex, setWordIndex] = useState()
  const location = useLocation();
  const { search } = location.state || {}

  useEffect(() => {
    setWordIndex(0)
  }, [])

  const openSearchInContextHandler = () => {
    setSearchInConytext(!searchInContext)
  }
  const SearchInGeneralDic = async () => {

    const response = await axios.get(`http://localhost:8080/new/${search}`)
    setMeaningInGeneralDic(response.data)

  }
  const SearchInContext = async () => {


    const response = await axios.get(`http://localhost:8080/lugha/${context}/${search}`)
    console.log(response.data)

    let index
    if (typeof response.data === "string") {
      index = +response.data.slice(0, 1)
    }
    else {
      index = response.data
    }
    console.log(index)
    setWordIndex(index)
    console.log(+response.data.slice(0, 1))
  }

  return (
    <div className="mostSearchedWords">
      <div className="container">
        <div className="mb-5">
          <Search placeholder="ابحث عن معنى...." />
        </div>

        {

          loading === "pending" ?
            <div className="loading">
              <p>loading....</p>
            </div>
            : loading === "faild" ? navigate("/error") : data.Words !== null ? (
              <div className="content">
                <div className="item" >
                  <div className="word">
                    <h4 className="res">{`${data.UserSearchWord ? data.UserSearchWord : ""}`}</h4>
                  </div>
                  <div className="definitions">
                    {
                      data.Words === null ? (
                        <>
                          <div className="generalDic">
                            {meaningInGeneralDic !== 1 ? (meaningInGeneralDic) : meaningInGeneralDic === 1 ? "لايتوافر نتائج" : "...."}
                          </div>
                          <div className="searchIngeneralDic">
                            <button onClick={() => SearchInGeneralDic()}>بحث في المعجم المعاصر</button>
                          </div>
                        </>
                      ) : data.Words.length > 0 ? data.Words.map((word, index) => {
                        return <>
                          <div className="subword" key={word.entryId}>

                            <div className="subWordContent">
                              <div className="row">
                                <span className="entry">{`${index + 1}..${word.entry}`}</span>
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
                              <div className="row">
                                {word.resultSenseDTO[0].synonyms.length > 0 ? <span>
                                  <span>
                                    المرادفات  :
                                  </span>
                                  {

                                    word.resultSenseDTO[0].synonyms.map((word, index) => {

                                      return <span key={word.id} style={{ marginRight: 10, marginLeft: 10 }} className="res">
                                        {word.word}،
                                      </span>
                                    })
                                  }

                                </span> : ""}

                              </div>
                              <div className="row">
                                {word.resultSenseDTO[0].brokenPlural.length > 0 ? <span>
                                  <span>
                                    الجمع  :
                                  </span>
                                  {

                                    word.resultSenseDTO[0].brokenPlural.map((word, index) => {

                                      return <span key={word.id} style={{ marginRight: 10, marginLeft: 10 }} className="res">
                                        {word.word}،
                                      </span>
                                    })
                                  }

                                </span> : ""}

                              </div>
                              <div className="row">
                                {
                                  word.resultSenseDTO[0].conjugation.presentVerb ? <span>
                                    <span>
                                      الصيغ الاخرى من الفعل  :
                                    </span>
                                    {

                                      <span style={{ marginRight: 10, marginLeft: 10 }} className="res">
                                        {word.resultSenseDTO[0].conjugation.presentVerb} ،
                                        {word.resultSenseDTO[0].conjugation.passiveVerb} ،
                                        {word.resultSenseDTO[0].conjugation.passivePresentVerb} ،
                                        {word.resultSenseDTO[0].conjugation.imperativeVerb} ،
                                      </span>
                                    }

                                  </span> : ""
                                }

                              </div>


                            </div>
                            <div className=" add_romver_favs">
                              <button onClick={() => dispatch(addToFav(word))}>اضافة الي المفضلة</button>
                            </div>
                          </div >
                        </>
                      }) : <>
                        <div className="generalDic">
                          {meaningInGeneralDic !== 1 ? (meaningInGeneralDic) : meaningInGeneralDic === 1 ? "لايتوافر نتائج" : "...."}
                        </div>
                        <div className="searchIngeneralDic">
                          <button onClick={() => SearchInGeneralDic()}>بحث في المعجم المعاصر</button>
                        </div>
                      </>
                    }
                  </div>
                  <div>
                    <h2>كلمات تحمل نفس الجذر</h2>
                    <div className="wordsWithSameRoot">
                      {data.wordsSameRootList?.length > 0 ? (
                        data.wordsSameRootList.map((word) => {
                          return <div className={word.pos ? "sameRoot" : "block"}>
                            {`${word.name} - ${word.pos}`}
                          </div>
                        })
                      ) : (<p>لا يوجد</p>)}
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  {
                    data.Words.length > 0 && (<div className="openSearchInContext searchIngeneralDic">
                      <button onClick={openSearchInContextHandler}>بحث في سياق</button>
                    </div>)

                  }

                </div>
              </div>
            ) : <>
              <div className="generalDic">
                {meaningInGeneralDic !== 1 ? (meaningInGeneralDic) : meaningInGeneralDic === 1 ? "لايتوافر نتائج" : "...."}
              </div>
              <div className="searchIngeneralDic">
                <button onClick={() => SearchInGeneralDic()}>بحث في المعجم المعاصر</button>
              </div>
            </>
        }
        <div className={`searchInContext ${searchInContext ? "" : "hide"} `}>
          <p>هل تريد البحث عن الكلمة داخل سياق معين ؟</p>
          <div className="search">
            <input type="text" placeholder="ادخل الجملة..." onChange={(e) => setContext(e.target.value)} />
            <button onClick={SearchInContext}>بحث</button>
          </div>
          <>
            {

              wordIndex ? (
                <div className="content">
                  <div className="item" >
                    <div className="word">
                      <h4>{`..${data.UserSearchWord}`}</h4>
                    </div>
                    <div className="definitions">
                      {


                        <div className="subword" >

                          <div className="subWordContent">
                            <div className="row">

                              <span>{`نوع الكلمة: ${data.Words[wordIndex - 1].mainPOS} - ${data.Words[wordIndex - 1].subPOS} `}</span>
                            </div>
                            <div className="row">
                              <span>{`جذر الكلمة:${data.Words[wordIndex - 1].resultSenseDTO[0].root} - وزن الكلمة:${data.Words[wordIndex - 1].resultSenseDTO[0].pattern} `}</span>
                              <span>{``}</span>
                            </div>
                            <div className="row">
                              <span>{`المعنى: ${data.Words[wordIndex - 1].resultSenseDTO[0].definition} `}</span>
                              <span>{`مثال: ${data.Words[wordIndex - 1].resultSenseDTO[0].example ? data.Words[wordIndex - 1].resultSenseDTO[0].example : "..............."} `}</span>
                            </div>
                            <div className="row">
                              <span>
                                <span>                            تعبيرات شائعة :
                                </span>
                                {

                                  data.Words[wordIndex - 1].resultSenseDTO[0].coins.slice(0, 3).map((word, index) => {

                                    return <span key={word.id} style={{ marginRight: 10, marginLeft: 10 }}>
                                      {word.word}،
                                    </span>
                                  })
                                }

                              </span>
                            </div>

                          </div>
                        </div >


                      }

                    </div>
                  </div>
                </div>
                // ........
              ) : ""


            }
          </>
        </div>
      </div>
    </div >

  )
}

export default RsultPage