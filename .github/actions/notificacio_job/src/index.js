const express = require("express");
const core = require("@actions/core");
// const { google } = require("googleapis");

const servicioEmail = require("nodemailer");
const app = express();
const port = 3500;

require("dotenv").config();

async function run() {
    try {       
        const assumpte_email = "Resultat del Workflow executat";
        const cos_email =
            "S'ha realitzat un push en la branca main que ha provocat l'execució del workflow nom_repositori_workflow amb els següents resultats:\n";
        const linter_job = core.getInput("linter_job");
        const cypress_job = core.getInput("cypress_job");
        const badge_job = core.getInput("badge_job");
        const deploy_job = core.getInput("deploy_job");
        const MAIL_USERNAME = core.getInput("MAIL_USERNAME");
        const MAIL_PASSWORD = core.getInput("MAIL_PASSWORD");
        const OAUTH_CLIENT_ID = core.getInput("OAUTH_CLIENT_ID");
        const OAUTH_CLIENT_SECRET = core.getInput("OAUTH_CLIENT_SECRET");
        const OAUTH_REFRESH_TOKEN = core.getInput("OAUTH_REFRESH_TOKEN"); 
        
        // const OAuth2 = google.auth.OAuth2; 
        // const oauth2Client = new OAuth2( 
        //     OAUTH_CLIENT_ID, 
        //     OAUTH_CLIENT_SECRET, 
        //     "https://developers.google.com/oauthplayground" );

        // oauth2Client.setCredentials({ refreshToken: OAUTH_REFRESH_TOKEN }); 
    
        // const accessToken = await oauth2Client.getAccessToken();

        const transporter = servicioEmail.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: MAIL_PASSWORD,
                pass: MAIL_PASSWORD,
                clientId: OAUTH_CLIENT_ID,
                clientSecret: OAUTH_CLIENT_SECRET,
                refreshToken: OAUTH_REFRESH_TOKEN                             
            },
        });

        const email_options = {
            from: 'kikevalero284@gmail.com',
            to: 'kikevalero284@gmail.com',
            subject: assumpte_email,
            text: cos_email + `\n
            - Linter job --> ${linter_job}\n,
            - Cypress job --> ${cypress_job}\n,
            - Badge job --> ${badge_job}\n,
            - Deploy job --> ${deploy_job}\n`,
        };

        transporter.sendMail(email_options, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
                process.exit(0);
            }
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();

app.listen(port, () => {
    console.log(`Nodemailer escoltant al port ${port}`);
});
