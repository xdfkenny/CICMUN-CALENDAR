# mymun Conference Date Extract (Cleaned)

- Source file: /Users/xdfke/Documents/CICMUN-CALENDAR/output/mymun_calendar_eu_as_dates.md
- Source page: https://mymun.com/conferences/calendar?a=eu,as&s=fe&r=desc
- Extraction date: 2026-03-24
- Processed date: 2026-03-24
- Passport origin for visa review: Venezuela
- Effective filters kept from the source: Europe + Asia (`a=eu,as`), in-person only, future conferences, sort by price descending (`s=fe&r=desc`).
- Export method: full filtered conference list API pull for review: `https://mymun.com/api/conferences?filter_time=future&sb=fe&order=desc&filter_cont=eu&filter_cont=as&online_conf=false&page=1&per_page=500`
- Note preserved from source: the calendar view loads month-by-month and its calendar data request drops the sort params. This export uses the matching list endpoint so all filtered conference date ranges are captured in one file.

## Summary

- Original conferences: 376
- Cleaned conferences: 356
- Removed conferences: 20
- Removed cancelled entries: 0
- Removed entries over 4 days: 19
- Removed invalid date ranges: 1
- Countries/territories represented after cleaning: 55

## Cleaning Rules

- Removed entries marked as cancelled/canceled in the title.
- Removed conferences with inclusive duration longer than 4 days.
- Removed malformed records whose end date is earlier than the start date.

## Visa Overview

- 🇦🇱 Albania | 1 event | visa: Visa-free | stay: 90 days
- 🇦🇲 Armenia | 3 events | visa: eVisa | stay: 120 days
- 🇦🇹 Austria | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇦🇿 Azerbaijan | 3 events | visa: Visa required
- 🇧🇭 Bahrain | 2 events | visa: eVisa or visa on arrival | stay: 30 days
- 🇧🇩 Bangladesh | 1 event | visa: Visa on arrival | stay: 30 days
- 🇧🇪 Belgium | 4 events | visa: Visa-free | stay: 90 days within 180 days
- 🇧🇬 Bulgaria | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇨🇳 China | 3 events | visa: Visa required
- 🇭🇷 Croatia | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇨🇾 Cyprus | 3 events | visa: Visa-free | stay: 90 days
- 🇨🇿 Czechia | 10 events | visa: Visa-free | stay: 90 days within 180 days
- 🇩🇰 Denmark | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇫🇷 France | 35 events | visa: Visa-free | stay: 90 days within 180 days
- 🇬🇪 Georgia | 1 event | visa: Visa required
- 🇩🇪 Germany | 25 events | visa: Visa-free | stay: 90 days within 180 days
- 🇬🇷 Greece | 5 events | visa: Visa-free | stay: 90 days within 180 days
- 🇭🇰 Hong Kong SAR | 4 events | visa: Visa-free | stay: 90 days
- 🇮🇳 India | 57 events | visa: eVisa | stay: 30 days
- 🇮🇩 Indonesia | 3 events | visa: eVisa or visa on arrival | stay: 30 days
- 🇮🇹 Italy | 3 events | visa: Visa-free | stay: 90 days within 180 days
- 🇯🇵 Japan | 3 events | visa: Visa required
- 🇯🇴 Jordan | 4 events | visa: eVisa or visa on arrival | stay: 30 days
- 🇰🇿 Kazakhstan | 4 events | visa: eVisa
- 🇽🇰 Kosovo | 2 events | visa: Visa-free | stay: 90 days
- 🇰🇼 Kuwait | 3 events | visa: Visa required
- 🇱🇧 Lebanon | 1 event | visa: Visa on arrival | stay: 30 days
- 🇱🇺 Luxembourg | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇲🇾 Malaysia | 2 events | visa: Visa-free | stay: 30 days
- 🇲🇹 Malta | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇲🇩 Moldova | 1 event | visa: Visa-free | stay: 90 days
- 🇳🇵 Nepal | 1 event | visa: eVisa or visa on arrival | stay: 150 days
- 🇳🇱 Netherlands | 14 events | visa: Visa-free | stay: 90 days within 180 days
- 🇳🇴 Norway | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇴🇲 Oman | 1 event | visa: eVisa or visa on arrival | stay: 30 days
- 🇵🇰 Pakistan | 2 events | visa: eVisa
- 🇵🇸 Palestine | 2 events | visa: Visa-free
- 🇵🇱 Poland | 39 events | visa: Visa-free | stay: 90 days within 180 days
- 🇵🇹 Portugal | 3 events | visa: Visa-free | stay: 90 days within 180 days
- 🇷🇴 Romania | 4 events | visa: Visa-free | stay: 90 days within 180 days
- 🇷🇺 Russia | 1 event | visa: Visa-free | stay: 90 days
- 🇸🇦 Saudi Arabia | 5 events | visa: eVisa
- 🇷🇸 Serbia | 1 event | visa: Visa-free | stay: 90 days
- 🇸🇬 Singapore | 3 events | visa: Visa-free | stay: 30 days
- 🇸🇰 Slovakia | 14 events | visa: Visa-free | stay: 90 days within 180 days
- 🇰🇷 South Korea | 1 event | visa: eTA | stay: 90 days
- 🇪🇸 Spain | 16 events | visa: Visa-free | stay: 90 days within 180 days
- 🇸🇪 Sweden | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇨🇭 Switzerland | 8 events | visa: Visa-free | stay: 90 days within 180 days
- 🇸🇾 Syria | 1 event | visa: eVisa
- 🇹🇭 Thailand | 2 events | visa: eVisa or visa on arrival | stay: 15 days
- 🇹🇷 Türkiye | 14 events | visa: Visa-free | stay: 90 days
- 🇦🇪 United Arab Emirates | 14 events | visa: eVisa
- 🇬🇧 United Kingdom | 10 events | visa: Visa required
- 🇺🇿 Uzbekistan | 5 events | visa: eVisa | stay: 30 days

## Removed During Cleaning

