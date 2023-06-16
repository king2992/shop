import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'

function Detail(props){

    console.log("Before render")

    let [alert, setAlert] = useState(true)
    let [fade, setFade] = useState('')

    //랜더링 이후에 동작
    useEffect(()=>{ 
        setFade('end');


        let a = setTimeout(()=>{ setAlert(false) }, 10000)
        return ()=>{
          clearTimeout(a)
        }
      }, [])

    let {id} = useParams();
    let detailItem = props.shoes.find((x) => x.id == id )
    return(
        <div className="container">
            <div className={'row start ' + fade}>
                <div className="col-md-6">
                <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id)+1) + '.jpg'} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{detailItem.title}</h4>
                <p>{detailItem.content}</p>
                <p>{detailItem.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
            {
                alert == true
                    ? <div className="alert alert-warning">
                        10초이내 구매시 할인
                    </div>
                    : null
            }
        </div> 
    )
}


export default Detail;
