---
layout: "layouts/article.njk"
title: "Tabi Onboarding Guide"
collection: "guide"
breadcrumb:
  - ["/guides/", "Guides"]
  - ["/guides/onboarding/", "Onboarding"]
---
# Tabi Onboarding Guide

These steps outline the process for getting a new member onboarded in to the [Tabi Services](/login/).

## 1. Email
Your Tabi email address is the key to all other Tabi services.

- Pick a name for the email (eg. `john@tabi.gallery`).
- Provide an admin with this name, and your existing personal email address.
- Once set up by the admin, a setup link is sent to the provided email address.
- Follow the link to set a password for the new email account.

The email can be accessed at [webmail.migadu.com](https://webmail.migadu.com).

## 2. Vaultwarden
- Get a pencil and paper.
- Follow [Demingfactor's Master Password Guide](https://demingfactor.com/blog/password-generator) to generate a master password.
- Write down the password on the paper, and store it somewhere safe where it will not be lost.
- Head to [Tabi Vaultwarden](https://vault.tabi.gallery/#/signup) and create an account, using your Tabi email address.
  - A verification link will be sent to your Tabi inbox.
- Once verified, set your master password to that which you wrote down. It will be good to memorise this password.
- An admin will then add you the Tabi Core vault.
  - An invitation link will be sent to your Tabi inbox.
- After invitation is accepted, the admin will need to validate the account.

### Extension
- Install the Bitwarden extension in Firefox.
- Once installed, click the Bitwarden icon.
- Beneath the sign in form, click on `Accessing: bitwarden.com`.
  - Select `self-hosted`.
  - Enter the URL `https://vault.tabi.gallery` and press save.
- Sign in with your Tabi email and master password.

[Link to Bitwarden extension](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/)

### App
- Install the Bitwarden app on iOS or Android.
- Open the app.
- Beneath the sign in form, click on `Accessing: bitwarden.com`.
  - Select `self-hosted`.
  - Enter the URL `https://vault.tabi.gallery` and press save.
- Sign in with your Tabi email and master password.

[Link to Bitwarden app](https://bitwarden.com/download/#mobile-applications)

## 3. Email (Part 2)
Now it is time to set a stronger password for the Tabi email, using Vaultwarden. Once a strong password is set, the email can be set up in
various apps.

### Use Vaultwarden to set strong email password
- Visit the [Migadu Webmail reset password page](https://webmail.migadu.com/#/settings/change-password)
- Use the Vaultwarden extension to create a new password.
  - Make sure to save it in your personal vault.
  - Double check that the password saved correctly.
- Sign out of the webmail and try signing back in.

### Thunderbird
For members that would like to access their emails from an app, Thunderbird is a great option.
It works on PC and Android.

[Link to Thunderbird](https://thunderbird.net)

### Apple Mail
For iOS users, Migadu provides a guide for setting up the email.

[Link to Migadu Apple Mail setup guide](https://www.migadu.com/guides/apple_mail_ios/)

## 4. Nextcloud
- Admin will send an invitation to the Tabi Nextcloud.
- Follow link in Tabi email to setup Nextcloud.
- Use Vaultwarden to create a login.
- Verify that you can access the shared files correctly.
  - Shared files can be accessed in `Files > Shared > Tabi Core`.

## 5. Loomio
- Admin will send an invitation to the Loomio to your Tabi email.
- Follow link in Tabi email to sign in.
- Use your Tabi email for future logins, Loomio will always send a login link.