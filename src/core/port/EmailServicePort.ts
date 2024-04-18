export interface EmailServicePort {
    sendEmail(email: string, subject: string, message: string): Promise<void>
}