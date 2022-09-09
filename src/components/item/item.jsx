import './item.css'

const Item = ({titulo, precio, imagen}) => {
    return (
        <div className="item">
            <img width={"50%"} height={"60%"} src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <span>{precio}</span>
        </div>
    )
}

export default Item;