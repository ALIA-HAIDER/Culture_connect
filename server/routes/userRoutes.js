const express=require('express');
const router=express.Router();

const {registerUser,getMyProfile}=require('../controllers/userController');

router.post('/register',registerUser);
router.get('/me/:id',getMyProfile);

module.exports=router;