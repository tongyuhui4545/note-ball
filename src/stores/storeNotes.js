import { defineStore } from "pinia";

export const useStoreNotes = defineStore("counter", {
  state: () => {
    return {
      notes: [
        {
          id: "1",
          content: "this is note 1",
        },
        {
          id: "2",
          content: "this is note 2",
        },
      ],
    };
  },

  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },

    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
    },
    getNoteById(id) {
      const targetNote = this.notes.find((itm) => itm.id === id);
      return targetNote.content;
    },
  },
});
