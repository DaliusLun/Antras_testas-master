function sortData() {
    
    data = account.sort((a, b) => (a.month > b.month) ? 1 : -1);

}

sortData ()


function renderHTML() {

    let HTML = ''
    for (let i = 0; i < data.length; i++) {
        
        mon = data[i].month;
        inc = data[i].income;
        exp = data[i].expense;

        monName = months[mon-1];
        
        if (exp == undefined) {
            exp = 0;
        }

        if (inc == undefined) {
            inc = 0;
        }

        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${monName}</div>
                    <div class="cell">${inc} Eur</div>
                    <div class="cell">${exp} Eur</div>
                    <div class="cell">${inc - exp} Eur</div>
                </div>`;
    };
    
    document.querySelector('.table-content').innerHTML = HTML;
}

renderHTML ()