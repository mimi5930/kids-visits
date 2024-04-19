<script lang="ts">
	import {Button, Card, CardBody, CardText, CardTitle} from '@sveltestrap/sveltestrap'
	import {kellySikkema, benWhite, paulHanaoka} from '$lib/img'
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
		class="img-cards-container d-flex flex-column align-items-md-start align-items-center flex-md-row justify-content-md-evenly justify-content-around"
	>
		<!-- card 1 -->
		<Card>
			<img
				src={paulHanaoka}
				class="card-img-top"
				alt="A mother kissing her child on the forehead"
			/>
			<CardBody>
				<CardTitle>Multiple Services Available</CardTitle>
				<CardText>
					<ul>
						<li>Parent Investigation</li>
						<li>Guardian Ad Litem</li>
						<li>Supervised Visitation</li>
						<li>Parent Education</li>
						<li>Parent Coaching</li>
						<li>Parent Coordination</li>
						<li>Family & Child Mediation</li>
					</ul>
				</CardText>
			</CardBody>
		</Card>
		<!-- card 2 -->
		<Card>
			<img
				src={kellySikkema}
				class="card-img-top"
				alt="A father holding up his smiling toddler on his shoulders"
			/>
			<CardBody>
				<CardTitle>
					Working With Families During Difficult Times
				</CardTitle>
				<CardText>
					<ul class="card-text">
					<li>Divorcing Families</li>
					<li>Never Married Families</li>
					<li>Seperated Families</li>
					<li>Grandparents Raising Grandkids</li>
				</ul>
				</CardText>
			</CardBody>
		</Card>
		<!-- card 3 -->
		<Card>
			<img
				src={benWhite}
				class="card-img-top"
				alt="A father holding his son's hand while they both walk away down the street"
			/>
			<CardBody>
				<CardTitle>Child Advocate</CardTitle>
				<CardText>
					Working with families for over 25 year in various areas
				</CardText>
				<CardText>In-home services available, just ask!</CardText>
				<CardText>Contact Brenda for additional information</CardText>
			</CardBody>
		</Card>
	</div>
	<Button class="references-btn" color='info' size='lg' href="/references">FIND OUT MORE</Button>
	<!-- dividing line -->
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
.img-cards-container {
  margin-bottom:  50px;
  margin-top:  50px;
}

:global(.card) {
  width: 356px;
	margin-bottom: 1.25rem;
}

:global(.card img) {
  max-width: 356px;
  max-height: 356px;
  background-color: var(--nav-secondary-color);
}

:global(.card-title) {
	font-size: 1.75rem;
}

:global(.references-btn) {
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
