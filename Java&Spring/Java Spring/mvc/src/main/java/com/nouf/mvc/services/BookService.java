package com.nouf.mvc.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.nouf.mvc.models.Book;
import com.nouf.mvc.repositories.BookRepository;


@Service
public class BookService {
    // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    
    public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
    	Optional<Book> bookToUpdate = bookRepository.findById(id);
    	Book b =  bookToUpdate.get();
    	b.setTitle(title);
    	b.setDescription(desc);
    	b.setLanguage(lang);
    	b.setNumberOfPages(numOfPages);
    	b.setUpdatedAt(new Date());
    	return bookRepository.save(b);
    }
    
 // edits a book
    public Book updateBook(Book b) {
    	return bookRepository.save(b);
    } 
    
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
