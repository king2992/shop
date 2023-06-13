import { useParams } from 'react-router-dom'

function Detail(props){
    let {id} = useParams();
    console.log(props)
    let detailItem = props.shoes.find((x) => x.id == id )
    return(
        <div className="container">
            <div className="row">
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
        </div> 
    )
}

export default Detail;
