<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<router-link tag="li" class="nav-item nav-link" to="/"
							>Home</router-link
						>
						<router-link
							tag="li"
							class="nav-item nav-link"
							to="/customer"
							>Customer</router-link
						>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>
