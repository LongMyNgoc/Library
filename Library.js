fetch('http://localhost:3000/books')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data); // Kiểm tra dữ liệu trả về
        const table = document.getElementById('booksTable').getElementsByTagName('tbody')[0];
        
        // Hàm để hiển thị bảng
        const displayBooks = (books) => {
            table.innerHTML = ''; // Xóa bảng cũ
            books.forEach(book => {
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

                // Borrow button
                const addCell = row.insertCell(9);
                const addButton = document.createElement('button');
                addButton.innerText = 'Borrow';
                addButton.onclick = () => {
                    alert(`Borrowing book ID: ${book.Book_ID}`);
                };
                addCell.appendChild(addButton);
            });
        };

        // Hiển thị toàn bộ sách khi tải trang
        displayBooks(data);

        // Tìm kiếm theo từ khóa
        // Lọc dữ liệu trong bảng dựa trên từ khóa tìm kiếm
    document.getElementById('searchInput').addEventListener('keyup', function () {
    const searchValue = this.value.toLowerCase(); // Lấy từ khóa tìm kiếm và chuyển thành chữ thường để tránh phân biệt chữ hoa/chữ thường
    const table = document.getElementById('booksTable');
    const rows = table.getElementsByTagName('tr');

    // Lặp qua tất cả các hàng (bắt đầu từ index 1 vì index 0 là hàng tiêu đề)
       for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let rowContainsSearchTerm = false;

        // Lặp qua tất cả các ô trong hàng
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].innerText.toLowerCase();
            if (cellText.includes(searchValue)) {
                rowContainsSearchTerm = true; // Nếu tìm thấy từ khóa trong ô, đánh dấu hàng này là khớp
                break;
            }
        }

        // Hiển thị hoặc ẩn hàng tùy theo có khớp với từ khóa tìm kiếm không
        rows[i].style.display = rowContainsSearchTerm ? '' : 'none';
       }
    });
})
.catch(error => console.error('Fetch error:', error));
    
    document.getElementById('login').addEventListener('submit', async function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;
    
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, role })
            });
            const data = await response.json();
            if (data.message === 'Login successful') {
                $('#loginModal').modal('hide'); // Ẩn modal khi đăng nhập thành công
                // Cập nhật giao diện tùy theo vai trò của người dùng (Admin/User)
            } else {
                alert(data.message); // Hiển thị thông báo lỗi
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
    