- 2026-03-25 to 2026-03-29 | Belgrade International MUN 2026 | Belgrade, Serbia | removed: duration-over-4-days | [page](https://mymun.com/conferences/belgrade-international-mun-2026)
- 2026-04-01 to 2026-04-10 | Uzair  2026 | Lahore, Pakistan | removed: duration-over-4-days | [page](https://mymun.com/conferences/uzair-2026)
- 2026-04-02 to 2026-04-06 | UMEAMUNC 2026 | Macau, China | removed: duration-over-4-days | [page](https://mymun.com/conferences/umeamunc-2026)
- 2026-04-08 to 2026-04-14 | Model WTO 2026 | Geneva, Switzerland | removed: duration-over-4-days | [page](https://mymun.com/conferences/model-wto-2026)
- 2026-04-13 to 2026-04-17 | MUNUSAL 2026 | Salamanca, Spain | removed: duration-over-4-days | [page](https://mymun.com/conferences/munusal-2026)
- 2026-04-15 to 2026-04-19 | ThessISMUN 2026 | Thessaloniki, Greece | removed: duration-over-4-days | [page](https://mymun.com/conferences/thessismun-2026)
- 2026-04-16 to 2026-04-21 | BIMUN 2026 | Budapest, Hungary | removed: duration-over-4-days | [page](https://mymun.com/conferences/bimun-2026)
- 2026-05-18 to 2026-05-22 | MUNOL 2026 | Lübeck, Germany | removed: duration-over-4-days | [page](https://mymun.com/conferences/munol-2026)
- 2026-07-05 to 2026-07-09 | GLOBAL GOALS ROME 2026 | Rome, Italy | removed: duration-over-4-days | [page](https://mymun.com/conferences/global-goals-rome-2026)
- 2026-07-06 to 2026-07-10 | YEREMUN  2026 | Yerevan, Armenia | removed: duration-over-4-days | [page](https://mymun.com/conferences/yeremun-2026)
- 2026-07-13 to 2026-07-17 | TEIMUN 2026 | The Hague, Netherlands | removed: duration-over-4-days | [page](https://mymun.com/conferences/teimun-2026)
- 2026-08-04 to 2026-08-09 | INDMUN(MCS) 2026 | Madeira, Portugal | removed: duration-over-4-days | [page](https://mymun.com/conferences/indmun-mcs-2026)
- 2026-08-05 to 2026-08-09 | CDMUN 2026 | TBD, China | removed: duration-over-4-days | [page](https://mymun.com/conferences/cdmun-2026)
- 2026-08-07 to 2026-08-12 | IHRC-MUN  2026 | Istanbul, Turkmenistan | removed: duration-over-4-days | [page](https://mymun.com/conferences/ihrc-mun-2026)
- 2026-08-11 to 2026-08-15 | Global Model UN Singapore 2026 | Singapore, Singapore | removed: duration-over-4-days | [page](https://mymun.com/conferences/global-model-un-singapore-2026)
- 2026-10-07 to 2026-10-11 | RhodesMRC - UNIED 2026 | Rhodes, Greece | removed: duration-over-4-days | [page](https://mymun.com/conferences/rhodesmrc-unied-2026)
- 2026-12-01 to 2026-12-06 | NATOBA Summit 2026 | Bratislava, Slovakia | removed: duration-over-4-days | [page](https://mymun.com/conferences/natoba-summit-2026)
- 2027-11-15 to 2024-11-17 | SigMUN 2027 | Toruń, Poland | removed: invalid-date-range | [page](https://mymun.com/conferences/sigmun-2024)
- 2029-02-10 to 2029-02-18 | munmun 2029 | Ankara, Türkiye | removed: duration-over-4-days | [page](https://mymun.com/conferences/munmun-2029)
- 2030-01-10 to 2030-01-17 | MANFrench 2030 | Paris, France | removed: duration-over-4-days | [page](https://mymun.com/conferences/manfrench-2030)

## Conferences By Start Month

### 2026-03

- 2026-03-25 to 2026-03-25 | Simulation parlementaire APH 2026 | Paris, France | destination: 🇫🇷 France | duration: 1 days | price: €0.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/simulation-parlementaire-aph-2026)
- 2026-03-25 to 2026-03-27 | Chaumun 2026 | Chaumont, France | destination: 🇫🇷 France | duration: 3 days | price: €120.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/chaumun-2026)
- 2026-03-25 to 2026-03-27 | temun 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/temun-2026)
- 2026-03-26 to 2026-03-27 | WitMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/witmun-2026)
- 2026-03-26 to 2026-03-28 | GULFMUN 2026 | Mubarak Al-Abdullah, Kuwait | destination: 🇰🇼 Kuwait | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/gulfmun-2026)
- 2026-03-26 to 2026-03-28 | Polaris 2026 | Riyadh, Saudi Arabia | destination: 🇸🇦 Saudi Arabia | duration: 3 days | price: $80.25 | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/polaris-2026)
- 2026-03-26 to 2026-03-28 | Saclay MUN 2026 | Paris, France | destination: 🇫🇷 France | duration: 3 days | price: €15.00 | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/saclay-mun-2026)
- 2026-03-26 to 2026-03-28 | SCIMUN 2026 | Shenzhen, China | destination: 🇨🇳 China | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/scimun-2026)
- 2026-03-26 to 2026-03-29 | MUNISS 2026 | Stuttgart, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/muniss-2026)
- 2026-03-26 to 2026-03-29 | UABMUN 2026 | Cerdanyola del Vallès (Barcelona), Spain | destination: 🇪🇸 Spain | duration: 4 days | price: n/a | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/uabmun-2026)
- 2026-03-27 to 2026-03-28 | DreamMUN 2026 | Riyadh, Saudi Arabia | destination: 🇸🇦 Saudi Arabia | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/dreammun-2026)
- 2026-03-27 to 2026-03-28 | ramanujanmun 2026 | New Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/ramanujanmun-2026)
- 2026-03-27 to 2026-03-29 | BOSPHORUS MUN 2026 | Istanbul, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/bosphorus-mun-2026)
- 2026-03-27 to 2026-03-29 | CEMUN 2026 | Łódź, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł260.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/cemun-2026)
- 2026-03-27 to 2026-03-29 | CUMUN 2026 | Hong Kong, China | destination: 🇭🇰 Hong Kong SAR | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/cumun-2026)
- 2026-03-27 to 2026-03-29 | Dilijan Model United Nations 2026 | Dilijan, Armenia | destination: 🇦🇲 Armenia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (120 days) | [page](https://mymun.com/conferences/dilijan-model-united-nations-2026)
- 2026-03-27 to 2026-03-29 | ESPOMUN 2026 | Lille, France | destination: 🇫🇷 France | duration: 3 days | price: €40.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/espomun-2026)
- 2026-03-27 to 2026-03-29 | FloMUN 2026 | Florence, Italy | destination: 🇮🇹 Italy | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/flomun-2026)
- 2026-03-27 to 2026-03-29 | GDMUN 2026 | Aix-en-Provence, France | destination: 🇫🇷 France | duration: 3 days | price: €25.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/gdmun-2026)
- 2026-03-27 to 2026-03-29 | GLASMUN 2026 | Glasgow, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 3 days | price: £35.00 | verified: yes | applications open: yes | visa: Visa required | [page](https://mymun.com/conferences/glasmun-2026)
- 2026-03-27 to 2026-03-29 | LSEMUN 2026 | London, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 3 days | price: £31.57 | verified: yes | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/lsemun-2026)
- 2026-03-27 to 2026-03-29 | MSKMUN 2026 | Athens, Greece | destination: 🇬🇷 Greece | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mskmun-2026)
- 2026-03-27 to 2026-03-29 | MUN ST DO 2026 | PAU, France | destination: 🇫🇷 France | duration: 3 days | price: €150.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-st-do-2026)
- 2026-03-27 to 2026-03-29 | NUALS MUN  2026 | Kochi, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/nuals-mun-2026)
- 2026-03-27 to 2026-03-29 | Sava MEP 2026 | Bucharest, Romania | destination: 🇷🇴 Romania | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sava-mep-2026)
- 2026-03-27 to 2026-03-29 | SenMUN 2026 | Senec, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €50.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/senmun-2026)
- 2026-03-27 to 2026-03-29 | Stras 2026 | Strasbourg, France | destination: 🇫🇷 France | duration: 3 days | price: €20.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/stras-2026)
- 2026-03-27 to 2026-03-29 | TICMUN 2026 | Toulouse, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ticmun-2026)
- 2026-03-27 to 2026-03-30 | AlejMUN 2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 4 days | price: Kč1200.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/alejmun-2026)
- 2026-03-28 to 2026-03-28 | ARCriSim 2026 | Paris, France | destination: 🇫🇷 France | duration: 1 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/arcrisim-2026)
- 2026-03-28 to 2026-03-28 | KhanateMUN 2026 | Khiva, Uzbekistan | destination: 🇺🇿 Uzbekistan | duration: 1 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/khanatemun-2026)
- 2026-03-28 to 2026-03-28 | NasafMUN 2026 | Karshi, Uzbekistan | destination: 🇺🇿 Uzbekistan | duration: 1 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/nasafmun-2026)
- 2026-03-28 to 2026-03-28 | NaxshabMUN 2026 | Karshi, Uzbekistan | destination: 🇺🇿 Uzbekistan | duration: 1 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/naxshabmun-2026)
- 2026-03-28 to 2026-03-29 | Aaaaa 2026 | Kanagawa, Japan | destination: 🇯🇵 Japan | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/aaaaa-2026)
- 2026-03-28 to 2026-03-29 | JMMUN 2026 | Kanagawa, Japan | destination: 🇯🇵 Japan | duration: 2 days | price: ¥1000.00 | verified: yes | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/jmmun-2026)
- 2026-03-28 to 2026-03-29 | SJIIMUN 2026 | Singapore, Singapore | destination: 🇸🇬 Singapore | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/sjiimun-2026)

### 2026-04

