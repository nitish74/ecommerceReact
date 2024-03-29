import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

const PaymentForm = () => {

    const [state, setState] = useState({
        number: '',
        name: '',
        cvc: '',
        expiry: '',
        focus: ''
    })

    const handleFocus = (e) => {
        setState({ 
            ...state,
            focus: e.target.name 
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ 
            ...state,
            [name]: value 
        });
    }

    const submitPayment = () => {
        console.log("name => " , state.name)
        console.log("number => " , state.number)
        console.log("expiry => " , state.expiry)
        console.log("cvc => " , state.cvc)
        alert(JSON.stringify(state))
    }

    return (
        <div className="card" >
            <div className="card-body">
                <Cards
                    cvc={state.cvc}
                    expiry={state.expiry}
                    focused={state.focus}
                    name={state.name}
                    number={state.number}
                />
                <form>
                    <div className="form-group">
                        <label htmlFor="number">Card Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="number"
                            maxLength="16"
                            placeholder="Card Number"
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Nombre">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            maxLength="30"
                            placeholder="Name"
                            onChange={handleChange}
                            onFocus={handleFocus}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Expary Date</label>
                            <input
                                type="text"
                                className="form-control"
                                name="expiry"
                                maxLength="4"
                                placeholder="Expary date"
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvc">CVv</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cvv"
                                maxLength="4"
                                placeholder="CVv"
                                onChange={handleChange}
                                onFocus={handleFocus}
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-success btn-block btn-lg"
                        onClick={submitPayment}
                    >Page</button>
                </form>
            </div>
        </div>
    );
}

export default PaymentForm