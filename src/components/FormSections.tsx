
import { ReactElement } from 'react';


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


export const AccountForm = ({name, email, updateFields}: AccountFormProps) =>{
    return (
    <FromWrapper title='Account'>
        <input type="text" id="name" value={name} onChange={e => updateFields({name: e.target.value})}/>
        <label htmlFor="name">Name</label>
        <input type="text" id="email" value={name} onChange={e => updateFields({name: e.target.value})}/>
        <label htmlFor="email">Email</label>

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
        <input type="text" id="city" value={city} onChange={e => updateFields({city: e.target.value})}/>
        <label htmlFor="city">city</label>
        <input type="text" id="postal-code" value={zipCode} onChange={e => updateFields({zipCode: e.target.value})}/>
        <label htmlFor="postal-code">postal-code</label>
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
        <input type="text" id="first-name" value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>
        <label htmlFor="first-name">first-name</label>
        <input type="text" id="last-name" value={lastName} onChange={e => updateFields({lastName: e.target.value})}/>
        <label htmlFor="last-name">last-name</label>
    </FromWrapper>)
}

