import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";

function EditObat() {
    const [kodeObats, setKodeObat] = useState("")
    const [jenisObat, setJenisObat] = useState("Ringan")
    const [namaObat, setNamaObat] = useState("")
    const [indikasi, setIndikasi] = useState("")
    const [expired, setExpired] = useState("")
    const [bentukObat, setBentukObat] = useState("Sirup")
    const navigate = useNavigate()
    const {kodeObat} = useParams()

    useEffect(() => {
        getDataObatByKodeObat()
    }, [])

    const getDataObatByKodeObat = async() => {
        const response = await axios.get(`http://localhost:5000/dataObat/${kodeObat}`)
        setKodeObat(response.data.kodeObat)
        setJenisObat(response.data.jenisObat)
        setNamaObat(response.data.namaObat)
        setIndikasi(response.data.indikasi)
        setExpired(response.data.expired)
        setBentukObat(response.data.bentukObat)
    }

    const updateObat = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/dataObat/${kodeObat}`, {
                kodeObat,
                jenisObat,
                namaObat,
                indikasi,
                expired,
                bentukObat
            });
            navigate("/apotek")
        } catch (error) {
            if (error.response) {
                // Server mengembalikan respons dengan status code 400 
                console.log(error.response.data); // Pesan kesalahan dari server
                console.log(error.response.status); // Status code 400
            } else if (error.request) {
                // Permintaan terkirim tetapi tidak menerima respons
                console.log(error.request);
            } else {
                // Terjadi kesalahan saat menyiapkan permintaan
                console.log('Error', error.message);
            }
        }
    }

    return(
        <React.Fragment>
            <Header/>
            <h2>Ini add obat</h2>
                <div className="columns">
                    <div className="column">
                        <form onSubmit={updateObat}>
                                <div className="field">
                                    <label>Kode Obat</label>
                                    <div className="control">
                                        <input type="text" value={kodeObats} onChange={(e) => setKodeObat(e.target.value)} placeholder="Masukkan Kode Obat"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Jenis Obat</label>
                                    <div className="control">
                                        <div className="select">
                                            <select value={jenisObat} onChange={(e) => setJenisObat(e.target.value)}>
                                                <option value="Ringan">Ringan</option>
                                                <option value="Sedang">Sedang</option>
                                                <option value="Keras">Keras</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Nama Obat</label>
                                    <div className="control">
                                        <input type="text" value={namaObat} onChange={(e) => setNamaObat(e.target.value)} placeholder="Masukkan Nama Obat"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Indikasi</label>
                                    <div className="control">
                                        <input type="text" value={indikasi} onChange={(e) => setIndikasi(e.target.value)} placeholder="Masukkan Indikasi Obat"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Expired</label>
                                    <div className="control">
                                        <input type="Date" value={expired} onChange={(e) => setExpired(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Bentuk Obat</label>
                                    <div className="control">
                                        <div className="select">
                                            <select value={bentukObat} onChange={(e) => setBentukObat(e.target.value)}>
                                                <option value="Sirup">Sirup</option>
                                                <option value="Tablet">Tablet</option>
                                                <option value="Kapsul">Kapsul</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button type="submit">Simpan</button>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            <Footer/>
        </React.Fragment>
    )
}

export default EditObat