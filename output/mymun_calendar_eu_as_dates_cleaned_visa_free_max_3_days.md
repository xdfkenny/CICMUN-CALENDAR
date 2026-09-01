# mymun Conference Date Extract (Visa-Free, Max 3 Days)

- Source file: /Users/xdfke/Documents/CICMUN-CALENDAR/output/mymun_calendar_eu_as_dates.md
- Source page: https://mymun.com/conferences/calendar?a=eu,as&s=fe&r=desc
- Extraction date: 2026-09-01
- Processed date: 2026-09-01
- Passport origin for visa review: Venezuela
- Effective filters kept from the source: Europe + Asia (`a=eu,as`), in-person only, future conferences, sort by price descending (`s=fe&r=desc`).
- Export method: full filtered conference list API pull for review (9 pages at up to 50 rows per page, deduplicated by slug): `https://mymun.com/api/conferences?filter_time=future&sb=fe&order=desc&filter_cont=eu&filter_cont=as&online_conf=false&page={page}&per_page={perPage}`
- Note preserved from source: The calendar view loads month-by-month and its calendar data request drops the sort params. This export pages through the full filtered conference list endpoint (the API caps each response at 50 rows, so multiple pages are fetched and deduplicated by conference slug) so all filtered conference date ranges are captured in one file. A source-side MUN relevance filter then keeps only entries whose slug, title, or name indicates a MUN or United Nations simulation.

## Summary

- Base cleaned conferences: 344
- Filtered conferences: 161
- Removed by strict filters: 183
- Removed entries over 3 days: 60
- Removed entries not visa-free for Venezuelan passport: 128
- Countries/territories represented after filtering: 31

## Filter Rules

- Kept only entries not marked as cancelled/canceled in the title.
- Kept only conferences with inclusive duration of 3 days or less.
- Kept only destinations marked as visa-free for a Venezuelan passport.
- Preserved application status from the source; closed statuses are kept because some future events may reopen later.

## Visa-Free Destinations

- 🇦🇱 Albania | 2 events | visa: Visa-free | stay: 90 days
- 🇦🇹 Austria | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇧🇪 Belgium | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇧🇬 Bulgaria | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇨🇾 Cyprus | 3 events | visa: Visa-free | stay: 90 days
- 🇨🇿 Czechia | 6 events | visa: Visa-free | stay: 90 days within 180 days
- 🇩🇰 Denmark | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇫🇷 France | 14 events | visa: Visa-free | stay: 90 days within 180 days
- 🇩🇪 Germany | 13 events | visa: Visa-free | stay: 90 days within 180 days
- 🇬🇷 Greece | 6 events | visa: Visa-free | stay: 90 days within 180 days
- 🇭🇰 Hong Kong SAR | 2 events | visa: Visa-free | stay: 90 days
- 🇮🇹 Italy | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇽🇰 Kosovo | 1 event | visa: Visa-free | stay: 90 days
- 🇱🇹 Lithuania | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇲🇾 Malaysia | 3 events | visa: Visa-free | stay: 30 days
- 🇲🇹 Malta | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇳🇱 Netherlands | 15 events | visa: Visa-free | stay: 90 days within 180 days
- 🇳🇴 Norway | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇴🇲 Oman | 1 event | visa: Visa-free | stay: 14 days
- 🇵🇸 Palestine | 1 event | visa: Visa-free
- 🇵🇭 Philippines | 2 events | visa: Visa-free | stay: 30 days
- 🇵🇱 Poland | 39 events | visa: Visa-free | stay: 90 days within 180 days
- 🇵🇹 Portugal | 4 events | visa: Visa-free | stay: 90 days within 180 days
- 🇷🇴 Romania | 5 events | visa: Visa-free | stay: 90 days within 180 days
- 🇸🇬 Singapore | 3 events | visa: Visa-free | stay: 30 days
- 🇸🇰 Slovakia | 9 events | visa: Visa-free | stay: 90 days within 180 days
- 🇸🇮 Slovenia | 2 events | visa: Visa-free | stay: 90 days within 180 days
- 🇪🇸 Spain | 7 events | visa: Visa-free | stay: 90 days within 180 days
- 🇸🇪 Sweden | 1 event | visa: Visa-free | stay: 90 days within 180 days
- 🇨🇭 Switzerland | 6 events | visa: Visa-free | stay: 90 days within 180 days
- 🇹🇷 Türkiye | 4 events | visa: Visa-free | stay: 90 days

## Removed By Strict Filters

