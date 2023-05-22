<script>
  import { onMount, afterUpdate } from 'svelte'
  import productsDb from '@src/data/products.json'
  import CardAllProduct from './CardAllProduct.svelte'

  const productos = [...productsDb]
  const pageSize = 8
  let currentPage = 0

  let paginatedProducts = []

  function updatePaginatedProducts() {
    const start = currentPage * pageSize
    const end = start + pageSize
    paginatedProducts = productos.slice(start, end)
  }

  onMount(() => {
    updatePaginatedProducts()
  })

  afterUpdate(() => {
    updatePaginatedProducts()
  })
</script>

<div class="flex items-center gap-4 justify-center">
  <button
    class={`bg-bar rounded-lg px-4 py-2 shadow-md ${currentPage === 0 && 'opacity-50'} `}
    on:click={() => currentPage--}
    disabled={currentPage === 0}>Anterior</button
  >
  <button
    class={`bg-bar rounded-lg px-4 py-2 shadow-md ${
      currentPage === Math.ceil(productos.length / pageSize) - 1 && 'opacity-50'
    } `}
    on:click={() => currentPage++}
    disabled={currentPage === Math.ceil(productos.length / pageSize) - 1}>Siguiente</button
  >
</div>

<section class="grid grid-cols-2 lg:grid-cols-3 place-items-center w-full lg:gap-10 gap-6">
  {#each paginatedProducts as product}
    <CardAllProduct data={product} />
  {/each}
</section>
