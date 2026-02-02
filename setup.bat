@echo off
echo Setting up SPL Website...

echo.
echo 1. Installing dependencies...
call npm install

echo.
echo 2. Setting up database...
call npx prisma generate
call npx prisma db push

echo.
echo 3. Creating .env file...
if not exist .env (
    copy .env.example .env
    echo Please update .env file with your configuration
)

echo.
echo 4. Setup complete!
echo.
echo To start development server:
echo npm run dev
echo.
echo To access database studio:
echo npm run db:studio
echo.
pause