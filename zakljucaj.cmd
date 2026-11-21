@echo off
rem Zakljucava izvor\index.html u objava\index.html. Lozinka se upisuje skriveno i nigdje se ne sprema.
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -Command "$a=Read-Host 'Lozinka (barem 4 znaka)' -AsSecureString; $b=Read-Host 'Ponovi lozinku' -AsSecureString; $p1=[Runtime.InteropServices.Marshal]::PtrToStringBSTR([Runtime.InteropServices.Marshal]::SecureStringToBSTR($a)); $p2=[Runtime.InteropServices.Marshal]::PtrToStringBSTR([Runtime.InteropServices.Marshal]::SecureStringToBSTR($b)); if($p1 -ne $p2){Write-Host 'Lozinke se ne slazu.'; exit 1}; $env:CRCA_LOZINKA=$p1; node alati/zakljucaj.mjs; $code=$LASTEXITCODE; $env:CRCA_LOZINKA=''; exit $code"
if errorlevel 1 (echo Nije zakljucano.) else (echo Otvori objava\index.html za probu.)
pause
