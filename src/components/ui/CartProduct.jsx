import { useRef, useState, useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faX } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from "../../context/CartContext";

export default function CartProduct({productDetails, handleQuantityChange}) {

  const { deleteFromCart } = useContext(CartContext);
  const [ productQuantity, setProductQuantity ] = useState(String(productDetails.quantity));
  const subtotal = productDetails.price * Number(productQuantity);

  const inputRef = useRef(null);
  
  const incrementQuantity = () => {
    setProductQuantity(prevQuantity => {
      const newQuantity = Number(prevQuantity) + 1;
      handleQuantityChange(productDetails._id, newQuantity)
      return newQuantity
    });
  };

  const decrementQuantity = () => {
    setProductQuantity(prevQuantity => {
      if(prevQuantity > 1) {
        const newQuantity = Number(prevQuantity) - 1;
        handleQuantityChange(productDetails._id, newQuantity)
        inputRef.current.focus();
        return newQuantity
      } else {
        alert('Are you sure you want to remove this product?');
        // This should remove the product not return anything
        return Number(prevQuantity);
      }
    });
  };

  const changeQuantity = (e) => {
    const value = e.target.value;

    if(!isNaN(value) && value >= 0) {
      setProductQuantity(e.target.value);
    }
  };

  // add a validation using keydown event
  const verifyChangeQuantity = (e) => {
    if(e.key === 'Enter') {
      const newQuantity = Number(productQuantity);
      if(newQuantity <= 0) {
        alert('Are you sure you want to delete this product?');
        return;
      }
      setProductQuantity(prevQuantity => {
        handleQuantityChange(productDetails._id, newQuantity)
        return newQuantity
      });
    }
  };

  return (
    <div className="grid grid-cols-4">
      <div className="product-img flex gap-5 flex-wrap relative">
        <img src={`https://exclusive-api.onrender.com/image/${productDetails.images[0]}`} alt="Product Image" className="w-10 h-10"/>
        <p className="text-sm">{productDetails.name}</p>
        {/* delete button */}
        <button className="delete-btn flex items-center justify-center p-1.5 h-4 w-4 text-white bg-primaryRed rounded-full absolute -top-1.5 -left-2" style={{'fontSize': '10px'}} onClick={() => deleteFromCart(productDetails._id)}>
          <FontAwesomeIcon icon={faX}/>
        </button>
        
      </div>

      <h1 className="justify-self-center">${productDetails.price}</h1>

      <div className="quantity justify-self-center h-7 text-center w-12 relative">
        <input ref={inputRef} type="text" value={productQuantity < 10 ? `0${productQuantity}` : productQuantity} className="text-start w-full outline-none py-1 px-2 text-sm  border border-secondaryGray rounded-md" onChange={(e) => changeQuantity(e)} onKeyDown={(e) => verifyChangeQuantity(e)}/>
        <button className="absolute top-1 right-2" style={{fontSize:'8px'}} onClick={() => incrementQuantity()}><FontAwesomeIcon icon={faChevronUp}/></button>
        <button className="absolute bottom-1 right-2" style={{fontSize:'8px'}} onClick={() => decrementQuantity()}><FontAwesomeIcon icon={faChevronDown}/></button>
      </div>

      <h1 className="justify-self-end">${subtotal}</h1>
    </div>
  )
}