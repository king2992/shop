import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
import './App.css'
import data from './data.js';
import {useState} from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './detail';
import Inven from './inven';
import Cart from './cart';
import Age from './age';
import axios from 'axios';

export let Context1 = React.createContext();

function App(){
  let navigate = useNavigate()

  let [inven, setInven] = useState([10, 11, 12])

  let [shoes, setShoes] = useState(data);

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
        </Navbar>      
        <Routes>
        <Route path="/" element={ 
                                  <>
                                  <div className="main-bg"></div>
                                  <div className="container">
                                    <div className="row">
                                      { shoes.map((a, i)=>{
                                        return <Card shoes={shoes[i]} i={i} key={i}></Card>
                                        })}
                                      </div>
                                  </div> 
                                  </>
                                } /> 
          <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
          <Route path="*" element={ <div>없는페이지임</div> } />
          <Route path="/about" element={ <About/> } >  
            <Route path="member" element={ <div>멤버들</div> } />
            <Route path="location" element={ <div>회사위치</div> }/>     
          </Route>
          <Route path="/event" element={ <TodayEvent/> } >  
            <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
            <Route path="two" element={ <div>생일기념 쿠폰받기</div> } />     
          </Route>
          <Route path="inven" element={
            <Context1.Provider value={{ inven, shoes }}>
              <Inven shoes={shoes} />
            </Context1.Provider>
          } />
          <Route path="cart" element={<Cart/>}/>
          <Route path="age" element={<Age/>}/>
        </Routes>
        <button type='buton' onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json').then((res) => {
                    console.log(res.data)
                    let copy = [...shoes];
                    let result = copy.concat(res.data);
                    setShoes(result);
                })
                .catch(() => {
                    console.log('실패함')
                })
            }}>상품 불러오기</button>
      </div>
    )
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function TodayEvent(){
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
