import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, delay = 500) {
    setTimeout(() => {
      this.snackBar.open(message, "", {
        duration: 8000
      });
    }, delay);
  }
}
