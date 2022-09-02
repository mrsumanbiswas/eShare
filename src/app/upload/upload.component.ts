import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: [
    `MatCardModule 
    img {
        max-height: 300px;
    }

    .mat-progress-bar {
        margin-top: 3vh;
    }

    button {
        width: 100%;
        margin: auto;
        margin-top: 1rem;
    }
    `
  ]
})
export class UploadComponent implements OnInit {

  uploadfraction!: number;
  previewPhoto!: string | ArrayBuffer | null;
  fileData!: File;

  constructor(private storage: StorageService) { }

  ngOnInit(): void { }



  preview() {
    let reader = new FileReader();

    reader.readAsDataURL(this.fileData);

    reader.onload = () => {
      this.previewPhoto = reader.result;
    };

    reader.onerror = () => {
      console.log(reader.error);
    };
  }

  photoSelected(files: FileList | null) {
    const file = files?.item(0)
    if (file !== null && file !== undefined) {
      this.fileData = file
      this.preview()
      return true
    } else {
      return false
    }
  }

  // uploads photo to storage and creates a data to the realtime database
  uploadPhoto() {
    const time = Date.now().toString();
    localStorage.setItem('datas/' + time, JSON.stringify({
      name:this.fileData.name,
      size:this.fileData.size,
      lastmodified:this.fileData.lastModified,
    }));
    this.storage.uploadFile('uploads', time, this.fileData)
      .on('state_changed',
        (snapshot) => {
          this.uploadfraction = (snapshot.bytesTransferred / snapshot.totalBytes);
        }
      )

  }

}
