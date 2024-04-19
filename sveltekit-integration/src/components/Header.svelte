<script lang="ts">
	import {
		Nav,
		Navbar,
		NavItem,
		NavLink,
		NavbarBrand,
		NavbarToggler,
		Collapse
	} from '@sveltestrap/sveltestrap';
	import { page } from '$app/stores';

	let isOpen = false;
	$: currentPage = $page.url.pathname;

	let handleUpdate = (event: CustomEvent<boolean>) => {
		isOpen = event.detail;
	};
</script>

<Navbar expand="md">
	<NavbarBrand href="/" class="page-title">Brenda Jacobson</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/" active={currentPage === '/'}>Home</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/references" active={currentPage === '/references'}>References</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>

<style>
	:global(.page-title) {
		font-family: var(--web-title-font);
		font-size: 30px;
		color: black;
		transition: 0.3s;
	}
	:global(.page-title:hover) {
		color: black;
		opacity: 60%;
	}
	:global(.navbar) {
		background-color: var(--nav-color);
	}

	:global(.nav-link) {
		color: black;
		font-size: 20px;
		font-weight: bold;
		opacity: 60%;
		transition: 0.3s;
	}

	:global(.nav-link:hover) {
		color: black;
		opacity: 80%;
	}

	:global(.active) {
		opacity: 1;
	}
</style>
