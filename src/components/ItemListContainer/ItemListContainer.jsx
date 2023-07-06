import "./ItemListContainer.css";

function ItemListContainer (props) {
    return (
        <div className="itemListContainer">
            <h2 className="greetings"> {props.greetings}</h2>
        </div>
    )
}

export default ItemListContainer;
