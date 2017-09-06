document.addEventListener('DOMContentLoaded', function() { //wait for all of the html to load
    let textarea = document.getElementById('noteText');
    displayNotes(); //<--works
    document.getElementById('saveButton') //get the save button
        .addEventListener('click', function(){ //run this function on a click
            saveNotes(textarea.value);
        });
    document.getElementById('clearButton') //get the clear button
        .addEventListener('click', function(){ //run this function on a click
            clearNotes();//replaces console.log
        });
});

function saveNotes(text){ //write note to local storage
    chrome.storage.local.set({ notes: text });
}

function displayNotes(){ //retrieve from local storage
    chrome.storage.local.get(function(data){//using Chrome's storage API
        if(data.notes){ //if the value exists
            noteText.value=data.notes;
        }
    });
}
function clearNotes(){
    chrome.storage.local.clear();//uses Chrome's Storage API
    noteText.value = "";
}