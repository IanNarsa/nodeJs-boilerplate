import {insertDB} from "../controllers/orderController"

module.exports = (app) => {
    app.post("/api/v1/order", insertDB)
}