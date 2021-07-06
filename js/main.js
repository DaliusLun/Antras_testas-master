function sortData() {
    data = account.sort((a, b) => (a.month > b.month) ? 1 : -1);
}

sortData()

function renderTableHTML() {

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

renderTableHTML()



function renderTableFooterHTML() {

    let HTML = ''
    let incSum = 0;
    let expSum = 0;

    for (let i = 0; i < data.length; i++) {

        inc = data[i].income;
        exp = data[i].expense;
        
        if (exp == undefined) {
            exp = 0;
        }

        if (inc == undefined) {
            inc = 0;
        }

        incSum += inc;
        expSum += exp;
        
    }
        HTML += `<div class="cell"></div>
                <div class="cell"></div>
                <div class="cell">${incSum} Eur</div>
                <div class="cell">${expSum} Eur</div>
                <div class="cell">${incSum - expSum} Eur</div>`;

    
    document.querySelector('.table-footer').innerHTML = HTML;
}

renderTableFooterHTML()
