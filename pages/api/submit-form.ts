import type { NextApiRequest, NextApiResponse } from 'next'
import emailjs from '@emailjs/browser';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(500).json({ message: 'Deprecated. Use EmailJS to send emails client-side.'});

    if (req.method !== "POST") {
        res.status(400).send("Method Not Allowed")
    } else if (!req.body) {
        res.status(400).send("No Request Body found");
    } else {
        // const data = JSON.parse(req.body.body);
        // console.log("New form submitted: ", data);
        // emailjs.send(
        //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, 
        //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, 
        //     {
        //         'to_email': data.email,
        //         'data': data,
        //         'from_name': 'Monsieur Rezan'
        //     }, 
        //     process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY
        // )
        // .then(result => {
        //     emailjs.send(
        //         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        //         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN as string,
        //         {
        //             data: data,
        //             metadata: {
        //                 'date': new Date(),
        //                 'browser': navigator.userAgent,
        //                 'platform': navigator.platform,
        //             }
        //         },
        //         process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY
        //     )
        // })
        // .then(result => {
        //     // TODO: toast or confirmation message
        //     console.log(result)
        // })
        // .catch(error => {
        //     console.log("Error: ", error)
        // })

        res.status(200).json({ message: "Form submitted successfully." });
    }


}
