import Home from './components/Home'

const User = () => import('./components/user/User');
const UserIndex = () => import('./components/user/UserIndex');
const UserDetail = () => import('./components/user/UserDetail');
const UserEdit = () => import('./components/user/UserEdit');
// function loadUser(user) {
//   return () => import(`./components/user/${user}.vue`)
// }

import Headers from './components/layout/Header'
import Error from './components/404'
export const routes = [
  {
    path: '/', name: 'homepage', components: {
      default: Home,
      'page-header': Headers

    }
  },
  {
    path: '/user', name: 'user', component: 'User', children: [
      {path: '', name: 'index', component: 'UserIndex'},
      {path: ':id', name: 'userDetail', component: 'UserDetail'},
      {path: ':id/edit', name: 'userEdit', component: 'UserEdit'}
    ]
  },
  {path: '/404', name: 'error', component: Error},
  {path: '*', redirect: '/404'}
];
