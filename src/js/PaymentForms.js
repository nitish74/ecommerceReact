import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const PaymentForms = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }

    const processPayment = () => {
        console.log("number => ", state.number)
        console.log("name => ", state.name)
        console.log("expiry => ", state.expiry)
        console.log("cvv => ", state.cvv)
        console.log(JSON.stringify(state))
    }

    return (
        <div className="card">
            <div className="card-body">

                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvv}
                    focused={state.focus}
                />
                <form>
                    <div className="form-group">
                        <label htmlFor="number">Card Number</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            maxLength="16"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Number</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength="30"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Date of expiry</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvc">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                id="cvv"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>

                    <button onClick={processPayment} type="button" className="btn btn-success btn-block btn-lg">Page</button>
                </form>
            </div>
        </div>
    )
}

export default PaymentForms