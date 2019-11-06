<template>
  <div>
    <div class="content container">
      <div class="row">
        <div class="col-lg-12 text-left mb-4">
          <h4>New User Account</h4>
          <router-link to="/SignIn">
            Already a user?
          </router-link>
        </div>
        <div class="col-lg-4">
          <b-form class="mb-4">
            <b-form-group class="text-left" id="input-group-1" label="Email:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" class="text-left" label="Password:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.password"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
          <hr>
          <b-form class="mt-3">
            <b-form-group id="input-group-3" class="text-left" label="First Name:" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="form.firstName"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" class="text-left" label="Last Name:" label-for="input-4">
              <b-form-input
                id="input-4"
                v-model="form.lastName"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group class="text-left" id="input-group-5" label="Country:" label-for="input-5">
              <b-form-select
                id="input-5"
                v-model="form.country"
                :options="countries"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-6" class="text-left" label="Facebook Email:" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="form.facebookEmail"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </div>
        <div class="col-lg-8 text-left pl-4">
          <p style="padding-top: 1.6rem;">
            Xvoucher requires your permission to collect and maintain your personal data. Xvoucher does not sell your data to 3rd parties; information is collected and stored only for use within the Xvoucher platform. You can review our <a href="#">Terms and Conditions</a>, <a href="#">Privacy Policy</a>, and <a href="#">GDPR information page</a>.
          </p>
          <b-form-group id="input-group-4" class="mt-4">
              <b-form-checkbox-group v-model="checked" id="checkboxes-4">
                <b-form-checkbox>I agree to allow Xvoucher to collect and use my personal data</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
        </div>
        <div class="col-lg-12 d-flex justify-content-end">
          <router-link tag="button" to="/CreateCustomerAccount" class="btn btn-primary">Continue</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
  data() {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        facebookEmail: '',
        country: null
      },
      countries: [
        { 
          text: 'Select Country', 
          value: null 
        }, 
        'United States', 
        'Argentina', 
        'Armenia', 
        'Azerbaijan', 
        'Burundi'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.content {
  padding-bottom: 10%;
  & h4 {
    margin-top: 8%;
    padding-bottom: 0.25rem;
  }
}

</style>

