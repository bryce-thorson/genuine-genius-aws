<template>
  <div>
    <div class="content container">
      <div class="row">
        <div class="col-lg-12">
          <h4>Create Customer Account</h4>
        </div>
        <div class="col-lg-6">
          <b-form>
              <b-form-group id="input-group-1" class="text-left" label="Organization Name:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.orgName"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" class="text-left" label="Tax ID / VAT #:" label-for="input-2">
              <div class="d-flex justify-content-between">
                <b-form-input
                  id="input-2"
                  v-model="form.taxID"
                  required
                ></b-form-input>
                <button class="btn btn-secondary"  data-toggle="modal" data-target="#taxIDModal" style="width: 30%; margin-left: 0.5rem;">No Tax ID</button>
                </div>
              </b-form-group>
              <b-form-group class="text-left" id="input-group-3" label="Tax Status:" label-for="input-3">
                <div class="d-flex justify-content-evenly">
                  <b-form-radio class="mr-4" v-model="selected" name="some-radios" value="Taxable">Taxable</b-form-radio>
                  <b-form-radio v-model="selected" name="some-radios" value="Exempt" data-toggle="modal" data-target="#taxStatusModal">Tax Exempt</b-form-radio>
                </div>
              </b-form-group>
              <b-form-group id="input-group-4" class="text-left" label="Address Line 1:" label-for="input-4">
                <b-form-input
                  id="input-4"
                  v-model="form.addressOne"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-5" class="text-left" label="Address Line 2:" label-for="input-5">
                <b-form-input
                  id="input-5"
                  v-model="form.addressTwo"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form>
        </div>
        <div class="col-lg-6">
          <b-form>
            <b-form-group id="input-group-6" class="text-left" label="City:" label-for="input-6">
                <b-form-input
                  id="input-6"
                  v-model="form.city"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-7" class="text-left" label="State / Province:" label-for="input-7">
                <b-form-input
                  id="input-7"
                  v-model="form.state"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-8" class="text-left" label="Postal Code:" label-for="input-8">
                <b-form-input
                  id="input-8"
                  v-model="form.zip"
                  required
                ></b-form-input>
              </b-form-group>
               <b-form-group class="text-left" id="input-group-9" label="Country:" label-for="input-9">
                <b-form-select
                  id="input-9"
                  v-model="form.country"
                  :options="countries"
                  required
                ></b-form-select>
              </b-form-group>
          </b-form>
        </div>
        <div class="col-lg-12 mt-4">
          <hr>
          <div class="nav-buttons d-flex justify-content-between mt-4">
              <router-link to="/Cart" class="btn btn-primary">Back</router-link>
              <router-link to="/PaymentMethod" class="btn btn-primary">Continue</router-link>
          </div>
        </div>
         <!-- Tax Status Modal -->
        <div class="modal fade" id="taxIDModal" tabindex="-1" role="dialog" aria-labelledby="taxIDModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="taxIDModalLabel">Customer Tax ID</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-left">
                <p>To purchase for business purposes you must provide a Tax Id or VAT #. 
                  If you do not know your Tax Id / VAT # or are not sure how to proceed, please log out and consult the Customer FAQ. 
                  You may switch your purchase to one for personal use, but please be advised that this will impact the calculated tax on this purchase.
                </p>
              </div>
              <div class="modal-footer d-flex justify-content-between">
                <button type="button" class="btn btn-secondary">Log Out / Customer FAQ</button>
                <button type="button" class="btn btn-primary">Purchase for Personal Use</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Tax Status Modal -->
        <div class="modal fade" id="taxStatusModal" tabindex="-1" role="dialog" aria-labelledby="taxStatusModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="taxStatusModalLabel">Tax Exempt Status</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-left">
                <p>To establish your organization as tax exempt, you must file a copy of your tax exemption certificate with Xvoucher. Please click below to contact our support desk.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Log Out and Contact Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateCustomerAccount',
  data() {
    return {
      form: {
        orgName: '',
        taxID: null,
        taxStatus: [],
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        zip: null,
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

.content {
  margin-top: 4%;
  padding-bottom: 10%;
}

</style>

