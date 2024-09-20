fetch('http://localhost:3000/borrowingrecords')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data); // Kiểm tra dữ liệu trả về
        const table = document.getElementById('borrowingrRecordTable');
        data.forEach(borrow => {
            const row = table.insertRow();
            row.insertCell(0).innerText = borrow.Borrow_ID;
            row.insertCell(1).innerText = borrow.Username;
            row.insertCell(2).innerText = borrow.Book_ID;
            row.insertCell(3).innerText = borrow.Borrow_Date;
            row.insertCell(4).innerText = borrow.Return_Date;
            row.insertCell(5).innerText = borrow.Status;

            // Delete button
        const addCellDelete = row.insertCell(6);
        const addButtonDelete = document.createElement('button');
        addButtonDelete.innerText = 'Delete';
        addButtonDelete.onclick = () => {
            alert(`Delete borrow ID: ${book.Borrow_ID}`);
        };
        addCellDelete.appendChild(addButtonDelete);

        // Edit button
        const addCellEdit = row.insertCell(7);
        const addButtonEdit = document.createElement('button');
        addButtonEdit.innerText = 'Delete';
        addButtonEdit.onclick = () => {
            alert(`Delete borrow ID: ${book.Borrow_ID}`);
        };
        addCellEdit.appendChild(addButtonEdit);
        });
    })
    .catch(error => console.error('Fetch error:', error));