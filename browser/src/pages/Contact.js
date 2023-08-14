import React from 'react';

function Contact() {
  return (
    <main>
      <h1>Contact</h1>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <div className="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit Form</button>
      </form>
    </main>
  );
}

export default Contact;