- 2026-09-03 to 2026-09-06 | SOFIMUN 2026 | Sofia, Bulgaria | removed: duration-over-3-days | [page](https://mymun.com/conferences/sofimun-2026)
- 2026-09-04 to 2026-09-06 | IDMUN 2026 | Hyderabad, Pakistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/idmun-2026)
- 2026-09-04 to 2026-09-06 | RIMUN CHAPTER I 2026 | Attock, Pakistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/rimun-chapter-i-2026)
- 2026-09-04 to 2026-09-06 | ZETA MUN 2026 | Abu dhabi, United Arab Emirates | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/zeta-mun-2026)
- 2026-09-05 to 2026-09-05 | MUNLIGHT 2026 | Pavlodar, Kazakhstan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/munlight-2026)
- 2026-09-05 to 2026-09-06 | GUMUN 2026 | Guwahati, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/gumun-2026)
- 2026-09-05 to 2026-09-06 | GYA MUN 2026 | Dubai, United Arab Emirates | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/gya-mun-2026)
- 2026-09-05 to 2026-09-06 | Kizunamun 2026 | Karachi, Pakistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/kizunamun-2026)
- 2026-09-05 to 2026-09-06 | Nine hundred ninety four MUN 2026 | Kyiv, Ukraine | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/nine-hundred-ninety-four-mun-2026)
- 2026-09-06 to 2026-09-07 | Qatar Youth MUN III 2026 | Doha, Qatar | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/qatar-youth-mun-iii-2026)
- 2026-09-06 to 2026-09-09 | AGORAMUN apex edition 2026 | Lahore, Pakistan | removed: duration-over-3-days, visa-category-is-eVisa | [page](https://mymun.com/conferences/agoramun-apex-edition-2026)
- 2026-09-10 to 2026-09-12 | AWMUN I 2026 | Kuwait, Kuwait | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/awmun-i-2026)
- 2026-09-12 to 2026-09-13 | KATMUN 2026 | Kathmandu, Nepal | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/katmun-2026)
- 2026-09-12 to 2026-09-13 | YSLCMUN 2026 | Bangkok, Thailand | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/yslcmun-2026)
- 2026-09-17 to 2026-09-20 | CoMUN 2026 | Warsaw, Poland | removed: duration-over-3-days | [page](https://mymun.com/conferences/comun-2026)
- 2026-09-17 to 2026-09-20 | MUNSA 2026 | Barcelona, Spain | removed: duration-over-3-days | [page](https://mymun.com/conferences/munsa-2026)
- 2026-09-18 to 2026-09-20 | NOVAMUN 2026 | Dubai, United Arab Emirates | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/novamun-2026)
- 2026-09-18 to 2026-09-20 | Texas MUN 2026 | Kathmandu, Nepal | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/texas-mun-2026)
- 2026-09-19 to 2026-09-20 | astraMUN bombay | mmxxvi 2026 | Mumbai, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/astramun-bombay-mmxxvi-2026)
- 2026-09-19 to 2026-09-20 | COSMOPOLIS 2026 | Pune, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/cosmopolis-2026)
- 2026-09-19 to 2026-09-20 | CWMUN Baku 2026 | Baku, Azerbaijan | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/cwmun-baku-2026)
- 2026-09-19 to 2026-09-20 | Levithan 2026 | Faridabad, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/levithan-2026)
- 2026-09-19 to 2026-09-20 | Levithans mun  2026 | Faridabad, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/levithans-mun-2026)
- 2026-09-19 to 2026-09-20 | WSMUN 2026 | Mumbai, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/wsmun-2026)
- 2026-09-19 to 2026-09-21 | UGIMUN 2026 | Kathmandu, Nepal | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/ugimun-2026)
- 2026-09-24 to 2026-09-27 | BrusselsMUN vs Disinfo 2026 | Brussels, Belgium | removed: duration-over-3-days | [page](https://mymun.com/conferences/brusselsmun-vs-disinfo-2026)
- 2026-09-24 to 2026-09-27 | HamMUN 2026 | Hamburg, Germany | removed: duration-over-3-days | [page](https://mymun.com/conferences/hammun-2026)
- 2026-09-24 to 2026-09-27 | Istanbul International MUN 2026 | Istanbul, Türkiye | removed: duration-over-3-days | [page](https://mymun.com/conferences/istanbul-international-mun-2026)
- 2026-09-24 to 2026-09-27 | JASMUN 2026 | Warsaw, Poland | removed: duration-over-3-days | [page](https://mymun.com/conferences/jasmun-2026)
- 2026-09-25 to 2026-09-26 | NDIMMUN 2026 | Delhi, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/ndimmun-2026)
- 2026-09-25 to 2026-09-27 | CNMUN IV 2026 | Karachi, Pakistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/cnmun-iv-2026)
- 2026-09-26 to 2026-09-27 | AURAMUN 2026 | Thane, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/auramun-2026)
- 2026-09-26 to 2026-09-27 | Mahapanchayat MUN - Ekklesia 2026 | Ghaziabad, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/mahapanchayat-mun-ekklesia-2026)
- 2026-09-26 to 2026-09-27 | SASMUN 2026 | Lucknow, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/sasmun-2026)
- 2026-09-26 to 2026-09-29 | MGGMUN 2026 | Madurai, India | removed: duration-over-3-days, visa-category-is-eVisa | [page](https://mymun.com/conferences/mggmun-2026)
- 2026-09-27 to 2026-09-27 | VAMUN 2026 | Bukhara, Uzbekistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/vamun-2026)
- 2026-10-01 to 2026-10-03 | clover.munn 2026 | Riyadh, Saudi Arabia | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/clover-munn-2026)
- 2026-10-01 to 2026-10-04 | PPGMUN  2026 | Varaždin, Croatia | removed: duration-over-3-days | [page](https://mymun.com/conferences/ppgmun-2026)
- 2026-10-02 to 2026-10-03 | TERMUN 2026 | Dublin, Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/termun-2026)
- 2026-10-02 to 2026-10-04 | GCS MUN 2026 | Sharjah, United Arab Emirates | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/gcs-mun-2026)
- 2026-10-03 to 2026-10-03 | ArmIntegMUN 2026 | Yerevan, Armenia | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/armintegmun-2026)
- 2026-10-03 to 2026-10-03 | VoNMUN 2026 | Abu Dhabi, United Arab Emirates | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/vonmun-2026)
- 2026-10-03 to 2026-10-04 | NTMUN 2026 | Chiang Mai, Thailand | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/ntmun-2026)
- 2026-10-03 to 2026-10-04 | zubaanmun 2026 | faridabad, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/zubaanmun-2026)
- 2026-10-03 to 2026-10-05 | NATIONAL SUMMIT 2026 | Tbilisi, Georgia | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/national-summit-2026)
- 2026-10-04 to 2026-10-07 | IMGFMUN 2026 | AMMAN, Jordan | removed: duration-over-3-days, visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/imgfmun-2026)
- 2026-10-06 to 2026-10-07 | RNSMUN 2026 | Bangalore, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/rnsmun-2026)
- 2026-10-08 to 2026-10-10 | CGSMUN 2026 | Chattogram, Bangladesh | removed: visa-category-is-visa on arrival | [page](https://mymun.com/conferences/cgsmun-2026)
- 2026-10-09 to 2026-10-11 | EMBER 2026 | Hyderabad, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/ember-2026)
- 2026-10-09 to 2026-10-11 | HHSMUN 2026 | Jodhpur, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/hhsmun-2026)
- 2026-10-09 to 2026-10-12 | PerriMUN 2026 | Prague, Czechia | removed: duration-over-3-days | [page](https://mymun.com/conferences/perrimun-2026)
- 2026-10-10 to 2026-10-11 | Aurenza MUN 2026 | Mumbai, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/aurenza-mun-2026)
- 2026-10-10 to 2026-10-11 | serpentine 2026 | DELHI, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/serpentine-2026)
- 2026-10-10 to 2026-10-11 | Serpentine MUN 2026 | Delhi, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/serpentine-mun-2026)
- 2026-10-14 to 2026-10-15 | TASMUN 2026 | DELHI, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/tasmun-2026)
- 2026-10-15 to 2026-10-18 |  IEUMUN Jr  2026 | Madrid, Spain | removed: duration-over-3-days | [page](https://mymun.com/conferences/ieumun-jr-2026)
- 2026-10-15 to 2026-10-18 | AcadeMUN 2026 | Basel, Switzerland | removed: duration-over-3-days | [page](https://mymun.com/conferences/academun-2026)
- 2026-10-16 to 2026-10-19 | KCSMUN 2026 | Budapest, Hungary | removed: duration-over-3-days | [page](https://mymun.com/conferences/kcsmun-2026)
- 2026-10-17 to 2026-10-18 | Orian MUN 2026 | Okhla,delhi, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/orian-mun-2026)
- 2026-10-17 to 2026-10-18 | SPARKIMUN 2026 | Baku, Azerbaijan | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/sparkimun-2026)
- 2026-10-18 to 2026-10-19 | GPLMUN BY UNPKFC 2026 | Bangkok, Thailand | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/gplmun-by-unpkfc-2026)
- 2026-10-19 to 2026-10-21 | MUN VEINNA 2026 | Thangadh, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/mun-veinna-2026)
- 2026-10-20 to 2026-10-23 | MiMUNucjc 2026 | Madrid, Spain | removed: duration-over-3-days | [page](https://mymun.com/conferences/mimunucjc-2026)
- 2026-10-22 to 2026-10-25 | BlackSeaMUN 2026 | Chisinau, Moldova, Republic of | removed: duration-over-3-days | [page](https://mymun.com/conferences/blackseamun-2026)
- 2026-10-22 to 2026-10-25 | FMUN  2026 | Bordeaux, France | removed: duration-over-3-days | [page](https://mymun.com/conferences/fmun-2026)
- 2026-10-23 to 2026-10-24 | Valoris 2026 | Meerut, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/valoris-2026)
- 2026-10-23 to 2026-10-25 | LLCMUN 2026 | Lahore, Pakistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/llcmun-2026)
- 2026-10-23 to 2026-10-25 | MUN by LUMEN LITERATURE CLUB 2026 | Lahore, Pakistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/mun-by-lumen-literature-club-2026)
- 2026-10-23 to 2026-10-26 | SYMUN 2026 | Seoul, Korea, Republic of | removed: duration-over-3-days, visa-category-is-eTA | [page](https://mymun.com/conferences/symun-2026)
- 2026-10-24 to 2026-10-25 | REDMUNORG 2026 | Jaipur, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/redmunorg-2026)
- 2026-10-24 to 2026-10-26 | CAUMUN 2026 | Tbilisi, Georgia | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/caumun-2026)
- 2026-10-24 to 2026-10-26 | CAUMUN T.B.P. 2026 | Tbilisi, Georgia | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/caumun-t-b-p-2026)
- 2026-10-26 to 2026-10-29 | MUNOM 2026 | Malmö, Sweden | removed: duration-over-3-days | [page](https://mymun.com/conferences/munom-2026)
- 2026-10-30 to 2026-11-01 | OxIMUN 2026 | Oxford, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/oximun-2026)
- 2026-10-30 to 2026-11-01 | TMF SUMMIT 2026 | Indore, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/tmf-summit-2026)
- 2026-10-31 to 2026-11-01 | Aetheria MUn 2026 | roorkee, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/aetheria-mun-2026)
- 2026-10-31 to 2026-11-01 | CityMUN III 2026 | Islington, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/citymun-iii-2026)
- 2026-10-31 to 2026-11-01 | Nereus 2026 | Faridabad, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/nereus-2026)
- 2026-11-02 to 2026-11-03 | VGSMUN 2026 | Sitapur, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/vgsmun-2026)
- 2026-11-03 to 2026-11-06 | ClerMUN 2026 | Clermont-Fd, France | removed: duration-over-3-days | [page](https://mymun.com/conferences/clermun-2026)
- 2026-11-06 to 2026-11-07 | BISBHMUN 2026 | Salmabad, Bahrain | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/bisbhmun-2026)
- 2026-11-06 to 2026-11-08 | CUIMUN 2026 | Cambridge, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/cuimun-2026)
- 2026-11-06 to 2026-11-08 | FaceMun UK  2026 | Manchester, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/facemun-uk-2026)
- 2026-11-06 to 2026-11-08 | MANMUN 2026 | Manchester, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/manmun-2026)
- 2026-11-06 to 2026-11-09 | GOMUN in Prague 2026 | Prague, Czechia | removed: duration-over-3-days | [page](https://mymun.com/conferences/gomun-in-prague-2026)
- 2026-11-06 to 2026-11-09 | IEUMUN 2026 | Madrid, Spain | removed: duration-over-3-days | [page](https://mymun.com/conferences/ieumun-2026)
- 2026-11-07 to 2026-11-07 | Brighton MUN 2026 | Brighton, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/brighton-mun-2026)
- 2026-11-07 to 2026-11-08 | Korea Students MUN 2026 | Seoul, Korea, Republic of | removed: visa-category-is-eTA | [page](https://mymun.com/conferences/korea-students-mun-2026)
- 2026-11-07 to 2026-11-08 | Kpsimun 2026 | Raipur, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/kpsimun-2026)
- 2026-11-07 to 2026-11-09 | BAIUSTMUN 2026 | Cumilla, Bangladesh | removed: visa-category-is-visa on arrival | [page](https://mymun.com/conferences/baiustmun-2026)
- 2026-11-12 to 2026-11-15 | UFVMUN 2026 | Madrid, Spain | removed: duration-over-3-days | [page](https://mymun.com/conferences/ufvmun-2026)
- 2026-11-12 to 2026-11-15 | WawMUN 2026 | Warsaw, Poland | removed: duration-over-3-days | [page](https://mymun.com/conferences/wawmun-2026)
- 2026-11-13 to 2026-11-14 | Kairos 2026 | Sharqiyah, Saudi Arabia | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/kairos-2026)
- 2026-11-13 to 2026-11-15 | HARTMUN 2026 | Dubai, United Arab Emirates | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/hartmun-2026)
- 2026-11-13 to 2026-11-15 | HultMUN 2026 | London, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/hultmun-2026)
- 2026-11-13 to 2026-11-16 | PSJGMUN 2026 | Hradec Králové, Czechia | removed: duration-over-3-days | [page](https://mymun.com/conferences/psjgmun-2026)
- 2026-11-14 to 2026-11-15 | HIMUN BY HARVIK 2026 | Gurugram, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/himun-by-harvik-2026)
- 2026-11-14 to 2026-11-15 | Solstice 2026 | Pune, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/solstice-2026)
- 2026-11-14 to 2026-11-15 | SURABAYAMUN 2026 | Surabaya, Indonesia | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/surabayamun-2026)
- 2026-11-18 to 2026-11-20 | ssmun 2026 | vadodara, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/ssmun-2026)
- 2026-11-20 to 2026-11-22 | DWIGHTMUN 2026 | Dubai, United Arab Emirates | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/dwightmun-2026)
- 2026-11-20 to 2026-11-22 | UCLMUN XII 2026 | London, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/uclmun-xii-2026)
- 2026-11-21 to 2026-11-21 | VNMUN ASCS 2026 | Sharjah, United Arab Emirates | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/vnmun-ascs-2026)
- 2026-11-21 to 2026-11-22 | BAYMUN XIX 2026 | Isa Town, Bahrain | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/baymun-xix-2026)
- 2026-11-21 to 2026-11-22 | Hedwig 2026 | Delhi, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/hedwig-2026)
- 2026-11-21 to 2026-11-22 | LEICMUN 2026 | Leicester, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/leicmun-2026)
- 2026-11-22 to 2026-11-22 | SIMUN Samarkand 2026 | Samarkand, Uzbekistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/simun-samarkand-2026)
- 2026-11-24 to 2026-11-27 | MUNO  2026 | Oud-Beijerland, Netherlands | removed: duration-over-3-days | [page](https://mymun.com/conferences/muno-2026)
- 2026-11-27 to 2026-11-29 | BathMUN 2026 | Bath, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/bathmun-2026)
- 2026-11-27 to 2026-11-29 | Yale MUN Korea XIV 2026 | Ilsanseo-gu, Korea, Republic of | removed: visa-category-is-eTA | [page](https://mymun.com/conferences/yale-mun-korea-xiv-2026)
- 2026-11-27 to 2026-11-29 | YMUNK 2026 | Seoul, Korea, Republic of | removed: visa-category-is-eTA | [page](https://mymun.com/conferences/ymunk-2026)
- 2026-11-27 to 2026-11-29 | YMUNSA 2026 | Bengaluru, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/ymunsa-2026)
- 2026-11-27 to 2026-11-29 | ZABMUN XIII 2026 | Karachi, Pakistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/zabmun-xiii-2026)
- 2026-11-27 to 2026-11-30 | TCMUN 2026 | Cluj-Napoca, Romania | removed: duration-over-3-days | [page](https://mymun.com/conferences/tcmun-2026)
- 2026-11-28 to 2026-11-28 | WSSMUN 2026 | london, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/wssmun-2026)
- 2026-12-03 to 2026-12-06 | BCMUN 2026 | Belconti Resort Hotel, Antalya, Türkiye | removed: duration-over-3-days | [page](https://mymun.com/conferences/bcmun-2026)
- 2026-12-03 to 2026-12-06 | MUNGLOBAL TR 2026 | Antalya, Türkiye | removed: duration-over-3-days | [page](https://mymun.com/conferences/munglobal-tr-2026)
- 2026-12-03 to 2026-12-06 | SGMUN 2026 | St.Gallen, Switzerland | removed: duration-over-3-days | [page](https://mymun.com/conferences/sgmun-2026)
- 2026-12-04 to 2026-12-07 | CWMUN Paris 2026 | Paris, France | removed: duration-over-3-days | [page](https://mymun.com/conferences/cwmun-paris-2026)
- 2026-12-04 to 2026-12-07 | IPMUN 2026 | Prague, Czechia | removed: duration-over-3-days | [page](https://mymun.com/conferences/ipmun-2026)
- 2026-12-05 to 2026-12-06 | SONMUN 2026 | Macau SAR, China, Macao | removed: visa-category-is-visa on arrival | [page](https://mymun.com/conferences/sonmun-2026)
- 2026-12-10 to 2026-12-13 | NAPLESMUN 2026 | NAPLES, Italy | removed: duration-over-3-days | [page](https://mymun.com/conferences/naplesmun-2026)
- 2026-12-12 to 2026-12-12 | DyMUN(actually DMUN but due to limitations) 2026 | Chennai, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/dymun-actually-dmun-but-due-to-limitations-2026)
- 2026-12-12 to 2026-12-12 | Zenith MUN 2026 | Raipur, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/zenith-mun-2026)
- 2026-12-17 to 2026-12-19 | TremorMUN 2026 | Riyadh, Saudi Arabia | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/tremormun-2026)
- 2026-12-18 to 2026-12-19 | the UMUN 2026 | Jodhpurs, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/the-umun-2026)
- 2026-12-18 to 2026-12-20 | ZENMUN-I 2026 | Karachi, Pakistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/zenmun-i-2026)
- 2026-12-26 to 2026-12-28 | UMNUN 2026 | Jodhpur, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/umnun-2026)
- 2027-01-05 to 2027-01-08 | FerMUN Geneva 2027 | Geneva, Switzerland | removed: duration-over-3-days | [page](https://mymun.com/conferences/fermun-geneva-2027)
- 2027-01-07 to 2027-01-10 | HMUN Dubai 2027 | Dubai, United Arab Emirates | removed: duration-over-3-days, visa-category-is-visa-required | [page](https://mymun.com/conferences/hmun-dubai-2027)
- 2027-01-14 to 2027-01-17 | IBSBMUN 2027 | Bucharest, Romania | removed: duration-over-3-days | [page](https://mymun.com/conferences/ibsbmun-2027)
- 2027-01-16 to 2027-01-17 | SEAMUN I 2027 | Bangkok, Thailand | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/seamun-i-2027)
- 2027-01-20 to 2027-01-23 | PRIMUN 2027 | Berlin, Germany | removed: duration-over-3-days | [page](https://mymun.com/conferences/primun-2027)
- 2027-01-22 to 2027-01-24 | GMC Conference 2027 | Chhatrapati Sambhajinagar, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/gmc-conference-2027)
- 2027-01-22 to 2027-01-24 | QMUN VI 2027 | London, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/qmun-vi-2027)
- 2027-01-23 to 2027-01-24 | IIMUN 2027 | Islamabad, Pakistan | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/iimun-2027)
- 2027-01-28 to 2027-01-30 | Economix MUN 2027 | Jakarta, Indonesia | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/economix-mun-2027)
- 2027-01-28 to 2027-01-30 | GdMun.Sa 2027 | Riyadh, Saudi Arabia | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/gdmun-sa-2027)
- 2027-01-28 to 2027-01-31 | PLISMUN 2027 | Prague, Czechia | removed: duration-over-3-days | [page](https://mymun.com/conferences/plismun-2027)
- 2027-02-04 to 2027-02-07 | MUNNY 2027 | Nyborg, Denmark | removed: duration-over-3-days | [page](https://mymun.com/conferences/munny-2027)
- 2027-02-05 to 2027-02-06 | Wellington MUN I 2027 | Bangkok, Thailand | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/wellington-mun-i-2027)
- 2027-02-05 to 2027-02-07 | BrisMUN 2027 | Bristol, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/brismun-2027)
- 2027-02-05 to 2027-02-08 | DUMUN 2027 | Prague, Czechia | removed: duration-over-3-days | [page](https://mymun.com/conferences/dumun-2027)
- 2027-02-06 to 2027-02-07 | RUMUN 2027 | Reading, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/rumun-2027)
- 2027-02-11 to 2027-02-14 | FAMUN 2027 | Amersfoort, Netherlands | removed: duration-over-3-days | [page](https://mymun.com/conferences/famun-2027)
- 2027-02-11 to 2027-02-14 | PyleaMUN 2027 | Thessaloniki, Greece | removed: duration-over-3-days | [page](https://mymun.com/conferences/pyleamun-2027)
- 2027-02-13 to 2027-02-14 | BYUNS 2027 | Baku, Azerbaijan | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/byuns-2026)
- 2027-02-18 to 2027-02-21 | GerMUN 2027 | Berlin, Germany | removed: duration-over-3-days | [page](https://mymun.com/conferences/germun-2027)
- 2027-02-19 to 2027-02-21 | LIMUN 2027 | London, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/limun-2027)
- 2027-02-20 to 2027-02-21 | JustitiaMUN 2027 | Ulaanbaatar, Mongolia | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/justitiamun-2027)
- 2027-02-23 to 2027-02-25 | WEMUN KOBE 2027 | Kobe, Japan | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/wemun-kobe-2027)
- 2027-02-25 to 2027-02-26 | HalcyonMUN 2027 | London, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/halcyonmun-2027)
- 2027-02-25 to 2027-02-28 | IESMUN  2027 | Warsaw, Poland | removed: duration-over-3-days | [page](https://mymun.com/conferences/iesmun-2027)
- 2027-02-25 to 2027-02-28 | StrasMUN 2027 | Strasbourg, France | removed: duration-over-3-days | [page](https://mymun.com/conferences/strasmun-2027)
- 2027-02-26 to 2027-02-27 | WCDMUN 2027 | Dublin, Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/wcdmun-2027)
- 2027-02-26 to 2027-02-28 | SISCMUN 2027 | Phnom Penh, Cambodia | removed: visa-category-is-eVisa or visa on arrival | [page](https://mymun.com/conferences/siscmun-2027)
- 2027-02-27 to 2027-02-28 | CCASMUN 2027 | Seoul, Korea, Republic of | removed: visa-category-is-eTA | [page](https://mymun.com/conferences/ccasmun-2027)
- 2027-03-05 to 2027-03-07 | ScotMUN XX 2027 | Edinburgh, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/scotmun-xx-2027)
- 2027-03-05 to 2027-03-08 | PBISMUN 2027 | Prague, Czechia | removed: duration-over-3-days | [page](https://mymun.com/conferences/pbismun-2027)
- 2027-03-09 to 2027-03-11 | MUN TOKYO 2027 | Tokyo, Japan | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/mun-tokyo-2027)
- 2027-03-11 to 2027-03-13 | SCIMUN 2027 | Shenzhen, China | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/scimun-2027)
- 2027-03-11 to 2027-03-14 | CBSMUN 2027 | Copenhagen, Denmark | removed: duration-over-3-days | [page](https://mymun.com/conferences/cbsmun-2027)
- 2027-03-11 to 2027-03-14 | MainMUN 2027 | Frankfurt am Main, Germany | removed: duration-over-3-days | [page](https://mymun.com/conferences/mainmun-2027)
- 2027-03-12 to 2027-03-14 | HabsMUN 2027 | London, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/habsmun-2027)
- 2027-03-18 to 2027-03-21 | LegaMUN 2027 | Madrid, Spain | removed: duration-over-3-days | [page](https://mymun.com/conferences/legamun-2027)
- 2027-03-18 to 2027-03-21 | MUNLM 2027 | Lyon, France | removed: duration-over-3-days | [page](https://mymun.com/conferences/munlm-2027)
- 2027-03-19 to 2027-03-22 | TrojMUN 2027 | Prague, Czechia | removed: duration-over-3-days | [page](https://mymun.com/conferences/trojmun-2027)
- 2027-04-01 to 2027-04-04 | MSKMUN 2027 | Athens, Greece | removed: duration-over-3-days | [page](https://mymun.com/conferences/mskmun-2027)
- 2027-04-08 to 2027-04-11 | Munich Diplomacy Summit 2027 | Munich, Germany | removed: duration-over-3-days | [page](https://mymun.com/conferences/munich-diplomacy-summit-2027)
- 2027-04-12 to 2027-04-15 | SIMUN 2027 | Paris, France | removed: duration-over-3-days | [page](https://mymun.com/conferences/simun-2027)
- 2027-04-16 to 2027-04-17 | SOVEREIGN MUN 2027 | noida, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/sovereign-mun-2027)
- 2027-04-17 to 2027-04-18 | EQUNIOX 2027 | gurugram, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/equniox-2027)
- 2027-04-21 to 2027-04-24 | MUNOT 2027 | Tallinn, Estonia | removed: duration-over-3-days | [page](https://mymun.com/conferences/munot-2027)
- 2027-04-23 to 2027-04-25 | CWMUN Emirates 2027 | Abu Dhabi, United Arab Emirates | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/cwmun-emirates-2027)
- 2027-04-28 to 2027-04-30 | MUN LONDON 2027 | London, United Kingdom of Great Britain and Northern Ireland | removed: visa-category-is-visa-required | [page](https://mymun.com/conferences/mun-london-2027)
- 2027-05-06 to 2027-05-09 | ISMUN 2027 | Bratislava, Slovakia | removed: duration-over-3-days | [page](https://mymun.com/conferences/ismun-2027)
- 2027-05-14 to 2027-05-16 | LUNAR MUN 2027 | HYDERABAD, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/lunar-mun-2027)
- 2027-05-26 to 2027-05-29 | PIMUN 2027 | Paris, France | removed: duration-over-3-days | [page](https://mymun.com/conferences/pimun-2027)
- 2027-06-03 to 2027-06-06 | Johann×Lennon Gymnasien Model United Nations 2027 | Berlin, Germany | removed: duration-over-3-days | [page](https://mymun.com/conferences/johannxlennon-gymnasien-model-united-nations-2027)
- 2027-06-10 to 2027-06-13 | LakeMUN 2027 | Konstanz, Germany | removed: duration-over-3-days | [page](https://mymun.com/conferences/lakemun-2027)
- 2027-06-12 to 2027-06-13 | UTOPIA 2027 | Chandigarh, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/utopia-2027)
- 2027-07-10 to 2027-07-11 | Bstmun 2027 | KARNAL, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/bstmun-2027)
- 2027-07-31 to 2027-08-01 | SHISMUN 2027 | Gurgaon, India | removed: visa-category-is-eVisa | [page](https://mymun.com/conferences/shismun-2027)

## Conferences By Start Month

### 2026-09

- 2026-09-02 to 2026-09-04 | TriMUN 2026 | Gdynia, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł290.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/trimun-2026)
- 2026-09-04 to 2026-09-06 | TEVMUN  2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł210.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/tevmun-2026)
- 2026-09-07 to 2026-09-07 | PBMUN 2026 | Paris, France | destination: 🇫🇷 France | duration: 1 days | price: €26.99 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/pbmun-2026)
- 2026-09-09 to 2026-09-11 | PlocMUN  2026 | Płock, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł220.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/plocmun-2026)
- 2026-09-10 to 2026-09-11 | AKADEMIETMUN 2026 | Sandvika, Norway | destination: 🇳🇴 Norway | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/akademietmun-2026)
- 2026-09-11 to 2026-09-13 | ABMUN 2026 | Alba Iulia, Romania | destination: 🇷🇴 Romania | duration: 3 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/abmun-2026)
- 2026-09-11 to 2026-09-13 | BanMUN 2026 | Banská Bystrica, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €35.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/banmun-2026)
- 2026-09-11 to 2026-09-13 | HoffMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł220.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/hoffmun-2026)
- 2026-09-11 to 2026-09-13 | Zeppelin MUN 2026 | Friedrichshafen, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €64.52 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/zeppelin-mun-2026)
- 2026-09-12 to 2026-09-13 | MUNch CTF 2026 | Singapore, Singapore | destination: 🇸🇬 Singapore | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/munch-ctf-2026)
- 2026-09-16 to 2026-09-16 | TNHSMUN 2026 | Aix-en-Provence, France | destination: 🇫🇷 France | duration: 1 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/tnhsmun-2026)
- 2026-09-18 to 2026-09-20 | GiessenMUN 2026 | Gießen, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €0.01 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/giessenmun-2026)
- 2026-09-19 to 2026-09-20 | THSMUN 2026 | Hong Kong, Hong Kong SAR China | destination: 🇭🇰 Hong Kong SAR | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/thsmun-2026)
- 2026-09-23 to 2026-09-25 | ISB Model United Nations 2026 | Bremen, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €70.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/isb-model-united-nations-2026)
- 2026-09-24 to 2026-09-26 | IBGMUN 2026 | Ikast, Denmark | destination: 🇩🇰 Denmark | duration: 3 days | price: kr100.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ibgmun-2026)
- 2026-09-25 to 2026-09-26 | MUNISE  2026 | Amsterdam, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munise-2026)
- 2026-09-25 to 2026-09-27 | ISPMUN 2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 3 days | price: €55.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ispmun-2026)
- 2026-09-25 to 2026-09-27 | necmun 2026 | Nicosia, Cyprus | destination: 🇨🇾 Cyprus | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/necmun-2026)
- 2026-09-25 to 2026-09-27 | SGMMUN 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sgmmun-2026)
- 2026-09-26 to 2026-09-27 | VRMMUN 2026 | Athens, Greece | destination: 🇬🇷 Greece | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/vrmmun-2026)

