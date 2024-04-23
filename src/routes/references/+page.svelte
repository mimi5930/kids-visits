<script lang="ts">
	import { brenProfile } from '$lib/img';
	import resumePDF from '$lib/assets/Brenda Jacobson Resume 2023.pdf';
	import { Button, Card, CardHeader, Container } from '@sveltestrap/sveltestrap';
</script>

<section class="references">
	<h1 class="title m-4">Brenda Jacobson</h1>
	<div
		class="img-and-contact d-flex flex-column flex-md-row justify-content-md-evenly align-items-center"
	>
		<img
			class="m-4"
			src={brenProfile}
			alt="Portrait of Brenda Jacobson, a professional parent educator with a warm smile, against a neutral background."
		/>
		<div class="contact m-4">
			<h2>Contact Information:</h2>
			<p>Cell Phone:<br /><a href="tel:7017305222">(701) 799-4582</a></p>
			<p>
				Email Address:<br /><a href="mailto:Bren03@live.com" target="_blank">Bren03@live.com</a>
			</p>
		</div>
	</div>
	<Container fluid class="education d-flex flex-column align-items-center">
		<Card style="width:70%" class="m-4">
			<CardHeader style="text-align:center;font-weight:bold">Education and Experience</CardHeader>
			<ul class="m-2">
				<li>North Dakota State University-Fargo</li>
				<li>Child Development & Family Science Bachelor - Finishing Masters</li>
				<li>Concordia-Moorhead</li>
				<li>Parent Education Associate Degree</li>
				<li>Supreme Court of North Dakota</li>
				<li>Parent Investigator, Guardian Ad Litem, Parent Coordinator</li>
				<li>University of North Dakota</li>
				<li>Mediation Program</li>
				<li>
					Member of Collaborative Divorce In Fargo:
					<a href="http://www.nddivorce.com" target="_blank">http://www.nddivorce.com.</a>
				</li>
			</ul>
		</Card>
		<Card style="width:70%" class="m-4 col-6">
			<CardHeader style="text-align:center;font-weight:bold">Additional Experience</CardHeader>
			<ul class="m-2">
				<li>University of North Dakota</li>
				<li>Child Welfare/Child Protection</li>
				<li>Child Therapeutic Supportive Services in Minnesota</li>
				<li>Work with Family Therapists Teaching Children Skills</li>
				<li>Department of Human Services</li>
				<li>Children's Mental Health Division as a Trainer (12 years)</li>
				<li>NDSU Extension Parent Educator</li>
				<li>Teaching Parents Forever (9 years) Class Designed for Families Divorcing</li>
			</ul>
		</Card>
	</Container>
	<div class="d-flex justify-content-center mb-5">
		<Button color="info" size="large" href={resumePDF}>BRENDA'S RESUME</Button>
	</div>
</section>

<style>
	h2 {
		font-weight: bold;
	}

	img {
		width: 20rem;
		height: 25rem;
		border-radius: 15px;
		object-fit: cover;
		object-position: 100% 15%;
	}

	.img-and-contact {
		margin: auto 20%;
	}

	.contact {
		text-align: center;
	}

	:global(.education) {
		margin-bottom: 80px;
	}
</style>
