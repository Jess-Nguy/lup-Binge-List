(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ca2a3f1"],{"0189":function(e,t,c){},"3c46":function(e,t,c){"use strict";c("0189")},"9dae":function(e,t,c){},b36c:function(e,t,c){"use strict";c("9dae")},e915:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["withScopeId"])("data-v-4eb74326");Object(a["pushScopeId"])("data-v-4eb74326");var r={key:0},n=Object(a["createVNode"])("div",{class:"spinner-border text-primary",role:"status"},[Object(a["createVNode"])("span",{class:"visually-hidden"},"Loading...")],-1),s={key:1},l=Object(a["createVNode"])("i",{class:"fas fa-heart"},null,-1),d={class:"card border border-primary shadow-0"},i={class:"card-body"},u={class:"row mb-3"},m=Object(a["createVNode"])("h5",{class:"card-title"},"Episodes",-1),b={key:0,class:"card-text"},p={key:1,class:"card-text"},O={class:"row mb-3"},j=Object(a["createVNode"])("h5",{class:"card-title"},"Seasons",-1),h={key:0,class:"card-text"},g={key:1,class:"card-text"},f={class:"row mb-3"},w=Object(a["createVNode"])("h5",{class:"card-title"},"Release Date",-1),v={key:0,class:"card-text"},k={key:1,class:"card-text"},N={class:"row mb-3"},S=Object(a["createVNode"])("h5",{class:"card-title"},"Native Title",-1),y={key:0,class:"card-text"},V={key:1,class:"card-text"},x={class:"row mb-3"},C=Object(a["createVNode"])("h5",{class:"card-title"},"Romanization",-1),B={key:0,class:"card-text"},_={key:1,class:"card-text"},D={class:"row mb-3"},I=Object(a["createVNode"])("h5",{class:"card-title"},"Company",-1),R={key:0,class:"card-text"},M={key:1,class:"card-text"},E={class:"row mb-3"},T=Object(a["createVNode"])("h5",{class:"card-title"},"Country",-1),L={class:"card-text"},F={class:"row mb-3"},A=Object(a["createVNode"])("h5",{class:"card-title"},"Genre",-1),U={class:"card-text"},P=Object(a["createVNode"])("h2",null,"Characters",-1),z={class:"card border border-primary shadow-0"},Y={class:"row mb-3"},$={class:"col"},q={class:"card-title"},G={class:"card-text"},J={class:"col"},H={class:"card-title"},K={class:"card-text"},Q={class:"col"},W={class:"card-title"},X={class:"card-text"};Object(a["popScopeId"])();var Z=o((function(e,t,c,o,Z,ee){var te=Object(a["resolveComponent"])("comments-section");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Z.isLoading?(Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[n])):(Object(a["openBlock"])(),Object(a["createBlock"])("div",s,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])("h1",null,Object(a["toDisplayString"])(Z.selectedShow.title[0]),1),Object(a["withDirectives"])(Object(a["createVNode"])("h6",null,Object(a["toDisplayString"])(Z.selectedShow.title[1]),513),[[a["vShow"],Z.selectedShow.title[1]]])]),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(Z.selectedShow.synopsis),1)]),Object(a["createVNode"])("div",null,[""!==Z.selectedShow.show_image?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:0,src:Z.selectedShow.show_image,alt:"show image",width:"200",height:"350"},null,8,["src"])):(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:1,src:Z.defaultImage,alt:"default image",width:"200",height:"350"},null,8,["src"])),Object(a["withDirectives"])(Object(a["createVNode"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return Z.editForm.status=e}),id:"editStatus",class:"form-select","aria-label":"Default select example"},[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(Z.listOfStatus,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("option",{key:t},Object(a["toDisplayString"])(e),1)})),128))],512),[[a["vModelSelect"],Z.editForm.status]]),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("button",{onClick:t[2]||(t[2]=function(){return ee.favouriteToggle&&ee.favouriteToggle.apply(ee,arguments)}),class:["btn btn-danger",{active:Z.editForm.favourite}],style:{"border-radius":"50%"}},[l],2)]),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("div",d,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",u,[m,null!==Z.selectedShow.episodes?(Object(a["openBlock"])(),Object(a["createBlock"])("p",b,Object(a["toDisplayString"])(Z.selectedShow.episodes),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("p",p,"N/A"))]),Object(a["createVNode"])("div",O,[j,null!==Z.selectedShow.seasons?(Object(a["openBlock"])(),Object(a["createBlock"])("p",h,Object(a["toDisplayString"])(Z.selectedShow.seasons),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("p",g,"N/A"))]),Object(a["createVNode"])("div",f,[w,null!==Z.selectedShow.releaseDate?(Object(a["openBlock"])(),Object(a["createBlock"])("p",v,Object(a["toDisplayString"])(Z.releaseDate),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("p",k,"N/A"))]),Object(a["createVNode"])("div",N,[S,"null"!==Z.selectedShow.native_title?(Object(a["openBlock"])(),Object(a["createBlock"])("p",y,Object(a["toDisplayString"])(Z.selectedShow.native_title),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("p",V,"N/A"))]),Object(a["createVNode"])("div",x,[C,"null"!==Z.selectedShow.romanization?(Object(a["openBlock"])(),Object(a["createBlock"])("p",B,Object(a["toDisplayString"])(Z.selectedShow.romanization),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("p",_,"N/A"))]),Object(a["createVNode"])("div",D,[I,"null"!==Z.selectedShow.company?(Object(a["openBlock"])(),Object(a["createBlock"])("p",R,Object(a["toDisplayString"])(Z.selectedShow.company),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("p",M,"N/A"))]),Object(a["createVNode"])("div",E,[T,Object(a["createVNode"])("p",L,Object(a["toDisplayString"])(Z.selectedShow.country),1)]),Object(a["createVNode"])("div",F,[A,Object(a["createVNode"])("p",U,Object(a["toDisplayString"])(Z.selectedShow.genre),1)])])])])]),Object(a["createVNode"])("div",null,[P,Object(a["createVNode"])("div",z,[Object(a["createVNode"])("div",Y,[Object(a["createVNode"])("div",$,[null!==Z.selectedShow.main_character_image?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:0,src:Z.selectedShow.main_character_image,alt:"show image",width:"300",height:"300"},null,8,["src"])):(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:1,src:Z.defaultImage,alt:"default image",width:"300",height:"300"},null,8,["src"])),Object(a["createVNode"])("h5",q,Object(a["toDisplayString"])(Z.selectedShow.main_character_name),1),Object(a["createVNode"])("p",G,Object(a["toDisplayString"])(Z.selectedShow.main_actor_name),1)]),Object(a["createVNode"])("div",J,[null!==Z.selectedShow.side_character1_image?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:0,src:Z.selectedShow.side_character1_image,alt:"show image",width:"300",height:"300"},null,8,["src"])):(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:1,src:Z.defaultImage,alt:"default image",width:"300",height:"300"},null,8,["src"])),Object(a["createVNode"])("h5",H,Object(a["toDisplayString"])(Z.selectedShow.side_character1_name),1),Object(a["createVNode"])("p",K,Object(a["toDisplayString"])(Z.selectedShow.side_actor1_name),1)]),Object(a["createVNode"])("div",Q,[null!==Z.selectedShow.side_character2_image?(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:0,src:Z.selectedShow.side_character2_image,alt:"show image",width:"300",height:"300"},null,8,["src"])):(Object(a["openBlock"])(),Object(a["createBlock"])("img",{key:1,src:Z.defaultImage,alt:"default image",width:"300",height:"300"},null,8,["src"])),Object(a["createVNode"])("h5",W,Object(a["toDisplayString"])(Z.selectedShow.side_character2_name),1),Object(a["createVNode"])("p",X,Object(a["toDisplayString"])(Z.selectedShow.side_actor2_name),1)])])])]),Object(a["createVNode"])("div",null,[Object(a["createVNode"])(te,{showId:Z.id},null,8,["showId"])])]))])})),ee=c("1da1"),te=(c("fb6a"),c("96cf"),c("7e16")),ce=Object(a["withScopeId"])("data-v-0f70e0ca");Object(a["pushScopeId"])("data-v-0f70e0ca");var ae=Object(a["createVNode"])("h2",null,"Comments",-1),oe={class:"card border border-primary shadow-0"},re={class:"card-body"},ne={class:"card-body"},se={class:"row g-0"},le={class:"col-2"},de={class:"col-9"},ie={class:"col-1"},ue=Object(a["createVNode"])("i",{class:"fas fa-times",style:{color:"red"}},null,-1),me=Object(a["createVNode"])("br",null,null,-1),be=Object(a["createVNode"])("i",{class:"fas fa-flag",style:{color:"gold"}},null,-1),pe={key:0},Oe=Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#addCommentModal"}," Add Comment ",-1),je={class:"modal top fade",id:"addCommentModal",tabindex:"-1","aria-labelledby":"addCommentModalLabel","aria-hidden":"true","data-bs-backdrop":"static","data-bs-keyboard":"false"},he={class:"modal-dialog modal-lg"},ge={class:"modal-content"},fe=Object(a["createVNode"])("div",{class:"modal-header"},[Object(a["createVNode"])("h5",{class:"modal-title",id:"addCommentModalLabel"},"Add comment"),Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),we={class:"modal-body"},ve=Object(a["createVNode"])("label",{class:"form-label",for:"editComment"},"Comment",-1),ke=Object(a["createVNode"])("div",{class:"modal-footer"},[Object(a["createVNode"])("button",{type:"button",class:"btn btn-danger mr-auto","data-bs-dismiss":"modal"},"Close"),Object(a["createVNode"])("button",{type:"submit",class:"btn btn-success","data-bs-dismiss":"modal"},"Submit")],-1);Object(a["popScopeId"])();var Ne=ce((function(e,t,c,o,r,n){var s=Object(a["resolveComponent"])("comment-edit");return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[ae,Object(a["createVNode"])("div",oe,[Object(a["createVNode"])("div",re,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.commentList,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:e.id_comment,class:"card border border-primary shadow-0"},[Object(a["createVNode"])("div",ne,[Object(a["createVNode"])("div",se,[Object(a["createVNode"])("div",le,[Object(a["createVNode"])("img",{id:"userProfileImage",src:e.profile_url,alt:e.username,class:"img-fluid"},null,8,["src","alt"]),Object(a["createVNode"])("h6",null,Object(a["toDisplayString"])(e.username),1)]),Object(a["createVNode"])("div",de,[Object(a["createVNode"])("p",null,Object(a["toDisplayString"])(e.comment),1)]),Object(a["createVNode"])("div",ie,[e.user_id==r.user.id||1==r.user.roleId?(Object(a["openBlock"])(),Object(a["createBlock"])("a",{key:0,onClick:function(t){return n.deleteComment(e)}},[ue],8,["onClick"])):Object(a["createCommentVNode"])("",!0),me,e.user_id==r.user.id?(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:1,selectedComment:e,onUpdatedCommentText:n.loadComments},null,8,["selectedComment","onUpdatedCommentText"])):Object(a["createCommentVNode"])("",!0),e.user_id!=r.user.id?(Object(a["openBlock"])(),Object(a["createBlock"])("a",{key:2,onClick:function(t){return n.flagComment(e)}},[be,1==r.user.roleId?(Object(a["openBlock"])(),Object(a["createBlock"])("p",pe,Object(a["toDisplayString"])(e.flag),1)):Object(a["createCommentVNode"])("",!0)],8,["onClick"])):Object(a["createCommentVNode"])("",!0)])])])])})),128)),Oe,Object(a["createVNode"])("div",je,[Object(a["createVNode"])("form",{onSubmit:t[2]||(t[2]=Object(a["withModifiers"])((function(){return n.submitComment&&n.submitComment.apply(n,arguments)}),["prevent"]))},[Object(a["createVNode"])("div",he,[Object(a["createVNode"])("div",ge,[fe,Object(a["createVNode"])("div",we,[ve,Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{type:"text",id:"editComment","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.commentText=e}),class:"form-control"},null,512),[[a["vModelText"],r.commentText]])]),ke])])],32)])])])])})),Se=(c("b0c0"),c("ac1f"),c("5319"),Object(a["createVNode"])("i",{class:"fas fa-edit",style:{color:"dodgeblue"}},null,-1)),ye=Object(a["createVNode"])("br",null,null,-1),Ve={key:0,class:"modal top fade",id:"editCommentModal",tabindex:"-1","aria-labelledby":"editCommentModalLabel","aria-hidden":"true","data-bs-backdrop":"static","data-bs-keyboard":"false"},xe={class:"modal-dialog modal-lg"},Ce={class:"modal-content"},Be={class:"modal-header"},_e=Object(a["createVNode"])("h5",{class:"modal-title",id:"editCommentModalLabel"},"Edit Comment",-1),De={class:"modal-body"},Ie={class:"modal-footer"},Re=Object(a["createVNode"])("button",{type:"submit",class:"btn btn-success","data-bs-dismiss":"modal"},"Save changes",-1);function Me(e,t,c,o,r,n){return Object(a["openBlock"])(),Object(a["createBlock"])("div",null,[Object(a["createVNode"])("a",{onClick:t[1]||(t[1]=function(){return n.loadModal&&n.loadModal.apply(n,arguments)}),"data-bs-toggle":"modal","data-bs-target":"#editCommentModal"},[Se]),ye,r.isOpen?(Object(a["openBlock"])(),Object(a["createBlock"])("div",Ve,[Object(a["createVNode"])("form",{onSubmit:t[5]||(t[5]=Object(a["withModifiers"])((function(e){return n.editComment(c.selectedComment)}),["prevent"]))},[Object(a["createVNode"])("div",xe,[Object(a["createVNode"])("div",Ce,[Object(a["createVNode"])("div",Be,[_e,Object(a["createVNode"])("button",{type:"button",onClick:t[2]||(t[2]=function(){return n.closeModal&&n.closeModal.apply(n,arguments)}),class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),Object(a["createVNode"])("div",De,[Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{type:"text",id:"editComment","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.editCommentText=e}),class:"form-control"},null,512),[[a["vModelText"],r.editCommentText]])]),Object(a["createVNode"])("div",Ie,[Object(a["createVNode"])("button",{type:"button",onClick:t[4]||(t[4]=function(){return n.closeModal&&n.closeModal.apply(n,arguments)}),class:"btn btn-danger mr-auto","data-bs-dismiss":"modal"}," Close "),Re])])])],32)])):Object(a["createCommentVNode"])("",!0)])}var Ee={props:{selectedComment:{type:Object,required:!0,default:function(){}}},data:function(){return{editCommentText:this.selectedComment.comment,isOpen:!1}},methods:{editComment:function(e){var t=this;return Object(ee["a"])(regeneratorRuntime.mark((function c(){var a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return console.log("EDIT COMMENT: ",e),a={comment:t.editCommentText,flag:e.flag,id_comment:e.id_comment},c.next=4,te["a"].updateComment(a);case 4:t.$emit("updated-comment-text");case 5:case"end":return c.stop()}}),c)})))()},loadModal:function(){this.isOpen=!0},closeModal:function(){this.isOpen=!1}}},Te=c("6b0d"),Le=c.n(Te);const Fe=Le()(Ee,[["render",Me]]);var Ae=Fe,Ue={components:{CommentEdit:Ae},props:{showId:{type:String,required:!0,default:""}},data:function(){return{commentList:[],commentText:"",flag:0,user:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")}}},mounted:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadComments();case 2:case"end":return t.stop()}}),t)})))()},methods:{loadComments:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getCommentList();case 2:case"end":return t.stop()}}),t)})))()},getCommentList:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,te["a"].getCommentByShow(e.showId);case 2:e.commentList=t.sent,console.log("COMMENT: ",e.commentList);case 4:case"end":return t.stop()}}),t)})))()},submitComment:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("SUBMIT: ",e.commentText),c={user_id:e.user.id,show_id:e.showId,profile_url:e.user.profileUrl,username:e.user.name,comment:e.commentText.replace(/'/g,"''"),flag:0},t.next=4,te["a"].postComment(c);case 4:return t.next=6,e.loadComments();case 6:case"end":return t.stop()}}),t)})))()},deleteComment:function(e){var t=this;return Object(ee["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return console.log("delete: ",e),c.next=3,te["a"].deleteComment(e.id_comment);case 3:return c.next=5,t.loadComments();case 5:case"end":return c.stop()}}),c)})))()},editComment:function(e){var t=this;return Object(ee["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return console.log("edit: ",e),c.next=3,t.loadComments();case 3:case"end":return c.stop()}}),c)})))()},flagComment:function(e){var t=this;return Object(ee["a"])(regeneratorRuntime.mark((function c(){var a;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return console.log("flag: ",e),a={comment:e.comment,flag:e.flag+1,id_comment:e.id_comment},alert("This comment is flagged"),console.log("DATA: ",a),c.next=6,te["a"].updateComment(a);case 6:return c.next=8,t.loadComments();case 8:case"end":return c.stop()}}),c)})))()}}};c("3c46");const Pe=Le()(Ue,[["render",Ne],["__scopeId","data-v-0f70e0ca"]]);var ze=Pe,Ye={components:{CommentsSection:ze},data:function(){return{user:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")},id:"",selectedShow:{},defaultImage:"https://cdn.onlinewebfonts.com/svg/img_98811.png",editForm:{status:"",favourite:!1},selectedEdit:{},listOfStatus:[],releaseDate:"",isLoading:!0}},watch:{editForm:{deep:!0,handler:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isLoading=!0,!e.selectedEdit){t.next=10;break}if(e.selectedEdit.status===e.editForm.status&&e.selectedEdit.favourite===e.editForm.favourite){t.next=8;break}return t.next=5,e.updateUserShow();case 5:return t.next=7,e.loadPage();case 7:alert("Updated show list");case 8:t.next=16;break;case 10:return c={user_id:e.user.id,status:e.editForm.status,show_id:e.id,episode_progress:0,total_episodes:e.selectedShow.episodes,score:0,rewatch:0,favourite:!1},t.next=13,te["a"].postBingeList(c);case 13:return t.next=15,e.loadPage();case 15:alert("Added show to ".concat(e.editForm.status," list"));case 16:case"end":return t.stop()}}),t)})))()}}},computed:{getListStatus:function(){return this.$store.getters.getListStatus}},created:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadPage();case 2:case"end":return t.stop()}}),t)})))()},methods:{retrieveSelectedShow:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,te["a"].getShowById(e.id);case 2:c=t.sent,e.selectedShow=c[0];case 4:case"end":return t.stop()}}),t)})))()},getUserShowDetails:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c={user_id:e.user.id,show_id:e.id},t.next=3,te["a"].getCheckAdd(c);case 3:e.selectedEdit=t.sent,console.log("selectedEdit: ",e.selectedEdit);case 5:case"end":return t.stop()}}),t)})))()},favouriteToggle:function(){this.editForm.favourite=!this.editForm.favourite},updateUserShow:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var c,a,o,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return null!==e.selectedEdit.start_date?(o=new Date(e.selectedEdit.start_date),c=("0"+o.getDate()).slice(-2),a=("0"+(o.getMonth()+1)).slice(-2),o=o.getFullYear()+"-"+a+"-"+c):o=e.selectedEdit.start_date,null!==e.selectedEdit.end_date?(r=new Date(e.selectedEdit.end_date),c=("0"+r.getDate()).slice(-2),a=("0"+(r.getMonth()+1)).slice(-2),r=r.getFullYear()+"-"+a+"-"+c):r=e.selectedEdit.end_date,n={status:e.editForm.status,favourite:e.editForm.favourite,episode_progress:e.selectedEdit.episode_progress,id_user_show:e.selectedEdit.id_user_show,score:e.selectedEdit.score,rewatch:e.selectedEdit.rewatch,start_date:o,end_date:r,note:e.selectedEdit.note},t.next=5,te["a"].updateUserBingeList(n);case 5:case"end":return t.stop()}}),t)})))()},loadPage:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var c,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return setTimeout((function(){return e.isLoading=!1}),1e3),console.log("LOADING: ",e.isLoading),e.id=e.$route.params.id,t.next=5,e.retrieveSelectedShow();case 5:return console.log("retrieveSelectedShow: ",e.selectedShow),e.listOfStatus=e.getListStatus,t.next=9,e.getUserShowDetails();case 9:null!==e.selectedShow.release_date?(o=new Date(e.selectedShow.release_date),c=("0"+o.getDate()).slice(-2),a=("0"+(o.getMonth()+1)).slice(-2),e.releaseDate=o.getFullYear()+"-"+a+"-"+c):e.releaseDate=e.selectedShow.release_date,e.selectedEdit&&(e.editForm.status=e.selectedEdit.status,console.log("STATUS: ",e.editForm.status),e.editForm.favourite=e.selectedEdit.favourite,console.log("FAVOURITE: ",e.editForm.favourite));case 11:case"end":return t.stop()}}),t)})))()}}};c("b36c");const $e=Le()(Ye,[["render",Z],["__scopeId","data-v-4eb74326"]]);t["default"]=$e},fb6a:function(e,t,c){"use strict";var a=c("23e7"),o=c("861d"),r=c("e8b5"),n=c("23cb"),s=c("50c4"),l=c("fc6a"),d=c("8418"),i=c("b622"),u=c("1dde"),m=u("slice"),b=i("species"),p=[].slice,O=Math.max;a({target:"Array",proto:!0,forced:!m},{slice:function(e,t){var c,a,i,u=l(this),m=s(u.length),j=n(e,m),h=n(void 0===t?m:t,m);if(r(u)&&(c=u.constructor,"function"!=typeof c||c!==Array&&!r(c.prototype)?o(c)&&(c=c[b],null===c&&(c=void 0)):c=void 0,c===Array||void 0===c))return p.call(u,j,h);for(a=new(void 0===c?Array:c)(O(h-j,0)),i=0;j<h;j++,i++)j in u&&d(a,i,u[j]);return a.length=i,a}})}}]);
//# sourceMappingURL=chunk-0ca2a3f1.a0476000.js.map