import express from 'express'
const router=express.Router();

//controllers



router
.route("/")
.post(authenticate,createOrder)
.get(authenticate,authorizeAdmin,getAllOrders);

router.route("/mine").get(authenticate,getUserOrders);
router.route("/total-orders").get(countTotalOrders);
router.route("/total-sales").get(calculateTotalSales);
router.route("/:id").get(authenticate,findOrderById);
router.route("/:id/pay").put(authenticate,markOrderAsPaid);
router.route("/:id/deliver").put(authenticate,authorizeAdmin,markOrderAsDelivered);

export default router;

