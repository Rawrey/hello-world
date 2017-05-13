// Create new entry

    function newElement(){
        var li = document.createElement('li');
        var input = document.getElementById("todoinput").value;
        var add = document.createTextNode(input);
    
        li.appendChild(add);
            if (input === '') {
                alert('You need to write something.');
            }
            else {
            document.getElementById('list').appendChild(li);
            }
        
            var button = document.createElement('button');
            var text = document.createTextNode('delete');
            button.appendChild(text);
            document.getElementById('list').appendChild(button);
        
    }

// Delete entrys

        function removeElement(){
            var all = document.getElementById('list');

            document.getElementById('list').remove(all);
        }
