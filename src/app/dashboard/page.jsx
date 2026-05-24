"use client"
import dynamic from "next/dynamic";
import React from "react";

// import HeavyCharts from "@/components/HeavyCharts";
const ComponentA = dynamic(()=>import("@/components/HeavyCharts"), 
{
    loading: ()=> <p>Loading...</p>
})

const BarChart = dynamic(()=>import("@/components/Charts").then((mod)=>mod.BarChart))
const LineChart = dynamic(()=>import("@/components/Charts").then((mod)=>mod.LineChart))



const Dashboard = () => {
    const [showChart, setShowChart] = React.useState(false)
    return (
        <div>
            <h1 className="p-10">Dashboard</h1>
            <button onClick={()=>setShowChart(!showChart)}>Show My Chart</button>
            {
                showChart && <BarChart></BarChart>
            }
            
            <LineChart></LineChart>
        </div>
    );
};

export default Dashboard;