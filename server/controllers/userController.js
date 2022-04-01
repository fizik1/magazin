const User = require('../models/userModel')


const registrUser = async (req, res)=>{
    const { name, phone, address, email, password } = req.body
    console.log(req.body);
    const newUser = await User({
        name,
        phone,
        address,
        email,
        password
    })
    await newUser.save((err, userSaved) => {
        if (err) throw err
    })
    res.redirect('/')
}

const loginUser = async (req, res) =>{
    try {
        const userExist = await User.findOne({email:req.body.email})
        console.log(userExist);
        if (userExist){
            console.log(userExist);
            const matchPassword = userExist.password === req.body.password
            if(matchPassword){
                req.session.user = userExist
                req.session.isLogged = true
                req.session.save(err=>{
                    if(err) throw err
                    res.redirect('/profil')
                })
            }else{
                res.send('parol xato')
                console.log('xato1');
            }
        }else{console.log('xato2');}
    } catch (error) {
        res.send('email xato')
        console.log(error);
    }
}

const getUser = async (req, res)=>{
    try {
        res.send(req.session)
    } catch (error) {
        console.log(error);
    }
}

const logOut = async (req, res)=>{
    const logged = await req.session
    logged.user = {}
    logged.isLogged = false
    logged.save((err)=>{
        if (err) throw err
    })
    res.redirect('/')
}

module.exports= {
    registrUser,
    loginUser,
    getUser,
    logOut
}