import mongoose from "mongoose"


async function connectDB(){

            try{

                        await mongoose.connect(process.env.MONGO_URI)

                        console.log("DataBase has been Connected Successfully")
            }
            catch(error){

                        console.log("Database error",error)

            }
}