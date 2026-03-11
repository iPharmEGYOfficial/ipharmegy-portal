import { useEffect, useState } from "react";
import { getDashboardData } from "../data/dashboard-data-provider";

export default function Dashboard(){

  const [data,setData] = useState(null);

  useEffect(()=>{

    getDashboardData().then(setData);

  },[]);

  if(!data){
    return <div>Loading...</div>;
  }

  return (
    <div>

      <h1>iPharmEGY Control Center</h1>

      <div>Sales: {data.salesTotal}</div>
      <div>Profit: {data.profitTotal}</div>

      <div>Expired: {data.expired}</div>
      <div>Expiring Soon: {data.expiringSoon}</div>

      <div>Velocity Items: {data.velocityItems}</div>

    </div>
  );

}