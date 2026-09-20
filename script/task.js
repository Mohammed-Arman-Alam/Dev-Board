function completedTask(btnId, message) {
  const btn = document.getElementById(btnId);

  btn.addEventListener("click", function () {
    const taskCount = document.getElementById("task-count");
    const totalTask = document.getElementById("total-task");
    const availableTask = parseInt(taskCount.innerText) - 1;
    const totalDone = parseInt(totalTask.innerText) + 1;
    btn.disable = true;
    btn.style.background = "grey";
    taskCount.innerText = "0" + availableTask;
    totalTask.innerText = totalDone;

    alert("Task completed successfully");

    const Activity = document.createElement('p');
    Activity.textContent = message;
    document.getElementById('activity').appendChild(Activity);
    Activity.classList.add('m-4','bg-[rgb(55,82,253,10%)]','text-[16px]', 'rounded-lg','min-h-[68px]','p-2')
  });
}

completedTask(
  "task-btn1",
  "You have Completed The Task Fix Mobile Button Issue",
);
completedTask("task-btn2", "You have Completed The Task Add Dark Mode");

completedTask("task-btn3", "You have Completed The Task Optimize Home page");

completedTask("task-btn4", "You have Completed The Task Add new emoji 🤲");

completedTask("task-btn5", "You have Completed The Task Integrate OpenAI API");

completedTask("task-btn6", "You have Completed The Task Improve Job searching");

//MY previous code with code repetition
// document.getElementById('task-btn1').addEventListener('click',function(){
//     const btn1 = document.getElementById('task-btn1');
//     const taskLeft = document.getElementById('task-count').innerText;
//     const totalTask = document.getElementById('total-task').innerText;
//     btn1.style.backgroundColor = 'grey';
//     btn1.disabled = true;
//     const availabeTask = parseInt(taskLeft)-1;
//     const totalDone = parseInt(totalTask)+1;
//     document.getElementById('task-count').innerText ='0'+ availabeTask;
//     document.getElementById('total-task').innerText = totalDone;
//     alert('Board updated Successfully');
//     const Activity = document.createElement('p');
//     Activity.textContent = "You have Completed The Task Fix Mobile Button Issue";
//     document.getElementById('activity').appendChild(Activity);
//     Activity.classList.add('m-4','bg-[rgb(55,82,253,10%)]','text-[16px]', 'rounded-lg','min-h-[68px]','p-2');
// })
// document.getElementById('task-btn2').addEventListener('click',function(){

//     const btn1 = document.getElementById('task-btn2');
//     const taskLeft = document.getElementById('task-count').innerText;
//     const totalTask = document.getElementById('total-task').innerText;
//     btn1.style.backgroundColor = '3752FD,30%';
//     btn1.disabled = true;
//     const availabeTask = parseInt(taskLeft)-1;
//     const totalDone = parseInt(totalTask)+1;
//     document.getElementById('task-count').innerText ='0'+ availabeTask;
//     document.getElementById('total-task').innerText = totalDone;
//     alert('Board updated Successfully');

//     const Activity = document.createElement('p');
//     Activity.textContent = "You have Complete The Task Add Dark Mode";
//     document.getElementById('activity').appendChild(Activity);
//     Activity.classList.add('m-4','bg-[rgb(55,82,253,10%)]','text-lg', 'rounded-lg','h-15','p-2');

// })
// document.getElementById('task-btn3').addEventListener('click',function(){

//     const btn1 = document.getElementById('task-btn3');
//     const taskLeft = document.getElementById('task-count').innerText;
//     const totalTask = document.getElementById('total-task').innerText;
//     btn1.style.backgroundColor = '3752FD,30%';
//     btn1.disabled = true;
//     const availabeTask = parseInt(taskLeft)-1;
//     const totalDone = parseInt(totalTask)+1;
//     document.getElementById('task-count').innerText ='0'+ availabeTask;
//     document.getElementById('total-task').innerText = totalDone;
//     alert('Board updated Successfully');

//     const Activity = document.createElement('p');
//     Activity.textContent = "You have Complete The Task Optimize Home page";
//     document.getElementById('activity').appendChild(Activity);
//     Activity.classList.add('m-4','bg-[rgb(55,82,253,10%)]','text-lg', 'rounded-lg','h-15','p-2');

// })
// document.getElementById('task-btn4').addEventListener('click',function(){

//     const btn1 = document.getElementById('task-btn4');
//     const taskLeft = document.getElementById('task-count').innerText;
//     const totalTask = document.getElementById('total-task').innerText;
//     btn1.style.backgroundColor = '3752FD,30%';
//     btn1.disabled = true;
//     const availabeTask = parseInt(taskLeft)-1;
//     const totalDone = parseInt(totalTask)+1;
//     document.getElementById('task-count').innerText ='0'+ availabeTask;
//     document.getElementById('total-task').innerText = totalDone;
//     alert('Board updated Successfully');

//     const Activity = document.createElement('p');
//     Activity.textContent = "You have Complete The Task Add new emoji 🤲";
//     document.getElementById('activity').appendChild(Activity);
//     Activity.classList.add('m-4','bg-[rgb(55,82,253,10%)]','text-lg', 'rounded-lg','h-15','p-2');

// })
// document.getElementById('task-btn5').addEventListener('click',function(){

//     const btn1 = document.getElementById('task-btn5');
//     const taskLeft = document.getElementById('task-count').innerText;
//     const totalTask = document.getElementById('total-task').innerText;
//     btn1.style.backgroundColor = '3752FD,30%';
//     btn1.disabled = true;
//     const availabeTask = parseInt(taskLeft)-1;
//     const totalDone = parseInt(totalTask)+1;
//     document.getElementById('task-count').innerText ='0'+ availabeTask;
//     document.getElementById('total-task').innerText = totalDone;
//     alert('Board updated Successfully');

//     const Activity = document.createElement('p');
//     Activity.textContent = "You have Complete The Task Integrate OpenAI API";
//     document.getElementById('activity').appendChild(Activity);
//     Activity.classList.add('m-4','bg-[rgb(55,82,253,10%)]','text-lg', 'rounded-lg','h-15','p-2');

// })
// document.getElementById('task-btn6').addEventListener('click',function(){

//     const btn1 = document.getElementById('task-btn6');
//     const taskLeft = document.getElementById('task-count').innerText;
//     const totalTask = document.getElementById('total-task').innerText;
//     btn1.style.backgroundColor = '3752FD,30%';
//     btn1.disabled = true;
//     const availabeTask = parseInt(taskLeft)-1;
//     const totalDone = parseInt(totalTask)+1;
//     document.getElementById('task-count').innerText ='0'+ availabeTask;
//     document.getElementById('total-task').innerText = totalDone;
//     alert('Board updated Successfully');

//     const Activity = document.createElement('p');
//     Activity.textContent = "You have Complete The Task Improve Job searching";
//     document.getElementById('activity').appendChild(Activity);
//     Activity.classList.add('m-4','bg-[rgb(55,82,253,10%)]','text-lg', 'rounded-lg','h-15','p-2');

// })
