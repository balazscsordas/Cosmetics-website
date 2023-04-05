import { StaticImageData } from "next/image"
import gepiKezelesek from "../../public/images/BB-glow-tanfoly.jpg"
import klasszikusKezelesek from "../../public/images/klasszikus_kezelesek_img.jpg"
import brunoVasariKezelesek from "../../public/images/BrunoVasari_img.jpg"
import relaxKezelesek from "../../public/images/Relax_img.jpg"
import gyantazasKezeles from "../../public/images/Gyantazas_kezeles_img.jpg"
import szempillaKezelesek from "../../public/images/szempilla_img.jpg"
import pedikurKezelesek from "../../public/images/Pedikur_img.jpg"

export interface Treatment {
  treatmentName: string
  treatmentSubname?: string
  treatmentDescription?: string
  treatmentPlusDescription?: string
  treatmentPrice: string
  treatmentPlusPrice?: string
  treatmentTime?: string
  treatmentPlusTime?: string
  treatmentSteps?: string[]
}

export interface Service {
  name: string
  image: StaticImageData
  urlPath: string
  treatments: Treatment[]
}

const services: Service[] = [
  {
    name: "Gépi kezelések",
    image: gepiKezelesek,
    urlPath: "bb-glow",
    treatments: [
      {
        treatmentName: "BB Glow mezoterápiás kezelés",
        treatmentDescription:
          "BB Glow egy viszonylag új kozmetikai eljárás, amely során tápláló szérumokat, speciális organikus pigmenteket juttatunk a bőr felső rétegébe Mezopen készülék segítségével. A kezelés során szemmel láthatatlan, mikro tűszúrásokat ejtünk a bőr felszínén, ami segíti ezen hatóanyagok megfelelő felszívódását és stimulálja a kollagéntermelést. Az eljárás célja a bőr színének és textúrájának javítása, valamint az apróbb bőrhibák, foltok eltüntetése, halványítása.",
        treatmentPrice: "77000 Ft - (3 alkalmat tartalmaz)",
        treatmentTime: "3 alkalmas kezelés",
        treatmentSteps: [
          "Az arc gyengéd megtisztítása a szennyeződésektől",
          "A bőr PH egyensúlyának visszaállítása",
          "Arcradírozás puhává, simává és egyenletesebbé téve a bőrt",
          "Bőrtípusnak megfelelő hatóanyagos, tápláló arcmasszázs, felpuhítás",
          "Mitesszerek, komedók eltávolítása",
          "Antiszeptikus, összehúzó tonizálás",
          "Nyugtató, pórusösszehúzó pakolás Bio gyógynövény összetevőkkel",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },
    ],
  },
  {
    name: "Klasszikus arckezelések",
    image: klasszikusKezelesek,
    urlPath: "klasszikusKezelesek",
    treatments: [
      {
        treatmentName: "Klasszikus nagykezelés",
        treatmentDescription:
          "Az ápolt és szép arcbőr rendszeres tisztítása elengedhetetlen része a bőr ápolásának. A mitesszerek eltávolítása mellett célunk a bőr megfelelő higéniás állapotának fenntartása, a pórusok összehúzása, gyulladásos folyamatok csökkentése. A kezelés eredményeképpen a pórusok kitisztulnak, tapintása simává válik, a bőr felfrissül így annak oxigénfelvétele is fokozódik.",
        treatmentPrice: "10500 Ft",
        treatmentTime: "90 perc",
        treatmentSteps: [
          "Az arc gyengéd megtisztítása a szennyeződésektől",
          "A bőr PH egyensúlyának visszaállítása",
          "Arcradírozás puhává, simává és egyenletesebbé téve a bőrt",
          "Bőrtípusnak megfelelő hatóanyagos, tápláló arcmasszázs, felpuhítás",
          "Mitesszerek, komedók eltávolítása",
          "Antiszeptikus, összehúzó tonizálás",
          "Nyugtató, pórusösszehúzó pakolás Bio gyógynövény összetevőkkel",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },

      {
        treatmentName: "Klasszik+ nagykezelés",
        treatmentDescription:
          "A klasszik+ nagykezelés azoknak a vendégeknek ajánlott, akiknek fontos, hogy az arctisztítás mellett egyidőben hidratálják és feltöltsék bőrüket értékes, ásványi anyagokban gazdag hatóanyagokkal ultrahang segítségével. Az arcbőr tisztítása után VIO pórusösszehúzó, mélyfertőtlenítő és gyulladáscsökkentő elektrokozmetikai kezelést alkalmazok, mely intenzívebb bőrhigéniás állapot kialakulását segíti elő. A kezelés zárásaként egy relaxáló dekoltázsmasszázs is gondoskodik a maximális pihentető élményről.",
        treatmentPrice: "14900 Ft",
        treatmentTime: "90 perc",
        treatmentSteps: [
          "Az arc gyengéd megtisztítása a szennyeződésektől",
          "A bőr PH egyensúlyának visszaállítása",
          "Arcradírozás puhává, simává és egyenletesebbé téve a bőrt",
          "Bőrtípusnak megfelelő hatóanyagos, tápláló arcmasszázs, felpuhítás",
          "Mitesszerek, komedók eltávolítása",
          "Antiszeptikus, összehúzó tonizálás",
          "Vio elektrokozmetikai kezelés (pórusösszehúzó és mélyfertőtlenítő, szabályozza a faggyúműködést)",
          "Ultrahangos hatóanyagbevitel tápláló, vitalizáló peptidekkel",
          "Relaxáló élményt nyújtó dekoltázsmasszázs",
          "Nyugtató, pórusösszehúzó pakolás Bio gyógynövény összetevőkkel",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },

      {
        treatmentName: "Tinikezelés",
        treatmentDescription:
          "Az akne, mitesszer és a pattanás a tinédzserek leggyakoribb bőrpanasza.A hormonális változások következtében a bőrkép megváltozik, átmeneti vagy tartós bőrproblémák alakulnak ki. Ilyenkor érdemes rendszeresen tisztítani az arcbőrt mellyel kordában tartjuk a bőr állapotát és megakadályozhatjuk a súlyosabb aknék kialakulását. Problémás bőr esetén a kezelést havonta ajánlott ismételni.",
        treatmentPrice: "9000 Ft",
        treatmentTime: "80 perc",
        treatmentSteps: [
          "Az arc gyengéd megtisztítása a szennyeződésektől",
          "A bőr PH egyensúlyának visszaállítása",
          "Arcradírozás puhává, simává és egyenletesebbé téve a bőrt",
          "Felpuhítás",
          "Mitesszerek, komedók eltávolítása",
          "Antiszeptikus, összehúzó tonizálás",
          "Nyugtató, pórusösszehúzó pakolás Bio gyógynövény összetevőkkel",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },

      {
        treatmentName: "Peptides kiskezelés",
        treatmentDescription:
          "A Peptides kiskezelésnek köszönhetően a bőr hidratáltsága fokozódik, a bőr energetizált, üde és friss lesz. Javul az arcbőr oxigén és tápanyag ellátottsága, bársonyos tapintású lesz. Személyre szabott kezelés vízhiányos, fakó, problémás bőrtípusra egyaránt.",
        treatmentPrice: "9500 Ft",
        treatmentTime: "60 perc",
        treatmentSteps: [
          "Az arc gyengéd megtisztítása a szennyeződésektől",
          "A bőr PH egyensúlyának visszaállítása",
          "Arcradírozás puhává, simává és egyenletesebbé téve a bőrt",
          "Frissítő arcmasszázs speciális masszázskrémmel",
          "Peptides hatóanyagbevitel ultrahanggal",
          "Vitalizáló, tápláló pakolás bőrtípusnak megfelelően",
          "Relaxáló élményt nyújtó dekoltázsmasszázs",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },

      {
        treatmentName: "Kóstoló kiskezelés",
        treatmentDescription:
          "Szakadj ki a hétköznapok rohanásából és töltődj fel a mindössze 35 perces frissítő Kóstoló kezeléssel!",
        treatmentPrice: "6500 Ft",
        treatmentTime: "35 perc",
        treatmentSteps: [
          "Az arc gyengéd megtisztítása a szennyeződésektől",
          "Frissítő tonizálás",
          "Arcradírozás puhává, simává és egyenletesebbé téve a bőrt",
          "Frissítő arcmasszázs speciális masszázskrémmel",
          "Peptides, vitalizáló ampulla felvitele",
          "Relaxáló élményt nyújtó dekoltázsmasszázs",
          "Befejező ápolás",
        ],
      },
    ],
  },

  {
    name: "Bruno Vassari speciális arckezelések",
    image: brunoVasariKezelesek,
    urlPath: "specialisArckezelesek",
    treatments: [
      {
        treatmentName: "LAB Division Collagen Booster - Face Lifting terápia",
        treatmentSubname:
          "Fiatalodj műtéti beavatkozás nélkül, fájdalommentesen!",
        treatmentPlusDescription:
          "Kezelések gyakorisága: heti 1 alkalom 5 héten keresztül, kizárólag bérlet formájában vásárolható meg, melynek teljes ára: 117500 Ft (5 alkalmat tartalmaz)",
        treatmentDescription:
          "A kúrakezelés az értékes peptid- komplex, a kollagén és C-vitamin antioxidáns hatása révén fejti ki feszesítő hatását, mélyen táplálja és regenerálja a bőrt, megvédi azt az öregedés első jeleitől. Fő tevékenysége a kollagén termelés fokozása a bőrben. A kollagén és elasztin rostok feszesebbé válnak, az eredmény kicsattanóan sima és feszes bőr, melynek hatása egyéni adottságoktól függően akár 2 évig is eltarthat.",
        treatmentPrice: "23500 Ft / alkalom",
        treatmentTime: "90 perc",
        treatmentSteps: [
          "Letisztítás",
          "A bőr PH egyensúlyának visszaállítása",
          "Mikrodermabrázió hatású bambusz kristály peeling felvitele",
          "Frissítő arcmasszázs speciális hatóanyagokkal",
          "Speciális peptid-komplex szérum bevitele ultrahanggal",
          "Kollagénes fátyolmaszk felvitele az arc és a nyak területére",
          "Kellemes dekoltázsmasszázs",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },
      {
        treatmentName: "KIANTY Polifenolos anti-aging kezelés",
        treatmentSubname:
          "Speciális kezelés a szem és az ajkak területére fokuszálva",
        treatmentDescription:
          "A Kianty polifenolos anti-ageing kezelés magas hatóanyag és flavonoid tartalmával veszi fel a harcot a bőr öregedése ellen, speciálisan célozza meg a szem és az ajak kontúrját. A kezelés stimulálja a kollagén és elasztin szintézist a bőrben, halványítja a már kialakult ráncokat, sötét karikákat. Késlelteti az öregedési folyamatokat, enyhíti a szem körüli esetleges puffadtságot, valamint rugalmassá teszi a kezelt területet.",
        treatmentPrice: "17500 Ft",
        treatmentTime: "80 perc",
        treatmentSteps: [
          "Letisztítás",
          "A bőr PH egyensúlyának visszaállítása",
          "Vulkáni kőzetes kettős hatású peeling felvitele",
          "Frissítő arcmasszázs speciális hatóanyagokkal",
          "Ultrahangos hatóanyagbevitel az egész arc területére, polifenolos szérum a szem és ajak területére",
          "Alginátos maszk a szem és ajak területére, vitalizáló krémpakolás az arc többi területére",
          "Kellemes dekoltázsmasszázs",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },
      {
        treatmentName: "Cell Active növényi őssejtes kezelés",
        treatmentSubname: "Szezonális limitált kezelés",
        treatmentDescription:
          "Intenzív bőrfiatalító, regeneráló kezelés, érett, igénybevett bőr kezelésére, arc, nyak, és dekoltázs ápolással. A kezelés egy egyedi növényi őssejtes formulán alapszik, melyek a ma ismert legjobb bőrregeneráló anyagok, legyen szó idősödő bőrről, hegekről, foltokról, öregedés késleltesésről. A növényi őssejtek képesek pozitívan befolyásolni a bőr sejtmegújulási, regenerálódási és öregedési folyamatait, mindemellett a kezelés rendkívül pihentető, relaxáló élményt is nyújt egyben. Az eredmény egy hidratált, simább, feszesebb bőr, mely ellenállóbb a környezet káros hatásaival és az öregedési folyamatokkal szemben.",
        treatmentPrice: "16500 Ft",
        treatmentTime: "80 perc",
        treatmentSteps: [
          "Letisztítás",
          "A bőr PH egyensúlyának visszaállítása",
          "Mikrodermabrázió hatású bambusz kristály peeling",
          "Frissítő arcmasszázs speciális hatóanyagokkal",
          "Magas őssejt tartalmú koncentrátum bevitele ultrahanggal",
          "Értékes ásványi anyagokkal átitatott arcot és nyakat lefedő fátyolmaszk felhelyezése",
          "Kellemes dekoltázsmasszázs",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },

      {
        treatmentName: "Bio Ceuticals intenzív feszesítő, antioxidáns kezelés",
        treatmentDescription:
          "Lifting hatást nyújtó kezelés 100%-ban természetes eredetű anyagokkal. Tökéletes megoldás az arcbőr petyhüdtségének csökkentésére, a feszesség növelésére és a bőr korai öregedésének megelőzésére. Magas antioxidáns tartalmának köszönhetően hatástalanítja a napsugárzás és káros környezeti hatások által keletkezett szabadgyököket, csökkenti a mimikai és mélyebb ráncok megjelenését, egységessé teszi a bőr tónusát, csökkenti a pigmentáció mértékét.",
        treatmentPrice: "15500 Ft",
        treatmentTime: "80 perc",
        treatmentSteps: [
          "Letisztítás",
          "A bőr PH egyensúlyának visszaállítása",
          "100%-ig természetes AHA-koktél zöld tea aprószemcsés peelinggel gazdagítva",
          "Frissítő arcmasszázs speciális hatóanyagokkal",
          "Feszesítő és antioxidáns tartalmú koncentrátum felvitele",
          "Lifting hatású krémes állagú maszk felvitele",
          "Kellemes dekoltázsmasszázs",
          "Tónusfokozó befejező ápolás",
          "Fényvédelem",
        ],
        treatmentPlusDescription:
          "Ultrahangos hatóanyag bevitellel, nyak és dekoltázsápolással:",
        treatmentPlusPrice: "18500 Ft",
        treatmentPlusTime: "90 perc",
      },

      {
        treatmentName: "HA50X Hyaluronsavas bőrfeltöltő kezelés",
        treatmentDescription:
          "A vízhiányos és fakó bőr vitalizálására. A HA50X kezelése a kis- és nagy molekulatömegű speciális hialuronsav formula segítségével fejti ki jótékony hatását. Azonnali bőrfeltöltő hatást eredményez, a bőr mélyebb rétegébe eljutva mélyen hidratálják azt. A kezelés hatására a bőr visszanyeri vitalitását, hidratáltságát, serkenti a kollagénszálakat stabilizáló enzimek működését, fokozódik a bőr rugalmassága, késlelteti a bőr öregedést.",
        treatmentPrice: "13500 Ft",
        treatmentTime: "60 perc",
        treatmentSteps: [
          "Letisztítás",
          "A bőr PH egyensúlyának visszaállítása",
          "Vulkáni kőzetes kettős hatású peeling-maszk felvitele",
          "Frissítő arcmasszázs speciális hatóanyagokkal",
          "Különböző molekulatömegű hialuronsavat tartalmazó koncentrátum bevitele ultrahanggal",
          "Pro- Hyaluronic maszk felvitele",
          "Kellemes dekoltázsmasszázs",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },

      {
        treatmentName: "Aqua Genomics intenzív mélyhidratáló kezelés",
        treatmentDescription:
          "Maximális hidratálás és ápolás a dehidratált,száraz, érzékeny bőrre. A vízhiányos bőr gyakran érzékennyé válik mivel természetes védelmi funkciója megbomlik. A bőr felszíne érdessé válhat, kellemetlen feszülés és bőrpír is kísérheti. Az Aqua Genomics termékcsalád a bőr legmélyebb rétegében, gén szinten fejti ki mélyhidratáló hatását. Stimulálja a bőrben a természetes hidratáló faktorokat, lelassítja a vízvesztés folyamatát. A kezelések hatására a bőr visszanyeri rugalmasságát és puha tapintású lesz. Bőrérzékenység esetén megszünteti a kellemetlen feszülést, viszketést, helyreállítja a bőr természetes védőrétegét és késlelteti az öregedési folyamatokat. A fakó bőr újra visszanyeri természetes fényét.",
        treatmentPrice: "13500 Ft",
        treatmentTime: "60 perc",
        treatmentSteps: [
          "Letisztítás",
          "A bőr PH egyensúlyának visszaállítása",
          "Vitalizáló enzim peeling",
          "Frissítő arcmasszázs speciális hatóanyagokkal",
          "Intenzív hidratáló szérum bevitele ultrahanggal",
          "Tengervizes alginát maszk felvitele",
          "Kellemes dekoltázsmasszázs",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },

      {
        treatmentName: "White pigmentfolt halványító kezelés",
        treatmentDescription:
          "Pigmentfoltok általában akkor alakulnak ki, amikor a melanin képzés folyamatában biokémiai zavar áll fel. Leggyakrabban UV sugárzás következménye, de kialakulhat gyógyszerek, hormonális változás vagy a bőr öregedési folyamatai miatt. A kezelés szabályozza a melanin termelést aminek hatására a pigmentfoltok halványodnak. A bőr visszanyeri természetes fényét , egyenletesebb bőrképet kapunk.",
        treatmentPrice: "9500 Ft",
        treatmentTime: "60 perc",
        treatmentSteps: [
          "Letisztítás",
          "A bőr PH egyensúlyának visszaállítása",
          "Bőrmegújító peeling",
          "Frissítő arcmasszázs speciális hatóanyagokkal",
          "Halványító szérum felvitele",
          "Intenzív világosító alginátos maszk felvitele",
          "Kellemes dekoltázsmasszázs",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },

      {
        treatmentName:
          "Pure Solutions faggyúmirigy termelést szabályozó kezelés",
        treatmentDescription:
          "Zsíros, pattanásos bőr kezelésére. A faggyúmirigy fokozott aktivitásának eredményeképpen a bőr zsírossá válik, a pórusok eltömődhetnek a faggyú és az elpusztult hámsejtek keveréke által. A bőrön pattanások, mitesszerek, mély fájdalmas ciszták alakulhatnak ki. A kezeléssorozat hatására a faggyumirigyek aktivitása csökken, a pattanások megjelenése mérséklődik, matt és egyenletes bőrképet eredményez. Hidratálja a bőrt.",
        treatmentPrice: "9500 Ft",
        treatmentTime: "60 perc",
        treatmentSteps: [
          "Letisztítás",
          "A bőr PH egyensúlyának visszaállítása",
          "AHA + BHA hámlasztás",
          "Frissítő arcmasszázs speciális hatóanyagokkal",
          "Niacinamid és szalicilsav tartalmú koncentrátum felvitele",
          "Mattító, nyugtató összetevőket tartalmazó alginátos maszk felvitele",
          "Kellemes dekoltázsmasszázs",
          "Mattító befejező ápolás",
          "Fényvédelem",
        ],
      },

      {
        treatmentName: "Glikolsavas bőrmegújító kezelés",
        treatmentDescription:
          "Pigmentfoltos, pattanásos, érett bőrök kezelésére. A kezelés során a glikolsav és a C-vitamin együttes erővel segít eltávolítani az elhalt hámsejteket, aktiválja a sejtek megújulását, egységes tónusú bőrt eredményez. Kezeli a napkárosodás hatásait, halványítja a pigmentfoltokat. Javul a bőr feszessége, halványulnak a finomabb ráncok és hegek. Összességében javítja a bőr textúráját, külső megjelenését. A kezelés kúraszerű alkalmazása javasolt, 3-6 alkalom, heti illetve kétheti rendszerességgel ismételve a bőr állapotának függvényében.",
        treatmentPrice: "8500 Ft",
        treatmentTime: "45 perc",
        treatmentSteps: [
          "Letisztítás",
          "A bőr PH egyensúlyának visszaállítása",
          "Glikolsavas hámlasztás",
          "Tápláló arcmasszázs speciális hatóanyagokkal",
          "Peptides hidratáló szérum felvitele",
          "Befejező ápolás",
          "Fényvédelem",
        ],
      },
    ],
  },

  {
    name: "Relaxáló kezelések",
    image: relaxKezelesek,
    urlPath: "relaxaloKezelesek",
    treatments: [
      {
        treatmentName: "Relax kezelés",
        treatmentDescription:
          "Szeretnél kiszakadni a stresszes hétköznapi nyüzsgésből egy kis időre, és teljesen feltöltődve, újult erővel vágnál neki a teendőknek? Az arc -és dekoltázsmasszázs a pihentető élményen felül segít a bőr feszesebbé tételében, ami ennek köszönhetően rugalmasabbá, fiatalosabbá válik, késlelteti az öregedési folyamatokat. Amellett, hogy puhává és bársonyossá teszi a bőrt, általános feszültségoldó, közérzetjavító és nyugtató hatást fejt ki.",
        treatmentPrice: "4800 Ft",
        treatmentTime: "30 perc",
        treatmentSteps: [
          "A bőr megtisztítása a szennyeződésektől",
          "Frissítő tonizálás",
          "Vitalizáló arc és dekoltázsmasszázs bio chia & jojoba bőrtápláló masszázsolajjal valamint pórsáfránnyal, melyek támogatják a bőr lipid anyagcseréjét, növelik bőröd rugalmasságát és mélyen hidratálják azt",
          "Befejező ápolás",
        ],
      },

      {
        treatmentName: "Relax+ kezelés",
        treatmentDescription:
          "Szeretnél kiszakadni a stresszes hétköznapi nyüzsgésből egy kis időre, és teljesen feltöltődve, újult erővel vágnál neki a teendőknek? Az arc -és dekoltázsmasszázs a pihentető élményen felül segít a bőr feszesebbé tételében, ami ennek köszönhetően rugalmasabbá, fiatalosabbá válik, késlelteti az öregedési folyamatokat. Amellett, hogy puhává és bársonyossá teszi a bőrt, általános feszültségoldó, közérzetjavító és nyugtató hatást fejt ki.",
        treatmentPrice: "7000 Ft",
        treatmentTime: "45 perc",
        treatmentSteps: [
          "A bőr megtisztítása a szennyeződésektől",
          "Frissítő tonizálás",
          "Vitalizáló arc és dekoltázsmasszázs bio chia & jojoba bőrtápláló masszázsolajjal valamint pórsáfránnyal, melyek támogatják a bőr lipid anyagcseréjét, növelik bőröd rugalmasságát és mélyen hidratálják azt",
          "Befejező ápolás",
        ],
      },
    ],
  },

  {
    name: "Gyantázás",
    image: gyantazasKezeles,
    urlPath: "gyantazas",
    treatments: [
      {
        treatmentName: "XS - bajusz, áll",
        treatmentPrice: "1200 Ft",
      },

      {
        treatmentName: "S - hónalj, orca",
        treatmentPrice: "1800 Ft",
      },

      {
        treatmentName: "M - alkar, bikinivonal",
        treatmentPrice: "2500 Ft",
      },
      {
        treatmentName: "L - lábszár, mellkas, has , teljes kar",
        treatmentPrice: "3000 Ft",
      },
      {
        treatmentName: "XL - hát, teljes láb",
        treatmentPrice: "5500 Ft",
      },
    ],
  },

  {
    name: "Szempilla és szemöldök",
    image: szempillaKezelesek,
    urlPath: "szemoldokSzempilla",
    treatments: [
      {
        treatmentName: "Szempilla lifting",
        treatmentDescription:
          "A szempilla lifting azoknak a hölgyeknek ajánlott akik természetes, íves és hosszabbnak tűnő pillákra vágynak műszempilla felrakása nélkül. A szempilla liftinggel egybekötött szempillafestés eredményeként egy gyönyörű keretet kap a szem, kiemeli azt. A végeredmény egy üde, fiatalos és nyitottabb tekintet. A kezelés során a szempillákat egy speciális szérummal kezeljük ami a tövénél emeli meg a szempillákat, extrán ívelt görbületet eredményez. Az eredmény 6-8 hétig tartós.",
        treatmentPrice: "9000 Ft",
        treatmentTime: "60 perc",
        treatmentSteps: [
          "Ívelt, hosszabbnak tűnő hatást biztosít",
          "Tekinteted üde és fiatalos lesz, optikailag nyitja a tekintetet",
          "Lerövidül a reggeli készülődés",
          "Szempillaspirállal még tovább fokozható a hatás",
          "Nem roncsolja a pillákat",
        ],
      },

      {
        treatmentName: "Szempilla festés",
        treatmentDescription:
          "A szempillafestés eredménye a hangsúlyos és gyönyörű szempilla mely kiemeli a szemet. Rendkívül praktikus mert nem kell minden nap spirálozni a szempillákat! Hatását 4-5 hétig élvezhetjük!",
        treatmentPrice: "1500 Ft",
        treatmentTime: "15 perc",
      },
      {
        treatmentName: "Szemöldökfestés",
        treatmentDescription:
          "A szemöldök az arc meghatározó része, hiszen nem csak keretezi, hanem az arc teljes karakterét is meghatározza. A tartós szemöldökfestés azoknak a vendégeknek ajánlott akiknek halványabb a szemöldökének színe, ki szeretnék emelni azt.",
        treatmentPrice: "1300 Ft",
        treatmentTime: "15 perc",
      },
      {
        treatmentName: "Szemöldök igazítás (gyantázás, csipeszelés)",
        treatmentDescription: "",
        treatmentPrice: "1300 Ft",
        treatmentTime: "10 perc",
      },
      {
        treatmentName: "Új szemöldökforma kialakítása",
        treatmentDescription:
          "Egy teljesen új forma kialakítása történik, mikor a teljesen kinőtt vagy még sosem szedett szemöldök formázása történik.",
        treatmentPrice: "2000 Ft",
        treatmentTime: "20 perc",
      },
    ],
  },

  {
    name: "Pedikűr",
    image: pedikurKezelesek,
    urlPath: "pedikur",
    treatments: [
      {
        treatmentName: "Callux gyümölcssavas pedikűr",
        treatmentDescription:
          "Kellemes Spa élményű gyümölcssavas hámlasztó eljárás. Maximális hatékonysággal, kíméletesen, szike nélkül távolítja el a bőrkeményedést a problémás lábakról is. Nincs sérülésveszély, ezért teljes biztonsággal alkalmazható cukorbetegeknél és vérzékeny vendégeknél is. A kezelés hatására javul a láb komfortérzete. Az eredmény egyenletesen sima,puha és selymes tapintású lábak. Normál, problémás és igénybevett lábra ajánlott.",
        treatmentPrice: "8000 Ft",
        treatmentTime: "60 perc",
        treatmentSteps: [
          "Puhító lábfürdő",
          "Intenzív gél pakolás, hámlasztás",
          "A gél által feloldott elhalt hámréteg eltávolítása",
          "Igény esetén körmök formázása",
          "Bőrkeményedés eltávolítása",
          "Frissítő bőrradírozás",
          "Befejező ápolás",
        ],
      },

      {
        treatmentName: "Callux kiskezelés",
        treatmentDescription:
          "A Callux kiskezelés egy lágyító hab formula révén fejti ki hatását. Intenzíven puhítja a bőrkeményedést, megkönnyíti annak szike nélküli eltávolítását. A bőr sima,puha és selymes lesz tapintású, javul a láb komfortérzete. Ajánlott Callux nagykezelés után szintentartásként, normál, nem túl problémás lábakra.",
        treatmentPrice: "6500 Ft",
        treatmentTime: "45 perc",
        treatmentSteps: [
          "Lábfej fertőtlenítése",
          "Intenzív lágyító hab felvitele",
          "Puhító lábfürdő",
          "Bőrkeményedés eltávolítása",
          "Frissítő bőrradírozás",
          "Befejező ápolás",
        ],
      },

      {
        treatmentName: "Klasszikus pedikűr szikével",
        treatmentPrice: "7000 Ft",
        treatmentTime: "60 perc",
        treatmentSteps: [
          "Puhító lábfürdő",
          "Körmök formázása, rövidítése",
          "Bőrkeményedés eltávolítása szikével",
          "Befejező ápolás",
        ],
      },
      {
        treatmentName: "Frissítő talpmasszázs",
        treatmentDescription:
          "A talp a legnagyobb igénybevételnek kitett testrészünk, megérdemli, hogy megfelelő figyelmet szenteljünk neki és rendszeresen foglalkozzunk vele. A frissítő talpmasszázs célja az igénybevett lábfej és a talp izmainak lazítása. A relaxáló élmény mellett serkenti a vérkeringést, stressz és feszültségoldó, frissítő hatással bír.",
        treatmentPrice: "13500 Ft",
        treatmentTime: "60 perc",
      },
    ],
  },
]

export default services
