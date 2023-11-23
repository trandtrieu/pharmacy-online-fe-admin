import { useEffect } from "react";
import { useState } from "react"
import { deleteDiscountCode, getAllDiscount } from "../services/DiscountService";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faWrench } from "@fortawesome/free-solid-svg-icons";




const DiscountCodeList = () => {

    const [vouchers, setVouchers] = useState([]);
    const [r, setR] = useState()

    useEffect(
        () => {
            getAllDiscount().then(
                response => {
                    setVouchers(response.data)
                }
            )
        }, [r]
    )

    // ---------------------------------------------------------

    const updateVoucher = (id) => {

    }

    const deleteVoucher = (id) => {
        if (window.confirm("Are you sure to delete this Discount code?")) {
            deleteDiscountCode(id).then(
                response => {
                    setR(Math.random())
                }
            )
        }
    }

    const addVoucher = () => {

    }

    return (
        <div className="body-wrapper">
            <h2 className='text-center'>Voucher list</h2>
            <div className='container'>
                <Link to="/add-discount"><button className='btn btn-primary' style={{ marginBottom: "10px" }}><FontAwesomeIcon icon={faPlus} /></button></Link>
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
                                    <Link to={`/update-discount/${voucher.id}`}>
                                        <button className='btn'>
                                            <FontAwesomeIcon icon={faWrench} />
                                        </button>
                                    </Link>

                                    <button onClick={() => deleteVoucher(voucher.id)} style={{ marginLeft: '10px' }} className='btn'>
                                        <FontAwesomeIcon icon={faTrash} />
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