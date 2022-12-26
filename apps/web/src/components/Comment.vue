<script setup lang="ts">
type CommentDetail = {
  body: string;
  user: { username: string };
};
const { commentDetail, index } = defineProps<{
  commentDetail: CommentDetail;
  index: number;
}>();

const { body, user } = commentDetail;
</script>

<template>
  <div :class="['chat', index % 2 === 1 ? 'chat-start' : 'chat-end']">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img src="https://placeimg.com/192/192/people" />
      </div>
    </div>
    <div class="chat-header">
      {{ user.username }}
    </div>
    <div class="chat-bubble">{{ body }}</div>
  </div>
</template>

<style scoped></style>
