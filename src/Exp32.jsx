import React, { useState } from 'react';

class Book {
  constructor(title, author, isbn) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const App = () => {
  // --- STATE MANAGEMENT ---
  const [books, setBooks] = useState([
    new Book("The Alchemist", "Paulo Coelho", "9780062315007"),
    new Book("Clean Code", "Robert C. Martin", "9780132350884"),
    new Book("Eloquent JavaScript", "Marijn Haverbeke", "9781593279509")
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ title: '', author: '', isbn: '' });

  // --- HANDLERS ---
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return alert("Title and Author are required!");
    
    const newBook = new Book(formData.title, formData.author, formData.isbn);
    setBooks([...books, newBook]);
    setFormData({ title: '', author: '', isbn: '' }); // Reset form
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // --- SEARCH LOGIC (Computed State) ---
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.cardWrapper}>
        <h1 style={styles.title}>Library Management System</h1>
        
        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Search books by title or author..." 
          style={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Add Book Form */}
        <form onSubmit={handleAddBook} style={styles.form}>
          <input 
            style={styles.input}
            placeholder="Book Title" 
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
          <input 
            style={styles.input}
            placeholder="Author" 
            value={formData.author}
            onChange={(e) => setFormData({...formData, author: e.target.value})}
          />
          <input 
            style={styles.input}
            placeholder="ISBN" 
            value={formData.isbn}
            onChange={(e) => setFormData({...formData, isbn: e.target.value})}
          />
          <button type="submit" style={styles.addButton}>Add Book</button>
        </form>

        <hr style={styles.divider} />

        {/* Responsive Book Grid */}
        <div style={styles.grid}>
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
              <div key={book.id} style={styles.bookCard}>
                <div style={styles.bookInfo}>
                  <h3 style={styles.bookTitle}>{book.title}</h3>
                  <p style={styles.bookAuthor}>by {book.author}</p>
                  <code style={styles.isbn}>ISBN: {book.isbn || 'N/A'}</code>
                </div>
                <button 
                  onClick={() => removeBook(book.id)} 
                  style={styles.deleteBtn}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p style={styles.emptyMsg}>No books found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// --- CSS-IN-JS STYLES ---
const styles = {
  container: { minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '40px 20px', fontFamily: 'Arial, sans-serif' },
  cardWrapper: { maxWidth: '1000px', margin: '0 auto', backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
  title: { textAlign: 'center', color: '#1a73e8', marginBottom: '30px' },
  searchInput: { width: '100%', padding: '12px 20px', borderRadius: '25px', border: '2px solid #e0e0e0', fontSize: '16px', marginBottom: '20px', outline: 'none', transition: 'border 0.3s' },
  form: { display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' },
  input: { flex: 1, minWidth: '150px', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' },
  addButton: { padding: '10px 25px', backgroundColor: '#34a853', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  divider: { margin: '20px 0', border: 'none', borderTop: '1px solid #eee' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' },
  bookCard: { padding: '20px', borderRadius: '8px', border: '1px solid #eef0f2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fafbfc' },
  bookTitle: { margin: '0 0 5px 0', fontSize: '18px', color: '#202124' },
  bookAuthor: { margin: '0 0 10px 0', color: '#5f6368', fontSize: '14px' },
  isbn: { fontSize: '12px', color: '#9aa0a6', backgroundColor: '#f1f3f4', padding: '2px 6px', borderRadius: '4px' },
  deleteBtn: { marginTop: '15px', padding: '8px', backgroundColor: '#ea4335', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  emptyMsg: { gridColumn: '1 / -1', textAlign: 'center', color: '#70757a', padding: '40px' }
};

export default App;