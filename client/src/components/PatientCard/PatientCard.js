import React, { useContext } from 'react'
// import { usePatientInfo, usePatientInfoUpdate } from './PatientInfoProvider'
import { PatientInfoContext } from '../../PatientInfoProvider'
import './PatientCard.css'

export const PatientCard = (props) => {
    const {
        updatePatient,
        state: {
            done,
            pendingOrRejected
        }
    } = useContext(PatientInfoContext);
    return (
        <div className="card">
            <div id="card__info">
                <div>
                    <p className="card__para card__titles">General Information</p>
                    <p className="card__para ">Name:</p>
                    <p className="card__para ">{props.patient_name}</p>
                    <p className="card__para ">Reading taken on: </p>
                    <p className="card__para ">{props.created_date}</p>
                    <p className="card__para ">Status: {props.status[0]}{props.status.slice(1, 8).toLowerCase()}</p>
                    <p className="card__para  card__titles">Arrythmias</p>
                    <ul className="card__ul">
                        {props.arrhythmias.map((arrhythmia) => {
                            return <li key={props.arrhythmias.indexOf(arrhythmia)}>{arrhythmia}</li>
                        })}
                    </ul>
                </div>
                <div id="card__button-change">
                    <button className="card__button" id="card__change" onClick={() => updatePatient(props.id)}>{props.status === 'DONE' ? done : pendingOrRejected}</button>
                </div>
            </div>
        </div>
    )
}



export default PatientCard

