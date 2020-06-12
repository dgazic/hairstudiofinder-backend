const sgMail = require('@sendgrid/mail')
// const sendgridAPIKey = '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'



sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const posaljiWelcomeEmail = (email, ime) => {
    sgMail.send({
        to: email,
        from: 'hairstudiofinder@net.hr',
        subject: 'Hvala za registraciju!',
        text: `Registracija je bila uspješna, ${ime}. Drago nam je da koristiš naše usluge!`
    })
}

const posaljiCancelationEmail = (email,ime) => {
    sgMail.send({
        to: email,
        from: 'hairstudiofinder@net.hr',
        subject: 'Žao nam je što odlazite!',
        text: `Doviđenja, ${ime}. Nadam se da ćeš nam se opet vratiti!`
    })
}

module.exports = {
    posaljiWelcomeEmail,posaljiCancelationEmail
}



// const msg = {
//     to: 'gazic.dino98@gmail.com',
//     from: 'hairstudiofinder@net.hr',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };

//   sgMail.send(msg).then(() => {
//     console.log('Message sent')
// }).catch((error) => {
//     console.log(error.response.body)
//     // console.log(error.response.body.errors[0].message)
// })