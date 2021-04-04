import React,{useState,useEffect} from 'react'
import { DataUsage,Group, Help, Home,NewReleases, ExitToApp,Assessment, Person } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = (props) => {
  const [currentPath, setCurrentPath] = useState('')
  useEffect(() => {
    setCurrentPath(window.location.pathname)
  },[window.location.pathname])
  return (
    <div className="sidebar__container">
      <Link to="/dashboard/home" style={{background:currentPath.includes('/home')?"rgba(252, 165, 5, 0.808)":null}}><Home/>Home</Link>
      <Link to="/dashboard/admin/wallet-load/transactions" style={{background:currentPath.includes('/wallet-load/transactions')?"rgba(252, 165, 5, 0.808)":null}}><DataUsage/>Load Wallet Trasactions</Link>
      <Link to="/dashboard/admin/linked-accounts/details" style={{background:currentPath.includes('/linked-accounts/details')?"rgba(252, 165, 5, 0.808)":null}}><NewReleases/>Linked A/C Details</Link>
      <Link to="/dashboard/admin/linked-accounts/transactions" style={{background:currentPath.includes('/linked-accounts/transactions')?"rgba(252, 165, 5, 0.808)":null}}><Assessment/> Linked A/C Transactions</Link>
      <Link to="/dashboard/admin/corporate-accounts" style={{background:currentPath.includes('/corporate-accounts')?"rgba(252, 165, 5, 0.808)":null}}><NewReleases/>Corporate A/C</Link>
      <Link to="/dashboard/admin/manage-users" style={{background:currentPath.includes('/manage-users')?"rgba(252, 165, 5, 0.808)":null}}><Group/>Manage Users</Link>
      <Link to="/dashboard/admin/manage-staffs" style={{background:currentPath.includes('/manage-staffs')?"rgba(252, 165, 5, 0.808)":null}}><Person/>Manage Staffs</Link>
      <Link to="/admin/logout" style={{background:currentPath.includes('/logout')?"rgba(252, 165, 5, 0.808)":null}}><ExitToApp/>Logout</Link>
      <Link to="/dashboard/admin/help" style={{background:currentPath.includes('/help')?"rgba(252, 165, 5, 0.808)":null}}><Help/>Help</Link>
    </div>
  )
}

export default Sidebar
