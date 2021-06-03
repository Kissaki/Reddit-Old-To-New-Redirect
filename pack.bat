@echo off
"C:\Program Files\7-Zip\7z.exe" a reddot-old-to-new-redirect.zip manifest.json background_script.js
IF ERRORLEVEL 1 (
  pause
  EXIT /B 1
)
