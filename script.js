let list=JSON.parse(localStorage.getItem('input')) || [];
showList();


function addList(){
  let Taskvalue=document.querySelector('#inputValue');
  let datevalue=document.querySelector('#list-date');

  let errorMessage = document.querySelector('#errorMessage');

  if(Taskvalue.value === ''){
    errorMessage.style.display = 'block';

  }
  else{
    errorMessage.style.display = 'none';
    let ToDoTask=Taskvalue.value;
    let dateTask=datevalue.value;
    list.push({item:ToDoTask, duedate:dateTask});

    Taskvalue.value='';
    datevalue.value='';
    showList();
  }
}


function showList(){
  let ContainerTask=document.querySelector('.TaskContainer');
  let newhtml='';

  let inputstring=JSON.stringify(list)
  
  localStorage.setItem("input",inputstring);

  let storeddata=localStorage.getItem('input')



  for(let i=0;i<list.length;i++){
    // let item=list[i].item;
    // let duedate=list[i].duedate;

    let{item,duedate}=list[i]; //destructuing object

    newhtml=newhtml+ `
                      <span style="color: rgb(219, 219, 218)">${item}</span>
                      <span style="color: rgb(219, 219, 218)">${duedate}</span>

                      <button class="btn-delete"  onclick="list.splice(${i},1);showList();">Delete</button>
                      `;
  }
  ContainerTask.innerHTML=newhtml;
}


