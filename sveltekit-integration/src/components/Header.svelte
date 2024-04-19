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
	let isOpen = false;
	function handleUpdate(event: CustomEvent<boolean>) {
		isOpen = event.detail;
	}
</script>

<Navbar expand="md">
	<NavbarBrand href="/" class="page-title">Brenda Jacobson</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/">Home</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/">References</NavLink>
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
		transition: 0.3s;
	}

	:global(.nav-link:hover) {
		color: black;
		opacity: 60%;
	}
</style>
