import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"da-notes-42ce9","appId":"1:1000481050304:web:89388c149f4a015c95e725","storageBucket":"da-notes-42ce9.appspot.com","apiKey":"AIzaSyAUevo0okJOef50mrQGf06OitcfETQfhx4","authDomain":"da-notes-42ce9.firebaseapp.com","messagingSenderId":"1000481050304"})), provideFirestore(() => getFirestore())]
};
