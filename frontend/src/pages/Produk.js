import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import fotoProduk from "../assets/contoh_obat.jpg";

function Produk() {
    return (
        <React.Fragment>
            <Header/>
            <section className="min-h-screen mx-36">
                <div className="flex justify-between items-center py-10">
                    <div>
                        <h1 className="text-primari font-bold text-xl">Produk</h1>
                    </div>
                    <div>
                        <form className="max-w-md mx-auto min-w-96">   
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Cari</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input 
                                type="search" 
                                id="default-search" 
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Cari obat..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cari</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="py-10 grid grid-cols-5 gap-5">
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                    <div className="h-70">
                        <div className="">
                                <img className="w-full max-w-60 rounded-t-lg" src={fotoProduk}></img>
                        </div>
                        <div className="bg-primari text-sekunder px-3 py-2 rounded-b-lg w-full max-w-60">
                            <p>Konidin Tablet</p>
                            <p className="text-xl font-bold"><FontAwesomeIcon className="mr-2" icon={faMoneyBillWave} />Rp 3.000</p>
                            <p className="text-right">Stok <span className="font-bold">54</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Produk