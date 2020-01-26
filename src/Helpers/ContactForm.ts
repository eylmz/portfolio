import axios from 'axios';

export class ContactForm {
  async sendMessage(data: SendMessageData) {
    try {
      await axios.post('http://emre.pw/sendemail.php', data);

      return true;
    }catch (e) {
      return false;
    }
  }
}

interface SendMessageData {
  subject: string;
  email: string;
  message: string;
}