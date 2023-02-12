<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      label="Edit Note"
      placeholder="Edit note"
      bgColor="link"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button class="button is-link is-light" @click="$router.push('/')">
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStoreNotes } from "@/stores/storeNotes.js";
import AddEditNote from "@/components/Notes/AddEditNote.vue";

const noteContent = ref("");
const route = useRoute();

const storeNotes = useStoreNotes();
noteContent.value = storeNotes.getNoteById(route.params.id);

const handleSaveClicked = () => {
  
}
</script>