### 2026-10

- 2026-10-02 to 2026-10-04 | ACTMUN 2026 | Tirana, Albania | destination: 🇦🇱 Albania | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/actmun-2026)
- 2026-10-02 to 2026-10-04 | BEESMUNC 2026 | Semenyih, Malaysia | destination: 🇲🇾 Malaysia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/beesmunc-2026)
- 2026-10-02 to 2026-10-04 | RCMUN 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/rcmun-2026)
- 2026-10-02 to 2026-10-04 | VisMUN 2026 | Kraków, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł170.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/vismun-2026)
- 2026-10-07 to 2026-10-09 | MUN MALTA 2026 | La Valletta, Malta | destination: 🇲🇹 Malta | duration: 3 days | price: €189.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-malta-2026)
- 2026-10-08 to 2026-10-10 | COLMUN 2026 | Köln, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/colmun-2026)
- 2026-10-08 to 2026-10-10 | KantMUN 2026 | Berlin, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €50.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kantmun-2026)
- 2026-10-08 to 2026-10-10 | SBCAMUN 2026 | Muntinlupa City, Philippines | destination: 🇵🇭 Philippines | duration: 3 days | price: $30.00 | verified: yes | applications open: yes | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/sbcamun-2026)
- 2026-10-09 to 2026-10-11 | MUNNOVA 2026 | İzmir, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/munnova-2026)
- 2026-10-09 to 2026-10-11 | RijnMUN 2026 | Oegstgeest, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/rijnmun-2026)
- 2026-10-09 to 2026-10-11 | SKIMUN 2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €30.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/skimun-2026)
- 2026-10-10 to 2026-10-11 | ISSOMUN 2026 | Manila, Philippines | destination: 🇵🇭 Philippines | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/issomun-2026)
- 2026-10-16 to 2026-10-17 | DrugaMUN 2026 | Maribor, Slovenia | destination: 🇸🇮 Slovenia | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/drugamun-2026)
- 2026-10-16 to 2026-10-18 | CERVMUN 2026 | Bucharest, Romania | destination: 🇷🇴 Romania | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/cervmun-2026)
- 2026-10-16 to 2026-10-18 | DSAMUN 2026 | Athens, Greece | destination: 🇬🇷 Greece | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/dsamun-2026)
- 2026-10-16 to 2026-10-18 | ECPMUN  2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ecpmun-2026)
- 2026-10-16 to 2026-10-18 | TARMUN  2026 | Tarnów, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł139.90 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/tarmun-2026)
- 2026-10-17 to 2026-10-19 | ANATMUN 2026 | Adana, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/anatmun-2026)
- 2026-10-18 to 2026-10-18 | BXLMUN 2026 | Brussels, Belgium | destination: 🇧🇪 Belgium | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bxlmun-2026)
- 2026-10-19 to 2026-10-19 | HealMUN 2026 | Lyon, France | destination: 🇫🇷 France | duration: 1 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/healmun-2026)
- 2026-10-19 to 2026-10-21 | MUN VIENNA 2026 | Vienna, Austria | destination: 🇦🇹 Austria | duration: 3 days | price: €204.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-vienna-2026)
- 2026-10-23 to 2026-10-25 | AAS MUN II 2026 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: €30.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/aas-mun-ii-2026)
- 2026-10-23 to 2026-10-25 | AproMUN 2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €55.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/apromun-2026)
- 2026-10-23 to 2026-10-25 | GSMUN Cyprus 2026 | Nicosia, Cyprus | destination: 🇨🇾 Cyprus | duration: 3 days | price: €50.00 | verified: yes | applications open: yes | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/gsmun-cyprus-2026)
- 2026-10-23 to 2026-10-25 | YESMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł180.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/yesmun-2026)
- 2026-10-24 to 2026-10-24 | SAT MUN 2026 | Lyon, France | destination: 🇫🇷 France | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sat-mun-2026)
- 2026-10-24 to 2026-10-25 | ETHCW 2026 | Zurich, Switzerland | destination: 🇨🇭 Switzerland | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ethcw-2026)
- 2026-10-25 to 2026-10-25 | BEEMUN 2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 1 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/beemun-2026)
- 2026-10-28 to 2026-10-30 | StruerMUN 2026 | Struer, Denmark | destination: 🇩🇰 Denmark | duration: 3 days | price: kr0.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/struermun-2026)
- 2026-10-30 to 2026-11-01 | CoșbucMUN 2026 | Bucharest, Romania | destination: 🇷🇴 Romania | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/cosbucmun-2026)
- 2026-10-30 to 2026-11-01 | IMZMUN 2026 | Zug, Switzerland | destination: 🇨🇭 Switzerland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/imzmun-2026)
- 2026-10-30 to 2026-11-01 | KATOMUN 2026 | Katowice, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/katomun-2026)
- 2026-10-30 to 2026-11-01 | MUNOFS XIX 2026 | Singapore, Singapore | destination: 🇸🇬 Singapore | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/munofs-xix-2026)
- 2026-10-31 to 2026-11-01 | DomeMUN 2026 | Heemstede, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/domemun-2026)

