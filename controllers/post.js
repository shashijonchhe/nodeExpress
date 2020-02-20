const Post = require('../models/post')

exports.getPosts = (request,response)=>{
    response.json({

            posts:[
                {bro:"Bikram"},
                {sis:"Binita"}
            ]
    });
};

exports.createPost=(req,res)=>{
    const post = new Post(req.body);
    console.log("Creating Post:",req.body);
}