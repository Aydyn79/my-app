import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



const Menu = (props) => {
    // const [show, setShow] = useState(false);
    // const [selectedish, setSelectedish] = useState(null);
    
    // const onDishSelect = (dish) =>{
    //     setSelectedish(dish)
    //     console.info(selectedish)
    // }

    
    const list = props.dishes.map((dish) => {
        return (
            <div  className="col-12 col-md-5 m-1">
                {/*<ModalWindow onClose={() => setShow(false)} show={show}>
                    <div className="container">
                        <div className="row">
                            <div  className="col-7 col-md-6 m-1">
                                <div className="row">
                                    <Card>
                                        <CardImg top src={selectedish.image} alt={selectedish.name} />
                                        <CardBody>
                                            <CardTitle>{selectedish.name}</CardTitle>
                                            <CardText>{selectedish.description}</CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div> 
                            <div className="col-5 border m-1" style={{wordWrap: 'break-word'}}>
                                gigfeifugfgerfireferuhfuoyoreforiioufnerocmrowcnifdfncfinnnnnhuonrfncofnoujcrncrou
                            </div>
                        </div>
                    </div>
                </ModalWindow>*/}
                <Card key={dish.id} onClick ={() => props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });

    
    return (
        <div className="container">
            <div className="row">
                {list}
            </div>
        </div>
    );
};


export default Menu;
