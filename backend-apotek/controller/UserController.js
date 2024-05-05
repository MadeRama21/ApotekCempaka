import Apotek from "../model/apotek.js";
import { validationResult, check } from "express-validator";

export const getDataObat = async(req, res) => {
    try {
        const dataApoteks = await Apotek.find();
        res.json(dataApoteks)
    } catch (error) {
        res.status(500).json({msg: err.message})
    }
}

export const getDataObatByKodeObat = async(req, res) => {
    try {
        const dataObat = await Apotek.findOne({ kodeObat: req.params.kodeObat})
        res.json(dataObat)
    } catch (error) {
        res.status(404).json({msg: err.message})
    }
}

export const saveObat = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const obat = new Apotek(req.body)
    try {
        const insertObat = await obat.save();
        res.status(201).json(insertObat)
    } catch (error) {
        res.status(400).json({msg: err.message})
    }
}

export const updateObat = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const updatedObat = await Apotek.updateOne({kodeObat: req.params.kodeObat}, {$set: req.body})
        res.status(200).json(updatedObat)
    } catch (error) {
        res.status(400).json({msg: err.message})
    }
}

export const deleteObat = async(req, res) => {
    try {
        const deletedObat = await Apotek.deleteOne({kodeObat: req.params.kodeObat})
        res.status(200).json(deletedObat)
    } catch (error) {
        res.status(400).json({msg: err.message})
    }
}