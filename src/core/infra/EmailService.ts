import { EmailServicePort } from "../port/EmailServicePort";

/**
 * @todo chamar microserviço para enviar email
 */
export class EmailService implements EmailServicePort {
    async sendEmail(email: string, subject: string, message: string) {
        console.log(`Email sent to ${email} with subject ${subject} and message ${message}`)
    }
}