<template>
  <div class="chat__content">
    <ul class="content__list" ref="list">
      <div
        v-if="!messages.length"
        :class="['loading', 'loading' + isClass('server')]"
      >
        <span>...</span>
      </div>
      <li
        v-else
        v-for="(item, index) in messages"
        :key="index"
        :class="['content__item', item.role]"
      >
        <div class="content__wrap">
          <div class="content__message">
            <p class="message__text">{{ item.msg }}</p>
            <span
              class="message__time"
              :class="'message__time' + isClass(item.role)"
              >{{ item.date }}</span
            >
          </div>
          <div v-if="item.options" class="content__options">
            <span
              v-for="(option, index) in item.options"
              :key="index"
              @click="$emit('clickBtnOptions', option.value)"
              >{{ option.text }}</span
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, inject, ref, watch, nextTick } from "vue";
const list = ref(null);
const messages = inject("massages");

defineExpose({
  list,
});

watch(messages, () => {
  nextTick(() => {
    list.value.scrollTop = list.value.scrollHeight;
  });
});

const isClass = computed((val) => {
  return (val) => {
    return val === "server" ? "--left" : "--right";
  };
});
</script>

<style lang="scss" scoped>
.chat {
  // .chat__content
  &__content {
    flex: 1;
    background: #e9f2ff;
  }
}
.content {
  // .content__list
  &__list {
    height: 360px;
    overflow-y: auto;
    list-style: none;
    margin: 0;
    padding: 20px;

    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 5px; /* ширина всей полосы прокрутки */
      background: #ddeffa;
    }
    &::-webkit-scrollbar-track {
      background: #ddeffa; /* цвет зоны отслеживания */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #cae9fc; /* цвет бегунка */
      border-radius: 10px; /* округлось бегунка */ /* отступ вокруг бегунка */
    }
    .server > .content__wrap .content__message {
      float: left;
      border-radius: 0 10px 10px 10px;
      background: #a8ddfd;
      border: 1px solid #97c6e3;
      font-size: 14px;
      line-height: 1.3em;

      &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-top: 17px solid #97c6e3;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        top: -1px;
        left: -17px;
      }

      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-top: 15px solid #a8ddfd;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        top: 0;
        left: -15px;
      }
    }
  }

  &__item {
    // padding: 10px;
    + .user > .content__wrap .content__message {
      float: right;
      background-color: #f8e896;
      border: 1px solid #dfd087;
      border-radius: 10px;

      &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 17px solid #dfd087;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        bottom: -1px;
        right: -17px;
      }
      &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 15px solid #f8e896;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        bottom: 0;
        right: -15px;
      }
    }
  }
  &__wrap {
    margin-bottom: 10px;
  }
  // .content__message
  &__message {
    max-width: 70%;
    display: inline-block;
    position: relative;
    margin-bottom: 10px;
    padding: 10px;
    text-align: left;
    font-size: 16px;
    line-height: 1em;
    border-radius: 10px;
    font-size: 0.9em;
    font-weight: 400;
    line-height: 1.3em;
    color: #333;
  }

  &__options {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 10px;
    span {
      font-size: 14px;
      display: block;
      padding: 8px 10px;
      background: #a8ddfd;
      border-radius: 5px;
      color: #333;
      white-space: nowrap;
      cursor: pointer;
      border: 1px solid #97c6e3;
      transition: 0.3s;

      &:hover {
        background: #97c6e3;
      }
    }
  }
}
.message {
  // .message__text
  &__text {
    margin: 5px 0;
    user-select: none;
  }
  // .message__time
  &__time {
    display: block;
    font-size: 0.85em;
    font-weight: 300;
    &--right {
      text-align: right;
    }
    &--left {
    }
  }
}

.loading {
  width: 50px;
  height: 30px;
  display: inline-block;
  text-align: center;
  border-radius: 10px;

  span {
    height: 20px;
    font-size: 30px;
    clip-path: inset(0 1ch 0 0);
    animation: l 1.1s steps(3) infinite;
    color: #333;
    @keyframes l {
      to {
        clip-path: inset(0 -1ch 0 0);
      }
    }
  }

  &--left {
    background: #a8ddfd;
    border: 1px solid #97c6e3;
  }
  &--right {
    background-color: #f8e896;
    border: 1px solid #dfd087;
    float: right;
  }
}
</style>
