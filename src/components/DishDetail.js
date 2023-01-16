import React from'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


// export default function DishDetail(props) {
//     (props.dish)?<>
//         <div className="container">
//             <div className="row">
//                 <div  className="col-7 col-md-6 m-1">
//                     <div className="row">
//                         <Card>
//                             <CardImg top src={props.dish.image} alt={props.dish.name} />
//                             <CardBody>
//                                 <CardTitle>{props.dish.name}</CardTitle>
//                                 <CardText>{props.dish.description}</CardText>
//                             </CardBody>
//                         </Card>
//                     </div>
//                 </div> 
//                 <div className="col-5 border m-1" style={{wordWrap: 'break-word'}}>
//                         {props.dish.comments.map(comment => 
//                             <><p>{comment.comment}</p><p>{comment.author}</p><p>{comment.date}</p></>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//         </>:<div>кабздидзе</div>

// }

export default function DishDetail(props) {
    const dish = props.dish
    if (dish){
        return (
        <div className="container">
            <div className="row">
                <div  className="col-7 col-md-6 m-1">
                    <div className="row">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div> 
                <div className="col-5 border m-1" style={{wordWrap: 'break-word'}}>
                        {dish.comments.map(comment => 
                            <><p>{comment.comment}</p><p>{comment.author}</p><p>{comment.date}</p></>
                        )
                    }
                </div>
            </div>
        </div>)}
        else{return(<div>А вы ничего не выбрали</div>)}

}