import { useEffect } from "react";
import { useState } from "react"
import { getAllDiscount } from "../services/DiscountService";




const DiscountCodeList = () => {

    const [vouchers, setVouchers] = useState([]);

    useEffect(
        () => {
            getAllDiscount().then(
                response =>{
                    setVouchers(response.data)
                }
            )
        }
    )

    // ---------------------------------------------------------

    const updateVoucher = (id) => {
        
    }

    const deleteVoucher = (id) => {
        
    }

    const addVoucher = () => {

    }

    return (
        <div className="body-wrapper">
            <h2 className='text-center'>Voucher list</h2>
                    <div className='container'>
                    <button className='btn btn-primary' style={{marginBottom : "10px"}} onClick={addVoucher} >Add voucher</button>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th className='col-md-3'>Code</th>
                                    <th className='col-md-3'>Discount %</th>
                                    <th className='col-md-3'>Availabel</th>
                                    <th className='col-md-3'>Status</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {vouchers.map((voucher) => (
                                    <tr key={voucher.id}>
                                        <td className="text-danger">{voucher.code}</td>
                                        <td className="text-danger">{voucher.discountPercentage}</td>
                                        <td className="text-danger">{voucher.timesUsable}</td>
                                        <td>
                                            <button onClick={() => updateVoucher(voucher.id)} className='btn btn-info'>
                                                Update
                                            </button>
                                            <button onClick={() => deleteVoucher(voucher.id)} style={{ marginLeft: '10px' }} className='btn btn-warning'>
                                                Delete
                                            </button>
                                            <button className='btn btn-success' style={{ marginLeft: '10px' }}>
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
        </div>
    )
}

export default DiscountCodeList