const router=require('express').Router()


router.get('/home',(req,res)=>{

   console.log('hittting route') 
   res.end('working')


})






module.exports=router