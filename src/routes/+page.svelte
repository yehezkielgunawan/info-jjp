<script lang="ts">
  import {
    indonesianDateStringToDate,
    isThisWeek,
    isToday,
    isTomorrow,
    isYesterday,
    isNextWeek,
  } from "$lib";

  export let data;
  const timeFilter = [
    { label: "Kemarin", style: "badge badge-error", timeFunction: isYesterday },
    { label: "Hari ini", style: "badge badge-warning", timeFunction: isToday },
    { label: "Besok", style: "badge badge-accent", timeFunction: isTomorrow },
    {
      label: "Weekend ini",
      style: "badge bg-primary-content",
      timeFunction: isThisWeek,
    },
    {
      label: "Minggu Mendatang",
      style: "badge border-2",
      timeFunction: isNextWeek,
    },
  ];
  let selectedTimeFilter = "";

  // store the city List data
  let cityList = data.eventList?.map((event) => event.event_city);

  // remove duplicate city
  let cityListUnique = [...new Set(cityList)];

  let selectedCity = "";

  let filteredEventList = data.eventList;
  $: filteredEventList = data.eventList
    ?.filter((event) =>
      selectedCity === ""
        ? true
        : event.event_city.toLowerCase().includes(selectedCity.toLowerCase()),
    )
    .filter((event) =>
      selectedTimeFilter === ""
        ? true
        : timeFilter
            .find((filter) => filter.label === selectedTimeFilter)
            ?.timeFunction(indonesianDateStringToDate(event.event_date)),
    );

  const handleSelectedTimeFilter = (
    selectedFunction: any,
    selectedTime: string,
  ) => {
    if (selectedTimeFilter === selectedTime) {
      selectedTimeFilter = "";
      filteredEventList = data.eventList?.filter((event) =>
        selectedCity === ""
          ? true
          : event.event_city.toLowerCase().includes(selectedCity.toLowerCase()),
      );
    } else {
      selectedTimeFilter = selectedTime;
      filteredEventList = data.eventList
        ?.filter((event) =>
          selectedFunction(indonesianDateStringToDate(event.event_date)),
        )
        .filter((event) =>
          selectedCity === ""
            ? true
            : event.event_city
                .toLowerCase()
                .includes(selectedCity.toLowerCase()),
        );
    }
  };
</script>

{#await filteredEventList}
  <p>Loading data...</p>
{:then filteredEventList}
  <div
    class="flex items-center justify-center md:justify-between flex-wrap gap-8"
  >
    <div
      class="inline-flex items-center gap-4 flex-wrap justify-center md:justify-start"
    >
      {#each timeFilter as filter}
        <button
          on:click={() =>
            handleSelectedTimeFilter(filter.timeFunction, filter.label)}
          class={`hover:shadow-lg hover:shadow-neutral transition-color duration-100 ${selectedTimeFilter === filter.label ? "badge badge-primary text-white" : filter.style}`}
        >
          {filter.label}
        </button>
      {/each}
    </div>
    <div
      class="inline-flex items-center gap-2 flex-wrap justify-center md:justify-end"
    >
      <label for="selectedCity">Filter Berdasarkan Kota</label>
      <div>
        <input
          id="selectedCity"
          list="cityList"
          alt="selectedCity"
          bind:value={selectedCity}
          type="text"
          class="input input-bordered min-w-56"
          placeholder="Masukkan nama kota"
        />
        <datalist id="cityList">
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
          class={`card w-full ${isYesterday(indonesianDateStringToDate(event.event_date)) ? "bg-error" : isToday(indonesianDateStringToDate(event.event_date)) ? "bg-warning" : isTomorrow(indonesianDateStringToDate(event.event_date)) ? "bg-accent" : isThisWeek(indonesianDateStringToDate(event.event_date)) ? "bg-primary-content" : "bg-base-100"} shadow-xl`}
        >
          <div class="card-body">
            <h5 class="card-title">{event.event_name}</h5>

            <p>Tanggal: {event.event_date}</p>
            <p>
              Lokasi: {event.event_location}
            </p>

            <div class="card-actions">
              <a
                href={event.event_info_link}
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
