import React from 'react';
import { useAddtoCart } from '../store';
import { ShoppingCart } from '../icons/shoping-cart';
import Cart from './cart';

export const StickyNavbar: React.FC = () => {

    const count = useAddtoCart((state) => state.count)

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold text-gray-900">
                        </a>
                    </div>
                    <div className="flex-1 items-center">
                        <a href='#'  className="text-gray-900 hover:text-gray-600 transition-colors duration-200 flex justify-end px-4">
                            <ShoppingCart />
                            <span className='absolute top-2 bg-black text-white rounded-md w-6 h-6 text-sm items-center justify-center flex'>
                                {count}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

