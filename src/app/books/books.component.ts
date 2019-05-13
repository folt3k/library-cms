import { Component, OnInit, ViewChild } from "@angular/core";
import { BooksService } from '../_core/services/books/books.service';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
    books = [];
    displayedColumns = ['id', 'title', 'author', 'publish_year', 'controls'];

    constructor(private booksService: BooksService) {
    }

    ngOnInit() {
        this.loadBooks();
    }

    async loadBooks() {
        const books = await this.booksService.queryBooks();
        this.books = books.results;
    }
}