- 2026-04-01 to 2026-04-03 | ŞAHİNKAYA JMUN 2026 | Bursa, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/sahinkaya-jmun-2026)
- 2026-04-02 to 2026-04-02 | ILEWAR 2026 | Lyon, France | destination: 🇫🇷 France | duration: 1 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ilewar-2026)
- 2026-04-02 to 2026-04-05 | ISB MUN 2026 | Bucharest, Romania | destination: 🇷🇴 Romania | duration: 4 days | price: L170.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/isb-mun-2026)
- 2026-04-02 to 2026-04-05 | ISBMUN 2026 | Bucharest, Romania | destination: 🇷🇴 Romania | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/isbmun-2026)
- 2026-04-03 to 2026-04-04 | ASRMUN 2026 | Riyadh, Saudi Arabia | destination: 🇸🇦 Saudi Arabia | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/asrmun-2026)
- 2026-04-03 to 2026-04-04 | bvmglobalmun 2026 | goa, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/bvmglobalmun-2026)
- 2026-04-03 to 2026-04-05 | IPSEMUN 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/ipsemun-2026)
- 2026-04-03 to 2026-04-05 | MUN Nineteen 2026 | Kyrenia, Cyprus | destination: 🇨🇾 Cyprus | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/mun-nineteen-2026)
- 2026-04-03 to 2026-04-05 | UNIC MUN 2026 | Nicosia, Cyprus | destination: 🇨🇾 Cyprus | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/unic-mun-2026)
- 2026-04-03 to 2026-04-05 | VOFMUN 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/vofmun-2026)
- 2026-04-04 to 2026-04-04 | ASTMUN 2026 | Astana, Kazakhstan | destination: 🇰🇿 Kazakhstan | duration: 1 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/astmun-2026)
- 2026-04-04 to 2026-04-04 | MUN@SGE 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 1 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/mun-sge-2026)
- 2026-04-04 to 2026-04-04 | RFMUN 2026 | Lyon, France | destination: 🇫🇷 France | duration: 1 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/rfmun-2026)
- 2026-04-04 to 2026-04-05 | ECIMUN    2026 | Baku, Azerbaijan | destination: 🇦🇿 Azerbaijan | duration: 2 days | price: $48.15 | verified: yes | applications open: yes | visa: Visa required | [page](https://mymun.com/conferences/ecimun-2026)
- 2026-04-04 to 2026-04-05 | MUNWar 2026 | Paris, France | destination: 🇫🇷 France | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munwar-2026)
- 2026-04-04 to 2026-04-06 | BPSMUN 2026 | Pilani, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/bpsmun-2026)
- 2026-04-04 to 2026-04-06 | Peacemakers 2026 | Paris, France | destination: 🇫🇷 France | duration: 3 days | price: €25.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/peacemakers-2026)
- 2026-04-05 to 2026-04-05 | UCraftEdu 2026 | Bukhara, Uzbekistan | destination: 🇺🇿 Uzbekistan | duration: 1 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/ucraftedu-2026)
- 2026-04-05 to 2026-04-07 | BFSUMUN 2026 | Beijing, China | destination: 🇨🇳 China | duration: 3 days | price: $70.00 | verified: yes | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/bfsumun-2026)
- 2026-04-06 to 2026-04-09 | Kuwait MUN 2026 | Salmiya, Kuwait | destination: 🇰🇼 Kuwait | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/kuwait-mun-2026)
- 2026-04-07 to 2026-04-09 | REMUN 2026 | Rennes, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/remun-2026)
- 2026-04-08 to 2026-04-11 | AUMUN 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/aumun-2026)
- 2026-04-09 to 2026-04-12 | IIITNR MUN 2026 | afda Rfsagarh, Bahrain | destination: 🇧🇭 Bahrain | duration: 4 days | price: n/a | verified: no | applications open: no | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/iiitnr-mun-2026)
- 2026-04-09 to 2026-04-12 | MDS   2026 | Munich, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: €0.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mds-2026)
- 2026-04-10 to 2026-04-11 | Lawropeenne  2026 | Issy-les-Moulineaux, France | destination: 🇫🇷 France | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/lawropeenne-2026)
- 2026-04-10 to 2026-04-12 | LALMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/lalmun-2026)
- 2026-04-10 to 2026-04-12 | MazMun 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mazmun-2026)
- 2026-04-10 to 2026-04-12 | MEDMUN 2026 | Menton, France | destination: 🇫🇷 France | duration: 3 days | price: €80.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/medmun-2026)
- 2026-04-10 to 2026-04-12 | Menton 2026 | Menton, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/menton-2026)
- 2026-04-10 to 2026-04-12 | MUNIMUN 2026 | Brno, Czechia | destination: 🇨🇿 Czechia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munimun-2026)
- 2026-04-10 to 2026-04-12 | MUNSCE 2026 | Eindhoven, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munsce-2026)
- 2026-04-10 to 2026-04-12 | RIMUN XV 2026 | Reims, France | destination: 🇫🇷 France | duration: 3 days | price: €85.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/rimun-xv-2026)
- 2026-04-10 to 2026-04-12 | SAFAMUN 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/safamun-2026)
- 2026-04-10 to 2026-04-13 | SCINDIA MUN 2026 | Gwalior, India | destination: 🇮🇳 India | duration: 4 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/scindia-mun-2026)
- 2026-04-11 to 2026-04-11 | SIAme 2026 | Paris, France | destination: 🇫🇷 France | duration: 1 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/siame-2026)
- 2026-04-11 to 2026-04-12 | Auralis MUN 2026 | Ghaziabad-Noida, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/auralis-mun-2026)
- 2026-04-11 to 2026-04-12 | IAYS  2026 | Sonipat, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/iays-2026)
- 2026-04-11 to 2026-04-12 | IPSHMUN 2026 | Hisar, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/ipshmun-2026)
- 2026-04-11 to 2026-04-12 | MUN MONTAIGNE  2026 | Paris, France | destination: 🇫🇷 France | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-montaigne-2026)
- 2026-04-11 to 2026-04-12 | YUR MUN 2026 | Vadodara, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/yur-mun-2026)
- 2026-04-14 to 2026-04-14 | ČadMUN 2026 | Čadca, Slovakia | destination: 🇸🇰 Slovakia | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/cadmun-2026)
- 2026-04-15 to 2026-04-17 | NOVOMUN 2026 | Maia, Porto, Portugal | destination: 🇵🇹 Portugal | duration: 3 days | price: €90.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/novomun-2026)
- 2026-04-15 to 2026-04-18 | LEIRION-MUN  2026 | Athens, Greece | destination: 🇬🇷 Greece | duration: 4 days | price: €130.01 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/leirion-mun-2026)
- 2026-04-16 to 2026-04-17 | QSMUN 2026 | Tirana, Albania | destination: 🇦🇱 Albania | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/qsmun-2026)
- 2026-04-16 to 2026-04-18 | ASKMUN 2026 | Pristina, Kosovo | destination: 🇽🇰 Kosovo | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/askmun-2026)
- 2026-04-16 to 2026-04-18 | KZNMUN 2026 | Kazan, Russian Federation | destination: 🇷🇺 Russia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/kznmun-2026)
- 2026-04-16 to 2026-04-18 | NIMUN Norway 2026 | Oslo, Norway | destination: 🇳🇴 Norway | duration: 3 days | price: €55.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/nimun-norway-2026)
- 2026-04-16 to 2026-04-18 | PRIMUN 2026 | Prishtina, Kosovo | destination: 🇽🇰 Kosovo | duration: 3 days | price: €115.00 | verified: yes | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/primun-2026)
- 2026-04-17 to 2026-04-18 | Bellator  2026 | New Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/bellator-2026)
- 2026-04-17 to 2026-04-18 | MUNWAR by CINUP 2026 | Paris, France | destination: 🇫🇷 France | duration: 2 days | price: €11.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munwar-by-cinup-2026)
- 2026-04-17 to 2026-04-18 | Splendied Voices  2026 | Cascais, Portugal | destination: 🇵🇹 Portugal | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/splendied-voices-2026)
- 2026-04-17 to 2026-04-19 | HKBUMUN 2026 | Hong Kong, Hong Kong SAR China | destination: 🇭🇰 Hong Kong SAR | duration: 3 days | price: HK$150.00 | verified: yes | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/hkbumun-2026)
- 2026-04-17 to 2026-04-19 | IEUMEU 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ieumeu-2026)
- 2026-04-17 to 2026-04-19 | QueenMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł250.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/queenmun-2026)
- 2026-04-17 to 2026-04-19 | SEKRMUN 2026 | Riyadh, Saudi Arabia | destination: 🇸🇦 Saudi Arabia | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: eVisa | [page](https://mymun.com/conferences/sekrmun-2026)
- 2026-04-17 to 2026-04-19 | SIMUN Chapter VII 2026 | Coimbatore, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/simun-chapter-vii-2026)
- 2026-04-17 to 2026-04-19 | ZuMUN 2026 | Zürich, Switzerland | destination: 🇨🇭 Switzerland | duration: 3 days | price: CHF120.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/zumun-2026)
- 2026-04-17 to 2026-04-20 | LUXMUN 2026 | Luxembourg City, Luxembourg | destination: 🇱🇺 Luxembourg | duration: 4 days | price: €55.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/luxmun-2026)
- 2026-04-18 to 2026-04-18 | Diffmun one day 2026 | Cardiff, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/diffmun-one-day-2026)
- 2026-04-18 to 2026-04-18 | Gunpowder Plot ODC 2026 | Bristol, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 1 days | price: n/a | verified: no | applications open: yes | visa: Visa required | [page](https://mymun.com/conferences/gunpowder-plot-odc-2026)
- 2026-04-18 to 2026-04-18 | MEUPa 2026 | Paris, France | destination: 🇫🇷 France | duration: 1 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/meupa-2026)
- 2026-04-18 to 2026-04-19 | AUBMUNC 2026 | Beirut, Lebanon | destination: 🇱🇧 Lebanon | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa on arrival (30 days) | [page](https://mymun.com/conferences/aubmunc-2026)
- 2026-04-18 to 2026-04-19 | MiniMAMUN 2026 | Mannheim, Germany | destination: 🇩🇪 Germany | duration: 2 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/minimamun-2026)
- 2026-04-18 to 2026-04-19 | MISJMUN 2026 | Jakarta, Indonesia | destination: 🇮🇩 Indonesia | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/misjmun-2026)
- 2026-04-18 to 2026-04-19 | SISMUN 2026 | Basel, Switzerland | destination: 🇨🇭 Switzerland | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sismun-2026)
- 2026-04-22 to 2026-04-23 | I.I.M.U.N. Europe Conference 2026 | European Parliament, Brussels, Belgium | destination: 🇧🇪 Belgium | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/i-i-m-u-n-europe-conference-2026)
- 2026-04-22 to 2026-04-24 | SMUN  2026 | New Delhi, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/smun-2026)
- 2026-04-22 to 2026-04-25 | ALMUN 2026 | Alicante, Spain | destination: 🇪🇸 Spain | duration: 4 days | price: €29.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/almun-2026)
- 2026-04-22 to 2026-04-25 | World Diplomats Istanbul 2026 | Istanbul, Türkiye | destination: 🇹🇷 Türkiye | duration: 4 days | price: $312.00 | verified: yes | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/world-diplomats-istanbul-2026)
- 2026-04-23 to 2026-04-25 | BIMUN ESADE 2026 | Barcelona, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: €0.00 | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bimun-esade-2026)
- 2026-04-23 to 2026-04-25 | ESMUN ŽILINA 2026 | Žilina, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/esmun-zilina-2026)
- 2026-04-23 to 2026-04-25 | MVNU  2026 | Voiron, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mvnu-2026)
- 2026-04-23 to 2026-04-25 | ZaMUN 2026 | Žilina, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €35.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/zamun-2026)
- 2026-04-23 to 2026-04-26 | MUNLM 2026 | Lyon, France | destination: 🇫🇷 France | duration: 4 days | price: €12.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munlm-2026)
- 2026-04-24 to 2026-04-25 | IRIS-MUN Night Crisis 2026 | Paris, France | destination: 🇫🇷 France | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/iris-mun-night-crisis-2026)
- 2026-04-24 to 2026-04-25 | TURAN MUN 2026 | Алматы, Kazakhstan | destination: 🇰🇿 Kazakhstan | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/turan-mun-2026)
- 2026-04-24 to 2026-04-26 | BrusselsMUN Jr  2026 | Brussels, Belgium | destination: 🇧🇪 Belgium | duration: 3 days | price: €149.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/brusselsmun-jr-2026)
- 2026-04-24 to 2026-04-26 | DIVE MUN 2026 | dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: eVisa | [page](https://mymun.com/conferences/dive-mun-2026)
- 2026-04-24 to 2026-04-26 | MUN SL 2026 | Bruxelles, Belgium | destination: 🇧🇪 Belgium | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-sl-2026)
- 2026-04-24 to 2026-04-26 | TIMUN 2026 | Tilburg, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: €40.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/timun-2026)
- 2026-04-25 to 2026-04-25 | LLGIMUN 2026 | LYON, France | destination: 🇫🇷 France | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/llgimun-2026)
- 2026-04-25 to 2026-04-26 | ELDMUN 2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/eldmun-2026)
- 2026-04-25 to 2026-04-26 | HKMOIC 2026 | Hong Kong, Hong Kong SAR China | destination: 🇭🇰 Hong Kong SAR | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/hkmoic-2026)
- 2026-04-25 to 2026-04-26 | MYFHK 2026 | Hong Kong, Hong Kong SAR China | destination: 🇭🇰 Hong Kong SAR | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/myfhk-2026)
- 2026-04-25 to 2026-04-26 | SPECTRUM MUN 2026 | New delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/spectrum-mun-2026)
- 2026-04-25 to 2026-04-26 | Spectrum SMUN 2026 |  Delhi NCR, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/spectrum-smun-2026)
- 2026-04-28 to 2026-04-28 | TOMUN 2026 | Tonbridge, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/tomun-2026)
- 2026-04-29 to 2026-05-01 | MUN LONDON 2026 | London, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 3 days | price: €287.99 | verified: yes | applications open: yes | visa: Visa required | [page](https://mymun.com/conferences/mun-london-2026)
- 2026-04-30 to 2026-05-03 | BcnMUN 2026 | Barcelona, Spain | destination: 🇪🇸 Spain | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bcnmun-2026)

