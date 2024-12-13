const core = require("@actions/core");
const github = require("@actions/github");
const servicioEmail = require("nodemailer");
require("dotenv").config();

async function run() {
    try {
        const destinatari_email = core.getInput("destinatari_email"); 
        const assumpte_email = "Resultat del Workflow executat";
        const cos_email = "S'ha realitzat un push en la branca main que ha provocat l'execució del workflow nom_repositori_workflow amb els següents resultats:\n";
        const linter_job = core.getInput("linter_job");
        const cypress_job = core.getInput("cypress_job");
        const badge_job = core.getInput("badge_job");
        const deploy_job = core.getInput("deploy_job");
        const remitent_email = process.env.EMAIL_USER;
        const remitent_password = process.env.EMAIL_PASSWORD;

        const transporter = servicioEmail.createTransport({
            service: "gmail",
            auth: {
                user: remitent_email,
                pass: remitent_password,
            },
        });

        const email_options = {
            from: remitent_email,
            to: destinatari_email,
            subject: assumpte_email,
            text: cos_email + `\n
            - Linter job --> ${linter_job}\n,
            - Cypress job --> ${cypress_job}\n,
            - Badge job --> ${badge_job}\n,
            - Deploy job --> ${deploy_job}\n`            
        }

        transporter.sendMail(email_options, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();