@echo off
title Pangasinan Heritage Mobile App
echo ========================================================
echo   Pangasinan Heritage Mobile App (Expo Go)
echo ========================================================
echo.
echo Opening QR Code viewer in browser...
start "" "%~dp0mobile\qr.html"
echo.
echo Starting Expo server...
cd /d "%~dp0mobile"
npx expo start --offline
pause