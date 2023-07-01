<template>
<div class="breadcrumbs">
	<div class="breadcrumbs__inner container">
		<slot/>
	</div>
</div>
</template>

<script>
export default {
	name: 'BBreadcrumbs',
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.breadcrumbs {
	$self: &;
	margin-bottom: 20px;

	&__inner {
		padding-top: 25px;
		
		a {
			display: inline-block;
			padding: 5px 8px 5px 0;
			color: $primary;

			&:not(:last-child)::after {
				display: inline-block;
				content: '>';
				font-family: "RM", sans-serif;
				padding-left: 10px;
			}
		}
		
		span {
			display: inline-block;
			padding: 5px 0 5px;
			color: #999;
		}
	}
}
</style>
