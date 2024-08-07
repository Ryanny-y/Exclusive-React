import { useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default function CartProduct({productDetails}) {

  const [ productQuantity, setProductQuantity ] = useState(1)
  const subtotal = productDetails.originalPrice * productQuantity

  const inputRef = useRef(null);

  const incrementQuantity = () => {
    setProductQuantity(currentQuantity => currentQuantity + 1);
  };

  const decrementQuantity = () => {
    setProductQuantity(currentQuantity => {
      if(currentQuantity > 1) {
        return currentQuantity - 1;
      } else {
        alert('Are you sure you want to remove this product?');
        // This should remove the product not return anything
        return currentQuantity;
      }
    });
  };

  const changeQuantity = () => {

  };


  return (
    <div className="grid grid-cols-4">
      <div className="product-img flex gap-5 flex-wrap relative">
        <img src={productDetails.image} alt="Product Image" className="w-10 h-10"/>
        <p className="text-sm">{productDetails.name}</p>
      </div>

      <h1 className="justify-self-center">${productDetails.originalPrice}</h1>

      <div className="quantity justify-self-center h-7 text-center w-12 relative">
        <input ref={inputRef} type="text" value={productQuantity} className="text-start w-full outline-none py-1 px-2 text-sm  border border-secondaryGray rounded-md" onChange={(e) => console.log(e)}/>
        <button className="absolute top-1 right-2" style={{fontSize:'8px'}} onClick={() => incrementQuantity()}><FontAwesomeIcon icon={faChevronUp}/></button>
        <button className="absolute bottom-1 right-2" style={{fontSize:'8px'}} onClick={() => decrementQuantity()}><FontAwesomeIcon icon={faChevronDown}/></button>
      </div>

      <h1 className="justify-self-end">${subtotal}</h1>
    </div>
  )
}