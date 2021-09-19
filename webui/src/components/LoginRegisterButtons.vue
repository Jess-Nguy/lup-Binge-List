<!--Sourced: https://mdbootstrap.com/docs/b4/jquery/modals/forms/ -->
<template>
  <div>
    <!-- if user isn't logged in then show this. Buttons will show modals -->
    <div>
      <!-- <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalLoginForm">
        Login
      </button> -->
      <a class="btn btn-md btn-success" href="http://localhost:8000/auth/google">Login with Google</a>
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
          <form @submit.prevent="submitRegister">
            <div class="modal-body mx-3">
              <div class="md-form mb-5">
                <i class="fas fa-envelope prefix grey-text"></i>
                <input v-model="registerUsername" id="registerForm-username" class="form-control validate" />
                <label dat-bsa-error="wrong" data-bs-success="right" for="registerForm-username">Your Username</label>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <input type="submit" class="btn btn-default" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment';
// import DataService from '../../service/dataService';

export default {
  data() {
    return {
      registerUsername: '',
      postId: '',
      role: 'User',
      submitted: false,
    };
  },
  methods: {
    submitRegister() {
      console.log('submit login email: ', this.loginEmail);
      this.loginEmail = '';
      console.log('submit login pass: ', this.loginPass);
      this.loginPass = '';
      console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    },
    async userRegister() {
      // POST request using fetch with async/await

      // const data = {
      //   user_name: this.registerName,
      //   user_password: this.registerPass,
      //   email: this.registerEmail,
      //   timezone: this.zone,
      //   user_role: this.role,
      // };
      // const result = await DataService.createUser(data);
      // console.log('RESULT: ', result);
    },
  },
  // mounted(){
  //   this.userRegister();
  // }
};
</script>
