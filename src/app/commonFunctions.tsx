'use client';

import Image from 'next/image';
import React, {Key, useState} from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export function Header() {
    return (
        <header
            className="w-full mx-0 bg-gradient-to-b from-orange-100 via-orange-100 to-transparent dark:from-gray-950 dark:via-gray-900 dark:to-transparent text-black p-4">
            <div className="container mx-auto grid grid-cols-2 gap-4 mb-5 mt-2">
                <Image src={"/Red_Chinese.png"} alt={"Dragon Express Logo"} width={100} height={100}
                       className="row-span-2 text-lg font-bold flex items-center justify-center"/>
                <nav className="row-span-2 flex items-center justify-end">
                    <ul className="flex space-x-4 justify-end">
                        <li><a href="#" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#" className="hover:text-gray-300">
                            <ShoppingCartIcon className="w-10 h-auto">
                            </ShoppingCartIcon>
                        </a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export function Card({item}) {
    const [showViewer, setShowViewer] = useState(false);

    const showImage = () => {
        setTimeout(() => {
            setShowViewer(true);
        }, 100);
    };

    const closeImageViewer = () => {
        setShowViewer(false);
    };

    return (
        <div className="flex flex-col flex-wrap rounded-2xl overflow-hidden">
            <div className="w-full h-32 relative justify-center items-center">
                <Image src={item.imagePath} alt={item.name} width={1000} height={1000}
                       className="absolute h-full object-cover object-center cursor-pointer items-center dark:opacity-90"
                       onClick={showImage}/>
            </div>
            <div
                className="w-full flex flex-col bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-4 transition-colors justify-center items-center">
                <div className="font-bold text-gray-700 dark:text-gray-300 text-xl mb-3 items-end">{item.name}</div>
                <p className="text-gray-700 dark:text-gray-200 text-base mb-2 items-center">
                    {item.price}€
                </p>
            </div>
            <button
                className="bg-orange-500 hover:bg-orange-700 text-gray-100 dark:text-gray-200 font-bold py-2 px-4 items-end transition-all">
                {"Order"}
            </button>
            {showViewer && <ImageViewer imagePath={item.imagePath} onClose={closeImageViewer}/>}
        </div>
    );
}

export function BackCard({item}) {
    return (
        <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden">
            <div className="w-full flex flex-col bg-gray-200 px-6 py-4">
                <div className="font-bold text-xl mb-3 items-end">{item.name}</div>
                <p className="text-gray-700 text-base mb-2 items-end">
                    {item.price}€
                </p>
            </div>
            <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 items-end">
                {"Order"}
            </button>
        </div>
    );
}

export function Grid({items}) {
    return (
        <div className="grid grid-cols-4 gap-4 p-4 mt-6">
            {items.map((item: { id: Key; }) => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    );
}

export const ImageViewer = ({imagePath, onClose}) => {
    const handleImageClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-80 flex justify-center items-center z-50"
            onClick={onClose}>
            <div className="p-4 rounded-lg relative" onClick={handleImageClick}>
                <div className="absolute top-0 right-0 bg-red-600 rounded-full">
                    <button
                        onClick={onClose}
                        className="m-2 text-white hover:text-gray-100"
                    >
                        <span className="text-2xl">&times;</span>
                    </button>
                </div>
                <Image src={imagePath} alt="Image Viewer" width={500} height={500}
                       className="object-contain shadow-xl rounded-2xl"/>
            </div>
        </div>
    );
};

export const MainBanner = ({algorithm}) => {
    return (
        <div className="flex flex-wrap m-8">
            <div className="grid grid-cols-2 gap-4 w-1/2">
                <div className="col-span-1">
                    <img src="/schezwan-noodles-or-szechuan-vegetable-png.webp" alt="First Image"
                         className="w-1/3 h-auto"/>
                </div>
                <div className="col-span-1">
                    <img src="/sesame-chicken.png.webp" alt="Middle Image" className="w-1/3 h-auto"/>
                </div>
                <div className="col-span-1">
                    <img src="/sichuan-pork-with-ai-generated-free-png.png" alt="Last Image" className="w-1/3 h-auto"/>
                </div>
            </div>

            <div className="flex flex-col w-full md:w-1/2 p-4 items-center">
                <h1 className="flex text-4xl font-bold mb-4 items-end justify-end">Best chinese dishes in the Great
                    Apple!</h1>
                <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-10 rounded items-center">
                    Discover
                </button>
            </div>
        </div>
    );
};
