(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a09fd0"],{"26d3":function(e,t,s){"use strict";s.r(t);var o=s("7a23"),i={class:"settings"},n=Object(o["f"])('<h1>Settings</h1><div class="card"><div class="card-body"><h5 class="card-title">Avatar</h5><label for="image-link">Add your profile image:</label><input type="url" id="image-link"><img src="https://cdn.onlinewebfonts.com/svg/img_98811.png" alt="profile image" width="100" height="100"></div><div class="card-body"><label for="account-username">Username</label><input type="text" id="account-username"></div><div class="card-body"><label for="image-link">Time zone:</label><div class="btn-group"><button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Time zone </button><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">list of time zones</a></li></ul></div></div><div class="card-footer"><button type="submit" class="btn btn-primary">Submit</button></div></div>',2);function a(e,t,s,a,l,r){return Object(o["v"])(),Object(o["d"])("div",i,[n])}var l=s("5530"),r=s("5502"),c={data:function(){return{welcomeMessage:"Welcome user",profileUrl:""}},name:"Settings",computed:{getUser:function(){return this.$store.getters.getUser}},mounted:function(){var e=this;this.$store.subscribe((function(t,s){console.log(t.type),console.log(t.payload),console.log("USER: ",s),e.user=s}));var t=localStorage.getItem("userToken");t?(this.getUser||(this.login(t),this.welcomeMessage="Welcome "+this.getUser.username,this.profileUrl=this.getUser.profile_image),console.log("Settings mount")):this.$router.push("/")},methods:Object(l["a"])({},Object(r["b"])(["login"]))},d=(s("b6f0"),s("d959")),u=s.n(d);const g=u()(c,[["render",a]]);t["default"]=g},"711a":function(e,t,s){},b6f0:function(e,t,s){"use strict";s("711a")}}]);
//# sourceMappingURL=chunk-58a09fd0.9e98232f.js.map