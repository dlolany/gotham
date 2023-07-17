<template>
  <div>
{{ table.table_number }}
    <p>{{ table.description }}</p>
    <!-- Display additional details or components for the table page -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: {},
    };
  },
  mounted() {
    this.fetchTable();
  },
  methods: {
    fetchTable() {
      const tableId = this.$route.params.id;
      // Make API request to fetch a single table
      this.$axios
        .get(`https://x8ki-letl-twmt.n7.xano.io/api:W5s58OFL/tables/${tableId}`)
        .then((response) => {
          this.table = response.data;
        })
        .catch((error) => {
          console.error('Error fetching table:', error);
        });
    },
  },
};
</script>
