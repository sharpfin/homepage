const translations =  {
  month: (monthOfYear) => {
    switch(monthOfYear) {
      case 1: return "Januari"
      case 2: return "Februari"
      case 3: return "Mars"
      case 4: return "April"
      case 5: return "Maj"
      case 6: return "Juni"
      case 7: return "Juli"
      case 8: return "Augusti"
      case 9: return "September"
      case 10: return "Oktober"
      case 11: return "November"
      case 12: return "December"
      default: return "-"
    }
  },
    general: {
      request_demo: "Boka en demo",
      contact: "Kontakta oss",
      learn_more: "Läs mer"
    },
    seo: {
      description: "Sharpfin hjälper dig att nå full utväxling med vår lättanvända och moderna lösning för kapitalförvaltare",
      home: "Hem"
    },
    trusted: {
      title: "Kunder"
    },
    landing: {
      title: {
        top: "Släpp lös ",
        highlight: " teknikens",
        top2: " ",
        bottom: "fulla kraft"
      },
      sub_title: "En modern lösning som förenklar och stärker din Kapitalförvaltning"
    },
    header: {
      customer: "Kunder",
      insights: "Insikter"
    },
    solutions: {
      title: "Funktioner",
      wm: {
        title: 'Förmögenhets\u{00AD}förvaltning',
        sub_title: "Vår modul för förmögenhetsförvaltning ger dig ett komplett stöd för att sköta både din diskretionära och rådgivande förvaltning, inklusive:",
        item_1: "Översikt över alla dina kunders innehav och möjlighet att få en konsoliderad vy över samtliga depåer hos kund, samtidigt.",
        item_2: "Avancerad order-blotter med möjlighet att lägga ordrar direkt hos handelssystemen (t.ex. Infront) eller via generella gränssnitt som FIX.",
        item_3: "Förvaltning av modellportföljer i flera nivåer och möjlighet till rebalansering och blockhandel i aktier, ETF:er och fonder."
      },
      adv: {
        title: "Rådgivningsportal",
        sub_title: "Sharpfins modul för rådgiving och \"Lär känna din kund\" innehåller bl.a.",
        item_1: "Standardiserade processer för dokumentation av kund enligt MiFID II- och IDD-regelverken",
        item_2: "Möjlighet att helt själv eller med vår hjälp förvalta din kunddokumentation direkt i systemet",
        item_3: "Säkert utskick av dokumentation för elektronisk signering till kunder och anställda på bolaget"
      },
      rm: {
        title: "Riskhantering",
        sub_title: "Med Sharpfins modul för riskhantering kan du säkerställa att kunderna har överenskommen risknivå genom att använda funktionalitet för:",
        item_1: "Monitorering i realtid av dina kunders allokering genom vår flexibla, egenutvecklade riskhanteringsmotor",
        item_2: "Beräkning av de vanligaste riskmåtten som volatilitet och VaR för en fördjupad analys av dina kunders risknivå",
        item_3: "Risksimuleringar före affär och körningar på daglig basis för att säkerställa att kunderna har rätt risk"
      },
      wa: {
        title: "Förmögenhets\u{00AD}administration",
        sub_title: "Vår modul för förmögenhetsadministration ökar effektiviteten och reducerar kraftigt det manuella arbetet genom",
        item_1: "En enkel och snabb beräkning av förvaltningsavgifter för olika frekvens och avgiftsstrukturer",
        item_2: "Att visa hur mycket likviditet kvarstår på kunddepåerna efter dragna avgifter för att undvika att kunderna får negativa saldon",
        item_3: "Att per knapptryck ta ut debiteringsunderlag som kan skickas till din depåbank för fakturering"
      },
      rep: {
        title: "Rapportering",
        sub_title: "Kommunicera med dina kunder i ditt företags grafiska profil och bildspråk genom vår anpassade rapportering",
        item_1: "Välj mellan en rapport på enskild depå eller en konsoliderad rapport på en kunds alla tillgångar samlat",
        item_2: "Lägg till jämförelseindex för att visa kunderna resultatet av din förvaltning",
        item_3: "Konfiguera rapporterna dynamiskt för att anpassa innehållet för respektive kund"
      },
      port: {
        title: "Kundportal",
        sub_title: "Vår kundportal blir som en förlängning av er hemsida och en kommunikationskanal till era kunder, helt i er grafiska profil",
        item_1: "Säker inloggning med svenskt BankID eller likvärdig lösning för utländska användare",
        item_2: "En unik möjlighet för era kunder att se innehav och avkastning konsoliderat för flera depåbanker eller onoterat, vilket ingen bank kan lösa",
        item_3: "En säker kommunikationskanal där ni kan kommunicera känslig information med era kunder på ett GDPR-säkert sätt"
      }
    },
    short_solutions: {
        title: "Vad vi kan göra för dig",
        wc: {
            title: "Förmögenhets\u{00AD}konsolidering",
            text: "Sharpfin möjligör både en konsolidering av avkastning och allokering för era kunder som har depåer på olika depåbanker, flera depåer hos samma bank eller en kombination av noterat och onoterat."
        },
        adv: {
            title: "Onboarda kunder på distans",
            text: "Vi digitaliserar din KYC-, avtals och rådgivnings\u{00AD}dokumentation och tillhandahåller sömlösa digitala underskrifter genom vårt samarbete med Scrive."
        },
        rm: {
            title: "Hålla koll på dina risker",
            text: "Säkerställ att dina kunder har överenskommen risknivå. Sharpfin tillhandhåller riskkontroller i realtid för dina kunders allokering."
        },
        wa: {
            title: "Spara din administrationstid",
            text: "Att beräkna och stämma av dina förvaltningsavgifter kan vara en tidsödande arbetsuppgift, särskilt om du har kunder med ett prestationsbaserat arvode eller förvaltningsarvode relativt förvaltat kapital mätt med dagliga mätpunkter. Med Sharpfin kan du göra tusentals avgitsberäkningar på mindre än fem sekunder."
        },
        brand: {
            title: "Stärka ditt varumärke",
            text: "Genom att använda vår kundportal eller kundrapportering kan du flytta närmare dina kunder genom att erbjuda avancerad information och rapporter helt i din grafiska profil."
        },
        cr: {
          title: "Minska din Compliance-risk",
          text: "Tillsammans med våra partners kan vi dagligen hålla koll på rätt huvudman för dina kunder samt att de inte är PEP eller finns på sanktionslistor för penningtvätt. Informationen visas löpande i Sharpfins användargränssnitt.",
        }
    },
    customer_page: {
      modules: "Vanliga funktioner",
      what: "Vad jobbar du med?",
      asset_managers: {
        title: "Kapitalförvaltning",
        short: "Tro det eller ej, men kapitalförvaltning är möjligt med bara ett verktyg för onboarding av kunder, löpande monitorering av KYC & AML, flexibelt stöd för förmögenhetsförvaltning och anpassad kundrapportering. Sharpfin är beviset",
        item_1: "Har ditt företag den bästa mixen av system och humankapital för att möta ett ökat tryck ifrån regelverk och samtidigt kunna ge dina kunder bästa möjliga service?",
        item_2: "Sharpfins SaaS-lösning tillhandahåller värdepappersbolag en av världens mest moderna lösningar för dokumentation av nya kunder och automatiserad rapportering för att frigöra mer tid för dig att kunna fokusera på dina kunder.",
        item_3: "Undvik risken att helt tappa din affär eller hamna i ett limbo av vikande intäkter. Kontakta Sharpfin för en konsultation om hur vår molnbaserade teknologi kan hjälpa er till fortsatt tillväxt både nu och i framtiden."
      },
      family_offices: {
        title: "Familjekontor",
        short: "Spara tid genom att låta Sharpfin konsolidera data ifrån olika källor för dig.",
        item_1: "Tror du att det är möjligt att leverera förstklassig förvaltning genom att hålla fast i tidskrävande, manuella processer för data som ligger på alla möjliga olika ställen?",
        item_2: "Tänk dig att du hade ett system som gjorde all datakonsolidering för dig, så att du i stället kunde fokusera på att fatta avvägda investeringsbeslut. Boka ett möte redan idag och ta reda på hur Sharpfins teknologi sätter en helt ny standard för förvaltning av tillgångar i familjekontor."
      },
      financial_advisors: {
        title: "Pensionsrådgivare",
        short: "Sharpfins rådgivningsportal hjälper dig att kraftigt minmera tidsåtgången för din rådgivnings\u{00AD}dokumentation och ser dessutom till att all dokumentation finns elektroniskt sökbar. Sömlös integration av elektroniska underskrigter möjliggör affärer på distans och en ytterligare höjning av effektiviteten.",
        item_1: "Har du någon gång känslan av att all regulatorisk pappersexercis tar fokus ifrån själva rådgivningen och möjligheten för dig att hjälpa dina kunder med att säkra sitt framtida finansiella behov?",
        item_2: "Sharpfin hjälper pensions- och försäkringsrådgivare öka effektiviteten med upp till 75% jämfört med tidigare lösningar.",
        item_3: "Vårt erbjudande innebär:",
        list_1: "en fullständigt digital rådgivningsprocess",
        list_2: "full elektronisk spårbarhet",
        list_3: "hela din rådgivningsdokumentation på ett ställe i din egen grafiska profil, och",
        list_4: "integration med Scrive för elektroniska underskrifter för att kunna göra affärer med dina kunder även på distans.",
        end: "Boka ett möte för att ta reda på hur vi kan hjälpa just er organisation."
      }
    },
    quotes: {
      title: "Vad du kanske säger när du använder Sharpfin",
      soko: {
        title: "VD Consensus Asset Management",
        quote: "Med Sharpfin har vi hittat en leverantör med utomordentlig förståelse för vår affär och våra behov. Deras lösning höjer markant kvaliteten på vår kundrapportering och sparar mycket tid för vår förvaltning och administration."
      },
      wolf: {
        title: "Regionschef, Privatconsult GmbH",
        quote: "Jag älskar användarvänligheten hos Sharpfin Wealth Management Suite. Med Sharpfins flexibla riskfunktion har vi nu en bättre översikt över risken i våra kunders investeringar och därtill full historik av alla ändringar i systemet."
      }
    },
    sharpfin_insider: {
      title: "Sharpfin Insider",
      read: "Läs de senaste nyheterna",
      read_all: "Läs alla nyheter",
      miss: "Missa ingenting",
      subscribe_text: "Prenumerera på vårat nyhetsbrev",
      subscribe_btn: "Prenumerera",
      published: "Publicerad",
      why_subscribe: "Prenumerera på vårat nyhetsbrev. I Sharpfin Insider delar vi med oss av viktiga uppdateringar, intressanta artiklar, release notes och branschhemligheter. Det vill du inte missa. ",
      all_articles: "Alla Artiklar"
    },
    contact: {
        email: "Email",
        name: "Namn",
        message: "Meddelande",
        send: "Skicka",
        phone: "Telefon",
        know_more: "Vill du veta mer? Skicka gärna ett meddelande nedan.",
        company_name: "Företagsnamn"
    },
    footer: {
        sales: "Sälj",
        support: "Support",
        address: "Adress"
    },
    team: {
      title: "Detta är Sharpfin",
      title_short: "Om oss"
    },
    success: {
      thanks: "Tack för att du skickade in!",
      go_back: "Tillbaka"
    },
    press: {
      title: "Pressreleaser"
    },
    whitepaper: {
      title: "Whitepapers"
    }

  }
  export default translations
