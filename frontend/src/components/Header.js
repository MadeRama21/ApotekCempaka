import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import apotekcempaka from '../assets/apotekcempaka.svg';

function Header(){
    let [open, setOpen]=useState(false)
    return(
        <React.Fragment>
            {/* <nav className="left-0 right-0 top-0 py-7 px-10 bg-primari">
                <div className="flex justify-between items-center md:flex md:px-10 px-7">
                    <div className="nav-image">
                        <a href="/"><img src={apotekcempaka} alt="logo apotek" /></a>
                    </div>
                    <div className="flex list-none font-poppins font-semibold md:flex md:items-center">
                        <li className="px-4 md:ml-8 md:my-0 my-7 text-sekunder"><a href="/">Beranda</a></li>
                        <li className="px-4 text-sekunder"><a href="/profil">Profil Apotek</a></li>
                        <li className="px-4 text-sekunder"><a href="/produk">Produk</a></li>
                        <li className="px-4 text-sekunder"><a href="/apotek/add_obat">Tambah Obat</a></li>
                        <li className="px-4 text-sekunder"><a href="/apotek">Daftar Obat</a></li>
                        <li className="px-4 text-sekunder"><a href="/kontak">Kontak</a></li>
                    </div>
                    <div className="login_logo text-sekunder">
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                    </div>
                    <div className="xl:hidden">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>  
            </nav> */}

            <div className="shadow-md w-full fixed top-0 left-0">
                <div className="md:flex items-center justify-between bg-primari py-9 md:px-10 px-5">
                    <div className="cursor-pointer">
                        <img src={apotekcempaka} alt="apotek_cempaka" />
                    </div>
                    <div onClick={()=>setOpen(!open)} className="text-2xl absolute right-8 text-sekunder top-8 cursor-pointer md:hidden">
                        <FontAwesomeIcon id={faBars} name={open ? {faXmark} : 'Bars'} icon={faBars} />
                    </div>
                    <ul className={`text-sekunder font-poppins font-semibold md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-primari md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-linear ${open ? 'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
                    <li className="md:ml-6 md:my-0 my-4 text-[18px]"><a href="/">Beranda</a></li>
                    <li className="md:ml-6 md:my-0 my-4 text-[18px]"><a href="/profil">Profil Apotek</a></li>
                    <li className="md:ml-6 md:my-0 my-4 text-[18px]"><a href="/produk">Produk</a></li>
                    <li className="md:ml-6 md:my-0 my-4 text-[18px]"><a href="/apotek/add_obat">Tambah Obat</a></li>
                    <li className="md:ml-6 md:my-0 my-4 text-[18px]"><a href="/apotek">Daftar Obat</a></li>
                    <li className="md:ml-6 md:my-0 my-4 text-[18px]"><a href="/kontak">Kontak</a></li>
                    <FontAwesomeIcon className="md:ml-24 md:my-0 my-4 text-xl" icon={faArrowRightToBracket} />
                </ul>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Header;