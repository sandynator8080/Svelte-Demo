<script>
    import { allProducts } from '../pstore'
    /** @type {import('./$types').PageData} */
    export let data;
    let name = "";
</script>
<br/>
<input bind:value={name} type="text" placeholder="Search by product name" class="input input-bordered input-primary p-5 w-full" />
<br/>

<div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
    {#each $allProducts.filter(model => model.title.toUpperCase().includes(name.toUpperCase())) as {title, description, images}, i}

    <div class="card w-full bg-base-100 shadow-xl image-full">
        <figure><img src={images[0]} alt={title} /></figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>{description}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    {/each}

</div>