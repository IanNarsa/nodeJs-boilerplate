import {client} from "../config/db.Config"

const hai = async (req, res) => {
    res.json({check: "complate"})
}

const insertDB = async (req, res) => {
    const payload = req.body
    console.log("cek payload ", payload);
    
    await client.query('its your DB '+ payload.userID)
    return res.json({response:"ok"})
    
}

module.exports = {
    hai,
    insertDB
}