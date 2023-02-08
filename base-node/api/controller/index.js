const Models = require('../model/index')

exports.getItem = async (req, res) => {
    try {
        let listData = await Models.find({})
        res.send({
            listData : listData
        })
    } catch (error) {
        res.send(error)
    }
}

exports.addItem = async (req, res) => {
    try {
        let name = req.body
        await Models.create(name)
        res.send({
            message: "Success"
        })
    } catch (error) {
        res.send(error)
    }
}

exports.deleteItem = async (req, res) => {
    try {
        console.log(req.params.id, 'BE')
        await Models.findByIdAndDelete(req.params.id)
        res.send({
            message: "Success"
        })
    } catch (error) {
        res.send(error)
    }
}

exports.updateItem = async (req, res) => {
    try {
        const name = req.body.name
        const age = req.body.age
        await Models.findByIdAndUpdate(req.params.id , {name : name , age : age})
        res.send({
            message: "Success"
        })
    } catch (error) {
        res.send(error)
    }
}


exports.searchItem = async (req, res) => {
    try {
        const name = req.query.textSearch
        const activePage = +req.query.activePage
        const limit = +req.query.limit
        const skip = (activePage - 1) * limit
        const totalRecord = await Models.countDocuments({name : {$regex : name , $options : 'i'}})
        const totalPage = Math.ceil(totalRecord / limit)
        const listData = await Models.find({name : {$regex : name , $options : 'i'}}).skip(skip).limit(limit)
        res.send({listData , totalPage})
    } catch (error) {
        res.send(error)
    }
}

exports.paginateItem = async (req , res ) => {
    try {
        const limit = +req.query.limit
        const activePage = +req.query.activePage
        const skip = (activePage - 1)*limit
        const totalRecord = await Models.countDocuments({})
        const totalPage = Math.ceil(totalRecord / limit)
        const listData = await Models.find({}).skip(skip).limit(limit)
        res.send({listData , totalPage})
    } catch (error) {
        res.send(error)
    }
}