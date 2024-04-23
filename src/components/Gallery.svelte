<script lang="ts">
	import { ekaterinaShakharova, austinPacheco, chayeneRafaela, hannaTasker } from '$lib/img';
</script>

<section class="image-gallery d-flex align-items-center flex-row justify-content-around flex-wrap">
	<!-- grandma -->
	<img src={ekaterinaShakharova} alt="ekaterina-shakharova-L4nw-L3195-U0-unsplash" />
	<!-- silly faces -->
	<img src={austinPacheco} alt="austin-pacheco-Ft-L07-GM9-Q7-Y-unsplash" />
	<!-- hug -->
	<img src={chayeneRafaela} alt="chayene-rafaela-n-Gwk-IZFelko-unsplash" />
	<!-- eggs -->
	<img src={hannaTasker} alt="hannah-tasker-ZBk-H8-G4-yy-E-unsplash" />
</section>

<style>
	.image-gallery {
		margin-top: 40px;
		margin-bottom: 40px;
	}

	img {
		width: 22%;
		height: auto;
		min-width: 180px;
		margin-bottom: 5px;
		background-color: var(--nav-secondary-color);
	}
</style>