### 2026-05

- 2026-05-01 to 2026-05-03 | EkinSNYJMUN 2026 | Izmir, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/ekinsnyjmun-2026)
- 2026-05-01 to 2026-05-03 | Statue 2026 | Mersin, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/statue-2026)
- 2026-05-01 to 2026-05-03 | TISS G MUN 2026 | Guwahati, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/tiss-g-mun-2026)
- 2026-05-01 to 2026-05-03 | URUMUN 2026 | Utrecht, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: €75.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/urumun-2026)
- 2026-05-01 to 2026-05-03 | YIMUN 2026 | Hyderabad, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/yimun-2026)
- 2026-05-01 to 2026-05-03 | YIMUN HYDERABAD 2026 | Hyderabad, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/yimun-hyderabad-2026)
- 2026-05-01 to 2026-05-04 | LeiMUN 2026 | Leiden, Netherlands | destination: 🇳🇱 Netherlands | duration: 4 days | price: €60.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/leimun-2026)
- 2026-05-02 to 2026-05-03 | Diplomatia  2026 | Delhi ncr, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/diplomatia-2026)
- 2026-05-02 to 2026-05-03 | DYDMUN 2026 | New Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/dydmun-2026)
- 2026-05-02 to 2026-05-03 | RUMUN 2026 | Reading, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/rumun-2026)
- 2026-05-02 to 2026-05-03 | TamosMUN 2026 | Almaty, Kazakhstan | destination: 🇰🇿 Kazakhstan | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/tamosmun-2026)
- 2026-05-02 to 2026-05-03 | Vichar MUN 2026 | Pune, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/vichar-mun-2026)
- 2026-05-07 to 2026-05-09 | SAHINKAYA MUN 2026 | Bursa, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/sahinkaya-mun-2026)
- 2026-05-07 to 2026-05-10 | PolyMUN 2026 | Yerevan, Armenia | destination: 🇦🇲 Armenia | duration: 4 days | price: n/a | verified: no | applications open: no | visa: eVisa (120 days) | [page](https://mymun.com/conferences/polymun-2026)
- 2026-05-08 to 2026-05-09 | EXMUN  2026 | Bengaluru, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/exmun-2026)
- 2026-05-08 to 2026-05-10 | BAUMUN 2026 | Istanbul, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/baumun-2026)
- 2026-05-08 to 2026-05-10 | BIGMUN 2026 | Ankara, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/bigmun-2026)
- 2026-05-08 to 2026-05-10 | CAGDASMUN 2026 | Eskişehir, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/cagdasmun-2026)
- 2026-05-08 to 2026-05-10 | JagiMUN 2026 | Kraków, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/jagimun-2026)
- 2026-05-09 to 2026-05-10 | VI Model United Nations  2026 | Haldwani, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/vi-model-united-nations-2026)
- 2026-05-14 to 2026-05-16 | NORMUN 2026 | Ystad, Sweden | destination: 🇸🇪 Sweden | duration: 3 days | price: €25.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/normun-2026)
- 2026-05-14 to 2026-05-17 | EuroMUN 2026 | Maastricht, Netherlands | destination: 🇳🇱 Netherlands | duration: 4 days | price: €150.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/euromun-2026)
- 2026-05-15 to 2026-05-17 | I’MUN 2026 | Faridabad, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/imun-2026)
- 2026-05-15 to 2026-05-17 | ModaMUN 2026 | Mersin, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/modamun-2026)
- 2026-05-15 to 2026-05-17 | RSGC GYS  2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/rsgc-gys-2026)
- 2026-05-15 to 2026-05-17 | UOSMUN 2026 | Sharjah, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: د.إ170.00 | verified: yes | applications open: yes | visa: eVisa | [page](https://mymun.com/conferences/uosmun-2026)
- 2026-05-15 to 2026-05-17 | WitkacyMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/witkacymun-2026)
- 2026-05-16 to 2026-05-17 | Emacity MUN 2026 | Pune, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/emacity-mun-2026)
- 2026-05-16 to 2026-05-17 | Hydra Mun  2026 | Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/hydra-mun-2026)
- 2026-05-19 to 2026-05-21 | MUN MADRID 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-madrid-2026)
- 2026-05-20 to 2026-05-23 | LyonMUN 2026 | Lyon, France | destination: 🇫🇷 France | duration: 4 days | price: €90.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/lyonmun-2026)
- 2026-05-21 to 2026-05-24 | elbMUN 2026 | Dresden, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/elbmun-2026)
- 2026-05-22 to 2026-05-24 | PPSMUN 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: eVisa | [page](https://mymun.com/conferences/ppsmun-2026)
- 2026-05-22 to 2026-05-24 | unicaMUN 2026 | Nice, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/unicamun-2026)
- 2026-05-23 to 2026-05-23 | SGMiniMUN 2026 | St. Gallen, Switzerland | destination: 🇨🇭 Switzerland | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sgminimun-2026)
- 2026-05-23 to 2026-05-24 | Trimurti MUN 2026 | Dehradun, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/trimurti-mun-2026)
- 2026-05-26 to 2026-05-29 | UDESCA MUN 2026 | Lyon, France | destination: 🇫🇷 France | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/udesca-mun-2026)
- 2026-05-27 to 2026-05-27 | ISCMUN 2026 | Velden, Austria | destination: 🇦🇹 Austria | duration: 1 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/iscmun-2026)
- 2026-05-27 to 2026-05-29 | MUNROT 2026 | Rotterdam, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: €35.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munrot-2026)
- 2026-05-27 to 2026-05-30 | PIMUN 2026 | Paris, France | destination: 🇫🇷 France | duration: 4 days | price: €123.50 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/pimun-2026)
- 2026-05-27 to 2026-05-30 | World Youth Summit  2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/world-youth-summit-2026)
- 2026-05-27 to 2026-05-30 | World YouthSummit 2026 | Much, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/world-youthsummit-2026)
- 2026-05-29 to 2026-05-31 | BDBC  2026 | Belgrade, Serbia | destination: 🇷🇸 Serbia | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/bdbc-2026)
- 2026-05-29 to 2026-05-31 | BIUMUN 2026 | Berlin, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €59.14 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/biumun-2026)
- 2026-05-29 to 2026-05-31 | EłkMUN 2026 | Ełk, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł99.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/elkmun-2026)
- 2026-05-29 to 2026-05-31 | KalMUN 2026 | Kalisz, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł85.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kalmun-2026)
- 2026-05-29 to 2026-05-31 | maasmun 2026 | Maastricht, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/maasmun-2026)
- 2026-05-29 to 2026-05-31 | MUN ROSALES 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: €30.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-rosales-2026)
- 2026-05-29 to 2026-05-31 | NM MUN 2026 | Hyderabad, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/nm-mun-2026)
- 2026-05-29 to 2026-05-31 | SGCMUN  2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sgcmun-2026)
- 2026-05-29 to 2026-06-01 | VLOMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 4 days | price: zł280.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/vlomun-2026)
- 2026-05-30 to 2026-05-31 | Synkreo Mun 2026 | Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/synkreo-mun-2026)

