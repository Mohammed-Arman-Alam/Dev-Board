const day_date = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
const liveDate = new Date().toLocaleDateString('en-US', day_date).replace(',',"");
document.getElementById('date').textContent = liveDate;
document.getElementById('date').classList.add('text-xl','font-bold');