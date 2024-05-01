import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import apotekcempaka from '../assets/apotekcempaka.svg';

function Header(){
    return(
        <React.Fragment>
            <nav className="left-0 right-0 top-0 py-7 px-10 bg-primari">
                <div className="flex justify-between items-center">
                    <div className="nav-image">
                        <a href="/"><img src={apotekcempaka} alt="logo apotek" /></a>
                    </div>
                    <div className="flex list-none font-poppins font-semibold">
                        <li className="px-4 text-sekunder"><a href="/">Beranda</a></li>
                        <li className="px-4 text-sekunder"><a href="/profil">Profil Apotek</a></li>
                        <li className="px-4 text-sekunder"><a href="/produk">Produk</a></li>
                        <li className="px-4 text-sekunder"><a href="/add_obat">Tambah Obat</a></li>
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
            </nav>

        </React.Fragment>
    );
}

export default Header;