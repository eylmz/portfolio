import * as React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { ContactForm } from '../../Helpers/ContactForm';
import './Contact.less';

interface ContactProps {}
interface ContactStates {
  subject: string;
  email: string;
  message: string;
}

interface ContactFormElement {
  name: string;
  value: string;
}

export class Contact extends React.Component<ContactProps, ContactStates> {
  contactForm: ContactForm;

  constructor(props: ContactProps) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.contactForm = new ContactForm();
    this.state = {
      subject: '',
      email: '',
      message: ''
    }
  }

  onChange(e: React.FormEvent<ContactFormElement>) {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({
      [key]: value
    } as any);
  }

  async onSubmit(e: any) {
    e.preventDefault();
    const result = await this.contactForm.sendMessage(this.state);

    if (result) {
      this.setState({
        subject: '',
        email: '',
        message: ''
      });
    }
  }

  render() {
    const { subject, email, message } = this.state;
    return (
      <article id="contact">
        <h2>Get In Touch</h2>

        <form className="form" onSubmit={this.onSubmit}>
          <div className="half">
            <input type="text" placeholder="Subject" name="subject" value={subject} onChange={this.onChange} required/>
            <input type="email" placeholder="Email" name="email" value={email} onChange={this.onChange} required/>
          </div>

          <textarea placeholder="Your Message" name="message" value={message} onChange={this.onChange} required/>

          <button type="submit">Submit <FaChevronRight/></button>
        </form>
      </article>
    );
  }
}