### 2026-06

- 2026-06-01 to 2026-06-02 | Synkre 2026 | Noida, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/synkre-2026)
- 2026-06-01 to 2026-06-02 | Synkreo 2026 | Noida, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/synkreo-2026)
- 2026-06-02 to 2026-06-05 | MUNep 2026 | Strasbourg, France | destination: 🇫🇷 France | duration: 4 days | price: €0.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munep-2026)
- 2026-06-03 to 2026-06-05 | Forge MUN 2026 | Indore, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/forge-mun-2026)
- 2026-06-04 to 2026-06-07 | HDMUN 2026 | Heidelberg, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: €85.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/hdmun-2026)
- 2026-06-04 to 2026-06-07 | MUIMUN  2026 | Münster, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: €120.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/muimun-2026)
- 2026-06-05 to 2026-06-06 | AEVMUN 2026 | Bangalore, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/aevmun-2026)
- 2026-06-05 to 2026-06-07 | Aequitas 2026 | Chandigarh, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/aequitas-2026)
- 2026-06-05 to 2026-06-07 | DANUBE 2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/danube-2026)
- 2026-06-05 to 2026-06-07 | HIMUN 2026 | Baku, Azerbaijan | destination: 🇦🇿 Azerbaijan | duration: 3 days | price: €129.03 | verified: yes | applications open: yes | visa: Visa required | [page](https://mymun.com/conferences/himun-2026)
- 2026-06-05 to 2026-06-07 | IMUNA 2026 | Alkmaar, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: €59.99 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/imuna-2026)
- 2026-06-05 to 2026-06-07 | KOMUN 2026 | Košice, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €32.10 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/komun-2026)
- 2026-06-05 to 2026-06-07 | LUBMUN 2026 | Lublin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł220.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/lubmun-2026)
- 2026-06-05 to 2026-06-07 | MUN-THWS 2026 | Schweinfurt, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-thws-2026)
- 2026-06-05 to 2026-06-07 | SOTONMUN 2026 | Southampton, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/sotonmun-2026)
- 2026-06-06 to 2026-06-06 | NISMUN IV 2026 | Bangkok, Thailand | destination: 🇹🇭 Thailand | duration: 1 days | price: n/a | verified: no | applications open: no | visa: eVisa or visa on arrival (15 days) | [page](https://mymun.com/conferences/nismun-iv-2026)
- 2026-06-06 to 2026-06-07 | ISHMUN 2026 | Hilversum, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ishmun-2026)
- 2026-06-06 to 2026-06-07 | MUNIO 2026 | İstanbul, Türkiye | destination: 🇹🇷 Türkiye | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/munio-2026)
- 2026-06-11 to 2026-06-13 | ISOMUN 2026 | Amman, Jordan | destination: 🇯🇴 Jordan | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/isomun-2026)
- 2026-06-11 to 2026-06-14 | FlensMUN 2026 | Flensburg, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: €40.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/flensmun-2026)
- 2026-06-11 to 2026-06-14 | LakeMUN 2026 | Konstanz, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: €189.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/lakemun-2026)
- 2026-06-12 to 2026-06-14 | AYSansad 2026 | Gwalior, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/aysansad-2026)
- 2026-06-12 to 2026-06-14 | CASMUN  2026 | Sopot, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł170.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/casmun-2026)
- 2026-06-12 to 2026-06-14 | GM MUN 2026 | Jakarta, Indonesia | destination: 🇮🇩 Indonesia | duration: 3 days | price: $342.00 | verified: yes | applications open: yes | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/gm-mun-2026)
- 2026-06-12 to 2026-06-14 | MonMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/monmun-2026)
- 2026-06-12 to 2026-06-14 | RadzMUN 2026 | Radzymin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/radzmun-2026)
- 2026-06-12 to 2026-06-14 | ResolveMUN 2026 | Hyderabad, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/resolvemun-2026)
- 2026-06-13 to 2026-06-14 | PiiMUN  2026 | Mumbai, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/piimun-2026)
- 2026-06-16 to 2026-06-19 | OLMUN 2026 | Oldenburg, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/olmun-2026)
- 2026-06-17 to 2026-06-18 | KenesMUN 2026 | Almaty, Kazakhstan | destination: 🇰🇿 Kazakhstan | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/kenesmun-2026)
- 2026-06-19 to 2026-06-21 | RaszMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł269.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/raszmun-2026)
- 2026-06-19 to 2026-06-21 | ŽabMUN 2026 | Žabokreky nad Nitrou, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/zabmun-2026)
- 2026-06-20 to 2026-06-21 | Velistra 2026 | Delhi NCR, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/velistra-2026)
- 2026-06-20 to 2026-06-22 | ESMUN 2026 | Eskişehir, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/esmun-2026)
- 2026-06-24 to 2026-06-27 | JlgMUN 2026 | Berlin, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/jlgmun-2026)
- 2026-06-25 to 2026-06-28 | GALMUN 2026 | Sofia, Bulgaria | destination: 🇧🇬 Bulgaria | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/galmun-2027)
- 2026-06-25 to 2026-06-28 | GoeMUN 2026 | Göttingen, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: n/a | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/goemun-2026)
- 2026-06-26 to 2026-06-28 | GFSMUN VI 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/gfsmun-vi-2026)
- 2026-06-26 to 2026-06-28 | NLCSD MUN 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/nlcsd-mun-2026)
- 2026-06-26 to 2026-06-28 | TPCMUN 2026 | Delhi, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/tpcmun-2026)
- 2026-06-27 to 2026-06-28 | NUMUN 2026 | Nagoya City, Japan | destination: 🇯🇵 Japan | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/numun-2026)
- 2026-06-27 to 2026-06-28 | Vortexo 2026 | New Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/vortexo-2026)
- 2026-06-29 to 2026-07-01 | Nation United of Strategic Action MUN 2026 | Singapore, Singapore | destination: 🇸🇬 Singapore | duration: 3 days | price: $929.07 | verified: yes | applications open: yes | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/nation-united-of-strategic-action-mun-2026)

