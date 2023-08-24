<script>
  export let src, className, width, height, alt, id
  let cargada = false

  $: {
    const image = new Image()
    image.onload = () => {
      cargada = true
    }
    image.src = src
  }
</script>

<!-- <div class="flex items-center justify-center h-full w-full">
  <img
    loading="lazy"
    width={height || '100'}
    height={width || '100'}
    alt={alt || 'image desription here'}
    class={`object-cover transition group-hover:scale-110 ${className} `}
    src={cargada ? src : 'https://via.placeholder.com/300x300?text='}
  />
  {#if !cargada}
    <div
      class=" h-full w-full items-center justify-center flex animate-pulse bg-gray-300 opacity-50"
    />
  {/if}
</div>
 -->

{#if !cargada || !src}
  <div
    role="status"
    class={`max-w-sm w-full p-2 border border-gray-200 rounded shadow animate-pulse ${className} dark:border-gray-300`}
  >
    <img
      id={id || ''}
      width={width || '100'}
      height={height || '100'}
      src="loadedImage.png"
      class={`${className} mx-auto`}
      {alt}
    />

    <span class="sr-only">Loading...</span>
  </div>
{:else}
  <img
    id={id || ''}
    loading="lazy"
    width={width || '100'}
    height={height || '100'}
    alt={alt || 'image desription here'}
    class={`object-cover transition mx-auto group-hover:scale-110 ${className} `}
    {src}
  />
{/if}
