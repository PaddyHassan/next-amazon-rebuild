import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
  } from "@heroicons/react/outline";
  import Image from "next/image";
//   import { useSelector } from "react-redux";
//   import { selectItems } from "../slices/basketSlice";
  import { useRouter } from "next/router";
  import { signIn, signOut, useSession } from "next-auth/client";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)
    
  return (
    <header>
        {/* top nav */}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                onClick={() => router.push("/")}
                src="/amazon_PNG11.png"
                width={150}
                height={40}
                objectFit="contain"
                className='cursor-pointer'
                />
            </div>
            {/* Search */}
            <div className='hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer'>
                <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'/>
                <SearchIcon className='h-12 p-4' />
            </div>
            {/* Right */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div onClick={!session ? signIn : signOut} className=' link' >
                <p className="hover:underline">
                    {session ? `Hello, ${session.user.name}!` : "Sign In"}
                </p>
                <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>
                <div className=' link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>
                <div 
                    className='relative link flex items-center'
                    onClick={() => router.push("/checkout")}
                >
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                        {items.length}
                    </span>
                    <ShoppingCartIcon className='h-10' />
                    <p className='hidden font-extrabold md:inline text-sm mt-2'>Basket</p>
                </div>
            </div>
            
        </div>
        {/* bottom nav */}
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'> 
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1' />
                All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header