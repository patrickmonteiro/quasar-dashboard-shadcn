const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'dashboard-analytic', name: 'dashboard-analytic', component: () => import('pages/DashboardAnalytic.vue') },
      { path: 'settings-page', name: 'settings-page', component: () => import('pages/SettingsPage.vue') },
      { path: 'user-signup', name: 'user-signup', component: () => import('pages/UserSignup.vue') },
      { path: 'task-list', name: 'task-list', component: () => import('pages/TaskList.vue') },
      { path: 'music-page', name: 'music-page', component: () => import('pages/MusicPage.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'signup-page', name: 'signup-page', component: () => import('pages/SignupPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
