import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

function calcPrices(orderitems){
            const itemsPrice=orderitems.reduce(
                        (acc,item)=>acc+item.price*item.qty,0)
}

const shippingPrice=itemsPrice>100?0:10;//agar itsmprice 100 se ziyada raha toh shipping amount 0 ny toh 10
const taxRate=0.15;
const taxPrice=(itemsPrice*taxRate).toFixed(2); //matlab tofixed matlab last k decimals sirf 2 rakho jaisa agar 12.0828782 aya toh sirf 12.08 aisa

const totalPrice=(
            itemsPrice+
            shippingPrice+
            parseFloat(taxPrice).toFixed(2)
)

return{
            itemsPrice:itemsPrice.toFixed(2),
            shippingPrice:shippingPrice.toFixed(2),
            taxPrice,
            totalPrice
}

const createOrder=async(req,res)=>{

            try{
                        const {orderItems,shippingAddress,paymentMethod}=req.body;

                        if(orderItems && orderItems.length===0){
                                    res.status(400);
                                    throw new Error("No Order items");
                        }
            }
}