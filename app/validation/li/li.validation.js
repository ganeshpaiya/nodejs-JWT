const Joi=require("@hapi/joi");


const registerValidation = Register => {

    const schema = {
        username : Joi.string().min(4).required(),
        email: Joi.string().min(4).required().email(),
        password: Joi.string().min(4).required()
    };
    return Joi.validate(Register,schema);
}
const loginValidation = login => {
    console.log("loginvalidationtest");
    const schema = {
        username : Joi.string().min(4).required(),
        password: Joi.string().min(4).required().error(() => {
            return {
              message: 'Coins is required.',
            };
        })
    };
    return Joi.validate(login,schema);
}

// const registerValidation=data=>{
//     console.log(data);
// const shema={
// username:Joi.string().min(6).reauired(),
// email:Joi.string().min(6).reauired().email(),
// password:Joi.string().min(6).reauired()

// };
// console.log('ganesh',data,shema);
// return Joi.validate(data,shema);
// }
// const loginValidation=data=>{
//     const shema={
//     username:Joi.string().min(6).reauired(),
//     password:Joi.string().min(6).reauired()
//     };
    
//     return Joi.validate(data,shema);
//     }
   
module.exports.registerValidation=registerValidation; 
module.exports.loginValidation=loginValidation; 