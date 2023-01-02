import React from 'react'
import { Button } from 'react-bootstrap'
import { states } from './states.js'
const UserDetails = () => {
    return (
        <div className="user-details-wrapper">
            <h3 className="checkout-title">Delivery details</h3>
            <form className="user-details-form">
                <div className="form-group">
                    <label htmlFor="firstname" className="label-control">First name</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="label-control">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="states" className="label-control">State</label>
                    <select className="form-control">
                        {states.map((state) => (
                            <option value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div clasName="form-group">
                    <label htmlFor='address' className="label-control">Address</label>
                    <input type="text" className="form-control" />
                </div>
                <div clasName="form-group">
                    <label htmlFor='phone' className="label-control">Phone</label>
                    <input type="text" className="form-control" />
                </div>
                <Button className="checkout" type="submit">Checkout</Button>
            </form>

        </div>
    )
}
export default UserDetails