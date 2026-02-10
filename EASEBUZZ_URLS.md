# Easebuzz Webhook & Callback URLs

## For Local Development (Testing)
```
Success URL: http://localhost:3002/payment/success
Failure URL: http://localhost:3002/payment/failed
Webhook URL: http://localhost:3002/api/payment/webhook
```

## For Production (After Netlify Deployment)
Replace `your-site-name` with your actual Netlify site name

```
Success URL: https://your-site-name.netlify.app/payment/success
Failure URL: https://your-site-name.netlify.app/payment/failed
Webhook URL: https://your-site-name.netlify.app/api/payment/webhook
```

## How to Configure in Easebuzz Dashboard

1. Login to Easebuzz Merchant Dashboard
2. Go to Settings → API Keys
3. Update the following URLs:
   - **Success URL (SURL)**: Where users are redirected after successful payment
   - **Failure URL (FURL)**: Where users are redirected after failed payment
   - **Webhook URL**: For server-to-server payment notifications

## Important Notes

- Use HTTP for local testing
- Use HTTPS for production (Netlify provides this automatically)
- Webhook URL is optional but recommended for payment verification
- Test with Easebuzz test credentials before going live
- Update these URLs in your `.env` file as well

## Current Configuration in Code

The URLs are dynamically set in `lib/easebuzz.ts`:
- SURL: `${process.env.NEXTAUTH_URL}/payment/success`
- FURL: `${process.env.NEXTAUTH_URL}/payment/failed`

Make sure `NEXTAUTH_URL` in your `.env` matches your deployment URL.
