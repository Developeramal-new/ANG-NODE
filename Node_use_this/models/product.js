const mongoose = require('mongoose')

const productschema = mongoose.Schema({
    productName : {type : String, required: true,},
    category : {type : String, required : true},
    subcategory : {type : String},
    costprice : {type : number, required: true,},
    sellingprice : {type : number, required: true,},
    size : {type : Number},
    updated : {type: Date}
})
module.exports = mongoose.model('Products', productschema)