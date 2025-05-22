import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Task {
  _id?: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = error.error.error || error.message;
    }
    console.error('Task service error:', errorMessage);
    return throwError(() => errorMessage);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      tap(tasks => console.log('Fetched tasks:', tasks.length)),
      catchError(this.handleError)
    );
  }

  createTask(task: Omit<Task, '_id'>): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task).pipe(
      tap(newTask => console.log('Created task:', newTask._id)),
      catchError(this.handleError)
    );
  }

  updateTask(id: string, task: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task).pipe(
      tap(updatedTask => console.log('Updated task:', updatedTask._id)),
      catchError(this.handleError)
    );
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => console.log('Deleted task:', id)),
      catchError(this.handleError)
    );
  }
}
