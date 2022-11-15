export const ModalHeader = () => {
    

    return (
        <div className="modal" onClick={(e) =>handleClick(e)}>
            <div className="modal_wrapper" onClick={(e) =>handleChildClick(e)}>
                <h2>Заказать звонок</h2>
                <input type="text" />
                <input type="email" />
                <input type="phone" />
                <button onClick={(e) =>handleClickZakaz()}>zakaz</button>
                <button onClick={(e) =>handleClick(e)}>close</button>
            </div>
        </div>
    )
}