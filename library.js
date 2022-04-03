const person = ["Arnav", "Rishi", "Remo", "Elon musk", "Harry", "Edison"];
const tableDetail = document.querySelector("#info-table");
const personNameElement = document.querySelector("#logged-in-user-name");
const button = document.querySelector("#btn");
let globalPerson = "";
const bookDetails = [
  {
    id: 1,
    title: "Data Structure and Algorithm",
    author: "Abdul Bari",
    lender: "Arnav",
    borrower: "-",
  },
  {
    id: 2,
    title: "Java ",
    author: "Benedict Cumberbatch",
    lender: "Remo",
    borrower: "Rishi",
  },
  {
    id: 3,
    title: "Python",
    author: "Santosh Swain",
    lender: "Harry",
    borrower: "Remo",
  },
  {
    id: 4,
    title: "Javascipt",
    author: "Harry",
    lender: "Arnav",
    borrower: "Elon musk",
  },
  {
    id: 5,
    title: "Cloud Computing",
    author: "Ashish singh",
    lender: "Arnav",
    borrower: "Remo",
  },
  {
    id: 6,
    title: "C++ language",
    author: "Abdul Bari",
    lender: "Arnav",
    borrower: "Rishi",
  },
];
const renderTable = () => {
  tableDetail.innerHTML = `<thead>
    <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Author</th>
        <th>Lender</th>
        <th>Borrower</th>
        <th>Action</th>
    </tr>
    </thead>`;
  bookDetails.forEach((book) => {
    tableDetail.innerHTML += `<tdata>
    <td>${book.id}</td>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.lender}</td>
              <td>${book.borrower}</td>
              <td>${
                book.lender === globalPerson
                  ? "-"
                  : book.borrower === globalPerson
                  ? "<button id='returnBook' onclick='returnBook(this)'>Return</button>"
                  : globalPerson && book.borrower === "-"
                  ? "<button id='borrowBook' onclick='borrowBook(this)'>borrow</button>"
                  : "-"
              }</td>
              </tdata>`;
  });
  if (globalPerson) {
    tableDetail.innerHTML += `<tdata>
  <td>${bookDetails.length + 1}</td>
            <td><input id='title' type='text' placeholder='title'></td>
            <td><input id='author' type='text' placeholder='Author'></td>
            <td>${globalPerson}</td>
            <td>-</td>
            <td><button id='borrowBook' onclick='addBook()'>Add book</button></td>
            </tdata>`;
  }
};
renderTable();

const changeLoggedInUser = () => {
  const user = document.querySelector("#logged-user").value;
  globalPerson = user;
  if (person.includes(user)) {
    personNameElement.innerText = `Logged In User: ${user}`;
    renderTable();
  } else {
    alert("User not found");
  }
};

const borrowBook = (node) => {
  const bookId = Number(node.parentNode.parentNode.childNodes[0].innerText);
  const bookIndex = bookDetails.findIndex((book) => book.id === bookId);
  bookDetails[bookIndex].borrower = globalPerson;
  renderTable();
};

const returnBook = (node) => {
  const bookId = Number(node.parentNode.parentNode.childNodes[0].innerText);
  const bookIndex = bookDetails.findIndex((book) => book.id === bookId);
  bookDetails[bookIndex].borrower = "-";
  renderTable();
};

const addBook = () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const book = {
    id: bookDetails.length + 1,
    title: title,
    author: author,
    lender: globalPerson,
    borrower: "-",
  };
  if (title.trim() && author.trim()) {
    bookDetails.push(book);
  } else {
    alert("Fill all the fields");
  }
  renderTable();
};

button.addEventListener("click", changeLoggedInUser);
