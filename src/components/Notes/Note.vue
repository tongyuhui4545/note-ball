<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/editNote/${note.id}`" class="card-footer-item">
        Edit
      </router-link>
      <a
        @click.prevent="storeNotes.deleteNote(note.id)"
        href="#"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
// import
import { computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
// props

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

//emits
// const emit = defineEmits(["deleteClicked"]);

//store
const storeNotes = useStoreNotes();

// const handleDeleteClicked = () => {
//   emit("deleteClicked", props.note.id);
// };

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = props.note.content.length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});
</script>