### 2026-11

- 2026-11-06 to 2026-11-08 | LewMUN 2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/lewmun-2026)
- 2026-11-06 to 2026-11-08 | MUNISH 2026 | The Hague, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munish-2026)
- 2026-11-06 to 2026-11-08 | SOBMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sobmun-2026)
- 2026-11-07 to 2026-11-07 | ThIS MUN 2026 | Weimar, Germany | destination: 🇩🇪 Germany | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/this-mun-2026)
- 2026-11-07 to 2026-11-08 | Aetolia MUN 2026 | Messolonghi, Greece | destination: 🇬🇷 Greece | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/aetolia-mun-2026)
- 2026-11-07 to 2026-11-08 | OVAMUN 2026 | Ostrava, Czechia | destination: 🇨🇿 Czechia | duration: 2 days | price: Kč900.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ovamun-2026)
- 2026-11-07 to 2026-11-09 | WrocMUN 2026 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/wrocmun-2026)
- 2026-11-09 to 2026-11-11 | SGSMUN 2026 | Oeiras, Portugal | destination: 🇵🇹 Portugal | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sgsmun-2026)
- 2026-11-12 to 2026-11-14 | TSS MUN 2026 | Seeb, Oman | destination: 🇴🇲 Oman | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (14 days) | [page](https://mymun.com/conferences/tss-mun-2026)
- 2026-11-13 to 2026-11-14 | VM MUN 2026 | Kaunas, Lithuania | destination: 🇱🇹 Lithuania | duration: 2 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/vm-mun-2026)
- 2026-11-13 to 2026-11-15 | ILGMUN IV 2026 | Prishtina, Kosovo | destination: 🇽🇰 Kosovo | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/ilgmun-iv-2026)
- 2026-11-13 to 2026-11-15 | KAMUN: The Black Forest Summit 2026 | Karlsruhe, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €85.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kamun-the-black-forest-summit-2026)
- 2026-11-13 to 2026-11-15 | KleMUN 2026 | Kleve, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €35.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/klemun-2026)
- 2026-11-14 to 2026-11-15 | ETHMUNCriss 2026 | Zurich, Switzerland | destination: 🇨🇭 Switzerland | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ethmuncriss-2026)
- 2026-11-14 to 2026-11-16 | DSSMUN  2026 | Sofia, Bulgaria | destination: 🇧🇬 Bulgaria | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/dssmun-2026)
- 2026-11-14 to 2026-11-16 | ti-mun 2026 | Lugano, Switzerland | destination: 🇨🇭 Switzerland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ti-mun-2026)
- 2026-11-16 to 2026-11-18 | StolaMUN 2026 | Prague, Czechia | destination: 🇨🇿 Czechia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/stolamun-2026)
- 2026-11-18 to 2026-11-20 | MUN Alfrink 2026 | Zoetermeer, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-alfrink-2026)
- 2026-11-18 to 2026-11-20 | MUNIST 2026 | Toulouse, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munist-2026)
- 2026-11-19 to 2026-11-21 | StetiMUN 2026 | Szczecin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł250.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/stetimun-2026)
- 2026-11-20 to 2026-11-22 | Aix MUN 2026 | Aix-en-Provence, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/aix-mun-2025)
- 2026-11-20 to 2026-11-22 | AmsterMUN 2026 | Amsterdam, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: €60.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/amstermun-2026)
- 2026-11-20 to 2026-11-22 | EPMUN 2026 | nicosia, Cyprus | destination: 🇨🇾 Cyprus | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/epmun-2026)
- 2026-11-20 to 2026-11-22 | GDNMUN 2026 | Gdańsk, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł249.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/gdnmun-2026)
- 2026-11-20 to 2026-11-22 | IASMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł250.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/iasmun-2026)
- 2026-11-20 to 2026-11-22 | KlaMUN 2026 | Kladno, Czechia | destination: 🇨🇿 Czechia | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/klamun-2026)
- 2026-11-20 to 2026-11-22 | MUNLawS 2026 | Ljubljana, Slovenia | destination: 🇸🇮 Slovenia | duration: 3 days | price: €95.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munlaws-2026)
- 2026-11-20 to 2026-11-22 | TimișoaraMUN 2026 | Timișoara, Romania | destination: 🇷🇴 Romania | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/timisoaramun-2026)
- 2026-11-21 to 2026-11-22 | MUNISA 2026 | Amstelveen, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munisa-2026)
- 2026-11-24 to 2026-11-26 | MUN BERLIN 2026 | Berlin, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: €203.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-berlin-2026)
- 2026-11-27 to 2026-11-29 | AMLMUN 2026 | Athens, Greece | destination: 🇬🇷 Greece | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/amlmun-2026)
- 2026-11-27 to 2026-11-29 | BratMUN 2026 | Bratislava, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €80.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bratmun-2026)
- 2026-11-27 to 2026-11-29 | DeMUN 2026 | Gliwice, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/demun-2026)
- 2026-11-27 to 2026-11-29 | Mothenburg  2026 | Malmö, Sweden | destination: 🇸🇪 Sweden | duration: 3 days | price: €25.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mothenburg-2026)
- 2026-11-28 to 2026-11-30 | ILSMUN 2026 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ilsmun-2026)

