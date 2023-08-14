<template>
  <div>
    <transition name="fade">
      <div class="chat" v-if="showChat">
        <div class="chat__inner">
          <div class="chat__header">Chat Bot 🤖</div>
          <chat-content ref="content" @clickBtnOptions="sendBtnOptions" />
          <div class="chat__action">
            <div class="action__input">
              <input
                v-model="msg"
                @keydown.enter="sendMsg"
                type="text"
                placeholder="Сообщение..."
              />
            </div>
            <button class="action__button" @click="sendMsg" :disabled="!msg">
              <i class="material-icons send"></i>
            </button>
          </div>
        </div>
      </div>
    </transition>
    <button class="chat-button" @click="showChat = !showChat">
      <i class="material-icons smart_toy"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChatContent from "@/components/partials/Content.vue";

const showChat = ref(false);
const content = ref(null);
const emit = defineEmits(["sendMessage"]);
const msg = ref("");

const sendMsg = () => {
  emit("sendMessage", msg.value);

  msg.value = "";
};

const sendBtnOptions = (value) => {
  emit("sendMessage", value);
};
</script>

<style lang="scss">
@import "../assets/app";
.chat {
  min-width: 280px;
  max-width: 360px;
  width: 100%;
  position: fixed;
  right: 50px;
  bottom: 150px;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
  // line-height: 1.3em;
  box-sizing: border-box;
  @media (max-width: 768px) {
    right: 0;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 30px 2px rgba(37, 37, 37, 0.25);
    border-radius: 10px 10px 10px 10px;
    overflow: hidden;
  }

  &__header {
    padding: 20px 10px;
    background: $blue;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  &__action {
    padding: 20px 10px;
    background: #fff;
    display: flex;
    gap: 10px;
    border-top: 1px solid #33333315;
  }
}

.action {
  &__input {
    flex: 1 1;
    height: 37px;
    border: 1px solid #3333;
    border-radius: 5px;
    overflow: hidden;
    input {
      width: 100%;
      height: 100%;
      padding: 0 10px;
      outline: none;
      box-sizing: border-box;
      border: none;
      font-size: 16px;
      color: #666;
    }
  }
  &__button {
    width: 80px;
    height: 37px;
    border-radius: 5px;
    background: $blue;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: $blue-hover;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
    i {
      color: #fff;
    }
  }
}

.chat-button {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 60px;
  height: 60px;
  background: $blue;
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
  }

  i {
    font-size: 30px;
    color: #fff;
  }
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
