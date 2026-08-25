# mymun Conference Date Extract (Visa-Free, Max 3 Days)

- Source file: /Users/xdfke/Documents/CICMUN-CALENDAR/output/mymun_calendar_eu_as_dates.md
- Source page: https://mymun.com/conferences/calendar?a=eu,as&s=fe&r=desc
- Extraction date: 2026-08-25
- Processed date: 2026-08-25
- Passport origin for visa review: Venezuela
- Effective filters kept from the source: Europe + Asia (`a=eu,as`), in-person only, future conferences, sort by price descending (`s=fe&r=desc`).
- Export method: full filtered conference list API pull for review: `https://mymun.com/api/conferences?filter_time=future&sb=fe&order=desc&filter_cont=eu&filter_cont=as&online_conf=false&page=1&per_page=500`
- Note preserved from source: The calendar view loads month-by-month and its calendar data request drops the sort params. This export uses the matching list endpoint so all filtered conference date ranges are captured in one file. A source-side MUN relevance filter then keeps only entries whose slug, title, or name indicates a MUN or United Nations simulation.

## Summary

- Base cleaned conferences: 44
- Filtered conferences: 25
- Removed by strict filters: 19
- Removed entries over 3 days: 12
- Removed entries not visa-free for Venezuelan passport: 7
- Countries/territories represented after filtering: 11

## Filter Rules

- Kept only entries not marked as cancelled/canceled in the title.
- Kept only conferences with inclusive duration of 3 days or less.
- Kept only destinations marked as visa-free for a Venezuelan passport.
- Preserved application status from the source; closed statuses are kept because some future events may reopen later.

## Visa-Free Destinations

- 🇦🇹 Austria | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇧🇪 Belgium | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇨🇿 Czechia | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇩🇰 Denmark | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇫🇷 France | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇩🇪 Germany | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇮🇹 Italy | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇲🇹 Malta | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇵🇱 Poland | 14 events | visa: Visa-free | stay: 90 days within 180 days
- 🇸🇰 Slovakia | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇸🇮 Slovenia | 1 event | visa: Visa-free | stay: 90 days within 180 days

## Removed By Strict Filters

- 2026-09-17 to 2026-09-20 | CoMUN 2026 | Warsaw, Poland | removed: duration-over-3-days | [page](https://mymun.com/conferences/comun-2026)
- 2026-09-24 to 2026-09-27 | HamMUN 2026 | Hamburg, Germany | removed: duration-over-3-days | [page](https://mymun.com/conferences/hammun-2026)
- 2026-09-24 to 2026-09-27 | JASMUN 2026 | Warsaw, Poland | removed: duration-over-3-days | [page](https://mymun.com/conferences/jasmun-2026)
- 2026-09-26 to 2026-09-27 | Mahapanchayat MUN - Ekklesia 2026 | Ghaziabad, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/mahapanchayat-mun-ekklesia-2026)
- 2026-10-01 to 2026-10-04 | PPGMUN  2026 | Varaždin, Croatia | removed: duration-over-3-days | [page](https://mymun.com/conferences/ppgmun-2026)
- 2026-10-15 to 2026-10-18 | AcadeMUN 2026 | Basel, Switzerland | removed: duration-over-3-days | [page](https://mymun.com/conferences/academun-2026)
- 2026-10-16 to 2026-10-19 | KCSMUN 2026 | Budapest, Hungary | removed: duration-over-3-days | [page](https://mymun.com/conferences/kcsmun-2026)
- 2026-10-30 to 2026-11-01 | OxIMUN 2026 | Oxford, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/oximun-2026)
- 2026-11-12 to 2026-11-15 | WawMUN 2026 | Warsaw, Poland | removed: duration-over-3-days | [page](https://mymun.com/conferences/wawmun-2026)
- 2026-11-22 to 2026-11-22 | SIMUN Samarkand 2026 | Samarkand, Uzbekistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/simun-samarkand-2026)
- 2026-12-03 to 2026-12-06 | BCMUN 2026 | Belconti Resort Hotel, Antalya, Türkiye | removed: duration-over-3-days | [page](https://mymun.com/conferences/bcmun-2026)
- 2026-12-03 to 2026-12-06 | SGMUN 2026 | St.Gallen, Switzerland | removed: duration-over-3-days | [page](https://mymun.com/conferences/sgmun-2026)
- 2026-12-10 to 2026-12-13 | NAPLESMUN 2026 | NAPLES, Italy | removed: duration-over-3-days | [page](https://mymun.com/conferences/naplesmun-2026)
- 2026-12-18 to 2026-12-19 | the UMUN 2026 | Jodhpurs, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/the-umun-2026)
- 2027-01-16 to 2027-01-17 | SEAMUN I 2027 | Bangkok, Thailand | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/seamun-i-2027)
- 2027-02-05 to 2027-02-08 | DUMUN 2027 | Prague, Czechia | removed: duration-over-3-days | [page](https://mymun.com/conferences/dumun-2027)
- 2027-02-23 to 2027-02-25 | WEMUN KOBE 2027 | Kobe, Japan | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/wemun-kobe-2027)
- 2027-03-11 to 2027-03-14 | MainMUN 2027 | Frankfurt am Main, Germany | removed: duration-over-3-days | [page](https://mymun.com/conferences/mainmun-2027)
- 2027-04-28 to 2027-04-30 | MUN LONDON 2027 | London, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/mun-london-2027)

## Conferences By Start Month

### 2026-09

- 2026-09-02 to 2026-09-04 | TriMUN 2026 | Gdynia, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł290.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/trimun-2026)
- 2026-09-04 to 2026-09-06 | TEVMUN  2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł210.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/tevmun-2026)
- 2026-09-09 to 2026-09-11 | PlocMUN  2026 | Płock, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł220.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/plocmun-2026)
- 2026-09-11 to 2026-09-13 | HoffMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł220.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/hoffmun-2026)
- 2026-09-24 to 2026-09-26 | IBGMUN 2026 | Ikast, Denmark | destination: 🇩🇰 Denmark | duration: 3 days | price: kr100.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ibgmun-2026)