### 2026-07

- 2026-07-03 to 2026-07-05 | HDMUN III 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/hdmun-iii-2026)
- 2026-07-03 to 2026-07-05 | KielMUN 2026 | Kiel, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kielmun-2026)
- 2026-07-04 to 2026-07-05 | SEHRIYO MUN 2026 | Tashkent, Uzbekistan | destination: 🇺🇿 Uzbekistan | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/sehriyo-mun-2026)
- 2026-07-04 to 2026-07-05 | VSECMUN 2026 | Kanpur, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/vsecmun-2026)
- 2026-07-04 to 2026-07-05 | YLS MUN 2026 | Gurgaon, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/yls-mun-2026)
- 2026-07-04 to 2026-07-05 | YLSMUN 2026 | Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/ylsmun-2026)
- 2026-07-06 to 2026-07-08 | AMDMUN 2026 | Sharjah, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: eVisa | [page](https://mymun.com/conferences/amdmun-2026)
- 2026-07-10 to 2026-07-12 | DADYAMUN 2026 | Datça/Muğla, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/dadyamun-2026)
- 2026-07-11 to 2026-07-12 | INVMUN 2026 | Pune, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/invmun-2026)
- 2026-07-11 to 2026-07-12 | Where youth rebuilds what the world broke  2026 | Lucknow, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/where-youth-rebuilds-what-the-world-broke-2026)
- 2026-07-18 to 2026-07-19 | Abhivyakt 2026 | Delhi NCR, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/abhivyakt-2026)
- 2026-07-24 to 2026-07-26 | GCMUNC 2026 | Ningbo, Zhejiang, China | destination: 🇨🇳 China | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/gcmunc-2026)
- 2026-07-24 to 2026-07-26 | muntgm 2026 | Tg Mures, Romania | destination: 🇷🇴 Romania | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/muntgm-2026)
- 2026-07-27 to 2026-07-28 | AIHealthcare 2026 | Prague, Czech Republic, Czechia | destination: 🇨🇿 Czechia | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/aihealthcare-2026)
- 2026-07-30 to 2026-08-01 | FREIMUN 2026 | Freiburg, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/freimun-2026)

### 2026-08

- 2026-08-01 to 2026-08-02 | DIVINE SUMMIT! 2026 | DELHI, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/divine-summit-2026)
- 2026-08-01 to 2026-08-03 | FrèreMUN 2026 | Bethlehem, Palestine, State of | destination: 🇵🇸 Palestine | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free | [page](https://mymun.com/conferences/freremun-2026)
- 2026-08-01 to 2026-08-03 | KNAMUN 2026 | Seoul, Korea, Republic of | destination: 🇰🇷 South Korea | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: eTA (90 days) | [page](https://mymun.com/conferences/knamun-2026)
- 2026-08-06 to 2026-08-08 | KaiMUN 2026 | Amman, Jordan | destination: 🇯🇴 Jordan | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/kaimun-2026)
- 2026-08-06 to 2026-08-09 | IDMUN 2026 | Islamabad, Pakistan | destination: 🇵🇰 Pakistan | duration: 4 days | price: n/a | verified: no | applications open: yes | visa: eVisa | [page](https://mymun.com/conferences/idmun-2026)
- 2026-08-07 to 2026-08-08 | BRITMUN 2026 | berlin, Germany | destination: 🇩🇪 Germany | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/britmun-2026)
- 2026-08-08 to 2026-08-09 | DAPYS 2026 | Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/dapys-2026)
- 2026-08-08 to 2026-08-09 | Delhi MUN 2026 | Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/delhi-mun-2026)
- 2026-08-08 to 2026-08-10 | Cathedral MUN 2026 | Mumbai, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/cathedral-mun-2026)
- 2026-08-10 to 2026-08-11 | ROGEE 2026 | OXFORD, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/rogee-2026)
- 2026-08-12 to 2026-08-14 | AloIMUN 2026 | Dhaka, Bangladesh | destination: 🇧🇩 Bangladesh | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa on arrival (30 days) | [page](https://mymun.com/conferences/aloimun-2026)
- 2026-08-14 to 2026-08-16 | AISSMUNC 2026 | Kuala Lumpur, Malaysia | destination: 🇲🇾 Malaysia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/aissmunc-2026)
- 2026-08-21 to 2026-08-23 | HYMUN 2026 | Yerevan, Armenia | destination: 🇦🇲 Armenia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (120 days) | [page](https://mymun.com/conferences/hymun-2026)
- 2026-08-22 to 2026-08-23 | NEW DELHI GYW MUN 2026 | NEW DELHI, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/new-delhi-gyw-mun-2026)
- 2026-08-24 to 2026-08-27 | DAMUN 2026 | Damascus, Syrian Arab Republic | destination: 🇸🇾 Syria | duration: 4 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/damun-2026)
- 2026-08-26 to 2026-08-29 | RUYAMUN 2026 | Amman, Jordan | destination: 🇯🇴 Jordan | duration: 4 days | price: n/a | verified: no | applications open: no | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/ruyamun-2026)
- 2026-08-28 to 2026-08-30 | MaltMUN 2026 | Valletta, Malta | destination: 🇲🇹 Malta | duration: 3 days | price: €70.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/maltmun-2026)
- 2026-08-28 to 2026-08-30 | MLKISMUNC 2026 | Putra Heights, Malaysia | destination: 🇲🇾 Malaysia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/mlkismunc-2026)

