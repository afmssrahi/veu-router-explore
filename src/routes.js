import CustomerVue from './components/Customer/Customer.vue';
import CustomerDetail from './components/Customer/CustomerDetail.vue';
import CustomerEdit from './components/Customer/CustomerEdit.vue';
import CustomerStart from './components/Customer/CustomerStart.vue';
import Home from './components/Home.vue';

export const routes = [
	{
		path: '/',
		component: Home,
		name: 'home',
	},
	{
		path: '/customer',
		component: CustomerVue,
		children: [
			{
				path: '/',
				component: CustomerStart,
			},
			{
				path: ':id',
				component: CustomerDetail,
			},
			{
				path: ':id/edit',
				component: CustomerEdit,
				name: 'customerEdit',
			},
		],
	},
];
