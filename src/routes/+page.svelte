<script>
  import {
    indonesianDateStringToDate,
    isThisWeek,
    isToday,
    isTomorrow,
    isYesterday,
  } from "$lib";

  export let data;

  // store the city List data
  let cityList = data.eventList?.map((event) => event.eventCity);

  // remove duplicate city
  let cityListUnique = [...new Set(cityList)];

  let selectedCity = "";

  let filteredEventList = data.eventList;
  $: filteredEventList = data.eventList?.filter((event) =>
    selectedCity === "Semua Kota" || selectedCity === ""
      ? true
      : event.eventCity.toLowerCase() === selectedCity.toLowerCase(),
  );
</script>

{#await filteredEventList}
  <p>Loading data...</p>
{:then filteredEventList}
  <div class="flex items-center justify-between flex-wrap gap-4">
    <div class="inline-flex items-center gap-2">
      <p class="badge badge-error">Kemarin</p>
      <p class="badge badge-warning">Hari ini</p>
      <p class="badge badge-accent">Besok</p>
      <p class="badge bg-primary-content">Weekend ini</p>
    </div>
    <div class="inline-flex items-center gap-2">
      <label for="selectedCity">Filter Berdasarkan Kota</label>
      <div>
        <input
          id="selectedCity"
          list="cityList"
          alt="selectedCity"
          bind:value={selectedCity}
          type="text"
          class="input input-bordered"
          placeholder="Masukkan nama kota"
        />
        <datalist id="cityList">
          <option value="Semua Kota" />
          {#each cityListUnique as city}
            <option value={city} />
          {/each}
        </datalist>
      </div>
    </div>
  </div>
  {#if !filteredEventList || filteredEventList.length === 0}
    <p>No events found</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {#each filteredEventList as event}
        <div
          class={`card w-full ${isYesterday(indonesianDateStringToDate(event.eventDate)) ? "bg-error" : isToday(indonesianDateStringToDate(event.eventDate)) ? "bg-warning" : isTomorrow(indonesianDateStringToDate(event.eventDate)) ? "bg-accent" : isThisWeek(indonesianDateStringToDate(event.eventDate)) ? "bg-primary-content" : "bg-base-100"} shadow-xl`}
        >
          <div class="card-body">
            <h5 class="card-title">{event.eventName}</h5>

            <p>Tanggal: {event.eventDate}</p>
            <p>
              Lokasi: {event.eventLocation}
            </p>

            <div class="card-actions">
              <a
                href={event.eventInfoLink}
                target="_blank"
                class="btn btn-primary w-full hover:scale-105 transition-transform ease-out duration-300 hover:text-warning"
                >Detail Event</a
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
{:catch error}
  <p>{error.message}</p>
{/await}
