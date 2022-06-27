export interface IEncryptedTextData {
  encryptedText: Buffer;
  encryptedTextString: string;
  iv: string;
}

export interface IDecryptedData {
  decryptedText: Buffer;
  decryptedTextString: string;
}
