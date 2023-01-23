import React from 'react'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { AccountForm, AddressFrom, UserFrom } from './FormSections'
import { useState } from 'react';
import  styled  from 'styled-components';


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

const Container = styled.div`
    background-color: #f4eaea;
    width: 100vw;
    height: 100vh;  
    position: relative;
    display: grid;
    place-items:center;
`;

const Wrapper = styled.div`
    background-color: #e03636;
    padding: 5rem;
    border-radius:5px;
    /* margin: auto; */
    position: relative;
`;

const Button = styled.button`
background-color: white;
padding: 1rem;
border-radius: 5px;
margin: 5px;
font-size:15px;

&:hover{
    background-color:black;
    color:white;
    font-size:15px;
}
`;


const Count = styled.div`
    position:absolute;
    top:15px;
    right: 15px;
    color: white;

`;




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
    <Container>

        <Wrapper>
            <Count>{currentStepIndex +1} / {steps.length}</Count>

            <div >
            {step}
            </div>

            <div>
            {!isFirst && <Button onClick={previous}>previous</Button>}
            {isLast?<Button onClick={handleFinish}>Finish</Button> : <Button onClick={next}>next</Button>}
            </div>

        </Wrapper>
    
    </Container>
  )
}
