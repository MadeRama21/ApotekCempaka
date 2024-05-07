import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import apotekcempaka from '../assets/apotekcempaka.svg';

function Header(){
    let [open, setOpen]=useState(false)
    return(
        <React.Fragment>
            <div className="shadow-md w-full fixed top-0 left-0">
                <div className="md:flex items-center justify-between bg-primari py-9 md:px-10 sm:px-10 px-5">
                    <div className="cursor-pointer">
                        <img src={apotekcempaka} alt="apotek_cempaka" />
                    </div>
                    <div onClick={() => setOpen(!open)} className="text-2xl absolute right-8 text-sekunder top-8 sm:right-14 cursor-pointer md:hidden transition-all ease-in duration-500">
                        {/* Menggunakan ikon yang sesuai tergantung pada status 'open' */}
                        <FontAwesomeIcon icon={open ? faXmark : faBars} />
                    </div>
                    <ul className={`text-sekunder font-poppins font-semibold md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-primari md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-linear ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
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