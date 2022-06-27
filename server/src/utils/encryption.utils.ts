import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { IEncryptedTextData, IDecryptedData } from '../interfaces';
import { promisify } from 'util';

export const encrypt = async (
  str: string,
  secret: string,
): Promise<IEncryptedTextData> => {
  const iv = randomBytes(16);
  const cipher = createCipheriv('aes-256-ctr', secret, iv);
  const encryptedText = Buffer.concat([cipher.update(str), cipher.final()]);
  return {
    encryptedText,
    encryptedTextString: encryptedText.toString('base64'),
    iv: iv.toString('base64'),
  };
};

export const decrypt = async (
  encStr: string,
  secret: string,
  iv: string,
): Promise<IDecryptedData> => {
  const encStrBuffer = Buffer.from(encStr, 'base64');
  const ivBuffer = Buffer.from(iv, 'base64');
  const decipher = createDecipheriv('aes-256-ctr', secret, ivBuffer);
  const decryptedText = Buffer.concat([
    decipher.update(encStrBuffer),
    decipher.final(),
  ]);

  return {
    decryptedText,
    decryptedTextString: decryptedText.toString(),
  };
};
