import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { type, name, email, subject, message, formationDetails } = req.body;

  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    console.error("Missing SMTP credentials in .env");
    return res.status(500).json({ error: "Configuration email manquante côté serveur." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    let htmlContent = '';

    if (type === 'contact') {
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2563EB; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Nouvelle Demande de Contact</h2>
            <p style="margin: 5px 0 0; opacity: 0.8;">SuccesInfo - Formulaire de Contact</p>
          </div>
          <div style="padding: 30px; background-color: #f9fafb;">
            <p><strong>Nom Complet :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Sujet :</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: white; border-left: 4px solid #2563EB; border-radius: 4px;">
              <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background-color: #1e293b; color: #94a3b8; padding: 15px; text-align: center; font-size: 12px;">
            Cet e-mail a été envoyé automatiquement depuis votre site web SuccesInfo.
          </div>
        </div>
      `;
    } else if (type === 'inscription') {
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #f97316; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Nouvelle Inscription à une Formation</h2>
            <p style="margin: 5px 0 0; opacity: 0.8;">SuccesInfo - Espace Formation</p>
          </div>
          <div style="padding: 30px; background-color: #f9fafb;">
            <p><strong>Candidat :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Formation désirée :</strong> ${subject}</p>
            
            <h3 style="color: #333; margin-top: 25px; border-bottom: 2px solid #e2e8f0; padding-bottom: 5px;">Informations supplémentaires</h3>
            <div style="margin-top: 15px; padding: 15px; background-color: white; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <ul style="margin: 0; padding-left: 20px; color: #475569;">
                <li><strong>Numéro de téléphone :</strong> ${formationDetails?.phone || 'Non renseigné'}</li>
              </ul>
              <div style="margin-top: 15px;">
                <strong>Message / Attentes :</strong>
                <p style="margin: 5px 0 0; color: #374151; white-space: pre-wrap;">${message || 'Aucun message.'}</p>
              </div>
            </div>
          </div>
          <div style="background-color: #1e293b; color: #94a3b8; padding: 15px; text-align: center; font-size: 12px;">
            Cet e-mail a été envoyé automatiquement depuis l'application SuccesInfo.
          </div>
        </div>
      `;
    }

    const mailOptions = {
      from: `"SuccesInfo" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: type === 'inscription' ? `🚀 Inscription : ${subject} - ${name}` : `✉️ Contact : ${subject} - ${name}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return res.status(500).json({ error: "Erreur serveur lors de l'envoi." });
  }
}
