import React from'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderDish({dish}) {
    return(
    
        <div className="row">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    
    )
}

function RenderComments({comments}) {
    return(
    <div style={{wordWrap: 'break-word'}}>
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        </div>)
}