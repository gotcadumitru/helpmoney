import React, { useState } from 'react';
import MyButton from '../../components/Button/MyButton';
import FormInput from '../../components/form-input/FormInput';
import s from './NewDay.module.css'

const NewDay = (props) => {
    const [values, changeValues] = useState({
        gasValues: '',
        startValues: '',
        endValues: '',
        otherValues: '',
        otherValuesPFA: '',
        startMoneyInApp: '',
        endMoneyInApp: '',
        ciubuc: '',
        selectedDay: '',
    })

    const handleChange = (e) => {
        changeValues({ ...values, [e.target.id]: e.target.value })
    }
    const handleSumit = (e) => {
        e.preventDefault();
        props.sendData(values);
        props.history.push('/');
    }
    return (
        <div className={s.newDayComponent}>

            <form onSubmit={handleSumit}>
                {/* <FormInput list="daysOfWeek" id='selectedDay' value={values.selectedDay} handleChange={handleChange} />

                <datalist id="daysOfWeek">
                    <option className={s.check} value="Monday" />
                    <option value="Tuesday" />
                    <option value="Wednesday" />
                    <option value="Thursday" />
                    <option value="Friday" />
                    <option value="Saturday" />
                    <option value="Sunday" />
                </datalist> */}
                <FormInput type="date" id="selectedDay"  handleChange={handleChange} value={values.selectedDay} required />
                <FormInput type="number" id="startValues" label="Start Day With" handleChange={handleChange} value={values.startValues} required />
                <FormInput type="number" id="startMoneyInApp" label="Start Money In App" handleChange={handleChange} value={values.startMoneyInApp} required />
                <FormInput type="number" id="endValues" label="End Day With" handleChange={handleChange} value={values.endValues} required />
                <FormInput type="number" id="endMoneyInApp" label="End Money In App" handleChange={handleChange} value={values.endMoneyInApp} required />
                <FormInput type="number" id="gasValues" label="Gas Value" handleChange={handleChange} value={values.gasValues} />
                <FormInput type="number" id="otherValuesPFA" label="Other" handleChange={handleChange} value={values.otherValuesPFA} />
                <FormInput type="number" id="otherValues" label="Other for PFA" handleChange={handleChange} value={values.otherValues} />
                <MyButton isSubmitBtn>Submit</MyButton>
            </form>
        </div>

    )
}
export default NewDay;