# CONTACT FORM SETUP

## Gmail Configuration

To set up the contact form to send emails to **mohdsaqibkhan7008@gmail.com**, follow these steps:

### 1. Enable 2-Step Verification
1. Go to [Google Account](https://myaccount.google.com)
2. Select **Security** from the left menu
3. Find "2-Step Verification" and enable it if not already done

### 2. Generate App Password
1. Go back to **Security** (in myaccount.google.com)
2. Scroll to "App passwords" at the bottom
3. Select **Mail** and **Windows Computer** (or your device)
4. Google will generate a 16-character app password
5. Copy this password

### 3. Add to `.env.local`
Create a file named `.env.local` in the project root and add:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=mohdsaqibkhan7008@gmail.com
SMTP_PASS=<your 16-character app password>
CONTACT_FROM=mohdsaqibkhan7008@gmail.com
CONTACT_TO=mohdsaqibkhan7008@gmail.com
```

Replace `<your 16-character app password>` with the actual app password generated above.

### 4. Restart Dev Server
```bash
npm run dev
```

### 5. Test the Contact Form
- Visit the portfolio
- Scroll to "Let's Connect" section
- Fill the form and submit
- Check mohdsaqibkhan7008@gmail.com for the email

---

## Notes
- The app password is safe to use—it's specific to your Mail app
- The contact form will accept emails from any email provider
- Anyone can submit a form; it will be sent to your Gmail inbox
