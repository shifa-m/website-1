import express from "express";
const router=express.Router();


//controllers


router.route("/").post(authenticate,authorizeAdmin,createCategory);
router.route("/:categoryId").put(authenticate,authorizeAdmin ,updateCategory);

router.route("/:category")
.delete(authenticate , authorizeAdmin ,removeCategory);

router.route("/category").get(listCategory);
router.route("/:id").get(readCategory);


export default router;