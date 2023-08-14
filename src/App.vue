<template>
  <div>
    <vue-chat-bot :message="messageData" @sendMessage="sendMessage" />
  </div>
</template>

<script setup>
import { onMounted, ref, provide } from "vue";
import { VueChatBot } from "./Chat-bot";
import { messageService } from "./helpers/message";
import { getTime } from "./helpers/time";

const messageData = ref([]);
provide("massages", messageData.value);

onMounted(async () => {
  getResponse();
});

const sendMessage = async (value) => {
  messageData.value.push({
    role: "user",
    msg: value,
    date: getTime(),
  });

  getResponse(value);
};

const getResponse = async (value) => {
  const res = await messageService.createMessage(value);
  const reply = {
    ...res,
  };
  messageData.value.push(reply);
};
</script>

<style lang="scss" scoped></style>
