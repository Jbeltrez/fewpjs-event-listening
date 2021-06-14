

// function addingEventListener() {
//     const input = document.getElementById('input');
//     input.addEventListener('click', customAlert());  
// }



// addingEventListener(); 

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM fully loaded and parsed');
        
    
//         const input = document.getElementById('input');

//         input.addEventListener('click', function() {
//             alert('I was clicked!');
  
// });

document.addEventListener('DOMContentLoaded', () => {
    

    let submit = document.getElementById('input')
    submit.addEventListener('click', (e)=>{
        //see line 64 for CreatQuote Function
       alert('I was clicked!')
    })
})