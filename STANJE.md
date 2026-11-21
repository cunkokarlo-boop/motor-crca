# STANJE: motor-crca

Stanje: 21.11.2026., 16:28

## Što je ovo
Pregled tržišta za zamjenski motor **3.0 TDI CRCA** (180 kW / 245 KS) za Audi Q7 4L 2012. Na jednom cilindru je 0 bara kompresije, a ostatak motora je navodno ispravan. Stranica ide ljudima s kojima Karlo želi suradnju, pa mora izgledati ozbiljno.

## Gdje je objavljeno
| Mjesto | Adresa | Napomena |
|---|---|---|
| **Cloudflare Pages (glavna, od 21.11.2026.)** | https://motor-crca.pages.dev | Push na `main` objavljuje sam (build `node alati/zakljucaj.mjs`, izlaz `objava`). Lozinka je tajna varijabla `CRCA_LOZINKA` u Cloudflareu (nije u repou). 0 kredita. |
| GitHub Pages | https://cunkokarlo-boop.github.io/motor-crca/ | Samo preusmjerava na motor-crca.pages.dev (korijenski `index.html`). |
| Netlify (stara kopija) | https://motor-crca.netlify.app | Stara verzija sa šifrom 0000. Briše se nakon Karlove potvrde. |
| Claude artifact (stara kopija) | https://claude.ai/artifact/4MnrBwjh9tXXphBbimt6aV | Stara verzija. Povlači se nakon Karlove potvrde. |

**Izvor istine:** `izvor/index.html` (i slike u `izvor/`). Uputa: `ZASTITA.md`. Lokalna proba: `zakljucaj.cmd`.

## Lozinka
Stranica je šifrirana lozinkom (AES-GCM) koju Karlo dijeli maloj grupi. Karlo 21.11.2026.: podaci nisu osjetljivi, lozinka je za red. Repo ostaje javan, pa je čitljiv izvor vidljiv na GitHubu.

## Izgled (21.11.2026.)
Komadar crvena #E31E28 i font Barlow, „Powered by Komadar” gore lijevo na crtežu, pregled linka (og.png, 1200×630) i ikona, gumb „Spremi kao PDF” (2 stranice A4).

## Sadržaj stranice
- **Zaglavlje:** tehnički crtež V6 (provrt 83, hod 91,4, 90°) i četiri brojke: broj motora s cijenom, najniža cijena, najbolja kupnja, broj država.
- **Tabovi** (rute na hashu): `#pregled`, `#motori`, `#dijelovi`, `#donori`, `#kompatibilnost`, `#napomene`.
- **Pregled:** tri preporuke, grafikon cijene prema kilometraži s „najboljom zonom” i trake za najboljih 10.
- **Motori:** filteri (poredak: najbolja kupnja, cijena, km, udaljenost; vrsta; država; pretraga).
- **Dijelovi:** izdvojen okvir za prodavača iz Pisarovine (max39, ~35 km; kontakt na stranici), 24 dijela s cijenama, pa ostali izvori.
- **Podaci:** polje `D` u skripti, jedan redak po ponudi: `[vrsta, naziv, prodavač, država, cijena €, tekst cijene, km, udaljenost, jamstvo, napomena, url, rang]`. Rang 1–46 su motori, 101+ dijelovi, 201+ auti donori.

## Ključni nalazi (za odluku)
- **Ventil ili glava:** glava CRCA iz Pisarovine, 300 €.
- **Klip:** remontirani motor Kulasek, Poljska (Otomoto), ~3.770 € s dostavom, 12 mj. jamstva. Druga opcija: SHI Motoren, 41.000 km, 4.400 € uz povrat starog motora, 12 mj. jamstva. Treća: Solin, 87.000 km, 4.500 €.
- **Prvi korak prije kupnje:** test curenja tlaka (zrak na usisu ili ispuhu znači ventil, kroz otvor za ulje znači klip).

## Otvoreno / sljedeći koraci
1. Karlo napravi test curenja tlaka i javi rezultat. O tome ovisi kupuje li se glava ili motor.
2. Nazvati Pisarovinu (kontakt na stranici, tab Dijelovi): ima li blok, klipove i radilicu te zašto je motor rastavljen.
3. Kod top 3 ponude provjeriti kod na bloku (CRCA), kilometražu, uključenu opremu i dostavu do HR.
4. Nacrti poruka prodavačima za oba ishoda testa su na grani `powered-by-komadar` (`nacrti-poruka/`, nije u mainu). Šalju se samo na Karlovu riječ.
5. Neprovjereno: Index oglasi (zapelo na kolačićima), Avto.net (pretraga dijelova ne radi), Hasznaltauto, ProxyParts (Cloudflare provjera, treba Karlov klik).
6. Nakon Karlove potvrde obrisati Netlify kopiju i povući artifact.

## Napomene za rad
- Udaljenosti su okvirne, cestom od Kostanjevca. Tečaj: 1 € = 4,23 PLN, 24,3 CZK, 1,956 KM.
- Jezik stranice: čisti hrvatski. Nije ponuda Flash Metala. U zaglavlju (gore lijevo na crtežu) diskretni natpis „Powered by Komadar” sa znakom (Karlo 21.11.2026. „Može Powered by Komadar”).
- `gh` token u sesiji nije radio. Repo je napravljen kroz preglednik, a push ide preko session git proxyja.
