const DB = require('../../model/model')

module.exports.save = (req,res)=>{
    if(!req.body){
        res.status(404).send({message:'Unable to Add User'})
        return 
    }else{
        //new user
        const New_User = new DB({
            name:req.body.name,
            email:req.body.email,
            gender:req.body.gender,
            contact_no:req.body.contact
        })

        New_User
            .save(New_User)
            .then(data =>{
                res.redirect('/add-new?user_add=true')
            })
            .catch(err =>{
                res.status(500).send({message:err})
            })
    }
}

module.exports.get = async (req,res)=>{
    try{
        const data = await DB.find()

        if(data){
            res.send(data).status(200)
        }else{
            res.send({message:'Any User Not Found...!'})
        }
    }catch(err){
        res.send({message:err})
    }

}