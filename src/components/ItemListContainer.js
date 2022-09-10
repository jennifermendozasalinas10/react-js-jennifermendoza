
const ItemListContainer = (props) => {
    
    return ( 
        <>
        <h2>{props.name}</h2>
        <p>{props.color}</p>
        <p>{props.precio}</p>

       
        <p>(c) 2022 {props.autor} Accesorios Ozali </p>
        
        </>
            
    ); 
}
 export default ItemListContainer;