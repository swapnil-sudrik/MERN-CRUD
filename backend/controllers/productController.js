const Product = require('../model/Product');


//get all
const get_all_products = async (req,res)=>{

    try{
        const products = await Product.find();
        return  res.status(200).json(products);
        res.end();
    }catch(err){
        return res.status(400).json({message: err});
    }

}

//get one
const get_one_products = async (req,res)=>{

    try{
        const product = await Product.findById(req.params._id);
        return res.status(200).json(product);
    }catch(err){
        return res.status(400).json(err);
    }

}

//add new
const add_product = async (req,res)=>{

    const product= new Product({
        title:req.body.title,
        price:req.body.price,
        imageUrl:req.body.imageUrl,
        details:req.body.details
    });

    try{
        const addProduct = await product.save();
        return res.status(200).send(addProduct)
    }catch(err){
        return res.status(400).send(err);
    }

}

//update
const update_product = async (req,res)=>{
    const product= new Product({
        title:req.body.title,
        price:req.body.price,
        imageUrl:req.body.imageUrl,
        details:req.body.details
    });
    try{
        const update = await Product.findByIdAndUpdate(req.params._id, req.body,{
            new: true, // Return the updated document
            runValidators: true // Validate the updates against the model's schema
        });
        
    if (!update) {
        return res.status(404).json({
          message: 'Item not found'
        });
      }
  
      return res.status(200).json( update);
        // return res.status(200).json(update);
    }catch(err){
        return res.status(400).send(err)
    }
}

//delete
const delete_products = async (req,res)=>{

    try{
        const deletedItem = await Product.findByIdAndDelete(req.params._id);
        
        if (!deletedItem) {
            return res.status(400).json({
              status: 'error',
              message: 'Item not found'
            });
          }
      
          return res.status(200).json({
            status: 'success, Item Deleted',
            data: null
          });
    }catch(err){
        console.log("in err")
        return res.status(400).json(err);
    }

}

module.exports={
    get_all_products,
    get_one_products,
    add_product,
    update_product,
    delete_products
}