### 2026-10

- 2026-10-02 to 2026-10-04 | VisMUN 2026 | Kraków, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł170.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/vismun-2026)
- 2026-10-07 to 2026-10-09 | MUN MALTA 2026 | La Valletta, Malta | destination: 🇲🇹 Malta | duration: 3 days | price: €189.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-malta-2026)
- 2026-10-16 to 2026-10-18 | TARMUN  2026 | Tarnów, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł139.90 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/tarmun-2026)
- 2026-10-19 to 2026-10-21 | MUN VIENNA 2026 | Vienna, Austria | destination: 🇦🇹 Austria | duration: 3 days | price: €204.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-vienna-2026)
- 2026-10-23 to 2026-10-25 | YESMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł180.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/yesmun-2026)

### 2026-11

- 2026-11-07 to 2026-11-08 | OVAMUN 2026 | Ostrava, Czechia | destination: 🇨🇿 Czechia | duration: 2 days | price: Kč900.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ovamun-2026)
- 2026-11-13 to 2026-11-15 | KAMUN: The Black Forest Summit 2026 | Karlsruhe, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €85.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kamun-the-black-forest-summit-2026)
- 2026-11-19 to 2026-11-21 | StetiMUN 2026 | Szczecin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł250.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/stetimun-2026)
- 2026-11-20 to 2026-11-22 | GDNMUN 2026 | Gdańsk, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł249.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/gdnmun-2026)
- 2026-11-20 to 2026-11-22 | IASMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł250.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/iasmun-2026)
- 2026-11-20 to 2026-11-22 | MUNLawS 2026 | Ljubljana, Slovenia | destination: 🇸🇮 Slovenia | duration: 3 days | price: €95.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munlaws-2026)
- 2026-11-24 to 2026-11-26 | MUN BERLIN 2026 | Berlin, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €203.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-berlin-2026)
- 2026-11-27 to 2026-11-29 | BratMUN 2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €80.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bratmun-2026)

### 2026-12

- 2026-12-04 to 2026-12-06 | UNIMUN 2026 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł167.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/unimun-2026)
- 2026-12-11 to 2026-12-13 | KOCHMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł230.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kochmun-2026)
- 2026-12-11 to 2026-12-13 | MarieMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł150.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mariemun-2026)

### 2027-02

- 2027-02-10 to 2027-02-12 | MUN BRUXELLES 2027 | Bruxelles, Belgium | destination: 🇧🇪 Belgium | duration: 3 days | price: €189.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-bruxelles-2027)

### 2027-03

- 2027-03-02 to 2027-03-04 | MUN ROME 2027 | Rome, Italy | destination: 🇮🇹 Italy | duration: 3 days | price: €189.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-rome-2027)
- 2027-03-24 to 2027-03-26 | MUN PARIS 2027 | Paris, France | destination: 🇫🇷 France | duration: 3 days | price: €204.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-paris-2027)

### 2027-11

- 2027-11-26 to 2027-11-28 | PolHistMUN 2027 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł199.99 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/polhistmun-2026)
