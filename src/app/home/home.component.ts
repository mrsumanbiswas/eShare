import { Component, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { DatabaseService } from '../services/database.service';
import { StorageService } from '../services/storage.service';
import { saveAs } from 'file-saver'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  postData: {
    id: string;
    uid: string;
    name: string;
    url: string;
    size: number;
    timestamp: string;
    deleteAble: boolean;
  }[] = [];

  constructor(
    private database: Firestore,
    private db: DatabaseService,
    private storage: StorageService,
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user',
        Date.now().toString()
      )
    }
    this.getData()
  }

  private async getData() {
    const querySnapshot = await getDocs(collection(this.database, "uploads"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if (Date.now() - Number(doc.id) > 604800000) {
        this.db.deleteData('uploads', doc.id);
      } else {
        const data = doc.data();
        this.postData.push(
          {
            id: doc.id,
            uid: data['uid'],
            url: data['url'],
            name: data['name'],
            size: data['size'],
            timestamp: data['timestamp'],
            deleteAble: localStorage.getItem('datas/' + doc.id) != null
          }
        )
      }
    });

    // reveversed the array
    this.postData.reverse();
  }

  deleteData(id: string) {
    this.storage.deleteFile('uploads', id)
    localStorage.removeItem('datas/' + id)
  }

  downloadData(url: string, name: string) {
    saveAs(url, name);
  }

}