### 2026-12

- 2026-12-03 to 2026-12-05 | SJSMUN 2026 | Carcavelos, Portugal | destination: 🇵🇹 Portugal | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sjsmun-2026)
- 2026-12-04 to 2026-12-06 | EkoMUN 2026 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ekomun-2026)
- 2026-12-04 to 2026-12-06 | ENKAMUN 2026 | Sakarya, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/enkamun-2026)
- 2026-12-04 to 2026-12-06 | Sava Model United Nations 2026 | Bucharest, Romania | destination: 🇷🇴 Romania | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sava-model-united-nations-2026)
- 2026-12-04 to 2026-12-06 | UNIMUN 2026 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł167.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/unimun-2026)
- 2026-12-05 to 2026-12-06 | BPMUN  2026 | Orsay, France | destination: 🇫🇷 France | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bpmun-2026)
- 2026-12-06 to 2026-12-07 | AMEMUN 2026 | Ramallah, Palestine, State of | destination: 🇵🇸 Palestine | duration: 2 days | price: $50.00 | verified: yes | applications open: yes | visa: Visa-free | [page](https://mymun.com/conferences/amemun-2026)
- 2026-12-11 to 2026-12-13 | KOCHMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł230.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kochmun-2026)
- 2026-12-11 to 2026-12-13 | MarieMUN 2026 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł180.00 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mariemun-2026)
- 2026-12-18 to 2026-12-20 | KOMUN 2026 | Košice, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: €32.10 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/komun-2026)

