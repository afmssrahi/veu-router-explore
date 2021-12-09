<template>
	<div>
		<h2>Customer</h2>
		<p>This is customer page</p>

		<button class="btn btn-dark" @click="navigateToHome">Go to home</button>
	</div>
</template>

<script>
export default {
	methods: {
		navigateToHome() {
			this.$router.push('/');
		},
	},
};
</script>
