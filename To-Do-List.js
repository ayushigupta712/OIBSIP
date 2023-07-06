document.querySelector('.Add').onclick = 
    function(){
        if (document.querySelector('#newtask input').value.length == 0){
            alert("Please Enter a Valid Value");
    
    }   else{
            document.querySelector('.All_Tasks').innerHTML += `
                <div class = "task">
                    <span id = "name">
                        ${document.querySelector('#newtask input').value}
                    </span>
                    <button class = 'pop'>
                        Delete</i>
                    </button>
                </div>`

        let tasks = document.querySelectorAll('.pop')
        for (let i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.parentNode.remove()
        }
    }
    }
}