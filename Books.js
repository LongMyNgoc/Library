fetch('http://localhost:3000/books')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data); // Kiểm tra dữ liệu trả về
        const table = document.getElementById('booksTable');
        data.forEach(book => {
            const row = table.insertRow();
            row.insertCell(0).innerText = book.Book_ID;
            row.insertCell(1).innerText = book.Title;
            row.insertCell(2).innerText = book.Author;
            row.insertCell(3).innerText = book.Publisher;
            row.insertCell(4).innerText = book.Price;
            row.insertCell(5).innerText = book.Publication_Year;
            row.insertCell(6).innerText = book.Page_count;
            row.insertCell(7).innerText = new Date(book.Stock_date).toLocaleDateString();
            row.insertCell(8).innerText = book.Status;

            // Delete button
            const addCellDelete = row.insertCell(9);
            const addButtonDelete = document.createElement('button');
            addButtonDelete.innerText = 'Delete';
            addButtonDelete.onclick = () => {
                alert(`Delete book ID: ${book.Book_ID}`);
            };
            addCellDelete.appendChild(addButtonDelete);

            // Edit button
            const addCellEdit = row.insertCell(10);
            const addButtonEdit = document.createElement('button');
            addButtonEdit.innerText = 'Delete';
            addButtonEdit.onclick = () => {
                alert(`Delete book ID: ${book.Book_ID}`);
            };
            addCellEdit.appendChild(addButtonEdit);
        });
    })
    .catch(error => console.error('Fetch error:', error));