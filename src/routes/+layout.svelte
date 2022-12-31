<script>
	import '../app.postcss';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import { allProducts } from './pstore'

	export let data;
	const {products} = data;
	//console.log(products);
	allProducts.set(products);
	console.log($allProducts);
</script>

<Header/>
<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col lg:p-2">
	  <!-- Page content here -->
	  <slot />
	  <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open</label>
	
	</div> 
	<div class="drawer-side">
	  <label for="my-drawer-2" class="drawer-overlay"></label> 
	  <ul class="menu p-4 w-80 bg-base-300 text-base-content">
		<!-- Sidebar content here -->
		<li><a href = "/">About</a></li>
		<li><a href = "/view">View Products</a></li>
		<li><a href = "/">Submit</a></li>
	  </ul>
	
	</div>
  </div>

<Footer/>
