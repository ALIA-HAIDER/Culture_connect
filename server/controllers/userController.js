const User = require('../models/User');

const registerUser = async (req, res) => {
    try{
        const newUser=await User.create(req.body);
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};


const getMyProfile = async (req, res) => {
    try{
        const user=await User.findById(req.params.id).populate('location');
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({error:'User not found'});
    }
};


module.exports={registerUser,getMyProfile}