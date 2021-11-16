<template>
  <div>
    <h2>Comments</h2>
    <!-- border -->
    <div class="card border border-primary shadow-0">
      <div class="card-body">
        <!-- comments -->
        <div v-for="comment in commentList" :key="comment.id_comment" class="card border border-primary shadow-0">
          <div class="card-body">
            <div class="row g-0">
              <div class="col-2">
                <img id="userProfileImage" :src="comment.profile_url" :alt="comment.username" class="img-fluid" />
                <h6>{{ comment.username }}</h6>
              </div>
              <div class="col-9">
                <p>{{ comment.comment }}</p>
              </div>
              <div class="col-1">
                <a v-if="comment.user_id == user.id || user.roleId == 1" @click="deleteComment(comment)"
                  ><i class="fas fa-times" style="color: red"></i></a
                ><br />
                <comment-edit
                  v-if="comment.user_id == user.id"
                  :selectedComment="comment"
                  @updated-comment-text="loadComments"
                />
                <a v-if="comment.user_id != user.id" @click="flagComment(comment)"
                  ><i class="fas fa-flag" style="color: gold"></i>
                  <br />
                  <span class="badge bg-primary rounded-pill" v-if="user.roleId == 1">{{ comment.flag }}</span></a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCommentModal">
          Add Comment
        </button>

        <!-- Modal -->
        <div
          class="modal top fade"
          id="addCommentModal"
          tabindex="-1"
          aria-labelledby="addCommentModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
        >
          <form @submit.prevent="submitComment">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="addCommentModalLabel">Add comment</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <label class="form-label" for="editComment">Comment</label>
                  <textarea type="text" id="editComment" v-model="commentText" class="form-control" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger mr-auto" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from '../../service/dataService';
import CommentEdit from './CommentEdit.vue';
export default {
  components: { CommentEdit },
  props: {
    showId: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      commentList: [],
      commentText: '',
      flag: 0,
      user: {
        name: localStorage.getItem('username'),
        profileUrl: localStorage.getItem('profileImage'),
        id: localStorage.getItem('userId'),
        roleId: localStorage.getItem('userRoleId'),
      },
    };
  },
  async mounted() {
    await this.loadComments();
  },
  methods: {
    async loadComments() {
      await this.getCommentList();
    },
    async getCommentList() {
      this.commentList = await DataService.getCommentByShow(this.showId);
      console.log('COMMENT: ', this.commentList);
    },
    async submitComment() {
      console.log('SUBMIT: ', this.commentText);
      const data = {
        user_id: this.user.id,
        show_id: this.showId,
        profile_url: this.user.profileUrl,
        username: this.user.name,
        comment: this.commentText.replace(/'/g, "''"),
        flag: 0,
      };
      await DataService.postComment(data);
      await this.loadComments();
    },
    async deleteComment(comment) {
      console.log('delete: ', comment);
      await DataService.deleteComment(comment.id_comment);
      await this.loadComments();
    },
    async editComment(comment) {
      console.log('edit: ', comment);
      await this.loadComments();
    },
    async flagComment(comment) {
      // flag may need to be changed to a number type so that it can count how many times that comment has been flagged
      console.log('flag: ', comment);
      const data = {
        comment: comment.comment,
        flag: comment.flag + 1,
        id_comment: comment.id_comment,
      };
      alert('This comment is flagged');
      console.log('DATA: ', data);
      await DataService.updateComment(data);
      await this.loadComments();
      // await this.loadComments();
    },
  },
};
</script>
<style scoped>
.comment {
  padding: 10px;
}
</style>
