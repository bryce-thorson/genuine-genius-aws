<template>
  <div class="container content">
    <div class="ml-4">
       <b-form-group class="text-left" id="input-group-3" label="How would you like to pay?" label-for="input-3">
          <b-form-radio class="mr-4" v-model="selected" name="some-radios" value="Credit Card">Credit Card</b-form-radio>
          <b-form-radio v-model="selected" name="some-radios" value="Wire / PO">Wire / PO</b-form-radio>
        </b-form-group>
    </div>
    <div class="col-lg-12 mt-4">
    <hr>
    <div class="nav-buttons d-flex justify-content-between mt-4">
        <router-link to="/Cart" class="btn btn-primary">Back</router-link>
        <router-link to="/PaymentMethod" class="btn btn-primary">Continue</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentMethod'
}
</script>

<style>
  .content {
    margin-top: 4%;
  }
</style>