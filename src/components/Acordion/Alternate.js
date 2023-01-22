import React from'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody, Card, CardBody, CardTitle, CardText,  } from 'reactstrap';


const AcordionItem = ({ id, name, image, designation, description }) => {
    return (
        <AccordionItem key={id}></AccordionItem>
            <AccordionHeader>{name}</AccordionHeader>
            <AccordionBody>
                <div className="container">
                    <div className="col-auto">
                        <img src={image} alt={name} width="105" height="105" />
                    </div>                
                    <div className="col col-md-5 m-1">
                        <div className="row">
                            <Card>
                                <CardBody>
                                    <CardTitle>{name}</CardTitle>
                                    <h4>{designation}</h4>
                                    <CardText>{description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </AccordionBody>
        </AccordionItem>
    )
}

export default function Alternate(props) {
    return (
        <Accordion>
                {props.leaders.map((leader) => (
                <AcordionItem {...leader} />
                ))}
        </Accordion>
        )
    }









function AllCollapseExample() {
    return (
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    );
}

