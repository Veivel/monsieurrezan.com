import type { NextApiRequest, NextApiResponse } from 'next'
import { SMTPClient, Message } from 'emailjs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(400).send("Method Not Allowed")
    } else if (!req.body) {
        res.status(400).send("No Request Body found");
    } else {
        console.log("New form submitted: ", req.body?.data);

        const client = new SMTPClient({
            user: process.env.EMAIL_USER,
            password: process.env.EMAIL_PASSWORD,
            host: 'smtp.gmail.com',
            tls: {
                ciphers: 'SSLv3',
            },
        });

        const message = new Message({
            text: 'i hope this works',
            from: process.env.EMAIL_USER,
            to: 'givarrelveivelp@gmail.com',
            cc: 'givarrelveivelp@gmail.com',
            subject: 'testing emailjs',
            // attachment: [
            //     { data: '<html>i <i>hope</i> this works!</html>', alternative: true },
            //     { path: 'path/to/file.zip', type: 'application/zip', name: 'renamed.zip' },
            // ],
        });

        // send the message and get a callback with an error or details of the message that was sent
        client.send(message, (err, message) => {
            console.log(err || message);
        });

        res.status(200).json({ name: 'John Doe' })
    }


}
