import VueChatBot from "@/components/VueChatBot.vue";

const Plugin = {
  install(app, options) {
    app.comments("chat-bot", VueChatBot);
    console.log(options);
    if (typeof window !== "undefined" && window.Vue) {
      window.app.use(Plugin);
    }
  },
};

export default Plugin;
export { VueChatBot };
