<template>
  <div>
    <div class="content container">
      <div class="row align-items-center">
        <div class="col-lg-12 mb-4">
          <h5 class="mb-2"><strong>Exisiting User?</strong> Sign in using your Xvoucher credentials</h5>
          <h5><strong>No Xvoucher account?</strong> Create an account quickly and easily</h5>
        </div>
        <div class="col-lg-12 d-flex justify-content-center">
          <div class="card signInCard">
            <div class="card-body">
             <b-form @submit="onSubmit" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
                class="text-left"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                  class="text-left"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" class="text-left" label="Your password:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  type="password"
                  required
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4" class="text-left">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                  <b-form-checkbox value="me">Remember me</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <router-link 
                to="/Agreement" 
                tag="button" 
                class="btn btn-primary btn-block a-button a-button-primary"
                >Sign in with Xvoucher
                </router-link>
                <router-link to="/CreateAccount">
                  Sign Up
                </router-link>
            </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        show: true,
    }
  }
}
</script>

<style lang="scss" scoped>

.content {
  margin-top: 4%;
  & .signInCard {
    max-width: 400px;
    width: 100%;

  }
  & .a-button {
    background: #e7e9ec;
    border-radius: 3px;
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none !important;
    vertical-align: middle;
    box-shadow: none;
  }
  & .a-button-primary {
        background:#f0c14b;
        border-color:#a88734 #9c7e31#846a29;
        color:#111;
        background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
        font-size: 0.9rem;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
  }
}


</style>

