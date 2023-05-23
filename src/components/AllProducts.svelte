<script>
  import { onMount, afterUpdate } from 'svelte'
  import productsDb from '@src/data/products.json'
  import CardAllProduct from './CardAllProduct.svelte'
  import Pagination from './Pagination.svelte'

  const productos = [...productsDb]
  const pageSize = 15
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

  function goToPage(page) {
    currentPage = page
  }
</script>

<nav aria-label="Pagination" class="flex items-center text-gray-600">
  <button
    on:click={() => currentPage--}
    disabled={currentPage === 0}
    type="button"
    class={`p-2 mr-4  hover:bg-zinc-800 rounded-lg shadow-lg  ${
      currentPage === 0 && 'opacity-20'
    } `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  {#each Array(Math.ceil(productos.length / pageSize)).fill() as _, index}
    <button
      on:click={() => goToPage(index)}
      type="button"
      class={`px-4 py-2 rounded-lg shadow-lg ${
        currentPage === index
          ? 'bg-bar hover:text-white  hover:bg-zinc-800'
          : 'hover:bg-zinc-800 bg-gray-100 hover:text-white'
      } `}
    >
      {index + 1}
    </button>
  {/each}

  <button
    on:click={() => currentPage++}
    disabled={currentPage === Math.ceil(productos.length / pageSize) - 1}
    type="button"
    class={`p-2 ml-4 hover:bg-zinc-800 rounded-lg shadow-lg ${
      currentPage === Math.ceil(productos.length / pageSize) - 1 ? 'opacity-20' : 'opacity-100'
    } `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={`h-6 w-6`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</nav>

<section class="grid grid-cols-2 lg:grid-cols-3 place-items-center w-full lg:gap-10 gap-6">
  {#each paginatedProducts as product}
    <CardAllProduct data={product} />
  {/each}
</section>
