// src/components/Contact.tsx
import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import { INFO } from '../data/user';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) {
      // NOTE: the previous Formspree endpoint ("your-form-id") was a placeholder and never worked.
      // This opens the visitor's email client with everything pre-filled instead — works with no backend.
      // To use Formspree for real later: sign up at formspree.io, get your real form ID, and replace
      // this block with a fetch() POST to https://formspree.io/f/<your-real-id>.
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${INFO.contact.email}?subject=${subject}&body=${body}`;

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{INFO.contact.title}</h1>
          <p>Email: {INFO.contact.email}</p>
          <Box
            ref={formRef}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                id="outlined-email"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email' : ''}
              />
            </div>
            <TextField
              required
              id="outlined-multiline"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter your message' : ''}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;