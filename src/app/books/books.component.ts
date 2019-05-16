import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from '@angular/material';

import { BooksService } from '../_core/services/books/books.service';
import { AddBookDialogComponent } from './modals/add-book-dialog/add-book-dialog.component';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
    books = [];
    pagination = {};
    displayedColumns = ['id', 'title', 'author', 'publish_year','library_branch','controls'];
    filterParams = {};

    constructor(private booksService: BooksService, public modal: MatDialog) {
    }

    ngOnInit() {
        this.loadBooks();
    }

    async loadBooks() {
        const books = await this.booksService.queryBooks(this.filterParams);
        this.books = books.results;
        this.pagination = books.pagination;
    }

    onPageChange({ pageIndex, pageSize }) {
        const params = {
            page: pageIndex + 1,
            page_size: pageSize,
        }

        this.updateFilters(params);
        this.loadBooks();
    }

    updateFilters(values) {
        this.filterParams = { ...this.filterParams, ...values };
    }

    onFiltersChange(data) {
        const params = {
            ...data,
        }

        this.updateFilters(params);
        this.loadBooks()
    }

    openAddBookDialog() {
        this.modal.open(AddBookDialogComponent, {
          width: '800px'
        });
    }

}