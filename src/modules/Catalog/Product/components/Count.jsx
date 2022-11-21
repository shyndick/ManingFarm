import { useState } from "react";
import MinusSquareOutlined from '@ant-design/icons';

export const  CartCount = ({count, handleClickMinus, handleClickPlus}) => {
    // const [count, setCount] = useState(0)

    // const handleClickPlus = () => {
    //     setCount(count+1)
    // }

    // const handleClickMinus = () => {
    //     if(count > 0) setCount(count-1)
    // }

    return(
        <div className="count_items">
            <button onClick={handleClickMinus} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            <div className="count">
                {count}
            </div>
            <button onClick={handleClickPlus}><i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
    )
}
