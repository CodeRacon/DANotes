import { Injectable, inject } from '@angular/core';
import { collection, Firestore, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class NoteListService {
  firestore: Firestore = inject(Firestore);

  constructor() {}

  // aCollection = collection(this.firestore, 'items');

  getNotesRef() {
    return collection(this.firestore, 'notes');
  }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }
}