### 2027-01

- 2027-01-04 to 2027-01-06 | PozMUN 2027 | Poznań, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/pozmun-2027)
- 2027-01-15 to 2027-01-17 | BiaMUN 2027 | Białystok, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł161.29 | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/biamun-2027)
- 2027-01-15 to 2027-01-17 | CLVMUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/clvmun-2026)
- 2027-01-15 to 2027-01-17 | KOSZMUN 2027 | Koszalin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł200.00 | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/koszmun-2027)
- 2027-01-15 to 2027-01-17 | MUNICP Reims XXVII 2027 | Reims, France | destination: 🇫🇷 France | duration: 3 days | price: €15.00 | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/municp-reims-xxvii-2027)
- 2027-01-16 to 2027-01-16 | ACMUN 2027 | Barcelona, Spain | destination: 🇪🇸 Spain | duration: 1 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/acmun-2027)
- 2027-01-16 to 2027-01-17 | CalsMUN 2027 | Nieuwegein, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/calsmun-2027)
- 2027-01-20 to 2027-01-22 | MUNoV 2027 | Vienna, Austria | destination: 🇦🇹 Austria | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/munov-2027)
- 2027-01-22 to 2027-01-24 | BayernMUN - MUN in the heart of Europe 2027 | Nuremberg, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bayernmun-mun-in-the-heart-of-europe-2027)
- 2027-01-23 to 2027-01-24 | ErasMUN 2027 | Rotterdam, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/erasmun-2027)
- 2027-01-29 to 2027-01-31 | MarMUN 2027 | Martin, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/marmun-2027)
- 2027-01-29 to 2027-01-31 | PrusMUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/prusmun-2027)
- 2027-01-29 to 2027-01-31 | Tenby Ipoh MUN 2027 | Ipoh, Malaysia | destination: 🇲🇾 Malaysia | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/tenby-ipoh-mun-2027)

