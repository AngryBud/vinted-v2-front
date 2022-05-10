import './App.css';
import Home from './pages/Home';
import Offer from './pages/Offer';
import Publish from './pages/Publish';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Cookies from "js-cookie";
import Payement from './pages/Payment';
import PageNotFound from './pages/PageNotFound';


function App() {

  const [token, setToken] = useState(Cookies.get("userToken" || null),{ expires: 7 });
  const [toggleModal, setToggleModal] = useState(false);
  const [nameModal, setNameModal] = useState("");
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("price-asc");
  const [minMax, setMinMax] = useState([0, 10000]);

  return <Router>
          <Routes>
            <Route path="/" element={<Home token={token} setToken={setToken}
                                          toggleModal={toggleModal} setToggleModal={setToggleModal}
                                          nameModal={nameModal} setNameModal={setNameModal}
                                          sort={sort} setSort={setSort}
                                          minMax={minMax} setMinMax={setMinMax}
                                          title={title} setTitle={setTitle}/>}/>
            <Route path="/offer/:id" element={<Offer token={token} setToken={setToken}
                                                      toggleModal={toggleModal}
                                                      nameModal={nameModal}
                                                      setToggleModal={setToggleModal}
                                                      setNameModal={setNameModal}/>}/>
            <Route path="/publish" element={<Publish token={token} setToken={setToken}
                                          toggleModal={toggleModal} setToggleModal={setToggleModal}
                                          nameModal={nameModal} setNameModal={setNameModal}
                                          sort={sort} setSort={setSort}
                                          minMax={minMax} setMinMax={setMinMax}
                                          title={title} setTitle={setTitle}/>}/> 
            <Route path="/payement" element={<Payement token={token} setToggleModal={setToggleModal}
                                          setNameModal={setNameModal}/>}/>   
            <Route path="*" element={<PageNotFound />}></Route>
            
          </Routes>
        </Router>
      
}

export default App;
