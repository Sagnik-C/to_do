arr = [];
let btn_add = document.getElementById("add-btn");
let btn_delete = document.getElementById("deleted");

function get_update(){
    let title = document.getElementById('title').value;
    arr.push([title]);
    update();
   

}

function update(){
    
    str ='';
    arr.forEach((element,index) => {
        str = str +
        `<tr>
        <li><input type="checkbox">${element}</li>
        <div class="button" id="deleted" onclick="deleted(${index})" >Delete</div>
        </tr>`
    });
    document.getElementById("list").innerHTML = str;

}

function deleted(item_index){
    arr.splice(item_index,1);
    console.log(arr);
    update();

}

btn_add.addEventListener("click", () => {
    get_update();
    
});
