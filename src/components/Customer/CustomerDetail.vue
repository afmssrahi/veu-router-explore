<template>
	<div>
		<h2>Customer Detail {{ $route.params.id }}</h2>
		<router-link
			class="btn btn-primary"
			tag="button"
			:to="{ name: 'customerEdit', params: { id: $route.params.id } }"
			>Edit User
		</router-link>
	</div>
</template>
