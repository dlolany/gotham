<template>
  <div>
    <h1>Tables</h1>
    <ul>
      <div class="flex flex-col w-[100%] items-center gap-[50px]">
      <div class=" w-[90%] h-[50px] flex items-center justify-center bg-black cursor-pointer" v-for="table in tables" :key="table.id" @click="navigateToTable(table.id)">
            <p class=" text-white">{{ table.table_number }}</p>
        </div>
    </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tables: [],
    };
  },
  mounted() {
    this.fetchTables();
  },
  methods: {
    fetchTables() {
      this.$axios
        .get('https://x8ki-letl-twmt.n7.xano.io/api:W5s58OFL/tables')
        .then((response) => {
          this.tables = response.data;
        })
        .catch((error) => {
          console.error('Error fetching tables:', error);
        });
    },
    navigateToTable(tableId) {
      this.$router.push(`/tables/${tableId}`);
    },
  },
};
</script>
