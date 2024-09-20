fetch('http://localhost:3000/users')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data); // Kiểm tra dữ liệu trả về
        const table = document.getElementById('userTable');
        data.forEach(user => {
            const row = table.insertRow();
            row.insertCell(0).innerText = user.User_ID;
            row.insertCell(1).innerText = user.Username;
            row.insertCell(2).innerText = user.Password;
            row.insertCell(3).innerText = user.Fullname;
            row.insertCell(4).innerText = user.Address;
            row.insertCell(5).innerText = user.Registration_Date;

             // Delete button
         const addCellDelete = row.insertCell(6);
         const addButtonDelete = document.createElement('button');
         addButtonDelete.innerText = 'Delete';
         addButtonDelete.onclick = () => {
             alert(`Delete User ID: ${book.User_ID}`);
         };
         addCellDelete.appendChild(addButtonDelete);

         // Edit button
         const addCellEdit = row.insertCell(7);
         const addButtonEdit = document.createElement('button');
         addButtonEdit.innerText = 'Delete';
         addButtonEdit.onclick = () => {
             alert(`Delete User ID: ${book.User_ID}`);
         };
         addCellEdit.appendChild(addButtonEdit);
        });
    })
    .catch(error => console.error('Fetch error:', error));