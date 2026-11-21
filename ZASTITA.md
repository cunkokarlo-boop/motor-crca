# Lozinka na stranici (varijanta 5B, pojednostavljeno)

Karlo 21.11.2026.: podaci nisu osjetljivi, lozinka je za red. Repo ostaje JAVAN.

- **Važno:** `izvor/index.html` je čitljiv u javnom repou. Tko ima adresu repoa, vidi sve i bez lozinke. Lozinka zaustavlja samo one koji imaju link na stranicu.
- Uređuje se samo `izvor/index.html` (i slike u `izvor/`).
- Zaključana stranica nastaje u `objava/` (nije u gitu):
  - lokalno: dvoklik na `zakljucaj.cmd` (lozinka se upisuje skriveno, nigdje se ne sprema);
  - Cloudflare Pages: build naredba `node alati/zakljucaj.mjs`, izlazna mapa `objava`, tajna varijabla `CRCA_LOZINKA` (upisuje je koordinator ili Karlo u Cloudflare sučelju).
- Lozinka od barem 4 znaka; kraća od 10 dobije upozorenje. Šifriranje: AES-256-GCM, PBKDF2-SHA256 (600.000 krugova).
- Naslov, opis i slika za pregled linka vidljivi su bez lozinke.
