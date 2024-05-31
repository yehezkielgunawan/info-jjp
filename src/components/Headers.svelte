<script>
  import Icon from "@iconify/svelte";

  export let title = "List Info Event Jejepangan";
  let isMenuOpen = false;
  $: isMenuOpen = false;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" />
  <link rel="canonical" />
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
    <details class="dropdown dropdown-bottom dropdown-end" id="menu-btn">
      <summary class="m-1 btn">Menu</summary>
      <ul
        class="p-2 shadow-lg menu dropdown-content z-[1] bg-base-100 rounded-box w-64"
      >
        <li>
          <a
            href="https://github.com/yehezkielgunawan/info-jjp"
            class="btn btn-ghost flex"
            target="_blank"
            on:click={() =>
              // close the dropdown by removing the 'open' attribute
              document.getElementById("menu-btn")?.removeAttribute("open")}
          >
            <Icon icon={`bxl:github`} width={24} height={24} /> Github Repo</a
          >
        </li>
        <li>
          <a
            href="/about"
            class="btn btn-ghost flex"
            on:click={() =>
              // close the dropdown by removing the 'open' attribute
              document.getElementById("menu-btn")?.removeAttribute("open")}
          >
            <Icon icon={`arcticons:writer`} width={24} height={24} /> Tentang Web
            Ini</a
          >
        </li>
        <li>
          <a
            href="https://mayar.to/yehezgun"
            class="btn btn-ghost flex"
            target="_blank"
            on:click={() =>
              // close the dropdown by removing the 'open' attribute
              document.getElementById("menu-btn")?.removeAttribute("open")}
          >
            <Icon icon={`mdi:money`} width={24} height={24} /> Support Dana</a
          >
        </li>
        <li>
          <a
            href="https://documenter.getpostman.com/view/9110092/2sA3QteXCk"
            class="btn btn-ghost flex"
            target="_blank"
            on:click={() =>
              // close the dropdown by removing the 'open' attribute
              document.getElementById("menu-btn")?.removeAttribute("open")}
          >
            <Icon icon={`arcticons:book`} width={24} height={24} /> Dokumentasi API</a
          >
        </li>
      </ul>
    </details>
  </div>
</nav>
