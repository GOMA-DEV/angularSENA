const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
   
     name: "String",
     email: "String",
     age: "Number",
     address: "String",
     password: "String",
     
});
// Registrar el modelo
const User = mongoose.model('users', userSchema);

module.exports = User;