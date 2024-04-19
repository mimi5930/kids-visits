<script lang="ts">
	import { Button, Form, FormGroup, Input } from '@sveltestrap/sveltestrap';
	let validated: boolean = false;
</script>

<section class="container contact-form" id="contact-me">
	<h2>Contact Brenda</h2>
	<Form>
		<input type="text" name="_honey" id="honey" style="display: none" />

		<FormGroup floating spacing="mb-3" label="Name">
			<Input placeholder="please enter name" />
		</FormGroup>

		<FormGroup floating spacing="mb-3" label="Email*">
			<Input placeholder="name@example.com" required type="email" />
		</FormGroup>

		<FormGroup floating spacing="mb-3" label="Message *">
			<Input
				style="height: auto"
				class="text-area"
				type="textarea"
				placeholder="please leave a message"
				rows={3}
				required
			/>
		</FormGroup>

		<Button color="info">SUBMIT</Button>

		<!-- <button class="btn btn-info d-flex align-items-center gap-2" type="submit" id="form-submit">
			SUBMIT
			<div class="spinner-border visually-hidden" role="status" id="loading-spinner">
				<span class="visually-hidden">Loading...</span>
			</div>
		</button> -->
	</Form>

	<div
		class="alert alert-success mt-3 d-flex justify-content-between visually-hidden"
		role="alert"
		id="success-alert"
	>
		Your message has been sent!
		<button type="button" class="btn-close" aria-label="Close" id="success-close"></button>
	</div>
	<div
		class="alert alert-danger mt-3 visually-hidden d-flex justify-content-between"
		role="alert"
		id="danger-alert"
	>
		Something went wrong!
		<button type="button" class="btn-close" aria-label="Close" id="danger-close"></button>
	</div>
	<div class="card mt-3 m">
		<div class="card-body">
			Email:
			<a href="mailto:Bren03@live.com" target="_blank">Bren03@live.com</a><br />Cell:
			<a href="tel:7017305222">(701) 799-4582</a>
		</div>
	</div>
</section>

<style>
	section {
		margin: 40px auto;
	}

	h2 {
		text-align: center;
		margin-bottom: 20px;
	}

	:global(.text-area) {
		height: none;
	}

	#text-submit {
		height: 100px;
	}
</style>
