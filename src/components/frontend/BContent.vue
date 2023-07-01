<template>
	<div class="content">
		<div class="content__inner container">
			<slot/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BContent',
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.content {
	$self: &;
	font-size: 18px;
	line-height: 1.5;
	margin-bottom: 16px;
	color: #4d4d4d;
	
	@include media('<=lg') {
		font-size: 17px;
		line-height: 1.3;
	}
	
	@include media('<=sm') {
		font-size: 16px;
	}

	&__inner {

	}

	h2, h3 {
		color: #4d4d4d;
		margin-bottom: 16px;
		font-family: "RB", sans-serif;
		line-height: 1.1;
		font-size: 24px;
	}
	
	strong {
		font-family: "RB", sans-serif;
	}

	p {
		margin-bottom: 24px;
	}

	ul {
		margin-bottom: 24px;
		line-height: 1.3;

		li {
			padding-left: 15px;
			position: relative;
			margin-bottom: 8px;

			&::before {
				display: block;
				content: '\02022';
				color: $accent;
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}

	h2#{&}__title, h1#{&}__title {
		color: #4D4D4D;
		font-family: "RB", sans-serif;
		margin-bottom: 24px;
		line-height: 1.1;
		font-size: 32px;
		
		@include media('<=md') {
			font-size: 28px;
		}
		
		@include media('<=xs') {
			font-size: 24px;
		}
	}

	&__large {
		font-family: "RB", sans-serif;
		line-height: 1.2;
		font-size: 20px;
		
		@include media('<=md') {
			font-size: 18px;
		}
	}

	&__signature {
		margin-bottom: 32px;
	}
	
	&__share {
		margin-bottom: 32px;
	}

	&__tags {
		display: flex;
		flex-flow: row wrap;
		margin-bottom: 24px;

		.tag {
			margin: 0 8px 8px 0;
		}
	}

	&__image {
		margin: 0 auto 24px;
		height: 400px;
		
		@include media('<=sm') {
			height: 300px;
		}
		
		@include media('<=xxs') {
			height: 250px;
		}
		
		img {
			object-fit: cover;
			max-width: 100%;
			height: 100%;
			width: 100%;
		}
	}

	&__video {
		max-width: 1000px;
		margin: 0 auto 24px;
	}

	&__gallery {
		margin-bottom: 32px;
	}

	&__cols {
		columns: 400px 2;
		margin-bottom: 24px;
		column-gap: 20px;
	}
	
	&__col {
		break-inside: avoid;
	}

	&__cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 24px;
		margin-bottom: 32px;
		
		@include media('<=md') {
			grid-template-columns: repeat(2, 1fr);
		}
		
		@include media('<=xxs') {
			grid-template-columns: 1fr;
		}
	}

	&__card {
		grid-column: 1 span;
	}
}	
</style>
