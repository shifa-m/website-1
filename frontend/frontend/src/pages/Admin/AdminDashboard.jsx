import Chart from "react-apexcharts";//graphs aur charts banane
import {useGetUsersQuery} from "../../redux/api/usersApiSlice"
import {
            useGetTotalOrdersQuery,
            useGetTotalSalesByDateQuery,
            useGetTotalSalesQuery

} from "../../redux/api/orderApiSlice";


import { useState , useEffect } from "react";
import AdminMenu from "./AdminMenu";
import OrderList from "./OrderList";
import Loader from "../../components/Loader";


const AdminDashboard=()=>{
            const {data:sales,isLoading}=useGetTotalSalesQuery();
            const {data:customers,isLoading:loading} = useGetUsersQuery();
            const {data:orders,isLoading:loadingTwo}=useGetTotalOrdersQuery();
            const {data:salesDetails}=useGetTotalSalesByDateQuery();
}


const [state,setState]=useState({
            options:{
                        chart:{
                                    type:"line",
                        },
                        tooltip:{
                                    theme:"dark"
                        },
                        colors:['#00E396'],
                        dataLabels:{
                                    enabled:true,
                        },
                        stroke:{
                                    curve:"smooth",
                        },
                        title:{
                                    text:"Sales Trend",
                                    align:"left",
                        },
                        grid:{
                                    borderColor:"#ccc",
                        },
                        markers:{
                                    size:1,
                        },
                        xaxis:{
                                    categories:[],
                                    title:{
                                                text:"Date",
                                    }
                        },
                        yaxis:{
                                    title:{
                                                text:"Sales",
                                    },
                                    min:0,

                        },
                        legend:{
                                    position:"top",
                                    horizontalAlign:"right",
                                    floating:true,
                                    offsetY:-25,
                                    offsetX:-5
                        }
            },
            series:[{name:"Sales",data:[]}]
})