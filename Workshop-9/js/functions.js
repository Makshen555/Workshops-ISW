function addAuthor(){
    const authorName = document.getElementById("author-name");
    //insert to a database
    let authorsDb = JSON.parse(localStorage.getItem('authors'));
    if(!authorsDb) {
        authorsDb = [];
    }
    const author = {
      name: authorName,
      id: authorsDb.length + 1
    }
    authorsDb.push(author);
    localStorage.setItem('authors', JSON.stringify(authorsDb));
    // //reload the book list
    // showListOfBooks();
    console.log(JSON.parse(localStorage.getItem('authors')));
    window.location.href = 'authors.html';
}
$('#add-author-button').bind('click', function(){
    addBook();
  });