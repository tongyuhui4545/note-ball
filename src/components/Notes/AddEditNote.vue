<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="onInput"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//  props
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },

  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const focusTextarea = () => {
  textareaRef.value.focus();
};

const textareaRef = ref(null);

/* emmit */
const onInput = (e) => {
  let val = e.target.value;
  emit("update:modelValue", val);
};

defineExpose({
  focusTextarea,
});
</script>
