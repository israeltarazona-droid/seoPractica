import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyB6zf7qBkPEFvaO8mA9xq73bUI8Jbkg0Ew",
  authDomain: "seo-pragma-practica.firebaseapp.com",
  projectId: "seo-pragma-practica",
  storageBucket: "seo-pragma-practica.firebasestorage.app",
  messagingSenderId: "306032719133",
  appId: "1:306032719133:web:45778f0f9f68c9e1f05df4",
  measurementId: "G-03SEDGV4P7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})


export class PagesComponent {



}
