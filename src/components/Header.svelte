<script lang="ts">
	import { Nav, Navbar, NavItem, NavbarToggler, Collapse } from '@sveltestrap/sveltestrap';
	import { page } from '$app/stores';

	let isOpen = false;
	$: currentPage = $page.url.pathname;

	let handleUpdate = (event: CustomEvent<boolean>) => {
		isOpen = event.detail;
	};
</script>

<Navbar style="background-color: var(--nav-color);" expand="md" sticky="top">
	<a class="navbar-brand brand" href="/">Brenda Jacobson</a>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<a class="nav-link" class:active={currentPage === '/'} href="/">Home</a>
			</NavItem>
			<NavItem>
				<a class="nav-link" class:active={currentPage === '/references'} href="/references"
					>References</a
				>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>

<style>
	a {
		color: black;
		font-size: 20px;
		font-weight: bold;
		opacity: 60%;
		transition: 0.3s;
	}

	a:hover {
		color: black;
		opacity: 80%;
	}

	.brand {
		font-family: var(--web-title-font);
		font-size: 30px;
		color: black;
		opacity: 1;
		transition: 0.3s;
	}
	.brand:hover {
		color: black;
		opacity: 60%;
	}

	.active {
		opacity: 1;
	}
</style>
