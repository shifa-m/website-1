import express from "express";


const router=express.Router();

router
 .route("/")
 .post(createUser)
 .get(authenticate,authorizeAdmin,getAllUsers);

router.post("/auth",);
router.post("/logout",);

router
.route("/profile")
.get(authenticate,getCurrentUserProfile)
.put(authenticate,updateCurrentUserProfile)


router
.route(":/id")
.delete(authenticate,authorizeAdmin,deleteUserById)
.get(authenticate,authorizeAdmin,getUserById)
.put(authenticate,authorizeAdmin,updateUserById);

export default router;