### 2027-02

- 2027-02-04 to 2027-02-06 | CWMUN Rome 2027 | Rome, Italy | destination: 🇮🇹 Italy | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/cwmun-rome-2027)
- 2027-02-05 to 2027-02-07 | POMUN 2027 | Szczecin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/pomun-2027)
- 2027-02-05 to 2027-02-07 | ZARAMUN 2027 | Zaragoza, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/zaramun-2027)
- 2027-02-10 to 2027-02-12 | MUN BRUXELLES 2027 | Bruxelles, Belgium | destination: 🇧🇪 Belgium | duration: 3 days | price: €189.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-bruxelles-2027)
- 2027-02-19 to 2027-02-20 | TISMUN 2027 | Tirana, Albania | destination: 🇦🇱 Albania | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/tismun-2027)
- 2027-02-19 to 2027-02-21 | BIELMUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bielmun-2026)
- 2027-02-24 to 2027-02-26 | CWMUN Singapore 2027 | Singapore, Singapore | destination: 🇸🇬 Singapore | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/cwmun-singapore-2027)
- 2027-02-24 to 2027-02-26 | OPOMUN 2027 | Porto, Portugal | destination: 🇵🇹 Portugal | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/opomun-2027)
- 2027-02-26 to 2027-02-27 | OskarMUN 2027 | Munich, Germany | destination: 🇩🇪 Germany | duration: 2 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/oskarmun-2027)
- 2027-02-26 to 2027-02-28 | AKAMUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/akamun-2027)

