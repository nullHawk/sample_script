let BhashiniTranslator = require('@scaler-school-of-technology/bhashini-web-translator-node');

async function abc(){

  var USER_ID = undefined;
  var API_KEY = undefined;

// const Bhashini = new BhashiniTranslator(
//   API_KEY,
//   USER_ID,
// )


// const translateDom = async (request) => {
//   const res = await Bhashini.translateDOM(document.body,request.sourceLanguage,request.targetLanguage,22);
// // const res  =  "success";
//   if(res){
//     console.log("Response from async func")
//     return "success";
//     // sendResponse({msg:"success"});
//   }else{
//     return "error";
//     // sendResponse({msg:"error"});
//   }
// }

function bhashini_addButton() {
  var button = document.createElement('button');
  button.innerText = 'Translate';
  button.className = 'bhashini-button';
  button.style.zIndex = "9999";
  button.addEventListener('click', function() {
    bhashini_showPopup('USER_ID: ' + USER_ID + '\n\nAPI_KEY: ' + API_KEY);
    button.style.display = 'none';
    console.log('button clicked')
  });
  document.body.appendChild(button);
}

function bhashini_addPopup(){
  var popup = document.createElement('div');
  var para = document.createElement('p');
  popup.className = 'bhashini-popup';
  popup.appendChild(para);
  popup.style.display = 'none';
  popup.addEventListener('focusout', function() {

  });
  document.body.appendChild(popup);
}

function bhashini_showPopup(text){
  var popup = document.querySelector('.bhashini-popup');
  popup.querySelector('p').innerText = text;
  popup.style.display = 'block';
  setTimeout(function() {
    popup.style.display = 'none';
    document.querySelector('.bhashini-button').style.display = 'block';
  }, 2000);
}

function bhashini_injectStyles() {
  var styleElement = document.createElement('style');
  var cssCode = `
    /* Optional CSS styles for the button */
    .bhashini-button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      position: fixed;
      bottom: 20px;
      right: 20px; 
    }

    .bhashini-popup {
      height: 400px;
      width: 300px;
      padding: 10px 20px;
      background-color: grey;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
  `;
  styleElement.appendChild(document.createTextNode(cssCode));
  document.head.appendChild(styleElement);
}



document.addEventListener('DOMContentLoaded', function() {
  bhashini_injectStyles();
  bhashini_addButton();
  bhashini_addPopup();
});

}

abc();