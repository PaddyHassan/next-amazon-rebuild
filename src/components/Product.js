import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product = ({ id, title, price, description, category, image, rating }) => {
    // console.log(rating)
    const dispatch = useDispatch()
    const [hasPrime] = useState(Math.random() < 0.5);
    const addItemToBasket = () => {
        const product = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image, 
            hasPrime,
            rating
        }

        // Sending the product as an action to the Redux store(basket slice)
        dispatch(addToBasket(product));
    }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30  p-10 ">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs mt-2 mb-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="/Prime-tag.png" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product