const insert = document.querySelector("#insert");
var isTableEmpty = true;
insert.innerHTML = "Press any key to see Magic tricks";


window.addEventListener("keydown", function(e) {
    if (isTableEmpty) {
        insert.innerHTML = `
            <table id="keyTable">
                <tr>
                    <th> Key </th>
                    <th> Key Code </th>
                    <th> Code </th>
                </tr>
            </table>
        `;
        isTableEmpty = false;
    }
    const keyTable = document.querySelector("#keyTable");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${e.key === " "? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    `;
    keyTable.appendChild(newRow);
});