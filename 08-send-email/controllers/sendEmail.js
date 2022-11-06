const nodemailer = require("nodemailer")
const sgMail = require("@sendgrid/mail")

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "may.fay43@ethereal.email",
      pass: "may.fay43@ethereal.email",
    },
  })

  let info = await transpoeter.sendMail({
    from: `"Crusaders.org" <jadonrajeevsingh237@gmail.com>`,
    to: `randomaff8@gmail.com`,
    subject: `Hello`,
    jtml: `<h2>Sending emails with node.js</h2>`,
  })
  res.json(info)
}

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: `randomaff8@gmail.com`,
    from: "jadonrajeevsingh237@gmail.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  }
  const info = await sgMail.send(msg);
  res.json(info);
}

module.exports = sendEmail