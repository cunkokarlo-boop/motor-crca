# STANJE: motor-crca

Stanje: 21.11.2026., 15:08

## Što je ovo
Pregled tržišta za zamjenski motor **3.0 TDI CRCA** (180 kW / 245 KS) za Audi Q7 4L 2012. Na jednom cilindru je 0 bara kompresije, a ostatak motora je navodno ispravan. Stranica ide ljudima s kojima Karlo želi suradnju, pa mora izgledati ozbiljno.

## Gdje je objavljeno (sve tri lokacije imaju isti index.html)
| Mjesto | Adresa | Napomena |
|---|---|---|
| Netlify (glavna za dijeljenje) | https://motor-crca.netlify.app | Javna. Objava ručno, preko Netlify Drop (projekt `motor-crca`). NIJE povezan s GitHubom. |
| GitHub Pages | https://cunkokarlo-boop.github.io/motor-crca/ | Javni repo `cunkokarlo-boop/motor-crca`, grana `main`. Karlo ne želi „cunkokarlo” u adresi, zato je Netlify glavni. |
| Claude artifact | https://claude.ai/artifact/4MnrBwjh9tXXphBbimt6aV | Slug `1b328bd7-ef59-4355-9a38-d3b28cf6d822`. |

**Izvor istine:** `index.html` u ovom repozitoriju (`main`). Nakon svake izmjene osvježiti i Netlify (Drop) i artifact, inače se verzije razilaze.

## Šifra
`0000`, provjera na klijentu (samo skriva prikaz, nije prava zaštita). Repo je javan, pa su podaci u izvornom kodu vidljivi; Karlo je to prihvatio.

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
4. Poruke prodavačima (DE/CZ/PL/SRB) su ponuđene, ali nisu napisane.
5. Neprovjereno: Index oglasi (zapelo na kolačićima), Avto.net (pretraga dijelova ne radi), Hasznaltauto, ProxyParts (Cloudflare provjera, treba Karlov klik).
6. Ideja: povezati Netlify s GitHub repoom radi automatske objave (sada ručno, Drop).

## Napomene za rad
- Udaljenosti su okvirne, cestom od Kostanjevca. Tečaj: 1 € = 4,23 PLN, 24,3 CZK, 1,956 KM.
- Jezik stranice: čisti hrvatski. Nije ponuda Flash Metala. U zaglavlju (gore lijevo na crtežu) diskretni natpis „Powered by Komadar” sa znakom (Karlo 21.11.2026. „Može Powered by Komadar”).
- `gh` token u sesiji nije radio. Repo je napravljen kroz preglednik, a push ide preko session git proxyja.
