import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private secretKey = 'thisIsMs!32'; // Use a secure key management approach 
  constructor() { }
  encrypt(text: string): string {
    const encrypted = CryptoJS.AES.encrypt(text, this.secretKey).toString();
    return encrypted;
  }

  decrypt(encryptedText: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedText, this.secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

}
