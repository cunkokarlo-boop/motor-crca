# Zaštita lozinkom (varijanta 5B)

- **Repo mora biti privatan** prije prvog pusha ove grane: `izvor/index.html` je čitljiv.
- Uređuje se samo `izvor/index.html` (i slike u `izvor/`).
- Zaključana stranica nastaje u `objava/` (nije u gitu):
  - lokalno: dvoklik na `zakljucaj.cmd` (lozinka se upisuje skriveno, nigdje se ne sprema);
  - Cloudflare Pages: build naredba `node alati/zakljucaj.mjs`, izlazna mapa `objava`, tajna varijabla `CRCA_LOZINKA` (upisuje Karlo u Cloudflare sučelju).
- Šifriranje: AES-256-GCM, ključ iz lozinke PBKDF2-SHA256 (600.000 krugova). Lozinka od barem 10 znakova. Zaboravljena lozinka se ne može vratiti, samo nova objava s novom lozinkom.
- Naslov, opis i slika za pregled linka ostaju vidljivi bez lozinke; ponude, cijene i kontakti ne.
