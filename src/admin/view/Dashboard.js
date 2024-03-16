import React from 'react'
import '../style/admin.css'
import Sidebar from './partial/Sidebar'
import Header from './partial/Header'
import StatusCard from './partial/StatusCard'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { useStatsQuery } from '../../redux/api/dashboardApi'
import Loader from '../../components/cards/Loader'
import { Link } from 'react-router-dom'
import { getLastMonth } from '../../utils/feature'
ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);
const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const id = userData?.user?.id;
  const { data, isLoading } = useStatsQuery(id)

const stats = data?.stats
 
// Configure options for the bar graph
var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

const {last12Month, last6Month} = getLastMonth()

  return (
    <>
    <Sidebar/>
    <div className="main-context  ">
      <Header/>
      <div className="admin-dashboard p-4">
      <div aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
  </ol>
</div>
{
  isLoading ? 
  (
    <Loader/>
  )
  : 
  (
 <>
<div class="row gy-3">
    <div class="col-md-4 col-lg-6 col-sm-12">
      <StatusCard
      title={"PRODUCTS"}
      value={stats?.Count?.product}
      color={"#F24F7C"}
      growth={stats?.productChangePercentage}
      />
    </div>
    <div class="col-md-4 col-lg-6 col-sm-12"> 
    <StatusCard
      title={"REVENUE"}
      value={stats?.Count?.revenue}
      color={"#716CB0"}
      growth={stats?.revenueChangePercentage}
      />
      </div>
    <div class="col-md-4 col-lg-6 col-sm-12"> 
    <StatusCard
      title={"ORDERS"}
      value={stats?.Count?.order}
      color={"#33B0E0"}
      growth={stats?.orderChangePercentage}
      />
      </div>
    <div class="col-md-4 col-lg-6 col-sm-12"> 
    <StatusCard
      title={"USERS"}
      value={stats?.Count?.user}
      color={"#3BC0C3"}
      growth={stats?.userChangePercentage}
      />
      </div>
  </div>
  <div className="row gy-3 mt-3">
    <div className="col-lg-8">
   <div className="card p-2">
      <h5 className=' text-dark-emphasis ms-3'>Revenue</h5>
   <Bar 
     data={{
      labels: last12Month, 
      datasets: [{
          label: 'Revenue',
          data: stats?.Chart?.revenue,
          backgroundColor: '#1A2942', 
          borderColor: '#1A2942', 
          borderWidth: 1
      }]
  }}
    
    />
   </div>
    </div>
    <div className="col-lg-4">
    <div className="card p-2">
    <h5 className=' text-dark-emphasis ms-3'>Orders</h5>
    <Doughnut
   data={{
    labels: last6Month, 
    datasets: [{
      labels: "Order", 
        data: stats?.Chart?.order,
        backgroundColor: [
          '#F24F7C', 
          '#716CB0', 
         
      ],
      borderColor: [
          '#F24F7C', 
          '#716CB0', 
         
      ],
        borderWidth: 1
    }]
}}
  
  
/>

    </div>
    </div>
  </div>
  <div className=" card p-4 mt-3">
 <h5>Latest Transection</h5>
            <div className="table-wrapper w-100  overflow-x-auto ">
              <table class="table table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stats?.latestTransection?.map((row, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{row.amount}</td>
                      <td>{row.discount}</td>
                      <td>{row.quantity}</td>
                      <td className=" text-capitalize ">{row.status}</td>
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> 
  </>
     )
    }
      </div>
    </div>
    </>
  )
}

export default Dashboard