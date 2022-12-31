<script>
	import '../app.postcss';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import { page } from '$app/stores';
	import { allProducts } from './pstore';

	export let data;
	const { products } = data;
    
	$: activePage = $page.route.id
	//console.log(products);
	allProducts.set(products);
	//console.log($allProducts);
</script>

<Header />
<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Toggle Menu</label>
<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col lg:p-2">
		<!-- Page content here -->
		<slot />
		<!-- <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open</label> -->
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-300 text-base-content">
			<!-- Sidebar content here -->

			<li>
				<a href="/" class:active = {activePage === "/"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
						/>
					</svg>About</a
				>
			</li>
			<li>
				<a href="/view" class:active = {activePage === "/view"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					View Products</a
				>
			</li>
			<li>
				<a href="/" class:active = {activePage === "/submit"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
					Submit</a
				>
				
			</li>

			
		</ul>
	</div>
</div>

<Footer />

<style>
	.active {
		background-color: primary;
		color: white;
	}
</style>
