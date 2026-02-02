# SPL (Saroj Premier League) Website

Official website for Saroj Premier League Under-19 Cricket Tournament built with Next.js 14.

## Features

### Public Features
- **Home Page** with tournament highlights
- **Registration System** (Team & Individual)
- **Tournament Information** (Format, Rules, Schedule)
- **Payment Integration** with Razorpay
- **Responsive Design** (Mobile + Desktop)

### Admin Features
- **Dashboard** with registration statistics
- **Team Management** (Approve/Reject)
- **Player Document Verification**
- **Fixture Creation & Management**
- **Result Updates**
- **Export Reports** (Excel/PDF)

### Coordinator Features
- **District Team Management**
- **Document Verification**
- **Match Result Updates**

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Database**: Prisma with SQLite (easily switchable to PostgreSQL)
- **Authentication**: NextAuth.js
- **Payment**: Razorpay
- **File Upload**: Built-in support for document uploads
- **Email/SMS**: Integration ready

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your configuration:
   - Database URL
   - NextAuth secret
   - Razorpay keys
   - SMTP settings

3. **Setup Database**
   ```bash
   npx prisma db push
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
spl-website/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin panel pages
│   ├── coordinator/       # Coordinator panel pages
│   ├── register/          # Registration pages
│   └── payment/           # Payment pages
├── components/            # Reusable components
├── lib/                   # Utility functions
├── prisma/               # Database schema
└── types/                # TypeScript types
```

## Registration Flow

### Team Registration
1. Team details form
2. Player information (up to 15 players)
3. Payment (₹11,000)
4. Admin approval
5. Confirmation & Registration ID

### Individual Registration
1. Personal details form
2. Playing preferences
3. Payment (₹1,000)
4. District coordinator assigns to team
5. Confirmation

## Database Schema

- **Users**: Authentication & role management
- **Teams**: Team information & status
- **Players**: Player details & documents
- **Payments**: Payment tracking
- **Matches**: Fixture & results
- **Announcements**: News & updates

## Admin Panel Features

- **Dashboard**: Overview of registrations, payments, teams
- **Team Management**: Approve/reject team registrations
- **Player Verification**: Document verification system
- **Fixture Management**: Create and manage tournament fixtures
- **Results**: Update match results
- **Reports**: Export team lists, player data, payment reports
- **Notifications**: Send SMS/Email to teams and players

## Coordinator Panel Features

- **District Overview**: View all teams in assigned district
- **Document Verification**: Verify player documents
- **Team Formation**: Create teams from individual players
- **Match Management**: Update results for district matches

## Payment Integration

- **Razorpay Integration**: Secure online payments
- **Automatic Confirmation**: Payment success triggers registration confirmation
- **Receipt Generation**: Automatic receipt via email
- **Payment Tracking**: Admin can track all payments

## Security Features

- **Role-based Access Control**: Admin, Coordinator, Public roles
- **Secure Authentication**: NextAuth.js with encrypted sessions
- **Document Security**: Secure file upload and storage
- **Data Validation**: Server-side validation for all forms

## Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Setup Production Database**
   Update `DATABASE_URL` in `.env` for production database

3. **Deploy to your preferred platform**
   - Vercel (recommended for Next.js)
   - Netlify
   - AWS
   - DigitalOcean

## Environment Variables

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Razorpay
RAZORPAY_KEY_ID="your-razorpay-key-id"
RAZORPAY_KEY_SECRET="your-razorpay-key-secret"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# SMS (Optional)
SMS_API_KEY="your-sms-api-key"
```

## Development Timeline

- **Day 1-2**: Project setup & database design
- **Day 3-5**: Frontend development (public pages)
- **Day 6-8**: Registration system & payment integration
- **Day 9-11**: Admin & coordinator panels
- **Day 12-13**: Testing & bug fixes
- **Day 14-15**: Deployment & documentation

## Support

For technical support or questions, contact the development team.

## License

© 2024 Saroj Educational Group. All rights reserved.