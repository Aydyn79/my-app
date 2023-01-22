import React, { useState, useEffect } from 'react'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai'
import './acordion.css'
import { DATAACORDION } from '../../shared/data_acordion';


const AcordionItem = ({ title, info }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="card">
            <div onClick={() => setExpanded(!expanded)} className="card-header">
                <h3 className="mb-0">
                    {title}
                </h3>
                <button className='btn' onClick={() => setExpanded(!expanded)}>
                    {expanded ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
                </button>
            </div>
            <div>
                <div className="card-body">
                    <p className="d-none d-sm-block">{expanded && {info}}</p>
                </div>
            </div>
        </div>
    )
}

export default function Acordion() {
    const [descriptions, setDescriptions] = useState([])

    useEffect(() => {
        setDescriptions(DATAACORDION);
    }, []);
    return (
        <main>
            <div className='container'>
            <section className='info'>
                {descriptions.map((description) => (
                <AcordionItem key={description.id} {...description} />
                ))}
            </section>
            </div>
        </main>
        )
    }
