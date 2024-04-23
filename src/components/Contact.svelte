<script lang="ts">
	import {
		Alert,
		Button,
		Card,
		CardBody,
		CardText,
		FormGroup,
		Input,
		Spinner
	} from '@sveltestrap/sveltestrap';

	import { type Infer, superForm, defaults } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { contactSchema } from '$lib/schemas';

	const { form, errors, message, enhance, submitting } = superForm<
		Infer<typeof contactSchema>,
		{ success: string; text: string }
	>(defaults(zod(contactSchema)), {
		SPA: true,
		validators: zod(contactSchema),
		async onUpdate({ form }) {
			if (!form.valid) return;
			try {
				const response = await fetch(
					'https://formsubmit.co/ajax/57875ae7624d79ca51cbb710062a4b69',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json'
						},
						body: JSON.stringify(form.data)
					}
				);
				const data: { success: string; message: string } = await response.json();
				form.message = { success: data.success, text: data.message };
			} catch (error) {
				console.log(error);
			}
		}
	});
</script>

<section class="container contact-form" id="contact-me">
	<h2>Contact Brenda</h2>
	<form use:enhance>
		<input type="text" name="_honey" id="honey" style="display: none" bind:value={$form._honey} />
		<FormGroup floating spacing="mb-3" label="Name">
			<Input placeholder="please enter name" bind:value={$form.name} />
		</FormGroup>

		<FormGroup floating spacing="mb-3" label="Email *">
			<Input
				placeholder="name@example.com"
				type="email"
				bind:value={$form.email}
				invalid={$errors.email ? true : false}
				feedback={$errors.email}
			/>
		</FormGroup>

		<FormGroup floating spacing="mb-3" label="Message *">
			<Input
				style="height: auto"
				type="textarea"
				placeholder="please leave a message"
				rows={3}
				bind:value={$form.message}
				invalid={$errors.message ? true : false}
				feedback={$errors.message}
			/>
		</FormGroup>
		<div>
			<Button color="info" type="submit" disabled={$submitting}>SUBMIT</Button>
			{#if $submitting}
				<Spinner size="sm" />
			{/if}
		</div>
	</form>

	{#if $message}
		<Alert
			style="margin-top:16px"
			color={$message?.success === 'true' ? 'success' : 'warning'}
			dismissible>{$message.text}</Alert
		>
	{/if}

	<Card class="card mt-3">
		<CardBody class="card-body">
			<CardText>
				Email:
				<a href="mailto:Bren03@live.com" target="_blank">Bren03@live.com</a><br />Cell:
				<a href="tel:7017305222">(701) 799-4582</a>
			</CardText>
		</CardBody>
	</Card>
</section>

<style>
	section {
		margin: 40px auto;
	}

	h2 {
		text-align: center;
		margin-bottom: 20px;
	}
</style>
