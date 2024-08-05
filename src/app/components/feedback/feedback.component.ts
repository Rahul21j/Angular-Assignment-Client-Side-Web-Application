import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  phoneRegex = '^[0-9]{10}$';  // Example: 123-456-7890

  feedbackForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    phone: new FormControl("", [Validators.required, Validators.pattern(this.phoneRegex)]),
    feedback: new FormControl("", [Validators.required, Validators.minLength(10)]),
  });

  getControl(name: any): AbstractControl | null {
    return this.feedbackForm.get(name);
  }

  submitFeedback() {
    console.log(this.feedbackForm.value);
  }
}
