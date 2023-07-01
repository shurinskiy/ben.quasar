const routes = [
	{
		path: '/',
		component: () => import('layouts/FrontendLayout.vue'),
		children: [
			{ path: '', component: () => import('pages/IndexPage.vue') },
			{ path: 'organizer', component: () => import('pages/OrganizerPage.vue') },
			{ path: 'experts', component: () => import('pages/ExpertsPage.vue') },
			{ path: 'article', component: () => import('pages/ArticlePage.vue') },
			{ path: 'expert', component: () => import('pages/ExpertPage.vue') },
			{ path: 'events', component: () => import('pages/EventsPage.vue') },
			{ path: 'event', component: () => import('pages/EventPage.vue') },
			{ path: 'about', component: () => import('pages/AboutPage.vue') },
			{ path: 'blog', component: () => import('pages/BlogPage.vue') },
		]
	},
	{
		path: '/landing',
		component: () => import('layouts/LandingLayout.vue')
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/ErrorNotFound.vue')
	}
]

export default routes