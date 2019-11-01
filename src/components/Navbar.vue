<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="navbar-brand" href="#" @click.prevent="helper">
        <img src="../../src/assets/awsLogo.png" class="logo" alt="">
      </router-link>
      <ul>
        <li v-for="item in navigation" :key="item.id">
          <div class="dropdown">
            <button 
              class="btn btn-secondary"
              :class="{'dropdown-toggle': item.exams}" 
              type="button" 
              id="dropdownMenu2" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
              >
              <span
              data-toggle="list"
              >
              {{item.title}}
              </span>
            </button>
            <div v-if="item.exams" class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button 
                class="dropdown-item" 
                v-for="exam in item.exams" 
                :key="exam.id" 
                type="button"
                >
                {{exam.title}}
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navigation: [
        {
          title: 'AWS Certification Vouchers Home',
          active: false,
          id: 1,
          src: '#exam-home',
        },
        {
          title: 'Foundational',
          active: false,
          id: 2,
          src: '#examFoundational',
          exams: [
            {
              title: 'Foundational-Level Exam Voucher – Pearson VUE',
              id: 1,
            },
            {
              title: 'Foundational-Level Exam Voucher – PSI',
              id: 2,
            }
          ]
        },
        {
          title: 'Associate',
          active: false,
          id: 3,
          src: '#examAssociate',
          exams: [
            {
              title: 'Associate Certification Exam Voucher – Pearson VUE',
              id: 1,
            },
            {
              title: 'Associate Certification Exam Voucher – PSI',
              id: 2,
            }
          ]
        },
        {
          title: 'Professional or Specialty',
          active: false,
          id: 4,
          src: '#examProfessional',
          exams: [
            {
              title: 'Professional or Specialty Certification Exam Voucher – Pearson VUE',
              id: 1,
            },
            {
              title: 'Professional or Specialty Certification Exam Voucher – PSI',
              id: 2,
            }
          ]
        },
        {
          title: 'Shopping Card',
          active: false,
          id: 5,
        },
        {
          title: 'Help',
          active: false,
          id: 6,
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.navbar {
  background-color: $aws--blue;
  align-items: end;
  justify-content: flex-start;
  padding-left: 10rem;
  padding-right: 10rem;
  & .navbar-brand {
    & .logo {
      width: 100%;
      max-width: 250px;
      height: 100%;
      max-height: 200px;
    }
  }
  & ul {
    display: flex;
    list-style: none;
    color: white;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    margin-bottom: -0.4rem;
    & li {
      margin: 0 0.5rem;
      & .dropdown {
        & .btn-secondary {
          background-color: $aws--blue;
          border-color: $aws--blue;
          border-radius: 0;
        }
        & .dropdown-menu {
          border-radius: 0;
          margin-top: 0.1rem;
          & .dropdown-item {
            padding: 1rem;
          }
        }
      }
    }
  }
}

</style>

