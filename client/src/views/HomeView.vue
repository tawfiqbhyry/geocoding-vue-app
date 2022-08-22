<template>
  <div class="home h-screen relative">
    <div id="map" class="h-full z-[1]"></div>
    <teleport to="body" v-if="Error">
      <GeoErrorModal @close="Error = false">
        <template #body>
          <p>
            {{ ErrorMessage }}
          </p>
          <button
            class="mx-auto px-4 py-2 mt-5 bg-red-500 text-white rounded-lg"
            @click="Error = false"
          >
            close
          </button>
        </template>
      </GeoErrorModal>
    </teleport>
    <MapFeatures
      :cords="cords"
      :fetchCords="fetchCords"
      :searchResult="searchResults"
      @TrackLocation="getGeoLocation()"
      @SelectPlace="selectPlace"
      @toggle="toggleSearchResults"
      @RemovePlace="RemovePlace"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import GeoErrorModal from "@/components/GeoErrorModal.vue";
import MapFeatures from "@/components/MapFeatures.vue";
export default {
  setup() {
    let map;
    onMounted(() => {
      map = leaflet.map("map").setView([31.4078749, 31.8379464], 10);
      leaflet
        .tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.VUE_APP_API_KEY}`,
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            access_token: process.env.VUE_APP_API_KEY,
          }
        )
        .addTo(map);
      map.on("moveend", () => {
        closeSearchResults();
      });

      getGeoLocation();
    });

    const cords = ref(null);
    const fetchCords = ref(null);
    const geoMarker = ref(null);

    const getGeoLocation = () => {
      if (cords.value) {
        cords.value = null;
        sessionStorage.removeItem("cords");
        map.removeLayer(geoMarker.value);
        return;
      }
      if (sessionStorage.getItem("cords")) {
        cords.value = JSON.parse(sessionStorage.getItem("cords"));
        plotGeoLocation(cords.value);
        return;
      }
      fetchCords.value = true;
      navigator.geolocation.getCurrentPosition(setCords, getLocError);
    };

    const Error = ref(null);
    const ErrorMessage = ref(null);

    const setCords = (position) => {
      fetchCords.value = null;
      const setSessionCords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      sessionStorage.setItem("cords", JSON.stringify(setSessionCords));
      cords.value = setSessionCords;
      plotGeoLocation(cords.value);
    };

    const plotGeoLocation = (cords) => {
      const customMarker = leaflet.icon({
        iconUrl: require("../assets/map-marker-blue.svg"),
        iconSize: [40, 40],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
      });
      geoMarker.value = leaflet
        .marker([cords.lat, cords.lng], { icon: customMarker })
        .addTo(map);
      map.setView([cords.lat, cords.lng], 15);
    };

    const getLocError = (error) => {
      Error.value = true;
      ErrorMessage.value = error.message;
      fetchCords.value = null;
    };

    const placeMarker = ref(null);
    const selectPlace = (place) => {
      if (placeMarker.value) {
        map.removeLayer(placeMarker.value);
      }
      const customMarker = leaflet.icon({
        iconUrl: require("../assets/map-marker-red.svg"),
        iconSize: [40, 40],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
      });
      placeMarker.value = leaflet
        .marker([place.coordinates[1], place.coordinates[0]], {
          icon: customMarker,
        })
        .addTo(map);
      map.setView([place.coordinates[1], place.coordinates[0]], 15);
      closeSearchResults();
    };

    const searchResults = ref(null);
    const toggleSearchResults = () => {
      searchResults.value = !searchResults.value;
    };

    const closeSearchResults = () => {
      searchResults.value = null;
    };
    const RemovePlace = () => {
      map.removeLayer(placeMarker.value);
      placeMarker.value = null;
    };

    return {
      Error,
      ErrorMessage,
      cords,
      selectPlace,
      fetchCords,
      RemovePlace,
      geoMarker,
      getGeoLocation,
      searchResults,
      toggleSearchResults,
      closeSearchResults,
    };
  },
  name: "HomeView",
  components: { GeoErrorModal, MapFeatures },
};
</script>
