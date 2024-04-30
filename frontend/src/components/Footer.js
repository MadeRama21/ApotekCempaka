import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faXTwitter, faTiktok, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import apotekcempakaFooter from '../assets/apotekcempaka_footer.svg'

function Footer(){
    return(
        <React.Fragment>
            <footer className="sm:min-h-96 sm:py-10 sm:px-10 xl:min-h-96 xl:py-10 xl:px-10 bg-primari bg-center bg-[url('/src/assets/bg-footer.svg')]">
                    <div className="sm:flex sm:justify-between sm:items-center sm:mx-5 xl:flex xl:justify-between xl:items-center xl:mx-5">
                        <div>
                            <a href="/"><img src={apotekcempakaFooter} alt="footer-image"></img></a>
                            <p className="xl:py-2 text-lg font-poppins text-sekunder tracking-widest">Teman sehatmu setiap saat!</p>
                            <div className="text-3xl text-sekunder py-2">
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faTelegram} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faXTwitter} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faTiktok} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon className="mr-2 px-2" icon={faYoutube} /></a>
                            </div>
                        </div>
                        <div className="list-none font-semibold">
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