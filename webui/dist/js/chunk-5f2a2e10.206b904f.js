(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f2a2e10"],{"0d47":function(t,e,n){},"25b4":function(t,e,n){},"3c46":function(t,e,n){"use strict";n("25b4")},"5f08":function(t,e,n){"use strict";var a=n("7a23"),r=Object(a["O"])("data-v-6c6cb131");Object(a["y"])("data-v-6c6cb131");var c={class:"vstack gap-2 col-md-1 mx-auto"},s=Object(a["h"])("label",{class:"form-label",for:"sideFilterCountry"},"Country",-1),o={class:"btn-group"},i=Object(a["h"])("option",{value:""},"-",-1),u=Object(a["h"])("label",{class:"form-label",for:"sideFilterGenre"},"Genre",-1),l={class:"btn-group"},d=Object(a["h"])("option",{value:""},"-",-1),b=Object(a["h"])("label",{class:"form-label",for:"sideFilterYearRange"},"Year",-1),h={class:"btn-group"},O=Object(a["h"])("option",{value:""},"-",-1),j=Object(a["h"])("p",null,"to",-1),p=Object(a["h"])("option",{value:""},"-",-1);Object(a["w"])();var m=r((function(t,e,n,r,m,f){return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("div",c,[s,Object(a["h"])("div",o,[Object(a["L"])(Object(a["h"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return m.query.country=t}),id:"sideFilterCountry",class:"form-select","aria-label":"Default select example"},[i,(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(m.listOfCountries,(function(t,e){return Object(a["v"])(),Object(a["d"])("option",{key:e},Object(a["E"])(t),1)})),128))],512),[[a["G"],m.query.country]])]),u,Object(a["h"])("div",l,[Object(a["L"])(Object(a["h"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return m.query.genre=t}),id:"sideFilterGenre",class:"form-select","aria-label":"Default select example"},[d,(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(m.listOfGenres,(function(t,e){return Object(a["v"])(),Object(a["d"])("option",{key:e},Object(a["E"])(t),1)})),128))],512),[[a["G"],m.query.genre]])]),b,Object(a["h"])("div",h,[Object(a["L"])(Object(a["h"])("select",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return m.query.yearStart=t}),id:"sideFilterYearRange",class:"form-select","aria-label":"Default select example"},[O,(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(m.listOfYears,(function(t,e){return Object(a["v"])(),Object(a["d"])("option",{key:e},Object(a["E"])(t),1)})),128))],512),[[a["G"],m.query.yearStart]]),j,Object(a["L"])(Object(a["h"])("select",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return m.query.yearStart=t}),id:"sideFilterYearRange",class:"form-select","aria-label":"Default select example"},[p,(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(m.listOfYears,(function(t,e){return Object(a["v"])(),Object(a["d"])("option",{key:e},Object(a["E"])(t),1)})),128))],512),[[a["G"],m.query.yearStart]])])])])})),f=n("5530"),g=n("5502"),v={data:function(){return{listOfStatus:["Airing","Finished","Not released","Not airing"],listOfYears:[1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],listOfCountries:[],listOfGenres:[],query:{country:"",genre:"",yearStart:"",yearEnd:""}}},name:"SideFilter",computed:{getCountries:function(){return this.$store.getters.getCountries},getGenres:function(){return this.$store.getters.getGenres}},mounted:function(){var t=localStorage.getItem("userToken");t?this.getUser||this.login(t):this.$router.push("/"),console.log("COUNTRIES: ",this.getCountries),this.listOfCountries=this.getCountries,this.listOfGenres=this.getGenres},methods:Object(f["a"])(Object(f["a"])({},Object(g["b"])(["login"])),{},{submitRequestShow:function(){console.log("enteredCountry: ",this.enteredCountry)}}),watch:{query:{deep:!0,handler:function(){this.$emit("side-filter-change",this.query)}}}},y=(n("d6aa"),n("6b0d")),w=n.n(y);const S=w()(v,[["render",m],["__scopeId","data-v-6c6cb131"]]);e["a"]=S},"86f2":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),r={class:"accountList"},c={key:0},s=Object(a["h"])("h1",null,"My List",-1),o={key:1};function i(t,e,n,i,u,l){var d=Object(a["C"])("account-nav"),b=Object(a["C"])("account-list-filter"),h=Object(a["C"])("side-filter"),O=Object(a["C"])("account-list-shows");return Object(a["v"])(),Object(a["d"])("div",r,[u.query.userId===u.loggedInUser.id?(Object(a["v"])(),Object(a["d"])("div",c,[s])):(Object(a["v"])(),Object(a["d"])("div",o,[Object(a["h"])("h1",null,Object(a["E"])(u.userQuery.username)+"'s Account",1)])),Object(a["h"])(d,{id:u.query.userId},null,8,["id"]),Object(a["h"])(b,{onStatusChange:l.updateQueryStatus},null,8,["onStatusChange"]),Object(a["h"])(h,{onSideFilterChange:l.updateQuerySideFilter},null,8,["onSideFilterChange"]),Object(a["L"])(Object(a["h"])(O,{tableName:"Watching",bingeStatusList:u.watchList,onUpdateAccountShow:l.accountShowUpdated},null,8,["bingeStatusList","onUpdateAccountShow"]),[[a["I"],"watching"==u.query.status||""==u.query.status]]),Object(a["L"])(Object(a["h"])(O,{tableName:"Completed",bingeStatusList:u.completedList,onUpdateAccountShow:l.accountShowUpdated},null,8,["bingeStatusList","onUpdateAccountShow"]),[[a["I"],"completed"==u.query.status||""==u.query.status]]),Object(a["L"])(Object(a["h"])(O,{tableName:"Paused",bingeStatusList:u.pausedList,onUpdateAccountShow:l.accountShowUpdated},null,8,["bingeStatusList","onUpdateAccountShow"]),[[a["I"],"paused"==u.query.status||""==u.query.status]]),Object(a["L"])(Object(a["h"])(O,{tableName:"Dropped",bingeStatusList:u.droppedList,onUpdateAccountShow:l.accountShowUpdated},null,8,["bingeStatusList","onUpdateAccountShow"]),[[a["I"],"dropped"==u.query.status||""==u.query.status]]),Object(a["L"])(Object(a["h"])(O,{tableName:"Planned",bingeStatusList:u.plannedList,onUpdateAccountShow:l.accountShowUpdated},null,8,["bingeStatusList","onUpdateAccountShow"]),[[a["I"],"planned"==u.query.status||""==u.query.status]])])}var u=n("5530"),l=n("1da1"),d=(n("4de4"),n("96cf"),n("5502")),b=Object(a["O"])("data-v-bb27a584");Object(a["y"])("data-v-bb27a584");var h={class:"btn-group-vertical"};Object(a["w"])();var O=b((function(t,e,n,r,c,s){return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("div",h,[Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return s.statusChange("all")})},"All"),Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=function(t){return s.statusChange("watching")})},"Watching"),Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=function(t){return s.statusChange("completed")})},"Completed"),Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[4]||(e[4]=function(t){return s.statusChange("paused")})},"Paused"),Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=function(t){return s.statusChange("dropped")})},"Dropped"),Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=function(t){return s.statusChange("planned")})},"Planned")])])})),j={methods:{statusChange:function(t){this.$emit("status-change",t)}}},p=(n("3c46"),n("6b0d")),m=n.n(p);const f=m()(j,[["render",O],["__scopeId","data-v-bb27a584"]]);var g=f,v={key:0},y={class:"table table-striped table-hover"},w=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{scope:"col"}),Object(a["h"])("th",{scope:"col"},"Title"),Object(a["h"])("th",{scope:"col"},"Score"),Object(a["h"])("th",{scope:"col"},"Progress"),Object(a["h"])("th",{scope:"col"},"Edit")])],-1),S={scope:"row"},L={key:1},E={style:{color:"red"}};function F(t,e,n,r,c,s){var o=this,i=Object(a["C"])("router-link"),u=Object(a["C"])("edit-account-show");return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("h3",null,Object(a["E"])(n.tableName),1),n.bingeStatusList.length>0?(Object(a["v"])(),Object(a["d"])("div",v,[Object(a["h"])("table",y,[w,Object(a["h"])("tbody",null,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(n.bingeStatusList,(function(t){return Object(a["v"])(),Object(a["d"])("tr",{key:t.show_id},[Object(a["h"])("th",S,[Object(a["h"])("img",{id:"showImage",src:t.show_image,alt:t.title[0],width:"150",heigth:"350"},null,8,["src","alt"])]),Object(a["h"])("td",null,[Object(a["h"])(i,{to:"/show/".concat(t.show_id)},{default:Object(a["K"])((function(){return[Object(a["g"])(Object(a["E"])(t.title[0]),1)]})),_:2},1032,["to"])]),Object(a["h"])("td",null,Object(a["E"])(t.score)+"/10",1),Object(a["h"])("td",null,Object(a["E"])(t.episode_progress),1),Object(a["h"])("td",null,[Object(a["h"])(u,{selectedEdit:t,onUpdateAccountShow:e[1]||(e[1]=function(t){return o.$emit("update-account-show")})},null,8,["selectedEdit"])])])})),128))])])])):(Object(a["v"])(),Object(a["d"])("div",L,[Object(a["h"])("p",E,"No shows found for "+Object(a["E"])(n.tableName),1)]))])}var C=Object(a["h"])("i",{class:"fas fa-edit"},null,-1),k={key:0,class:"modal top fade",id:"editAccountShowModal",tabindex:"-1","aria-labelledby":"editAccountShowModalLabel","aria-hidden":"true","data-bs-backdrop":"static","data-bs-keyboard":"false"},A={class:"modal-dialog modal-xl"},U={class:"modal-content"},D={class:"modal-header"},I=Object(a["h"])("h5",{class:"modal-title",id:"editAccountShowModalLabel"},"Editing Show",-1),_={class:"modal-body"},q={class:"card-body"},x={id:"titleSection"},R=Object(a["h"])("i",{class:"fas fa-heart"},null,-1),T={class:"row mb-3"},N={class:"col"},M=Object(a["h"])("label",{class:"form-label",for:"editStatus"},"Status",-1),P={class:"col"},G=Object(a["h"])("label",{class:"form-label",for:"editScore"},"Score",-1),$={class:"col"},V=Object(a["h"])("label",{class:"form-label",for:"editEpisode"},"Episode Progress",-1),B={class:"row mb-3"},H={class:"col"},Q=Object(a["h"])("label",{class:"form-label",for:"editStartDate"},"Start Date",-1),Y={class:"col"},W=Object(a["h"])("label",{class:"form-label",for:"editEndDate"},"End Date",-1),J={class:"col"},z=Object(a["h"])("label",{class:"form-label",for:"editRewatch"},"# of Rewatch",-1),K={class:"form-outline mb-4"},X=Object(a["h"])("label",{class:"form-label",for:"note"},"Note",-1),Z={class:"modal-footer"},tt=Object(a["h"])("button",{type:"submit",class:"btn btn-success","data-bs-dismiss":"modal"},"Update",-1);function et(t,e,n,r,c,s){return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("a",{onClick:e[1]||(e[1]=function(){return s.loadModal&&s.loadModal.apply(s,arguments)}),"data-bs-toggle":"modal","data-bs-target":"#editAccountShowModal"},[C]),c.isOpen?(Object(a["v"])(),Object(a["d"])("div",k,[Object(a["h"])("form",{onSubmit:e[12]||(e[12]=Object(a["N"])((function(){return s.submitEditAccountShow&&s.submitEditAccountShow.apply(s,arguments)}),["prevent"]))},[Object(a["h"])("div",A,[Object(a["h"])("div",U,[Object(a["h"])("div",D,[I,Object(a["h"])("button",{onClick:e[2]||(e[2]=function(){return s.closeModal&&s.closeModal.apply(s,arguments)}),type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),Object(a["h"])("div",_,[Object(a["h"])("div",q,[""!==c.showImage?(Object(a["v"])(),Object(a["d"])("img",{key:0,src:c.showImage,alt:"show image",width:"200",height:"350"},null,8,["src"])):(Object(a["v"])(),Object(a["d"])("img",{key:1,src:c.defaultImage,alt:"default image",width:"200",height:"350"},null,8,["src"]))])]),Object(a["h"])("div",x,[Object(a["h"])("h1",null,Object(a["E"])(c.title),1),Object(a["L"])(Object(a["h"])("h6",null,Object(a["E"])(c.titleSynomyms),513),[[a["I"],c.titleSynomyms]])]),Object(a["h"])("div",null,[Object(a["h"])("button",{onClick:e[3]||(e[3]=function(){return s.favouriteToggle&&s.favouriteToggle.apply(s,arguments)}),class:["btn btn-danger",{active:c.editForm.favourite}],style:{"border-radius":"50%"}},[R],2)]),Object(a["h"])("div",T,[Object(a["h"])("div",N,[M,Object(a["L"])(Object(a["h"])("select",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return c.editForm.status=t}),id:"editStatus",class:"form-select","aria-label":"Default select example"},[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(c.listOfStatus,(function(t,e){return Object(a["v"])(),Object(a["d"])("option",{key:e},Object(a["E"])(t),1)})),128))],512),[[a["G"],c.editForm.status]])]),Object(a["h"])("div",P,[G,Object(a["L"])(Object(a["h"])("input",{type:"number",min:"0",max:"10","onUpdate:modelValue":e[5]||(e[5]=function(t){return c.editForm.score=t}),id:"editScore",class:"form-control"},null,512),[[a["H"],c.editForm.score]])]),Object(a["h"])("div",$,[V,Object(a["L"])(Object(a["h"])("input",{type:"number",min:"0",max:n.selectedEdit.total_episodes,"onUpdate:modelValue":e[6]||(e[6]=function(t){return c.editForm.episodeProgress=t}),id:"editEpisode",class:"form-control"},null,8,["max"]),[[a["H"],c.editForm.episodeProgress]])])]),Object(a["h"])("div",B,[Object(a["h"])("div",H,[Q,Object(a["L"])(Object(a["h"])("input",{type:"date","onUpdate:modelValue":e[7]||(e[7]=function(t){return c.editForm.startDate=t}),id:"editStartDate",class:"form-control"},null,512),[[a["H"],c.editForm.startDate]])]),Object(a["h"])("div",Y,[W,Object(a["L"])(Object(a["h"])("input",{type:"date","onUpdate:modelValue":e[8]||(e[8]=function(t){return c.editForm.endDate=t}),id:"editEndDate",class:"form-control"},null,512),[[a["H"],c.editForm.endDate]])]),Object(a["h"])("div",J,[z,Object(a["L"])(Object(a["h"])("input",{type:"number",min:"0","onUpdate:modelValue":e[9]||(e[9]=function(t){return c.editForm.rewatch=t}),id:"editRewatch",class:"form-control"},null,512),[[a["H"],c.editForm.rewatch]])])]),Object(a["h"])("div",K,[X,Object(a["L"])(Object(a["h"])("textarea",{class:"form-control","onUpdate:modelValue":e[10]||(e[10]=function(t){return c.editForm.note=t}),id:"note",rows:"4"},null,512),[[a["H"],c.editForm.note]])]),Object(a["h"])("div",Z,[Object(a["h"])("button",{onClick:e[11]||(e[11]=function(){return s.deleteAccountShow&&s.deleteAccountShow.apply(s,arguments)}),type:"button",class:"btn btn-danger mr-auto","data-bs-dismiss":"modal"}," Delete "),tt])])])],32)])):Object(a["e"])("",!0)])}n("fb6a");var nt=n("7e16"),at={name:"Edit Account Show",props:{selectedEdit:{type:Object,required:!0,default:function(){}}},data:function(){return{isOpen:!1,defaultImage:"https://cdn.onlinewebfonts.com/svg/img_98811.png",showImage:"",title:"",titleSynomyms:"",editForm:{favourite:!1,status:"",score:0,startDate:"",endDate:"",rewatch:0,note:"",episodeProgress:0},listOfStatus:[]}},computed:{getListStatus:function(){return this.$store.getters.getListStatus}},mounted:function(){},methods:{loadModal:function(){var t,e;if(this.listOfStatus=this.getListStatus,this.editForm.favourite=this.selectedEdit.favourite,console.log("this.selectedEdit: ",this.selectedEdit),this.editForm.status=this.selectedEdit.status,this.editForm.score=this.selectedEdit.score,this.editForm.rewatch=this.selectedEdit.rewatch,this.editForm.note="null"!==this.selectedEdit.note?this.selectedEdit.note:"",this.editForm.episodeProgress=this.selectedEdit.episode_progress,this.showImage=this.selectedEdit.show_image,this.title=this.selectedEdit.title[0],this.titleSynomyms=this.selectedEdit.title[1],null!==this.selectedEdit.start_date){var n=new Date(this.selectedEdit.start_date);t=("0"+n.getDate()).slice(-2),e=("0"+(n.getMonth()+1)).slice(-2),this.editForm.startDate=n.getFullYear()+"-"+e+"-"+t}else this.editForm.startDate=this.selectedEdit.start_date;if(null!==this.selectedEdit.end_date){var a=new Date(this.selectedEdit.end_date);t=("0"+a.getDate()).slice(-2),e=("0"+(a.getMonth()+1)).slice(-2),this.editForm.endDate=a.getFullYear()+"-"+e+"-"+t}else this.editForm.endDate=this.selectedEdit.end_date;this.isOpen=!0},closeModal:function(){this.isOpen=!1},submitEditAccountShow:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={status:t.editForm.status,episode_progress:t.editForm.episodeProgress,id_user_show:t.selectedEdit.id_user_show,score:t.editForm.score,rewatch:t.editForm.rewatch,favourite:t.editForm.favourite,start_date:t.editForm.startDate,end_date:t.editForm.endDate,note:t.editForm.note},e.next=3,nt["a"].updateUserBingeList(n);case 3:t.$emit("update-account-show");case 4:case"end":return e.stop()}}),e)})))()},deleteAccountShow:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,nt["a"].deleteBingeList(t.selectedEdit.id_user_show);case 2:alert("DELETED SHOW OFF LIST"),t.$emit("update-account-show");case 4:case"end":return e.stop()}}),e)})))()},favouriteToggle:function(){this.editForm.favourite=!this.editForm.favourite}}};const rt=m()(at,[["render",et]]);var ct=rt,st={props:{tableName:{type:String,required:!0,default:""},bingeStatusList:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{}},components:{EditAccountShow:ct},methods:{loadModal:function(){console.log("LOADING EDIT MODAL")}}};const ot=m()(st,[["render",F]]);var it=ot,ut=n("f59a"),lt=n("5f08"),dt={components:{AccountNav:ut["a"],AccountListFilter:g,AccountListShows:it,SideFilter:lt["a"]},data:function(){return{query:{userId:this.$route.params.id,country:"",genre:"",yearStart:"",yearEnd:"",status:"",favourite:!1},userQuery:{id_user:this.$route.params.id,email:"",google_id:"",username:"",role_id:"",time_zone:""},loggedInUser:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")},bingeList:[],watchList:[],completedList:[],pausedList:[],plannedList:[],droppedList:[]}},name:"My List",computed:{getUser:function(){return this.$store.getters.getUser}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.query.userId=t.$route.params.id,t.userQuery.id_user=t.$route.params.id,e.next=4,t.getUsers();case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadTables();case 2:case"end":return e.stop()}}),e)})))()},watch:{query:{deep:!0,handler:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("WATCH QUERY: ",t.query),e.next=3,t.loadTables();case 3:case"end":return e.stop()}}),e)})))()}}},methods:Object(u["a"])(Object(u["a"])({},Object(d["b"])(["login"])),{},{loadTables:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getBingeList();case 2:t.watchList=t.bingeList.filter((function(t){return"watching"==t.status})),console.log("WATCH LIST: ",t.watchList),t.completedList=t.bingeList.filter((function(t){return"completed"==t.status})),console.log("COMPLETED LIST: ",t.completedList),t.pausedList=t.bingeList.filter((function(t){return"paused"==t.status})),console.log("PAUSED LIST: ",t.pausedList),t.plannedList=t.bingeList.filter((function(t){return"planned"==t.status})),console.log("PLANNED LIST: ",t.plannedList),t.droppedList=t.bingeList.filter((function(t){return"dropped"==t.status})),console.log("DROPPED LIST: ",t.droppedList);case 12:case"end":return e.stop()}}),e)})))()},getBingeList:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,nt["a"].getAccountList(t.query);case 2:t.bingeList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},updateQueryStatus:function(t){this.query.status="all"!==t?t:""},updateQuerySideFilter:function(t){this.query.country=t.country,this.query.genre=t.genre,this.query.yearStart=t.yearStart,this.query.yearEnd=t.yearEnd},accountShowUpdated:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadTables();case 2:case"end":return e.stop()}}),e)})))()},getUsers:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,nt["a"].getUserByFilter(t.userQuery);case 2:n=e.sent,t.userQuery=n[0],console.log("USER: ",t.user),t.role=1==t.user.role_id?"Admin":"User";case 6:case"end":return e.stop()}}),e)})))()}})};const bt=m()(dt,[["render",i]]);e["default"]=bt},9375:function(t,e,n){},d05d:function(t,e,n){"use strict";n("0d47")},d6aa:function(t,e,n){"use strict";n("9375")},f59a:function(t,e,n){"use strict";var a=n("7a23"),r=Object(a["O"])("data-v-8cd5f0da");Object(a["y"])("data-v-8cd5f0da");var c={class:"navbar navbar-expand-lg navbar-light bg-light",id:"AccountNavHeader"},s={class:"navbar-nav mr-auto"},o={class:"nav-item"},i=Object(a["g"])("Overview"),u={class:"nav-item"},l=Object(a["g"])("My List"),d={class:"nav-item"},b=Object(a["g"])("Favourite"),h={class:"nav-item"},O=Object(a["g"])("Social");Object(a["w"])();var j=r((function(t,e,n,j,p,m){var f=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("div",c,[Object(a["h"])("ul",s,[Object(a["h"])("li",o,[Object(a["h"])(f,{to:"/account/".concat(n.id),class:"nav-link"},{default:r((function(){return[i]})),_:1},8,["to"])]),Object(a["h"])("li",u,[Object(a["h"])(f,{to:"/accountList/".concat(n.id),class:"nav-link"},{default:r((function(){return[l]})),_:1},8,["to"])]),Object(a["h"])("li",d,[Object(a["h"])(f,{to:"/favourite/".concat(n.id),class:"nav-link"},{default:r((function(){return[b]})),_:1},8,["to"])]),Object(a["h"])("li",h,[Object(a["h"])(f,{to:"/social/".concat(n.id),class:"nav-link"},{default:r((function(){return[O]})),_:1},8,["to"])])])])])})),p={props:{id:{type:String,required:!0,default:""}},created:function(){console.log("NAV ID: ",this.id)}},m=(n("d05d"),n("6b0d")),f=n.n(m);const g=f()(p,[["render",j],["__scopeId","data-v-8cd5f0da"]]);e["a"]=g},fb6a:function(t,e,n){"use strict";var a=n("23e7"),r=n("861d"),c=n("e8b5"),s=n("23cb"),o=n("50c4"),i=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),b=d("slice"),h=l("species"),O=[].slice,j=Math.max;a({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var n,a,l,d=i(this),b=o(d.length),p=s(t,b),m=s(void 0===e?b:e,b);if(c(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?r(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return O.call(d,p,m);for(a=new(void 0===n?Array:n)(j(m-p,0)),l=0;p<m;p++,l++)p in d&&u(a,l,d[p]);return a.length=l,a}})}}]);
//# sourceMappingURL=chunk-5f2a2e10.206b904f.js.map