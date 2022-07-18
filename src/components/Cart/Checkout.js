import React, { useRef, useState } from 'react';
import './Checkout.css';

const isEmpty = value => value.trim() === '';
const isNotSixChars = value => value.trim().length !== 6;

const Checkout = (props) => {

    const [formInputIsValid, setFormInputIsValid] = useState({
        name: true,
        address: true,
        city: true,
        pincode: true
    });

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const pincodeInputRef = useRef();
    const cityInputRef = useRef();


    const confirmHandler = (event) => {
        event.preventDefault(); //prevent page reload
        const enteredname = nameInputRef.current.value; //get name from input
        const enteredAddress = addressInputRef.current.value; //get address from input
        const enteredPincode = pincodeInputRef.current.value; //get pincode from input
        const enteredCity = cityInputRef.current.value; //get city from input

        const enterednameIsValid = !isEmpty(enteredname); //check if name is empty
        const enteredAddressIsValid = !isEmpty(enteredAddress); //check if address is empty
        const enteredPincodeIsValid = !isEmpty(enteredPincode) && !isNotSixChars(enteredPincode); //check if pincode is empty and not five chars
        const enteredCityIsValid = !isEmpty(enteredCity); //check if city is empty

        setFormInputIsValid({
            name: enterednameIsValid,
            address: enteredAddressIsValid,
            pincode: enteredPincodeIsValid,
            city: enteredCityIsValid
        }); //set form input is valid

        const formIsValid =
            enterednameIsValid &&
            enteredAddressIsValid &&
            enteredPincodeIsValid &&
            enteredCityIsValid; //check if form is valid

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredname,
            address: enteredAddress,
            pincode: enteredPincode,
            city: enteredCity
        }); //call onConfirm handler

    }; //confirm handler

    return (
        <form onClick={confirmHandler} className='co-form'>
            <div className={`co-control ${formInputIsValid.name ? '' : 'invalid'}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputIsValid.name && <p className='error'>Name is required</p>}
            </div>
            <div className={`co-control ${formInputIsValid.address ? '' : 'invalid'}`}>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' ref={addressInputRef} />
                {!formInputIsValid.address && <p className='error'>Address is required</p>}
            </div>
            <div className={`co-control ${formInputIsValid.pincode ? '' : 'invalid'}`}>
                <label htmlFor='pincode'>Pin Code</label>
                <input type='number' id='pincode' ref={pincodeInputRef} />
                {!formInputIsValid.pincode && <p className='error'>Pin Code is required (6 characters)</p>}
            </div>
            <div className={`co-control ${formInputIsValid.city ? '' : 'invalid'}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputIsValid.city && <p className='error'>City is required</p>}
            </div>
            <div className='co-actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout;