import Home from './components/Home'
import User from './components/user/User'
import UserDetail from './components/user/UserDetail'
import UserIndex from './components/user/UserIndex'
import UserEdit from './components/user/UserEdit'

export const routes = [
  {path: '/', name: 'homepage', component: Home},
  {path: '/user', name: 'user', component: User, children:[
      {path:'', name:'index', component:UserIndex},
      {path:':id', name:'userdetail', component:UserDetail},
      {path:':id/edit', name:'useredit', component:UserEdit}
    ]},
];
