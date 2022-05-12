const express = require("express")
const { Router } = express
const { Services } = require("../services/Services")
const router = Router()
const services = new Services()

let id = 0

router.get("/api/productos", (req, res) => {
    res.json(services.getAll())
})

router.get("/api/productos/:id", (req, res) => {
    const { id } = req.params
    res.json(services.getById(Number(id)))
})

router.post("/api/productos", (req, res) => {
    services.add({ ...req.body, id: ++id })
    res.json({ producto: req.body, id })
})

router.put("/api/productos/:id", (req, res) => {
    const { id } = req.params
    const newObject = { ...req.query, id: Number(id) }
    services.put(Number(id), newObject)
    res.send("actualizdo")
})

router.delete("/api/productos/:id", (req, res) => {
    const { id } = req.params
    services.deleteById(Number(id))
    res.send("deleted ")
})

module.exports = router