<script lang="ts">
	import { Button } from '@sveltestrap/sveltestrap';
</script>

<section class="hero container-fluid">
	<div class="hero-div">
		<h2 class="hero-text">Multiple Services for Families</h2>
		<Button color="dark" href="#contact-me" class="hero-btn">CONTACT BRENDA</Button>
	</div>
</section>

<style>
	/* hero */
	.hero {
		background-image: url(../lib/img/kevin-delvecchio-7noZJ_4nhU8-unsplash-min.jpg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background-color: var(--nav-secondary-color);
		block-size: 75vh;
		position: relative;
	}
	.hero-div {
		background-color: rgba(75, 75, 75, 0.5);
		padding: 30px;
		border-radius: calc(0.25rem - 1px);
		line-height: 2;
		text-align: center;
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.hero-text {
		text-shadow: 0 0 2px black;
		color: whitesmoke;
		font-size: 70px;
	}

	:global(.hero-btn) {
		padding: 15px 20px;
	}
</style>
