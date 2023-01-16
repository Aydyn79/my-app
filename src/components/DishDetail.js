import React from'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderDish({dish}) {
    return(
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
    )
}

function RenderComments({comments}) {
    return(
    <div className="col-5 border m-1" style={{wordWrap: 'break-word'}}>
        {comments.map(comment => 
            <><p>{comment.comment}</p><p>{comment.author}</p><p>{new Intl.DateTimeFormat('ru-RU', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></>
            )
        }
    </div>
    )
}

export default function DishDetail(props) {
    const dish = props.dish
    if (!dish){return(<div>А вы ничего не выбрали</div>)}
    
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.dish.comments}/>
            </div>
        </div>)
}