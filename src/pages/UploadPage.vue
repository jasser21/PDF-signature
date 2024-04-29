<script setup lang="ts">
import { ref, inject } from 'vue';
import SignStep from '@/components/SignStep.vue';
import UploadContent from '@/components/upload/UploadContent.vue';


const URL = inject("PdfUploadUrl") as string;
console.log("url", URL);
</script>

<template>
  <div class="upload layout">
    <sign-step status="upload" />
    <upload-content :pdf-url="URL" />
  </div>
</template>
