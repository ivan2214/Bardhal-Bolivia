<script>
  export let src, className, width, height, alt, id
  let cargada = false

  $: {
    const iframe = document?.createElement('iframe')
    iframe.src = src
    iframe.onload = () => {
      cargada = true
    }
  }
  console.log(cargada)
</script>

{#if cargada}
  <div
    role="status"
    class={`max-w-sm w-full p-2 border border-gray-200 rounded shadow animate-pulse ${className} dark:border-gray-300`}
  >
    <img
      id={id || ''}
      width={width || '100'}
      height={height || '100'}
      src="loadedImage.png"
      class={` mx-auto`}
      alt={alt || ''}
    />

    <span class="sr-only">Loading...</span>
  </div>
{:else}
  <iframe
    id={id || ''}
    loading="lazy"
    class={`object-cover mx-auto w-full rounded-lg`}
    width={width || '100'}
    height={height || '100'}
    {src}
    title={alt || 'iframe description here'}
    alt={alt || ''}
  />
{/if}
