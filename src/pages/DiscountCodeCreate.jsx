import { useState } from "react"
import { getGenerateCode } from "../services/DiscountService"


const DiscountCodeCreate = () => {

    const [code, setCode] = useState('')

    const generateCode = (e) => {
        e.preventDefault()

        getGenerateCode().then(
            response => {
                setCode(response.data)
            }
        )

    }


    return (
        <div className="body-wrapper">
            Add page
            <button onClick={generateCode}>Generate Code</button>
            <p>{code}</p>
        </div>
    )
}

export default DiscountCodeCreate