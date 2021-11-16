<template>
  <div>
    <!-- Icon trigger modal -->
    <a @click="loadModal" data-bs-toggle="modal" data-bs-target="#editCommentModal"
      ><i class="fas fa-edit" style="color: dodgeblue"></i
    ></a>
    <br />
    <!-- Modal -->
    <div
      v-if="isOpen"
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
      isOpen: false,
    };
  },
  methods: {
    async editComment(comment) {
      const data = {
        comment: this.editCommentText.replace(/'/g, "''"),
        flag: comment.flag,
        id_comment: comment.id_comment,
      };
      await DataService.updateComment(data);
      this.$emit('updated-comment-text');
    },
    loadModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>
<style scoped></style>
