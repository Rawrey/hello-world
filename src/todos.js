// Create new entry

    function newElement(){
        var li = document.createElement('li');
        var input = document.getElementById("todoinput").value;
        var add = document.createTextNode(input);
    
        li.appendChild(add);
            if (input === '') {
                alert('Bitte etwas eingeben.');
            }
            else {
            document.getElementById('list').appendChild(li);
            }
    }

