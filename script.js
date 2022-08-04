_getId = (elt) => {
    return document.getElementById(elt);
}

_create = (elt) => {
    return document.createElement(elt);
}

_changeColor = (elt) => {
    color = _getId('sel').value;
    elt.style.backgroundColor = color;
}

window.addEventListener('load', (e) =>{
    e.preventDefault();

    let table= _getId('tb');

    for(let i=0;i<10;i++){

        let tr = _create('tr');
        table.appendChild(tr);
        tr.id = 'tr_'+i;

            for(let j=0;j<10;j++){

                let td = _create('td');
                tr.appendChild(td);
                td.width = 30;
                td.height = 30;
                td.id = 'td_'+i+j;
                td.style.backgroundColor = 'white';
                td.addEventListener('mouseover', (e) =>{
                    e.preventDefault();
                    _changeColor(td);
                });
            }
    }

    _getId('btn').addEventListener('click', (e) =>{
        e.preventDefault();
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++){
                _changeColor(_getId('td_'+i+j));
            }
        }
    });
});