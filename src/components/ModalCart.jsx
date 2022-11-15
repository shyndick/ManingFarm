export const ModalCart = ({onClose, title, cart, deleteAllCart}) => {

    const handleClick = () => {
        onClose()
    }

    const handleChildClick = (e) => {
        e.stopPropagation()
    }

    const handleClickZakaz = () => {
        localStorage.setItem('zakaz', JSON.stringify(cart))
        deleteAllCart()
        console.log(cart)
        onClose()
    }

    return(
        <div className="modal" onClick={(e) =>handleClick(e)}>
            <div className="modal_wrapper" onClick={(e) =>handleChildClick(e)}>
                <h2>{title}</h2>
                <p>content</p>
                <input type="text" />
                <input type="email" />
                <input type="phone" />
                <button onClick={(e) =>handleClickZakaz()}>zakaz</button>
                <button onClick={(e) =>handleClick(e)}>close</button>
            </div>
        </div>
    )
}