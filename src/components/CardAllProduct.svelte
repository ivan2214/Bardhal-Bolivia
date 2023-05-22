<script>
  import ImageSkeleton from './ImageSkeleton.svelte'
  export let data, loadingImg
</script>

<a href={`/productos/${decodeURI(data.name)}`}>
  <div
    class={` flex flex-col w-40 min-h-full h-52   items-center gap-5 px-3 py-3 shadow-md rounded-lg 
  hover:shadow-2xl hover:scale-110 transform  duration-150 border  lg:w-80
lg:h-auto `}
  >
    <ImageSkeleton
      {loadingImg}
      client:load
      loading="lazy"
      width={'100'}
      height={'100'}
      className="object-cover"
      src={data.url}
      alt={data.name}
    />
    <span class="text-center capitalize text-sm lg:text-base font-light">{data.name}</span>
  </div>
</a>
