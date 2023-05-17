import { Outlet } from 'react-router-dom'
import Header from './header'

const AppLayout = () => (
  <div className='container'>
    <Header />
    <Outlet />
  </div>
)

export default AppLayout
