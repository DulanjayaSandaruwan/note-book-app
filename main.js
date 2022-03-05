//---variables---
var form = document.getElementById('add-frm');
var items = document.getElementById('items');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');
var tableDiv = document.getElementById('tbl-div');

var noteCount = 0;
var newNote = '';

//---events---

// for page loads
window.onload = updateTable;
form.addEventListener('submit', addNote);

//---functions---

// update table
function updateTable(){
    // display the table when notes get added
    if(noteCount > 0){
        tableDiv.style.display = '';
        items.appendChild(newNote);
    }
    else{
        tableDiv.style.display = 'none';
    }
}

// add note
function addNote(e){
    // stop initial behavior
    e.preventDefault();
    
    // validate inputs
    if(ntitle.value == '' || nbody == ''){
        alert("Please fill all fields");
    }
    else{
        // create a new note record

        // new tr
        var tr = document.createElement('tr');
        tr.className = 'item'

        // new td for title and body
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
        var span = document.createElement('span');
        span.className = 'note-body';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);

        // new td for view button
        var td2 = document.createElement('td');
        td2.className = 'btcellv';
        var btn1 = document.createElement('button');
        btn1.appendChild(document.createTextNode('View'));
        btn1.setAttribute('id', 'vw');
        td2.appendChild(btn1);
        
        // new td for delete button
        var td3 = document.createElement('td');
        td3.className = 'btcelld';
        var btn2 = document.createElement('button');
        btn2.appendChild(document.createTextNode('Delete'));
        btn2.setAttribute('id', 'del');
        td3.appendChild(btn2);

        // add all tds to tr
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        // increment note count
        noteCount++;

        // set new note
        newNote = tr;

        // add or update the note of the table
        updateTable();
    }
}
