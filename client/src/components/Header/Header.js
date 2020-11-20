import './Header.css'
import { PatientInfoContext } from '../../PatientInfoProvider'
import React, { useContext } from 'react'
import openEyeIcon from './eye.svg'
import crossedEyeIcon from './crossed-eye-icon.svg'
export function Header() {
    const {
        state: { filters,
            pendingIs,
            rejectedIs,
            doneIs
        },
        filterPatient,
        updateFilter,
        selectColumnFilter
    } = useContext(PatientInfoContext);
    return (
        <div className="header">
            <div>
                <div>
                    <img className="header__open" src={openEyeIcon} alt="open eye icon" />
                    <img className="header__image header__closed" src={crossedEyeIcon} alt="eye icon crossed out" />
                </div>
                <div className="header__column-buttons">
                    <div className="header__checkboxes">
                        <input type="checkbox" id="list1" name="list1" value="list1" className="header__checkbox" onChange={() => selectColumnFilter('pendingIs')} checked={pendingIs} /><label className="header__label">P</label>
                    </div>
                    <div className="checkboxes">
                        <input type="checkbox" id="list2" name="list2" value="list2" className="header__checkbox" onChange={() => selectColumnFilter('doneIs')} checked={doneIs} /><label className="header__label">D</label>
                    </div>
                    <div className="checkboxes">
                        <input type="checkbox" id="list3" name="list3" value="list3" className="header__checkbox" onChange={() => selectColumnFilter('rejectedIs')} checked={rejectedIs} /><label className="header__label">R</label>
                    </div>
                </div>
            </div>
            <input id="header__input" onChange={(e) => { filterPatient(e.target.value) }} />
            <div className="header__dropdown">
                <button className="header__dropbtn">Search by</button>
                <div className="header__dropdown-content">
                    <button className={filters === 'arrhythmias' ? "header__dropdown-buttons header__active-filter" : "header__dropdown-buttons"} onClick={() => { updateFilter('arrhythmias') }}>Arrhythmias</button>
                    <button className={filters === 'name' ? "header__dropdown-buttons header__active-filter" : "header__dropdown-buttons"} onClick={() => { updateFilter('name') }}>Patient Name</button>
                </div>
            </div>
        </div >
    );
}

