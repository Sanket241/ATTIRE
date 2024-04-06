const mongoose = require('mongoose');

const ConnectDb =async ()=>{
    try {
        await mongoose.connect(process.env.MONOGO_URL);
        console.log("connection is successfull")
    } catch (error) {
        console.log("connection is not successfull")
    }

}
module.exports = ConnectDb;