### 2026-09

- 2026-09-02 to 2026-09-04 | TriMUN 2026 | Gdynia, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/trimun-2026)
- 2026-09-03 to 2026-09-06 | SOFIMUN 2026 | Sofia, Bulgaria | destination: 🇧🇬 Bulgaria | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sofimun-2026)
- 2026-09-04 to 2026-09-06 | TEVMUN  2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł210.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/tevmun-2026)
- 2026-09-05 to 2026-09-06 | GYA MUN 2026 | Dubai, United Arab Emirates | destination: 🇦🇪 United Arab Emirates | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa | [page](https://mymun.com/conferences/gya-mun-2026)
- 2026-09-06 to 2026-09-09 | AGORAMUN apex edition 2026 | Lahore, Pakistan | destination: 🇵🇰 Pakistan | duration: 4 days | price: n/a | verified: no | applications open: yes | visa: eVisa | [page](https://mymun.com/conferences/agoramun-apex-edition-2026)
- 2026-09-07 to 2026-09-07 | PBMUN 2026 | Paris, France | destination: 🇫🇷 France | duration: 1 days | price: €26.99 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/pbmun-2026)
- 2026-09-09 to 2026-09-11 | PlocMUN  2026 | Płock, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/plocmun-2026)
- 2026-09-10 to 2026-09-12 | AWMUN I 2026 | Salmiya, AU, Kuwait | destination: 🇰🇼 Kuwait | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/awmun-i-2026)
- 2026-09-11 to 2026-09-13 | BanMUN 2026 | Banská Bystrica, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/banmun-2026)
- 2026-09-11 to 2026-09-13 | HoffMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/hoffmun-2026)
- 2026-09-11 to 2026-09-13 | Zeppelin MUN 2026 | Friedrichshafen, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/zeppelin-mun-2026)
- 2026-09-12 to 2026-09-13 | KATMUN 2026 | Kathmandu, Nepal | destination: 🇳🇵 Nepal | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa or visa on arrival (150 days) | [page](https://mymun.com/conferences/katmun-2026)
- 2026-09-14 to 2026-09-14 | GLMUN 2026 | Geneva, Switzerland | destination: 🇨🇭 Switzerland | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/glmun-2026)
- 2026-09-17 to 2026-09-20 | BlackSeaMUN 2026 | Chisinau, Moldova, Republic of | destination: 🇲🇩 Moldova | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/blackseamun-2026)
- 2026-09-17 to 2026-09-20 | CoMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/comun-2026)
- 2026-09-17 to 2026-09-20 | MUNSA 2026 | Barcelona, Spain | destination: 🇪🇸 Spain | duration: 4 days | price: €74.99 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munsa-2026)
- 2026-09-19 to 2026-09-20 | astraMUN bombay \| mmxxvi 2026 | Mumbai, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/astramun-bombay-mmxxvi-2026)
- 2026-09-21 to 2026-09-22 | ONCOFORUM 2026 | SINGAPORE, Singapore | destination: 🇸🇬 Singapore | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/oncoforum-2026)
- 2026-09-24 to 2026-09-27 | HamMUN 2026 | Hamburg, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: n/a | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/hammun-2026)
- 2026-09-24 to 2026-09-27 | JASMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 4 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/jasmun-2026)
- 2026-09-25 to 2026-09-26 | MUNISE  2026 | Amsterdam, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munise-2026)
- 2026-09-25 to 2026-09-27 | MGES Fall Edition 2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €45.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mges-fall-edition-2026)
- 2026-09-25 to 2026-09-27 | SGMMUN 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sgmmun-2026)
- 2026-09-26 to 2026-09-27 | SASMUN 2026 | Lucknow, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/sasmun-2026)
- 2026-09-26 to 2026-09-28 | ISPMUN 2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ispmun-2026)

### 2026-10

- 2026-10-01 to 2026-10-04 | PPGMUN  2026 | Varaždin, Croatia | destination: 🇭🇷 Croatia | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ppgmun-2026)
- 2026-10-02 to 2026-10-04 | RCMUN 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/rcmun-2026)
- 2026-10-02 to 2026-10-04 | VisMUN 2026 | Kraków, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/vismun-2026)
- 2026-10-03 to 2026-10-04 | Arata 2026 | Delhi, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/arata-2026)
- 2026-10-03 to 2026-10-04 | zubaanmun 2026 | faridabad, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/zubaanmun-2026)
- 2026-10-04 to 2026-10-07 | IMGFMUN 2026 | AMMAN, Jordan | destination: 🇯🇴 Jordan | duration: 4 days | price: n/a | verified: no | applications open: no | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/imgfmun-2026)
- 2026-10-07 to 2026-10-09 | MUN MALTA 2026 | La Valletta, Malta | destination: 🇲🇹 Malta | duration: 3 days | price: €189.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-malta-2026)
- 2026-10-09 to 2026-10-11 | DOMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/domun-2026)
- 2026-10-09 to 2026-10-12 | PerriMUN 2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 4 days | price: €69.99 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/perrimun-2026)
- 2026-10-14 to 2026-10-15 | RENEWTECH 2026 | Amsterdam, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/renewtech-2026)
- 2026-10-15 to 2026-10-18 | AcadeMUN 2026 | Basel, Switzerland | destination: 🇨🇭 Switzerland | duration: 4 days | price: CHF95.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/academun-2026)
- 2026-10-16 to 2026-10-18 | TARMUN  2026 | Tarnów, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/tarmun-2026)
- 2026-10-17 to 2026-10-19 | ANATMUN 2026 | Adana, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/anatmun-2026)
- 2026-10-19 to 2026-10-21 | MUN VIENNA 2026 | Vienna, Austria | destination: 🇦🇹 Austria | duration: 3 days | price: €204.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-vienna-2026)
- 2026-10-20 to 2026-10-23 | MiMUNucjc 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mimunucjc-2026)
- 2026-10-22 to 2026-10-25 | FMUN  2026 | Bordeaux, France | destination: 🇫🇷 France | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/fmun-2026)
- 2026-10-23 to 2026-10-25 | AproMUN 2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/apromun-2026)
- 2026-10-23 to 2026-10-25 | GSMUN Cyprus 2026 | Nicosia, Cyprus | destination: 🇨🇾 Cyprus | duration: 3 days | price: €50.00 | verified: yes | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/gsmun-cyprus-2026)
- 2026-10-23 to 2026-10-25 | YESMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/yesmun-2026)
- 2026-10-26 to 2026-10-29 | MUNOM 2026 | Malmö, Sweden | destination: 🇸🇪 Sweden | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munom-2026)
- 2026-10-28 to 2026-10-30 | StruerMUN 2026 | Struer, Denmark | destination: 🇩🇰 Denmark | duration: 3 days | price: kr0.00 | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/struermun-2026)
- 2026-10-30 to 2026-11-01 | IMZMUN 2026 | Zug, Switzerland | destination: 🇨🇭 Switzerland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/imzmun-2026)
- 2026-10-30 to 2026-11-01 | KATOMUN 2026 | Katowice, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/katomun-2026)
- 2026-10-31 to 2026-11-01 | Aetheria MUn 2026 | roorkee, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/aetheria-mun-2026)
- 2026-10-31 to 2026-11-01 | Aetolia MUN 2026 | Messolonghi, Greece | destination: 🇬🇷 Greece | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/aetolia-mun-2026)
- 2026-10-31 to 2026-11-01 | DomeMUN 2026 | Heemstede, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/domemun-2026)

### 2026-11

