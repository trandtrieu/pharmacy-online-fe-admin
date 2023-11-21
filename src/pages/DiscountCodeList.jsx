import { useEffect } from "react";
import { useState } from "react"
import { deleteDiscountCode, getAllDiscount } from "../services/DiscountService";
import { Link } from "react-router-dom/cjs/react-router-dom";




const DiscountCodeList = () => {

    const [vouchers, setVouchers] = useState([]);
    const [r, setR] = useState()

    useEffect(
        () => {
            getAllDiscount().then(
                response =>{
                    setVouchers(response.data)
                }
            )
        }, [r]
    )

    // ---------------------------------------------------------

    const updateVoucher = (id) => {
        
    }

    const deleteVoucher = (id) => {
        deleteDiscountCode(id).then(
            response => {
                setR(Math.random())
            }
        )
    }

    const addVoucher = () => {

    }

    return (
        <div className="body-wrapper">
            <h2 className='text-center'>Voucher list</h2>
                    <div className='container'>                    
                    <Link to="/add-discount"><button className='btn btn-primary' style={{marginBottom : "10px"}}>Add voucher</button></Link>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th className='col-md-2'>Code</th>
                                    <th className='col-md-2'>Discount %</th>
                                    <th className='col-md-2'>Available</th>
                                    <th className='col-md-2'>Available</th>
                                    <th className='col-md-2'>Status</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {vouchers.map((voucher) => (
                                    <tr key={voucher.id}>
                                        <td className="text-danger">{voucher.code}</td>
                                        <td className="text-danger">{voucher.discountPercentage}</td>
                                        <td className="text-danger">{voucher.timesUsable}</td>
                                        <td className="text-danger">{voucher.expiryDate}</td>

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