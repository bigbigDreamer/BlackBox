 // document.querySelector('#app button')
 //      .addEventListener('click',()=>{
 //          console.log('我被点击了');
 //      });

 postMessage(true);

 onmessage = function (oEvent) {
     postMessage("Hi " + oEvent.data);
 };