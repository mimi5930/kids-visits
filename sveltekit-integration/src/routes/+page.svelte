<script lang="ts">
	import {Button} from '@sveltestrap/sveltestrap'
	import kellySikkema from '$lib/img/kelly-sikkema-min.jpg'
	import benWhite from '$lib/img/ben-white-JJ9irt1OZmI-unsplash-min.jpg'
	import paulHanaoka from '$lib/img/paul-hanaoka-a104tlUezug-unsplash-min.jpg'
</script>

<header class="hero container-fluid">
	<div class="hero-div">
		<h2 class="hero-text">Multiple Services for Families</h2>
		<Button color="dark" href='#contact-me' class="hero-btn">CONTACT BRENDA</Button>
	</div>
</header>

<main>
	<h2 class="title">Family Services Available</h2>
	<div
		class="img-cards d-flex flex-column align-items-md-start align-items-center flex-md-row justify-content-md-evenly"
	>
		<!-- card 1 -->
		<!-- TODO: update alts -->
		<div class="card mb-4">
			<img
				src={paulHanaoka}
				class="card-img-top"
				alt="paulHanaoka"
			/>
			<div class="card-body">
				<h3 class="card-title">Multiple Services Available</h3>
				<ul class="card-text">
					<li>Parent Investigation</li>
					<li>Guardian Ad Litem</li>
					<li>Supervised Visitation</li>
					<li>Parent Education</li>
					<li>Parent Coaching</li>
					<li>Parent Coordination</li>
					<li>Family & Child Mediation</li>
				</ul>
			</div>
		</div>
		<!-- card 2 -->
		<div class="card mb-4">
			<img
				src={kellySikkema}
				class="card-img-top"
				alt="kellySikkema"
			/>
			<div class="card-body">
				<h3 class="card-title text-fluid">
					Working With Families During Difficult Times
				</h3>
				<ul class="card-text">
					<li>Divorcing Families</li>
					<li>Never Married Families</li>
					<li>Seperated Families</li>
					<li>Grandparents Raising Grandkids</li>
				</ul>
			</div>
		</div>
		<!-- card 3 -->
		<div class="card mb-4">
			<img
				src={benWhite}
				class="card-img-top"
				alt="ben-white"
			/>
			<div class="card-body">
				<h3 class="card-title">Child Advocate</h3>
				<p class="card-text">
					Working with families for over 25 year in various areas
				</p>
				<p class="card-text">In-home services available, just ask!</p>
				<p class="card-text">Contact Brenda for additional information</p>
			</div>
		</div>
	</div>
	<a href="/references" class="find-out-more btn btn-info btn-large"
		>FIND OUT MORE</a
	>
	<div class="line"></div>
</main>

<style>
	/* hero */
.hero {
  background-image: url(https://i.ibb.co/FDm2cH4/kevin-delvecchio-7no-ZJ-4nh-U8-unsplash.jpg);
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

/* main */
.img-cards {
  margin: auto 50px;
}

.card {
  width: 356px;
}

.card img {
  max-width: 356px;
  max-height: 356px;
  background-color: var(--nav-secondary-color);
}

.find-out-more {
  display: block;
  margin: 20px 30%;
}

.title {
  margin: 40px 30px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  border-bottom: solid 2px var(--nav-secondary-color);
}
</style>