### 2027-03

- 2027-03-02 to 2027-03-04 | MUN ROME 2027 | Rome, Italy | destination: 🇮🇹 Italy | duration: 3 days | price: €189.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-rome-2027)
- 2027-03-05 to 2027-03-07 | PS-MUN 2027 | Athens, Greece | destination: 🇬🇷 Greece | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ps-mun-2027)
- 2027-03-05 to 2027-03-07 | SHPGMUN 2027 | Pulau Pinang (Penang), Malaysia | destination: 🇲🇾 Malaysia | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (30 days) | [page](https://mymun.com/conferences/shpgmun-2027)
- 2027-03-05 to 2027-03-07 | SPLIMUN 2027 | Lille, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/splimun-2027)
- 2027-03-05 to 2027-03-07 | ZISMUN 2027 | Zurich, Switzerland | destination: 🇨🇭 Switzerland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/zismun-2027)
- 2027-03-06 to 2027-03-08 | EIBMUN 2027 | Paris, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/eibmun-2027)
- 2027-03-10 to 2027-03-12 | SEKMUN 2027 | Madrid, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sekmun-2027)
- 2027-03-12 to 2027-03-13 | NATMUN 2027 | Aix en Provence, France | destination: 🇫🇷 France | duration: 2 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/natmun-2027)
- 2027-03-12 to 2027-03-14 | TBSMUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/tbsmun-2027)
- 2027-03-13 to 2027-03-14 | SailMUN 2027 | Wassenaar, Netherlands | destination: 🇳🇱 Netherlands | duration: 2 days | price: €50.00 | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/sailmun-2027)
- 2027-03-19 to 2027-03-21 | HKMUN 2027 | Hong Kong, China | destination: 🇭🇰 Hong Kong SAR | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/hkmun-2027)
- 2027-03-19 to 2027-03-21 | IPSMUN 2027 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ipsmun-2027)
- 2027-03-19 to 2027-03-21 | MUN ST DO 2027 | PAU, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-st-do-2027)
- 2027-03-24 to 2027-03-26 | MUN PARIS 2027 | Paris, France | destination: 🇫🇷 France | duration: 3 days | price: €204.00 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mun-paris-2027)
- 2027-03-26 to 2027-03-28 | ANVMUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: yes | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/anvmun-2027)

### 2027-04

- 2027-04-01 to 2027-04-03 | MVNU. 2027 | VOIRON, France | destination: 🇫🇷 France | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/mvnu-2027)
- 2027-04-02 to 2027-04-04 | EBSMUN 2027 | Oestrich-Winkel, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/ebsmun-2027)
- 2027-04-07 to 2027-04-09 | NOVOMUN 2027 | Maia, Portugal | destination: 🇵🇹 Portugal | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/novomun-2027)
- 2027-04-09 to 2027-04-11 | FioMUN 2027 | Lisse, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/fiomun-2027)
- 2027-04-16 to 2027-04-18 | BCIMUN 2027 | Athens, Greece | destination: 🇬🇷 Greece | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bcimun-2027)
- 2027-04-16 to 2027-04-18 | TIMUN 2027 | Tilburg, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/timun-2027)
- 2027-04-22 to 2027-04-24 | BIMUN 2027 | Barcelona, Spain | destination: 🇪🇸 Spain | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/bimun-2027)
- 2027-04-23 to 2027-04-25 | KrakMUN 2027 | Kraków, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/krakmun-2027)
- 2027-04-30 to 2027-05-02 | URUMUN 2027 | Utrecht, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/urumun-2027)

### 2027-05

- 2027-05-14 to 2027-05-16 | LitMUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: yes | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/litmun-2027)
- 2027-05-28 to 2027-05-30 | LUBMUN 2027 | Lublin, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/lubmun-2027)
- 2027-05-28 to 2027-05-30 | SCMUN 2027 | Rzeszów, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/scmun-2027)
- 2027-05-28 to 2027-05-30 | SilMUN 2027 | Opole, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/silmun-2027)

### 2027-06

- 2027-06-04 to 2027-06-06 | IMUNA 2027 | Alkmaar, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: €60.00 | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/imuna-2027)
- 2027-06-04 to 2027-06-06 | MaasMUN 2027 | Maastricht, Netherlands | destination: 🇳🇱 Netherlands | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/maasmun-2027)
- 2027-06-13 to 2027-06-15 | HITMUN 2027 | Recklinghausen, Germany | destination: 🇩🇪 Germany | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/hitmun-2027)
- 2027-06-18 to 2027-06-20 | LeoMUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/leomun-2027)

### 2027-07

- 2027-07-02 to 2027-07-04 | ASC MUN 2027 | Warsaw, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/asc-mun-2027)

### 2027-08

- 2027-08-27 to 2027-08-29 | NEOMODELMUN 2027 | kayseri, Türkiye | destination: 🇹🇷 Türkiye | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days) | [page](https://mymun.com/conferences/neomodelmun-2026)

### 2027-09

- 2027-09-03 to 2027-09-05 | TORTAMUN 2027 | Jędrzejów, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/tortamun-2027)

### 2027-10

- 2027-10-29 to 2027-10-31 | Montana MUN 2027 | Zug, Switzerland | destination: 🇨🇭 Switzerland | duration: 3 days | price: n/a | verified: no | applications open: no | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/montana-mun-2027)

### 2027-11

- 2027-11-26 to 2027-11-28 | PolHistMUN 2027 | Wrocław, Poland | destination: 🇵🇱 Poland | duration: 3 days | price: zł199.99 | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/polhistmun-2026)

### 2029-06

- 2029-06-01 to 2029-06-03 | KvartMUN 2029 | Kvarta A, Slovakia | destination: 🇸🇰 Slovakia | duration: 3 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/kvartmun-2029)
- 2029-06-30 to 2029-07-01 | HP MUN 2029 | Horná Potôň, Slovakia | destination: 🇸🇰 Slovakia | duration: 2 days | price: n/a | verified: no | applications open: yes | visa: Visa-free (90 days within 180 days) | [page](https://mymun.com/conferences/hp-mun-2029)
