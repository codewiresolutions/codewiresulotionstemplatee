<script setup>
import SliderView from '@/views/SliderView.vue';
import ItSolutions from '@/views/It-Solutions.vue';
import AboutView from '@/views/AboutView.vue';
import ItSuccess from '@/views/ItSuccess.vue';
import ProjectCompleted from '@/views/Project-Completed.vue';
import OurCustomers from '@/views/Our-Customers.vue';
import CounterBlue from '@/views/Counter-Blue.vue';
import Contact from '@/views/contact.vue';
import ItStaff from '@/views/It-Staff.vue';
import axios from 'axios';
import { ref } from 'vue';
</script>

<template>
  <div class="p-0 m-0">
    <div class="container-fluid p-0 m-0">
      <slider-view></slider-view>
    </div>
    <section id="bookappointment">
      <div class="container-back" style="background-color: #F0F1F5 !important;">
        <div class="container-book">
          <div class="inner-cont">
            <h3 class="app-one-title">Book Appointment with Codewire Solutions</h3>
            <p class="app-one-text">Book an appointment for IT services to ensure the security and efficiency of your systems.</p>
            <div class="app-one__form">
              <div class="card-row">
                <div class="row">
                  <div class="col-lg-4 col-md-12">
                    <span class="wpcf7-form-control-wrap your-name-wrap">
                      <input
                        class="form-input text-white"
                        placeholder="Your name"
                        v-model="contact.name"
                      />
                    </span>
                    <p v-if="errors.name" class="text-danger">{{ errors.name[0] }}</p>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <span class="wpcf7-form-control-wrap your-name-wrap">
                      <input
                        class="form-input text-white"
                        placeholder="Your email"
                        v-model="contact.email"
                      />
                    </span>
                    <p v-if="errors.email" class="text-danger">{{ errors.email[0] }}</p>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <span class="wpcf7-form-control-wrap your-name-wrap">
                      <input
                        class="form-input text-white"
                        placeholder="Phone Number"
                        v-model="contact.phone_number"
                      />
                    </span>
                    <p v-if="errors.phone_number" class="text-danger">{{ errors.phone_number[0] }}</p>
                  </div>
                  <div class="col-lg-8 col-md-12">
                    <span class="wpcf7-form-control-wrap your-name-wrap">
                      <textarea
                        class="form-input-query"
                        placeholder="Description"
                        v-model="contact.description"
                      ></textarea>
                    </span>
                    <p v-if="errors.description" class="text-danger">{{ errors.description[0] }}</p>
                  </div>
                  <div class="col-lg-12">
                    <div class="app-one__bottom">
                      <p class="app-one-text">
                        Schedule an appointment with <strong>Codewire Solutions</strong> today for
                        <strong>IT services</strong> to enhance the security and efficiency of your systems,
                        and receive customized support designed specifically for your needs.
                      </p>
                      <button
                        class="btn-learn"
                        @click="submitContactForm"
                      >
                        Get Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="bookhr-line">
          <ItStaff></ItStaff>
        </div>
      </div>
    </section>
    <it-solutions></it-solutions>
    <about-view></about-view>
    <ItSuccess></ItSuccess>
    <project-completed></project-completed>
    <our-customers></our-customers>
    <counter-blue></counter-blue>
    <contact></contact>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        phone_number: '',
        description: '',
      },
      errors: {},
    };
  },
  methods: {
    async submitContactForm() {
      try {
        this.errors = {};
        const response = await axios.post('https://backendcodewiresolutions.codewiresolutions.com/api/contacts', this.contact);
        Swal.fire({
          title: "Success!",
          text: "Your contact has been submitted successfully.",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            confirmButton: 'custom-swal-confirm',
          },
          background: '#ffffff',
          backdrop: `
            rgba(0, 0, 0, 0.5)
            url("/images/success-bg.png")
            center no-repeat
          `,
          timer: 3000,
          timerProgressBar: true,
          showClass: { popup: 'animate__animated animate__zoomIn' },
          hideClass: { popup: 'animate__animated animate__zoomOut' },
        });
        this.contact.name = '';
        this.contact.email = '';
        this.contact.phone_number = '';
        this.contact.description = '';
      } catch (error) {
        console.error('Error submitting form:', error);
        if (error.response && error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
      }
    },
  },
};
</script>

<style scoped>
.custom-swal-popup {
  border-radius: 16px;
  padding: 1rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Avenir', 'Segoe UI', sans-serif;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.custom-swal-title {
  color: #4C1D95;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  order: 2;
}

.custom-swal-content {
  color: #4B5563;
  font-size: 16px;
  line-height: 1.6;
  order: 3;
}

.custom-swal-confirm {
  background-color: #14B8A6 !important;
  color: #ffffff !important;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
  transition: background-color 0.3s ease;
  order: 1;
  margin: 0 auto 1rem;
}

.custom-swal-confirm:hover {
  background-color: #0D9488 !important;
}
</style>