let stepsArr = [
        {stepid: 1, name: 'todo'},
        {stepid: 1, name: 'inprogress'},
        {stepid: 1, name: 'intesting'},
        {stepid: 1, name: 'done'},
    ]

        let todoArr = [], inprogresArr = [], doneArr = [];


            todoArr = [
        {id:1, title: 'task 1'},
        {id:2, title: 'task 2'},
        {id:3, title: 'task 3'},
        {id:4, title: 'task 4'}
    ];

    let fromStepName,toStepName;

document.addEventListener('DOMContentLoaded', () => {
  const todoDiv = document.getElementById('todo');
  createLists(todoDiv, todoArr);
});



    // function createList(divEle,arr){

    // for(let i=0;i<arr.length;i++){
    //     divEle.innerHTML +='<div class=taskbox" draggable="true"  id='+ arr[i].id +' >' + arr[i].title+ '</div>';
    // }
    // }


        function createLists(divElem, arr) {
        for (i = 0; i< arr.length; i++) {
            divElem.innerHTML += '<div class="taskbox" draggable="true"  ondragstart="onDragStart(event);"  id=' + arr[i].id + '>' + arr[i].title + '</div>';
        }
    }


    function onDragStart(event){
        console.log(event);

        fromStepName=event.srcElement.parentElement.id;

        event.dataTransfer.setData('text/plain',event.target.id)
    }

  function onDragover(event){
       event.preventDefault()
  }

  function onDrop(event){
    const dropZone=event.target;
    toStepName=event.target.id;
    let returnObj=
    checkNextStep(fromStepName,toStepName);
    if((returnObj.toIndex === returnObj.fromIndex+1) ||(returnObj.toIndex < returnObj.fromIndex)){

    const id=event.dataTransfer.getData('text');
    const draggableElem=document.getElementById(id)
    dropZone.appendChild(draggableElem);
    event.dataTransfer.clearData();

    }else{
        alert('Cannot drag directly by skipping steps')
    }
  }


   function checkNextStep(fromStepName, toStepName) {
    fromStepNameIndex=stepsArr.findIndex(step=>step.name ===fromStepName);
      toStepNameIndex=stepsArr.findIndex(step=>step.name ===toStepName);
      return  {fromIndex: fromStepNameIndex, toIndex: toStepNameIndex};
    }