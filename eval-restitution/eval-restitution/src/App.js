import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/Search';

function App() {
  // State hooks for managing input fields and book list
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'read', or 'unread' filter
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Function to handle adding a book to the list
  const handleAddBook = () => {
    if (title && author && image) { // Check that all fields are filled
      const newBook = { title, author, image, read: false }; // Create new book object
      setBooks([...books, newBook]); // Add new book to the list
      setTitle(''); // Reset title field
      setAuthor(''); // Reset author field
      setImage(null); // Reset image field
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Function to handle the image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set image as base64 data URL
      };
      reader.readAsDataURL(file);
    }
  };

  // Filter and search books based on criteria
  const filteredBooks = books.filter((book) => {
    const matchesFilter =
      filter === 'all' || (filter === 'read' ? book.read : !book.read); // Apply read/unread filter
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(searchQuery.toLowerCase()); // Apply search filter
    return matchesFilter && matchesSearch; 
  });

  // Function to delete a book from the list
  const handleDelete = (index) => {
    setBooks(books.filter((_, i) => i !== index)); // Remove book by index
  };

  // Function to toggle read status of a book
  const toggleReadStatus = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].read = !updatedBooks[index].read; // Toggle read status
    setBooks(updatedBooks);
  };

  return (
    <div className="container">
        <h1 className="text-center m-4 mb-5">Gestionnaire de Livres</h1>
      <div className="form-group">
        <div className="m-2 fs-4">
          <label htmlFor="bookTitle">Titre du Livre</label>
        </div>
        <input
          type="text"
          id="bookTitle"
          className="form-control fs-6"
          placeholder="Entrez le titre du livre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="m-2 fs-4">
          <label htmlFor="bookAuthor">Auteur</label>
        </div>
        <input
          type="text"
          id="bookAuthor"
          className="form-control fs-6"
          placeholder="Entrez le nom de l'auteur"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="m-2 fs-4">
          <label htmlFor="bookImage">Image du Livre</label>
        </div>
        <input
          type="file"
          id="bookImage"
          className="form-control fs-6"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div className="text-center mt-4 mb-5">
        <button onClick={handleAddBook} className="btn btn-primary">Ajouter le Livre</button>
      </div>

      <h2 className="m-4 mb-2">Liste des Livres</h2>
      <div className="form-group">
        <div className="tools m-3 fs-6">
          <label>Filtrer par :</label>
          <div className='Search fs-3'>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* Passer les props de recherche */}
      </div>
        </div>
        <select
          className="form-control"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Tous</option>
          <option value="read">Lu</option>
          <option value="unread">Non Lu</option>
        </select>
      </div>
      <div className="row mt-2 mb-2">
        {filteredBooks.map((book, index) => (
          <div key={index} className="col-md-4">
            <div className="card m-2" style={{ height: 'auto' }}>
              <div className="card-body d-flex flex-column justify-content-between align-items-center">
                <div>
                  <h5 
                    className="card-title m-1 fs-6" 
                    onClick={() => toggleReadStatus(index)} 
                    style={{ cursor: 'pointer' }}>
                    {book.title}
                  </h5>
                  <p className="card-text m-1 fs-6">par {book.author}</p>
                  <p className="card-text m-2 fs-6">
                    <p className="text-muted m-1">{book.read ? 'Lu' : 'Non Lu'}</p>
                  </p>
                </div>
                {book.image && (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="img-thumbnail m-3"
                  />
                )}
                <button onClick={() => handleDelete(index)} className="btn btn-danger mt-2 d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                  <p>Supprimer le Livre</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

