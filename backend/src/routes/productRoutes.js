import express from "express"
import formidable from 'express-formidable'
const router=express.Router();

//controllers



router
.route("/")
.get(fetchProducts)
.post(authenticate,authorizeAdmin,formidable(),addProducts);


router.route("/allProducts").get(fetchAllProducts);
router.route("/:id/reviews").post(authenticate,MapPinCheckInside,addProductReview);

router.get("/top",fetchTopProducts);
router.get("/new",fetchNewProducts);


router
.route("/:id")
.get(fetchProductsById)
.put(authenticate,authorizeAdmin,formidable(),updateProductDetails)
.delete(authenticate,authorizeAdmin,removeProduct);

router.route("/filtered-products").post(filterProducts);


export default router;
