import React from 'react'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { AccountForm, AddressFrom, UserFrom } from './FormSections'
import { useState } from 'react';


type dataProps = {
    firstName: string,
    lastName: string,
    city: string,
    zipCode: string,
    name: string,
    email: string,
}

const  INITIAL_DATA = {
    firstName: "",
    lastName: "",
    city: "",
    zipCode: "",
    name: "",
    email: "",
}

export default function MultiStepFrom() {

    const [data, setData] = useState(INITIAL_DATA)

    const {currentStepIndex ,step,steps, previous, next, isFirst, isLast, setCurrentStepIndex} = useMultiStepForm([<UserFrom {...data} updateFields={updateFields}/>, 
                                                                                                                   <AddressFrom {...data} updateFields={updateFields}/>, 
                                                                                                                   <AccountForm {...data} updateFields={updateFields}/>])

    
    function handleFinish (){
        alert('form is submitted successfully!')
        setCurrentStepIndex(0)
        console.log(data)
    }

    function updateFields(fields: Partial<dataProps>){
        setData(prev => {return {...prev, ...fields}})
    }

    return (
    <div style={{padding:'30px', marginTop:'20px', borderRadius:'5px', maxWidth: 'max-content'}}>

        <div>
        <div>{currentStepIndex +1} / {steps.length}</div>

        <div >
        {step}
        </div>

        <div>
        {!isFirst && <button onClick={previous}>previous</button>}
        {isLast?<button onClick={handleFinish}>Finish</button> : <button onClick={next}>next</button>}
        </div>

    </div>
    
    </div>
  )
}
