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
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f1f5f9; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
            <div style="background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em;">Nouveau Message</h1>
              <p style="color: #BFDBFE; margin: 8px 0 0; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em;">SuccesInfo Expertise</p>
            </div>
            <div style="padding: 40px;">
              <div style="margin-bottom: 24px;">
                <p style="margin: 0; color: #64748B; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Expéditeur</p>
                <p style="margin: 4px 0 0; color: #1E293B; font-size: 18px; font-weight: 600;">${name}</p>
                <p style="margin: 0; color: #3B82F6; font-size: 14px; font-weight: 500;">${email}</p>
              </div>
              <div style="margin-bottom: 32px;">
                <p style="margin: 0; color: #64748B; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Sujet</p>
                <div style="margin-top: 4px; padding: 12px 16px; background-color: #EFF6FF; border-left: 4px solid #3B82F6; border-radius: 4px;">
                  <p style="margin: 0; color: #1E3A8A; font-size: 15px; font-weight: 700;">${subject}</p>
                </div>
              </div>
              <div style="margin-bottom: 32px;">
                <p style="margin: 0; color: #64748B; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
                <div style="margin-top: 8px; color: #334155; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
              </div>
              <div style="text-align: center; border-t: 1px solid #F1F5F9; padding-top: 30px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #1E293B; color: #FFFFFF; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; transition: background-color 0.2s;">Répondre par e-mail</a>
              </div>
            </div>
            <div style="background-color: #F8FAFC; border-top: 1px solid #F1F5F9; padding: 20px; text-align: center;">
              <p style="margin: 0; color: #94A3B8; font-size: 12px;">© SuccesInfo - Envoyé avec ❤️ depuis le portail contact.</p>
            </div>
          </div>
        </div>
      `;
    } else if (type === 'inscription') {
      htmlContent = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
            <div style="background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); padding: 35px; text-align: center;">
              <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.2); padding: 10px; border-radius: 12px; margin-bottom: 15px;">
                <span style="font-size: 30px;">🚀</span>
              </div>
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.025em;">Nouvelle Inscription</h1>
              <p style="color: #BFDBFE; margin: 8px 0 0; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em;">SuccesInfo Formation</p>
            </div>
            <div style="padding: 40px;">
              <div style="margin-bottom: 35px;">
                <p style="margin: 0; color: #64748B; font-size: 12px; font-weight: 700; text-transform: uppercase;">Candidat</p>
                <p style="margin: 4px 0 0; color: #1E293B; font-size: 20px; font-weight: 700;">${name}</p>
              </div>
              
              <div style="background-color: #EFF6FF; border-radius: 12px; padding: 25px; margin-bottom: 35px; border: 1px solid #DBEAFE;">
                <p style="margin: 0; color: #1E3A8A; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Formation Demandée</p>
                <div style="color: #1E293B; font-size: 18px; font-weight: 800;">
                   ${subject}
                </div>
              </div>

              <div style="margin-bottom: 30px;">
                <h3 style="color: #334155; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px; margin-bottom: 15px;">Détails de contact</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748B; font-size: 14px; width: 120px;">Email :</td>
                    <td style="padding: 8px 0; color: #1E293B; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748B; font-size: 14px;">Téléphone :</td>
                    <td style="padding: 8px 0; color: #1E293B; font-size: 14px; font-weight: 600;">${formationDetails?.phone || 'Non spécifié'}</td>
                  </tr>
                </table>
              </div>

              <div style="margin-bottom: 30px;">
                <h3 style="color: #334155; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px; margin-bottom: 15px;">Message du candidat</h3>
                <div style="color: #475569; font-size: 15px; line-height: 1.6; font-style: italic;">"${message || 'Aucun message particulier fourni.'}"</div>
              </div>

              <div style="text-align: center; margin-top: 40px;">
                <p style="color: #94A3B8; font-size: 13px; margin-bottom: 15px;">Action requise : Contacter le candidat sous 24h.</p>
                <a href="tel:${formationDetails?.phone}" style="display: inline-block; background-color: #2563EB; color: #FFFFFF; padding: 14px 30px; border-radius: 10px; text-decoration: none; font-weight: 800; font-size: 14px; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);">Appeler le Candidat</a>
              </div>
            </div>
            <div style="background-color: #1E293B; padding: 25px; text-align: center;">
              <p style="margin: 0; color: #64748B; font-size: 12px; margin-bottom: 8px;">SuccesInfo - Centre de Formation Informatique</p>
              <p style="margin: 0; color: #475569; font-size: 11px;">Hahotoé, Togo | +228 98 10 70 15</p>
            </div>
          </div>
        </div>
      `;
    } else if (type === 'newsletter') {
      htmlContent = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
            <div style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); padding: 35px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.025em;">Nouvel Abonné !</h1>
              <p style="color: #D1FAE5; margin: 8px 0 0; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em;">SuccesInfo Newsletter</p>
            </div>
            <div style="padding: 40px; text-align: center;">
              <p style="margin: 0; color: #64748B; font-size: 14px; font-weight: 500; margin-bottom: 10px;">Un nouvel utilisateur souhaite recevoir vos actualités :</p>
              <div style="background-color: #F0FDF4; border: 2px dashed #10B981; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
                <p style="margin: 0; color: #065F46; font-size: 22px; font-weight: 800;">${email}</p>
              </div>
              <p style="color: #475569; font-size: 14px; line-height: 1.6;">Ajoutez cette adresse à votre liste de diffusion pour lui envoyer les prochaines astuces et offres.</p>
              
              <div style="margin-top: 35px; padding-top: 25px; border-top: 1px solid #F1F5F9;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #1E293B; color: #FFFFFF; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 14px;">Envoyer un mail de bienvenue</a>
              </div>
            </div>
            <div style="background-color: #F8FAFC; padding: 20px; text-align: center; border-top: 1px solid #F1F5F9;">
              <p style="margin: 0; color: #94A3B8; font-size: 11px;">© Le Succès Informatique - Gestion d'abonnés.</p>
            </div>
          </div>
        </div>
      `;
    }

    const mailOptions = {
      from: `"SuccesInfo" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: type === 'newsletter' 
        ? ` Nouvel Abonné Newsletter : ${email}` 
        : (type === 'inscription' ? ` Inscription : ${subject} - ${name}` : `Contact : ${subject} - ${name}`),
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return res.status(500).json({ error: "Erreur serveur lors de l'envoi." });
  }
}
