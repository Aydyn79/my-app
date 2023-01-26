import React, {useState}  from'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody, Card, CardBody, CardTitle, CardText,  } from 'reactstrap';


const AcordionItem = ({ id, name, image, designation, description }) => {

    return (
        <AccordionItem key={id}>
            <AccordionHeader  targetId={id}>{name}</AccordionHeader>
            <AccordionBody accordionId={id}>
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <img src={image} alt={name} width="105" height="105" />
                        </div>                
                        <div className="col-10 col-md-5 m-1">
                                <Card body className="text-start" outline color="light" style={{
                                    width: '57rem' }}>
                                    
                                        <CardTitle><h4>{name}</h4></CardTitle>
                                    
                                        {designation}
                                        <hr/>
                                        <CardText>{description}</CardText>
                                    
                                </Card>
                        </div>
                    </div>
                </div>
            </AccordionBody>
        </AccordionItem>
    )
}

export default function Alternate(props) {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };
    return (
        <Accordion open={open} toggle={toggle}>
                {props.leaders.map((leader) => (
                <AcordionItem {...leader} />
                ))}
        </Accordion>
        )
    }