export const getTime = () => {
  let [hours, minutes] = new Date().toLocaleTimeString().split(":").map(Number);

  return `${hours}:${minutes}`;
};
