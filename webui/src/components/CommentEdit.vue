<template>
  <div>
    <!-- Icon trigger modal -->
    <a @click="loadModal" data-bs-toggle="modal" data-bs-target="#editCommentModal"
      ><i class="fas fa-edit" style="color: dodgeblue"></i
    ></a>
    <br />
    <!-- Modal -->
    <div
      class="modal top fade"
      id="editCommentModal"
      tabindex="-1"
      aria-labelledby="editCommentModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <form @submit.prevent="editComment(selectedComment)">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editCommentModalLabel">Edit Comment</h5>
              <button
                type="button"
                @click="closeModal"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div v-if="isLoading">
              <div class="modal-body">
                <textarea type="text" id="editComment" v-model="editCommentText" class="form-control" />
              </div>
              <div class="modal-footer">
                <button type="button" @click="closeModal" class="btn btn-danger mr-auto" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Save changes</button>
              </div>
            </div>
            <div v-else>
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import DataService from '../../service/dataService';
export default {
  props: {
    selectedComment: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      editCommentText: this.selectedComment.comment,
      isLoading: false,
    };
  },
  methods: {
    async editComment(comment) {
      console.log('EDIT COMMENT: ', comment);
      const data = {
        comment: this.editCommentText,
        flag: comment.flag,
        id_comment: comment.id_comment,
      };
      await DataService.updateComment(data);
      this.$emit('updated-comment-text');
    },
    loadModal() {
      console.log('WAITING');
      setTimeout(() => (this.isLoading = true), 1000);
      console.log('LOADING: ', this.isLoading);
    },
    closeModal() {
      this.isLoading = false;
    },
  },
};
</script>
<style scoped></style>
