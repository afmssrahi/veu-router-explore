import CustomerVue from './components/Customer/Customer.vue';
import Home from './components/Home.vue';

export const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/customer',
		component: CustomerVue,
	},
];
