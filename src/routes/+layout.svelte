<script lang="ts">
	import { Header, Footer } from '../components';
	import '../app.css';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	/>
</svelte:head>

<Header />
<slot />
<Footer />
