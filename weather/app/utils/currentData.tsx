export const getCurrentDate = () => {
  const currentDate = new Date().toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return currentDate;
};
