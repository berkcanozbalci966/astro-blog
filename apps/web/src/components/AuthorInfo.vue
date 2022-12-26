<script setup lang="ts">
type UserDetail = {
  firstName: string;
  lastName: string;
  email: string;
  domain: string;
};
const { userDetail } = defineProps<{
  userDetail: UserDetail;
}>();

const { firstName, lastName, email, domain } = userDetail;
</script>

<template>
  <div className="mt-5">
    <p>Author: {{ `${firstName} ${lastName}` }}</p>
    <p>E-mail: {{ email }}</p>
    <p>Web site: {{ domain }}</p>
  </div>
</template>

<style scoped></style>
