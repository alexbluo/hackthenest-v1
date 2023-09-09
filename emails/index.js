// run batch email sends from here
// max 500 per batch
const dotenv = require("dotenv");
const { ServerClient } = require("postmark");

dotenv.config();

const emails = [
  "hello@hackthenest.org"
];

const client = new ServerClient(process.env.POSTMARK_API_TOKEN);

// edit other routes to include name
client.sendEmailBatchWithTemplates(
  emails.map((email) => {
    return {
      From: "hello@hackthenest.org",
      To: email,
      TemplateAlias: "twoWeeks",
      TemplateModel: {
        email,
      },
      MessageStream: "outbound",
    };
  })
);
