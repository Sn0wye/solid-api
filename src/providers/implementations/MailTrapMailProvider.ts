import nodemailer from 'nodemailer';
import { IMailProvider, IMessage } from '../IMailProvider';

export class MailTrapMailProvider implements IMailProvider {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({});
  }

  async sendMail(message: IMessage): Promise<void> {}
}
