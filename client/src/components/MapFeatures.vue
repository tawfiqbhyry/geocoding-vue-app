<template>
  <div
    class="
      w-full
      md:w-auto
      absolute
      md:top-[40px] md:left-[60px]
      z-[2]
      flex
      gap-4px-6
      max-w-full
      py-8
      md:px-0 md:py-0
      bg-transparent
    "
  >
    <div class="relative flex-1 md:min-w-[350px]">
      <input
        type="text"
        name="location"
        class="
          pl-9
          pr-4
          py-3
          text-sm
          focus:outline-none
          w-full
          shadow-md
          rounded-md
        "
        @input="search"
        v-model="searchQuery"
        @focus="$emit('toggle')"
        placeholder="Enter your search:"
      />
      <div
        class="
          absolute
          top-0
          h-full
          flex
          items-center
          left-[8px]
          hover:translate-x-2 hover:transition-all
        "
      >
        <i class="fas fa-search"></i>
      </div>
    </div>
    <div
      class="
        px-4
        bg-white
        rounded-md
        shadow-md
        flex
        items-center
        min-h-[45px]
        hover:cursor-pointer hover:transition-all-[300ms] hover:scale-110
      "
      :class="{ 'bg-slate-600': cords }"
      @click="$emit('TrackLocation')"
    >
      <i
        class="fa fa-location-arrow text-state-600 text-[18px]"
        :class="{ 'text-white': cords, 'animate-pulse': fetchCords }"
      ></i>
    </div>
    <div class="w-full absolute mt-[60px]">
      <div class="w-full" v-if="searchQuery && searchResult">
        <div
          class="overflow-scroll section h-[200px] bg-white rounded-md"
          v-if="searchResults.length > 0"
        >
          <div
            class="
              px-4
              py-2
              flex
              gap-x-2
              cursor-pointer
              justify-between
              items-center
              hover:bg-slate-600 hover:text-white
            "
            v-for="(place, index) in searchResults"
            :key="place"
            @click="plotResult(place)"
          >
            <div class="flex items-center gap-x-2 justify-between">
              <p>{{ index + 1 }}</p>
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <p>{{ place.place_name_en }}</p>
          </div>
        </div>
        <div
          class="overflow-scroll section h-[200px] bg-white rounded-md"
          v-else
        >
          <AnimationComponent />
        </div>
      </div>
      <div
        class="bg-white rounded-md py-2 px-4 mt-[15px] w-full"
        v-if="selectedResult"
      >
        <i
          @click="removeResult"
          class="fas fa-times-circle flex justify-end"
        ></i>
        <h1 class="text-lg">{{ selectedResult.text }}</h1>
        <p class="text-xs mb-1">
          {{ selectedResult.properties.address }}, {{ selectedResult.city }},
          {{ selectedResult.state }}
        </p>
        <p class="text-xs">{{ selectedResult.properties.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import AnimationComponent from "@/components/animationComponent.vue";
export default {
  setup(props, { emit }) {
    const searchQuery = ref(null);
    const searchResults = ref([]);
    const queryTimeout = ref(null);
    const selectedResult = ref(null);

    const search = () => {
      if (queryTimeout.value) {
        clearTimeout(queryTimeout.value);
      }
      searchResults.value = [];
      queryTimeout.value = setTimeout(async () => {
        if (searchQuery.value != "") {
          const params = new URLSearchParams({
            fuzzyMatch: true,
            language: "en",
            limit: 10,
            proximity: props.cords
              ? `${props.cords.lng},${props.cords.lat}`
              : "0,0",
          });
          axios.get(`api/search/${searchQuery.value}?${params}`).then((res) => {
            searchResults.value = res.data.features;
          });
        }
      }, 750);
    };

    const plotResult = (place) => {
      selectedResult.value = place;
      console.log(place);
      emit("SelectPlace", place.geometry);
    };

    const removeResult = () => {
      selectedResult.value = null;
      emit("RemovePlace");
    };

    return {
      searchQuery,
      searchResults,
      queryTimeout,
      search,
      removeResult,
      plotResult,
      selectedResult,
    };
  },
  props: {
    cords: {
      type: Object,
      default: null,
    },
    fetchCords: {
      type: Boolean,
      default: false,
    },
    searchResult: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    AnimationComponent,
  },
};
</script>

<style>
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>