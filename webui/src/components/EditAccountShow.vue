<template>
  <div>
    <!-- Link trigger modal -->
    <a @click="loadModal" data-bs-toggle="modal" data-bs-target="#editAccountShowModal">
      <i class="fas fa-edit"></i>
    </a>
    <!-- Modal -->
    <div
      v-if="isOpen"
      class="modal top fade"
      id="editAccountShowModal"
      tabindex="-1"
      aria-labelledby="editAccountShowModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <form @submit.prevent="submitEditAccountShow">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editAccountShowModalLabel">Editing Show</h5>
              <button
                @click="closeModal"
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <!-- BODY -->

            <div class="modal-footer">
              <button @click="deleteShow" type="button" class="btn btn-danger mr-auto" data-bs-dismiss="modal">
                Delete
              </button>
              <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    async loadModal() {
      //   await this.retrieveSelectedShow();
      //   await this.retrieveCharactersDropdown();
      //   await this.retrieveActorDropdown();
      //   await this.setSelectedShowModal();
      //   this.enteredShowName = this.selectedShow[0].title[0];
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>
<style scoped></style>
