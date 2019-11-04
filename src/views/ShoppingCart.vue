<template>
  <div class="cart-content container">
    <div class="card">
      <div class="card-header shopping-cart-header d-flex justify-content-between">
        <div class="left-side">
          <p class="mx-2">Qty</p>
          <p class="ml-3 pl-3">Kit</p>
        </div>
        <div class="right-side">
          <p>Subtotal</p>
        </div>
      </div>
      <div class="card-body shopping-cart-body">
        <div class="cart-item">
          <div class="left-side">
            <input style="max-width: 50px;" type="text" maxlength="3" value="1" name="qty" class="form-control mr-2" id="quantity"> 
            <p class="kit">AWS Certification Exam Voucher - Associate Level - Pearson VUE</p>
          </div>
          <div class="right-side">
            <button class="btn btn-outline-danger btn-sm mr-4">Remove</button>
            <p class="price">$150.00</p>
          </div>
        </div>
        <div class="cart-item">
          <div class="left-side">
            <input style="max-width: 50px;" type="text" maxlength="3" value="1" name="qty" class="form-control mr-2" id="quantity"> 
            <p class="kit">AWS Certification Exam Voucher - Associate Level - Pearson VUE</p>
          </div>
          <div class="right-side">
            <button class="btn btn-outline-danger btn-sm mr-4">Remove</button>
            <p class="price">$150.00</p>
          </div>
        </div>
        <hr>
        <div class="totals d-flex justify-content-end">
          <div class="total-text">
            <p>Subtotal</p>
            <p>Total</p>
          </div>
          <div class="total-values">
            <p>$150.00</p>
            <p>$150.00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-buttons d-flex justify-content-between mt-4">
      <router-link to="/" class="btn btn-primary">Back to Shopping</router-link>
      <router-link to="/Purchasing" class="btn btn-primary">Continue</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart'
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.cart-content {
  margin-top: 10%;
  & hr {
    width: 100%;
  }
  & p {
    margin: 0;
  }
  & .shopping-cart-header {
    font-weight: 700;
  }
  & .left-side, & .right-side {
    display: flex;
    align-items: center;
  }
  & .kit {
    margin-left: 1rem;
    font-weight: 900;
  }
  & .shopping-cart-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
      & .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    & .totals {
      font-weight: 700;
      & .total-text {
        text-align: left;
        margin-right: 2rem;
        position: relative;
        &::after {
          content: '';
          width: 2px;
          height: 100%;
          position: absolute;
          background-color: #e8e8e8;
          top: 0;
          right: -1rem;
        }
        & p {
          padding: 0.15rem 0;
        }
      }
      & .total-values {
        display: flex;
        flex-direction: column;
        & p {
          padding: 0.25rem 0;
        }
      }
    }
  }
}


</style>

