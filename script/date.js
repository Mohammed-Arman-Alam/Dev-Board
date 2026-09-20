const day_date = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};
const liveDate = new Date().toLocaleDateString("en-US", day_date);
document.getElementById("date").textContent = liveDate;
document.getElementById("date").classList.add("text-xl", "font-bold");
