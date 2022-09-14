import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/input';
import TextArea from '../components/textarea';
import Button from '../components/button';
import Example from '../components/example';
import Success from '../components/alerts/Success';
import Error from '../components/alerts/Error';

export default function Email() {
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPassrowd, setSenderPassrowd] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [notification, setNotification] = useState('');
  const [status, setStatus] = useState(0);
  const [formEmpty, setFormEmpty] = useState(false);

  const clear = async () => {
    setSenderEmail('');
    setSenderPassrowd('');
    setRecipientEmail('');
    setSubject('');
    setNotification('');
  }

  const sendNotification = async () => {
    if (senderEmail && senderPassrowd && subject && recipientEmail && notification) {
      const data = {
        sender_email_address: senderEmail,
        sender_password: senderPassrowd,
        recipient: recipientEmail,
        subject: subject,
        text: notification
      }
      axios.post('http://localhost:9090/api/v1/send', {
        platform: 'email',
        method: 'sendMsg',
        custom: data
      })
        .then(function (response) {
          console.log(response);
          if (response.data.status === 'sending') {
            setStatus(1);
            clear();
            setFormEmpty(false);
          } else {
            setStatus(2);
          }

        })
        .catch(function (error) {
          console.log(error);
          setStatus(2);
        });
    } else {
      setStatus(0);
      setFormEmpty(true);
    }
  }
  return (
    <div>
      {status ? status === 1 ? <Success msg='Notification has been sent successfully' /> : status === 2 ? <Error msg='Could not send notification' /> : null : null}
      <section className='mt-5'>
        <div className='grid gap-4 p-5 rounded-lg border-4 border-dashed border-gray-200'>
          <Input
            labelText='Sender Email Address'
            name='senderEmail'
            type='email'
            placeholder='sender@gmail.com'
            setValue={setSenderEmail}
            value={senderEmail}
          />
          <Input
            labelText='Sender Password'
            name='senderPassword'
            type='password'
            placeholder='************'
            setValue={setSenderPassrowd}
            value={senderPassrowd}
          />
          <Input
            labelText='Recipient Email Address'
            name='recipientEmail'
            type='email'
            placeholder='recipient@gmail.com'
            setValue={setRecipientEmail}
            value={recipientEmail}
          />
          <Input
            labelText='Email Subject'
            name='subject'
            type='text'
            placeholder='Your email subject ...'
            setValue={setSubject}
            value={subject}
          />
          <TextArea
            name='notification'
            labelText='Email Content'
            placeholder='Notification body content'
            setValue={setNotification}
            value={notification}
          />
          <div>
            <Button text='Send Notification' func={sendNotification} /> {formEmpty ? <span className='ml-2 text-red-400'>- please update the form!</span> : null}
          </div>
        </div>
      </section>
      <section className='mt-20 p-4'>
        <Example platform='Email' args={[
          { title: 'Sender Email Address', example: 'sender@gmail.com' },
          { title: 'Sender Password', example: '************' },
          { title: 'Recipient Email Address', example: 'recipient@gmail.com' },
          { title: 'Email Subject', example: 'API Server is down!' },
          { title: 'Email Content', example: 'API Server is down, starting build.' }
        ]} />
      </section>
    </div>
  )
}


