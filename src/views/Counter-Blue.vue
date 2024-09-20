<template>
  <div class="container-fluid conte-coun">
    <div class="row">
      <div v-for="(counter, index) in counters" :key="index" class="col-md-6 col-lg-3 mb-4">
        <div class="counter-item">
          <div class="counter" style="font-size: 70px; font-weight: 800; color: #20DFE3">
            {{ formatNumber(counter.number) }}
          </div>
          <div class="counter-text">{{ getCounterText(index) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counters: [
        { number: 0, isRunning: false, intervalId: null, maxNumber: 35 },
        { number: 0, isRunning: false, intervalId: null, maxNumber: 116 },
        { number: 0, isRunning: false, intervalId: null, maxNumber: 15 },
        { number: 0, isRunning: false, intervalId: null, maxNumber: 4 }, // Ensure maxNumber is a number
      ],
    };
  },
  mounted() {
    // Start auto increment for each counter when component is mounted
    this.counters.forEach(counter => {
      this.startAutoIncrement(counter);
    });
  },
  methods: {
    startAutoIncrement(counter) {
      counter.isRunning = true;
      counter.intervalId = setInterval(() => {
        if (counter.number < counter.maxNumber) {
          counter.number++;
        } else {
          clearInterval(counter.intervalId);
          counter.isRunning = false;
        }
      }, 10); // Adjust interval as needed
    },
    reset(counter) {
      counter.number = 0;
      clearInterval(counter.intervalId); // Clear interval
      counter.isRunning = false;
    },
    formatNumber(number) {
      // Format number with leading zeros, adjust length as needed
      return number.toString().padStart(2, '0'); // Change 2 to the length you need
    },
    getCounterText(index) {
      // Define your text for each counter here
      switch (index) {
        case 0:
          return 'Project Complete';
        case 1:
          return 'Satisfied Clients';
        case 2:
          return 'Experienced Staffs';
        case 3:
          return 'International Awards';
        default:
          return '';
      }
    },
  },
};
</script>

<style scoped>
.conte-coun {
  background-color: #5538F4;
  padding: 50px 20px; /* Adjust padding as needed */
}

.counter-item {
  text-align: center;
  padding: 20px;
  /* Counter item background color */
  border-radius: 8px;
  /* Optional: Add shadow for better visibility */
}

.counter {
  font-size: 70px;
  color: #20DFE3;
}

.counter-text {
  font-size: 17px;
  color: white;
  /* Adjust spacing between number and text */
}
</style>
