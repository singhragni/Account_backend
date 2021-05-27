const mongoose = require('mongoose');

module.exports = {
    mangodb : async () =>{
        try{
            await mongoose.connect('mongodb://localhost:27017/myfirstdatabase', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                useCreateIndex: true
            });
            console.log("Data Basse connected");
        }
        catch(err){
            console.log("Data Basse is not connected ");
            process.exit();
        }
    }
}