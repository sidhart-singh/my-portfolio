const mailSender = require("../config/mailSender");
const { contactMeRes } = require("../mail/templates/ContactMeRes");
const { contactMeEmail } = require("../mail/templates/ContactMeEmail");

exports.contactMeController = async (req, res) => {
  const { email, name, title, message } = req.body;

  console.log(req.body);
  
  try {
    const emailToMe = await mailSender(
      process.env.MAIL_USER,
      "Contact Mail from Portfolio",
      contactMeEmail(
        email,
        name,
        title,
        message,
      )
    );
    console.log("Email to me ", emailToMe);

    const emailRes = await mailSender(
      email,
      "Your Data is sent successfully",
      contactMeRes(email, name, message)
    );
    console.log("Email Res ", emailRes);

    return res.json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    console.log("Error", error);
    console.log("Error message :", error.message);
    return res.json({
      success: false,
      message: "Something went wrong...",
    });
  }
};
