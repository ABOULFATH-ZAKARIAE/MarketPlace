const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Vendeur = require('../Models/VendeurModel');


//_______________________  authentication________________________

const signup = (req, res) =>{
        bcrypt.hash(req.body.password, 10, function(err,hashPassword) {
                if(err) {
                        res.json({error : err})
                }

                const firstName = req.body.firstName;
                const lastName = req.body.lastName;
                const phone = req.body.phone;
                const email = req.body.email;
                const login = req.body.login;
                const password = hashPassword;
                const identité_fiscale = req.body.identité_fiscale;

                const vendeur = new Vendeur ({
                        firstName,
                        lastName,
                        phone,
                        email,
                        login,
                        password,
                        identité_fiscale,

                });
                vendeur
                .save()
                .then(()=> res.json("Your requist on Progress"))
                .catch((err) => res.status(400).json("Error :" +err));
        })
}

//____________________________________________________________________login___________________________________________________________

const login = (req, res) => {

        let login = req.body.login;
        let password = req.body.password
    
        Vendeur.findOne({login: login})
        .then(vendeur => {
                if(vendeur){
                        bcrypt.compare(password,vendeur.password, function(err, result){
                                if(err) {
                                        res.json({
                                                error: err
                                        })
                                }
                                if(result) {
                                        let token =jwt.sign({login: login}, 'ABOULFATHkey', (err, token) =>{
                                                res.json({
                                                 token
                                                })
                        })
                }else {
                        res.json({
                                message : 'password incorrect try again'
                        })
                }
        })
    
        }else {
                res.json({
                        message : 'Login not Found'
                })
        }
    }).catch((err) => res.status(400).json("Error :"+ err))
    
    }
    

module.exports={
    signup, login
}