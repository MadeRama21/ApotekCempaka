import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faXTwitter, faTiktok, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import apotekcempakaFooter from '../assets/apotekcempaka_footer.svg'

function Footer(){
    return(
        <React.Fragment>
            <footer className="min-h-96 py-10 px-10 bg-primari bg-[url('/src/assets/bg-footer.svg')]">
                    <div className="flex justify-between items-center mx-5">
                        <div>
                            <a href="/"><img src={apotekcempakaFooter} alt="footer-image"></img></a>
                            <p className="py-2 text-lg font-poppins text-sekunder tracking-widest">Teman sehatmu setiap saat!</p>
                            <div className="text-3xl text-sekunder py-2">
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faTelegram} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faXTwitter} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faTiktok} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faYoutube} /></a>
                            </div>
                        </div>
                        <div className="nav-navigation list-none font-semibold">
                            <h2 className="px-4 text-2xl font-poppins text-sekunder">Navigasi</h2>
                            <div className="text-lg font-poppins font-normal tracking-wider">
                                <p className="px-4 text-sekunder"><a href="/">Beranda</a></p>
                                <p className="px-4 text-sekunder"><a href="/profil">Profil</a></p>
                                <p className="px-4 text-sekunder"><a href="/produk">Produk</a></p>
                                <p className="px-4 text-sekunder"><a href="/kontak">Kontak</a></p>
                            </div>
                        </div>
                    </div>
            </footer>
            <div className="bg-primari py-3 flex justify-center items-center text-sekunder text-base font-poppins">
                <p>&copy; 2024 Apotek Cempaka. Hak cipta dilindungi.</p>
            </div>
        </React.Fragment>
    );
}

export default Footer;