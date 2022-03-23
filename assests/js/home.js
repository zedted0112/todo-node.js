var tasks= document.getElementsByClassName('task');
for(let i of tasks){

    i.getElementsByTagName('input')[0].addEventListener('change', function() {
        if (this.checked) {
   
            i.getElementsByTagName('span')[0].style.color="white"
            i.getElementsByTagName('span')[0].style.backgroundColor="grey"
           i.getElementsByTagName('span')[0].style.textDecoration = 'line-through';
           
           i.getElementsByTagName('span')[1].style.textDecoration = 'line-through';
           
           i.getElementsByTagName('span')[1].style.color="white"
           i.getElementsByTagName('span')[1].style.backgroundColor="grey"        
        } else {
            i.getElementsByTagName('span')[0].style.color="black"
            i.getElementsByTagName('span')[0].style.backgroundColor= "white";
            i.getElementsByTagName('span')[0].style.textDecoration = 'none';
       
            i.getElementsByTagName('span')[1].style.textDecoration = 'none';
           
            i.getElementsByTagName('span')[1].style.color="red"
            i.getElementsByTagName('span')[1].style.backgroundColor="white" 

        }
      });

}