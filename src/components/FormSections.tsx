
import { ReactElement } from 'react';
import styled from 'styled-components';


type FormWrapperProps = {
    title: string,
    children: ReactElement[] | ReactElement
}

const FromWrapper = ({title, children}: FormWrapperProps) =>{

    return (
        <>
        <h2 style={{textAlign: 'center'}}>{title}</h2>

        <div style={{display: 'grid'}}>
            {children}
        </div>
        </>
    )

}

// Start Account Props from here

type AccountData = {
    name: string,
    email: string,
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}

const Input = styled.input`
    width: 100%;
    border: 1px solid;
    padding: 10px 10px;
    border-radius: 3px;
    margin: 7px 0px;
`;

const Label = styled.label`
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
`;

const Title = styled.title`
    font-size: 30px;
    font-weight: bolder;
`;


export const AccountForm = ({name, email, updateFields}: AccountFormProps) =>{
    return (
    <FromWrapper title='Account'>
        <Input required type="text" id="name" value={name} onChange={e => updateFields({name: e.target.value})}/>
        <Label htmlFor="name">Name</Label>
        <Input required type="text" id="email" value={name} onChange={e => updateFields({name: e.target.value})}/>
        <Label htmlFor="email">Email</Label>

    </FromWrapper>)
}

type AddressData = {
    city: string,
    zipCode: string,
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}


export const AddressFrom = ({city, zipCode, updateFields}: AddressFormProps) =>{
    return (
    <FromWrapper title='Address'>
        <Input required type="text" id="city" value={city} onChange={e => updateFields({city: e.target.value})}/>
        <Label htmlFor="city">city</Label>
        <Input required type="text" id="postal-code" value={zipCode} onChange={e => updateFields({zipCode: e.target.value})}/>
        <Label htmlFor="postal-code">postal-code</Label>
    </FromWrapper>)
}



type UserData = {
    firstName: string,
    lastName: string,
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export const UserFrom = ({firstName, lastName, updateFields}: UserFormProps) =>{
   
   return (<FromWrapper title='User'>
        <Input required type="text" id="first-name" value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>
        <Label htmlFor="first-name">first-name</Label>
        <Input required type="text" id="last-name" value={lastName} onChange={e => updateFields({lastName: e.target.value})}/>
        <Label htmlFor="last-name">last-name</Label>
    </FromWrapper>)
}