- 2026-11-03 to 2026-11-06 | ClerMUN 2026 | Clermont-Fd, France | destination: 🇫🇷 France | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/clermun-2026)
- 2026-11-06 to 2026-11-08 | Independent Ostrava MUN 2026 | Ostrava, Czechia | destination: 🇨🇿 Czechia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/independent-ostrava-mun-2026)
- 2026-11-06 to 2026-11-08 | MUNISH 2026 | The Hague, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munish-2026)
- 2026-11-06 to 2026-11-08 | PolHistMUN 2026 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł199.99 | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/polhistmun-2026)
- 2026-11-12 to 2026-11-14 | TSS MUN 2026 | Seeb, Oman | destination: 🇴🇲 Oman | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/tss-mun-2026)
- 2026-11-13 to 2026-11-14 | Kairos 2026 | Sharqiyah, Saudi Arabia | destination: 🇸🇦 Saudi Arabia | duration: 2 days | price: n/a | verified: no | applications open: no | visa: eVisa | [page](https://mymun.com/conferences/kairos-2026)
- 2026-11-13 to 2026-11-15 | IASMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/iasmun-2026)
- 2026-11-13 to 2026-11-15 | KAMUN: The Black Forest Summit 2026 | Karlsruhe, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kamun-the-black-forest-summit-2026)
- 2026-11-13 to 2026-11-15 | KleMUN 2026 | Kleve, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/klemun-2026)
- 2026-11-14 to 2026-11-16 | ti-mun 2026 | Lugano, Switzerland | destination: 🇨🇭 Switzerland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ti-mun-2026)
- 2026-11-16 to 2026-11-18 | StolaMUN 2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/stolamun-2026)
- 2026-11-18 to 2026-11-20 | MUN Alfrink 2026 | Zoetermeer, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-alfrink-2026)
- 2026-11-18 to 2026-11-20 | ssmun 2026 | vadodara, India | destination: 🇮🇳 India | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa (30 days) | [page](https://mymun.com/conferences/ssmun-2026)
- 2026-11-19 to 2026-11-21 | StetiMUN 2026 | Szczecin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/stetimun-2026)
- 2026-11-20 to 2026-11-22 | Aix MUN 2026 | Aix-en-Provence, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/aix-mun-2025)
- 2026-11-20 to 2026-11-22 | GDNMUN 2026 | Gdańsk, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/gdnmun-2026)
- 2026-11-20 to 2026-11-22 | KlaMUN 2026 | Kladno, Czechia | destination: 🇨🇿 Czechia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/klamun-2026)
- 2026-11-21 to 2026-11-22 | BAYMUN XIX 2026 | Isa Town, Bahrain | destination: 🇧🇭 Bahrain | duration: 2 days | price: .د.ب1.00 | verified: no | applications open: yes | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/baymun-xix-2026)
- 2026-11-24 to 2026-11-26 | MUN BERLIN 2026 | Berlin, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €203.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-berlin-2026)
- 2026-11-27 to 2026-11-29 | BratMUN 2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bratmun-2026)
- 2026-11-27 to 2026-11-29 | DeMUN 2026 | Gliwice, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/demun-2026)

### 2026-12

- 2026-12-03 to 2026-12-05 | SJSMUN 2026 | Carcavelos, Portugal | destination: 🇵🇹 Portugal | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sjsmun-2026)
- 2026-12-03 to 2026-12-06 | SGMUN 2026 | St.Gallen, Switzerland | destination: 🇨🇭 Switzerland | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sgmun-2026)
- 2026-12-04 to 2026-12-05 | BYUNS 2026 | Baku, Azerbaijan | destination: 🇦🇿 Azerbaijan | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/byuns-2026)
- 2026-12-04 to 2026-12-06 | UNIMUN 2026 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł167.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/unimun-2026)
- 2026-12-04 to 2026-12-07 | IPMUN 2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ipmun-2026)
- 2026-12-06 to 2026-12-07 | AMEMUN 2026 | Ramallah, Palestine, State of | destination: 🇵🇸 Palestine | duration: 2 days | price: $50.00 | verified: yes | applications open: yes | visa: Visa-free | [page](https://mymun.com/conferences/amemun-2026)
- 2026-12-09 to 2026-12-10 | GLOBALCARDIOFORUM 2026 | Barcelona, Spain | destination: 🇪🇸 Spain | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/globalcardioforum-2026)
- 2026-12-10 to 2026-12-13 | NAPLESMUN 2026 | NAPLES, Italy | destination: 🇮🇹 Italy | duration: 4 days | price: €161.29 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/naplesmun-2026)
- 2026-12-11 to 2026-12-12 | ICGEEE 2026 | LONDON, United Kingdom of Great Britain and Northern Ireland | destination: 🇬🇧 United Kingdom | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/icgeee-2026)
- 2026-12-11 to 2026-12-13 | KOCHMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kochmun-2026)
- 2026-12-11 to 2026-12-13 | MarieMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mariemun-2026)

### 2027-01

- 2027-01-15 to 2027-01-17 | BiaMUN 2027 | Białystok, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/biamun-2027)
- 2027-01-15 to 2027-01-17 | KOSZMUN 2027 | Koszalin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/koszmun-2027)
- 2027-01-16 to 2027-01-16 | ACMUN 2027 | Barcelona, Spain | destination: 🇪🇸 Spain | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/acmun-2027)
- 2027-01-22 to 2027-01-24 | BayernMUN - MUN in the heart of Europe 2027 | Nuremberg, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bayernmun-mun-in-the-heart-of-europe-2027)
- 2027-01-23 to 2027-01-24 | SEAMUN I 2027 | Bangkok, Thailand | destination: 🇹🇭 Thailand | duration: 2 days | price: $85.00 | verified: yes | applications open: no | visa: eVisa or visa on arrival (15 days) | [page](https://mymun.com/conferences/seamun-i-2027)
- 2027-01-28 to 2027-01-30 | Economix MUN 2027 | Jakarta, Indonesia | destination: 🇮🇩 Indonesia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: eVisa or visa on arrival (30 days) | [page](https://mymun.com/conferences/economix-mun-2027)

### 2027-02

- 2027-02-10 to 2027-02-12 | MUN BRUXELLES 2027 | Bruxelles, Belgium | destination: 🇧🇪 Belgium | duration: 3 days | price: €189.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-bruxelles-2027)
- 2027-02-11 to 2027-02-14 | PyleaMUN 2027 | Thessaloniki, Greece | destination: 🇬🇷 Greece | duration: 4 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/pyleamun-2027)
- 2027-02-25 to 2027-02-28 | IESMUN  2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/iesmun-2027)

### 2027-03

- 2027-03-02 to 2027-03-04 | MUN ROME 2027 | Rome, Italy | destination: 🇮🇹 Italy | duration: 3 days | price: €189.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-rome-2027)
- 2027-03-05 to 2027-03-07 | BCIMUN 2027 | Athens, Greece | destination: 🇬🇷 Greece | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bcimun-2027)
- 2027-03-11 to 2027-03-14 | MainMUN 2027 | Frankfurt am Main, Germany | destination: 🇩🇪 Germany | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mainmun-2027)
- 2027-03-18 to 2027-03-21 | LegaMUN 2027 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 4 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/legamun-2027)

### 2027-04

- 2027-04-17 to 2027-04-18 | EQUNIOX 2027 | gurugram, India | destination: 🇮🇳 India | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: eVisa (30 days) | [page](https://mymun.com/conferences/equniox-2027)

### 2027-06

- 2027-06-04 to 2027-06-06 | LUBMUN 2027 | Lublin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/lubmun-2027)
- 2027-06-13 to 2027-06-15 | HITMUN 2027 | Recklinghausen, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/hitmun-2027)

### 2027-09

- 2027-09-23 to 2027-09-26 | MOKMUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 4 days | price: zł299.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mokmun-2028)

### 2029-01

- 2029-01-20 to 2029-01-21 | GHIBI 2029 | Tbilisi, Georgia | destination: 🇬🇪 Georgia | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa required | [page](https://mymun.com/conferences/ghibi-2029)

### 2029-06

- 2029-06-01 to 2029-06-03 | KvartMUN 2029 | Kvarta A, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kvartmun-2029)
- 2029-06-30 to 2029-07-01 | HP MUN 2029 | Horná Potôň, Slovakia | destination: 🇸🇰 Slovakia | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/hp-mun-2029)
