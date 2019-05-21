import { LibraryBranch } from './library-branch';

export interface BookAuthor {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  pages_count: number;
  publish_year: number;
  library_branch: LibraryBranch;
  book_categories: Array<any>;
  author: BookAuthor;
  borrow_status: {
    is_borrowed: boolean;
    return_date: string;
  }
}
