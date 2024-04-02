const router = require('express').Router();
const productController = require('../controllers/productController')



//post data
router.post("/", productController.add_product);

//get all data from database
router.get("/" , productController.get_all_products);

//get only one product from data using ID
router.get("/:_id", productController.get_one_products);

//update data using id
router.put("/:_id", productController.update_product);

//delete data using id
router.delete("/:_id", productController.delete_products);


module.exports = router;