<script>
  import Icon from "@iconify/svelte";

  export let title = "List Info Event Jejepangan";
</script>

<svelte:head>
  <title>{title}</title>
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://info-jjp.yehezgun.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="List Info Event Jejepangan" />
  <meta
    property="og:description"
    content="Berisi List Info Jejepangan Hasil Rekap Dari Komunitas Tiap Kota di Indonesia"
  />
  <meta
    property="og:image"
    content="https://og-v2.yehezgun.com/api/og?title=Info%20Event%20Jejepangan&desc=Berisi%20List%20Info%20Jejepangan%20Hasil%20Rekap%20Dari%20Komunitas%20Tiap%20Kota%20di%20Indonesia&imgUrl=https://img.icons8.com/isometric/64/info.png&siteName=info-jjp.yehezgun.com&socialMedia=IG:%20@yehez.gallery"
  />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="description"
    content="Berisi List Info Jejepangan Hasil Rekap Dari Komunitas Tiap Kota di Indonesia"
  />

  <meta property="twitter:domain" content="yehezgun.com" />
  <meta property="twitter:url" content="https://info-jjp.yehezgun.com" />
  <meta name="twitter:title" content="List Info Event Jejepangan" />
  <meta
    name="twitter:description"
    content="Berisi List Info Jejepangan Hasil Rekap Dari Komunitas Tiap Kota di Indonesia"
  />
  <meta
    name="twitter:image"
    content="https://og-v2.yehezgun.com/api/og?title=Info%20Event%20Jejepangan&desc=Berisi%20List%20Info%20Jejepangan%20Hasil%20Rekap%20Dari%20Komunitas%20Tiap%20Kota%20di%20Indonesia&imgUrl=https://img.icons8.com/isometric/64/info.png&siteName=info-jjp.yehezgun.com&socialMedia=IG:%20@yehez.gallery"
  />
</svelte:head>

<nav class="navbar bg-base-100 rounded-lg shadow-md">
  <div class="flex-1">
    <div class="flex items-center gap-1">
      <img src="/icons8-info.svg" alt="icon" width="48" height="48" />
      <a href="/" class="text-lg font-bold">List Info Event Jejepangan</a>
    </div>
  </div>
  <div class="flex-none">
    <a
      href="https://github.com/yehezkielgunawan/link-collection"
      class="btn btn-ghost hidden md:flex"
      target="_blank"
    >
      <Icon icon={`bxl:github`} width={24} height={24} /> Github Repo</a
    >
    <a
      href="https://github.com/yehezkielgunawan/link-collection"
      class="btn btn-ghost md:hidden"
      target="_blank"
    >
      <Icon icon={`bxl:github`} width={24} height={24} /></a
    >
  </div>
</nav>
