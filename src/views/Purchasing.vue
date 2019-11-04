<template>
  <div>
    <div class="content container">
      <h5>Select Purchasing Option</h5>
      <b-form-group class="radios" v-for="option in options" :key="option">
        <b-form-radio 
          v-model="selected"
          class="option"
          name="some-radios" 
          :value="key"
          >{{option}}
        </b-form-radio>
      </b-form-group>
      <hr>
      <div class="nav-buttons d-flex justify-content-between mt-4">
        <router-link to="/Cart" class="btn btn-primary">Back</router-link>
        <router-link to="/SignIn" class="btn btn-primary">Continue</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Purchasing',
  data() {
    return {
      selected: '',
      options: [
        "Purchasing for myself (personal expense)",
        "Purchasing for myself (business expense)",
        "Purchasing for multiple people (business expense)"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.content {
  text-align: left;
  margin-top: 6%;
  & h5 {
    padding-bottom: 1rem;
  }
  & .radios {
    & .option {
      margin-left: 1rem;
    }
  }
  & hr {
    margin: 3rem 0 1rem 0;
  }
}

</style>

