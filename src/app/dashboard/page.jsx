"use client"

// import HeavyCharts from "@/components/HeavyCharts";
const ComponentA = dynamic(()=>import("@/components/HeavyCharts"), 
{
    loading: ()=> <p>Loading...</p>
})

import dynamic from "next/dynamic";
import React from "react";

const Dashboard = () => {
    const [showChart, setShowChart] = React.useState(false)
    return (
        <div>
            <h1 className="p-10">Dashboard</h1>
            <button onClick={()=>setShowChart(!showChart)}>Show My Chart</button>
            {
                showChart && <ComponentA></ComponentA>
            }
        </div>
    );
};

export default Dashboard;