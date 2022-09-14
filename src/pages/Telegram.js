import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/input';
import TextArea from '../components/textarea';
import Button from '../components/button';
import Example from '../components/example';
import Success from '../components/alerts/Success';
import Error from '../components/alerts/Error';

export default function Telegram() {
    const [token, setToken] = useState('');
    const [chatId, setChatId] = useState('');
    const [notification, setNotification] = useState('');
    const [status, setStatus] = useState(0);
    const [formEmpty, setFormEmpty] = useState(false);

    const clear = async () => {
        setToken('');
        setChatId('');
        setNotification('');
    }

    const sendNotification = async () => {
        if (token && chatId && notification) {
            const data = {
                token,
                chat_id: chatId,
                notification
            }
            axios.post('http://localhost:9090/api/v1/send', {
                platform: 'telegram',
                method: 'sendMsg',
                custom: data
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status === 'success') {
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
                        labelText='Token'
                        name='token'
                        type='text'
                        placeholder='Bot token...'
                        setValue={setToken}
                        value={token}
                    />
                    <Input
                        labelText='Chat ID'
                        name='chat_id'
                        type='text'
                        placeholder='Channel chat id ...'
                        setValue={setChatId}
                        value={chatId}
                    />
                    <TextArea
                        name='notification'
                        labelText='Notification Content'
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
                <Example platform='Telegram' args={[
                    { title: 'Token', example: '*****-*****-*****-*****-*****' },
                    { title: 'Chat ID', example: '**********' },
                    { title: 'Notification', example: 'Hello DevOps Class' }
                ]} />
            </section>
        </div>
    )
}


