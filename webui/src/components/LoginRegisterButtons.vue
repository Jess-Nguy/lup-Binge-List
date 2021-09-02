<!--Sourced: https://mdbootstrap.com/docs/b4/jquery/modals/forms/ -->
<template>
  <div>
    <!-- if user isn't logged in then show this. Buttons will show modals -->
    <div>
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalLoginForm">
        Login
      </button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalRegisterForm">
        Register
      </button>
    </div>

    <!-- Login Modal -->
    <div
      class="modal fade"
      id="modalLoginForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="submitLogin">
            <div class="modal-body mx-3">
              <div class="md-form mb-5">
                <i class="fas fa-envelope prefix grey-text"></i>
                <input v-model="loginEmail" type="email" id="loginForm-email" class="form-control validate" />
                <label dat-bsa-error="wrong" data-bs-success="right" for="loginForm-email">Your email</label>
              </div>

              <div class="md-form mb-4">
                <i class="fas fa-lock prefix grey-text"></i>
                <input v-model="loginPass" type="password" id="loginForm-pass" class="form-control validate" />
                <label data-bs-error="wrong" data-bs-success="right" for="loginForm-pass">Your password</label>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button type="submit" class="btn btn-default">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Register Modal -->
    <div
      class="modal fade"
      id="modalRegisterForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="submitRegister">
            <div class="modal-body mx-3">
              <div class="md-form mb-5">
                <i class="fas fa-user prefix grey-text"></i>
                <input v-model="registerName" type="text" id="registerForm-name" class="form-control validate" />
                <label data-bs-error="wrong" data-bs-success="right" for="registerForm-name">Your name</label>
              </div>
              <div class="md-form mb-5">
                <i class="fas fa-envelope prefix grey-text"></i>
                <input v-model="registerEmail" type="email" id="registerForm-email" class="form-control validate" />
                <label data-bs-error="wrong" data-bs-success="right" for="registerForm-email">Your email</label>
              </div>
              <div class="md-form mb-4">
                <i class="fas fa-lock prefix grey-text"></i>
                <input v-model="registerPass" type="password" id="registerForm-pass" class="form-control validate" />
                <label data-bs-error="wrong" data-bs-success="right" for="registerForm-pass">Your password</label>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button type="submit" class="btn btn-deep-orange" data-bs-dismiss="modal">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      loginEmail: '',
      loginPass: '',
      registerName: '',
      registerEmail: '',
      registerPass: '',
    };
  },
  methods: {
    submitLogin() {
      console.log('submit login email: ', this.loginEmail);
      this.loginEmail = '';
      console.log('submit login pass: ', this.loginPass);
      this.loginPass = '';
    },
    submitRegister() {
      var timedifference = moment().tz("America/Los_Angeles").format();
      console.log('TIMEZONE: ', timedifference);
      console.log('submit register email: ', this.registerEmail);
      this.registerEmail = '';
      console.log('submit register name: ', this.registerName);
      this.registerName = '';
      console.log('submit register pass: ', this.registerPass);
      this.registerPass = '';
    },
    // async registerUser() {
    //   // POST request using fetch with async/await
    //   const requestOptions = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ username: this.registerUser, email: registerEmail, timezone: "America/Toronto"})
    //   };
    //   const response = await axios("/register", requestOptions);
    //   const data = await response.json();
    //   this.postId = data.id;
    // }
  },
};
</script>
