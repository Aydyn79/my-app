import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Acordion from './Acordion/Acordion';
import Alternate from './Acordion/Alternate';

export default function AboutUs(props) {
    return(
    <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>About Us</h3>
                <hr />
            </div>
        </div>

        <div className="row row-content align-items-center">
            <div className="col-12 col-sm-6 col-xl-6">
                <h2>Our History</h2>
                <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
            </div>
            <div className="col-12 col-sm-6">
                <div className="card">
                    <h3 className="card-header bg-primary text-white">Facts At a Glance</h3>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-6">Started</dt>
                            <dd className="col-6">3 Feb. 2013</dd>
                            <dt className="col-6">Major Stake Holder</dt>
                            <dd className="col-6">HK Fine Foods Inc.</dd>
                            <dt className="col-6">Last Year's Turnover</dt>
                            <dd className="col-6">$1,250,375</dd>
                            <dt className="col-6">Employees</dt>
                            <dd className="col-6">40</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card card-body bg-light">
                    <blockquote className="blockquote">
                        <p className="mb-0">You better cut the pizza in four pieces because
                            I'm not hungry enough to eat six.</p>
                        <hr/>
                        <footer className="blockquote-footer">Yogi Berra,
                            <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                            P. Pepe, Diversion Books, 2014</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>


        <div className="row row-content align-items-center">
            <div classNameName="col-12">
                <h2 className="fatfont">Corporate Leadership</h2>
                <Alternate leaders={props.leaders}/>
                {/* <Acordion leaders={props.leaders}/> */}
            </div>
        </div>
        <div className="row row-content">
            <div className="col-12 col-sm-9">
                <h2>Facts &amp; Figures</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>&nbsp;</th>
                                <th>2013</th>
                                <th>2014</th>
                                <th>2015</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Employees</th>
                                <td>15</td>
                                <td>30</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <th>Guests Served</th>
                                <td>15000</td>
                                <td>45000</td>
                                <td>100,000</td>
                            </tr>
                            <tr>
                                <th>Special Events</th>
                                <td>3</td>
                                <td>20</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <th>Annual Turnover</th>
                                <td>$251,325</td>
                                <td>$1,250,375</td>
                                <td>~$3,000,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    </div>
    )
}