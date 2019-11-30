const {Schema, model}=require('mongoose');

const esquema = new Schema({
    titulo:{
       type: String,
       required:true 
    },
    texto:{
        type:String,
        required: true
    }
});

const Blog = model('Blog', esquema);

module.exports = Blog;