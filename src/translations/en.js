const translations = {
  month: (monthOfYear) => {
    switch(monthOfYear) {
      case 1: return "January"
      case 2: return "February"
      case 3: return "March"
      case 4: return "April"
      case 5: return "May"
      case 6: return "June"
      case 7: return "July"
      case 8: return "August"
      case 9: return "September"
      case 10: return "October"
      case 11: return "November"
      case 12: return "December"
      default: return "-"
    }
  },
  general: {
    request_demo: "Request a demo",
    contact: "Contact us",
    learn_more: "Learn more"
  },
  seo: {
    description: "Sharpfin will help you realize your full potential with the next generation of wealth management software. ",
    home: "Home"
  },
  trusted: {
    title: "Trusted by"
  },
  landing: {
    title: {
      top: "Unleash the",
      highlight: " power",
      top2: "",
      bottom: "of technology"
    },
    sub_title: "A modern solution that simplifies and empowers your Wealth Management"
  },
  header: {
    customer: "Customers",
    insights: "Insights"
  },
  solutions: {
    title: "Features",
    wm: {
      title: "Wealth Manager",
      sub_title: "Wealth Manager provides you a state-of-the-art solution to handle your clients wealth; both discretionary and advisory, including:",
      item_1: "Portfolio management views of your clients' holdings with the possibility to aggregate multiple portfolios into various consolidated views.",
      item_2: "Order management which connects to proprietary trading systems (e.g. Infront Finance) or via FIX",
      item_3: "Management of model portfolios and portfolio rebalancing to fully cover your discretionary wealth management"
    },
    adv: {
      title: "Advisory",
      sub_title: "Advisory can fully digitize your advisory and customer onboarding processes including:",
      item_1: "Standard procedures to document your information regarding your clients according to MiFID II or IDD regulations",
      item_2: "Manage and evolve your client documentation directly in Sharpfin",
      item_3: "Send documentation securely and electronically for digital signatures directly to your clients"
    },
    rm: {
      title: "Risk Manager",
      sub_title: "Risk Manager ensures that your clients are in line  with the agreed risk by using our features for:",
      item_1: "Real time risk monitoring of your clients' holdings, using the flexible compliance rules engine",
      item_2: "Real time calculation of the most common risk measures, such as VaR, and other risk reports according required by your FSA",
      item_3: "Pre and post trade risk calculations"
    },
    wa: {
      title: "Wealth Administrator",
      sub_title: "Wealth Administrator cuts cost and increases quality in your administration by utilising user friendly functionality for",
      item_1: "Calculating management fees for your client portfolios according to various fee structures",
      item_2: "Providing you an assessment of remaining liquidity on your client depots to make sure that there is room for deducting the fees",
      item_3: "Extracting invoicing lists by the click of a button which can be sent to your bank for deduction of fees"
    },
    rep: {
      title: "Reporting",
      sub_title: "With Sharpfin Reporting you can create white labled client reporting in your own corporate identity with possibilities to",
      item_1: "Choose between a report on the depot level or consolidated throughout all your clients holdings",
      item_2: "Add indexes and benchmarks to compare your client’s performance",
      item_3: "Dynamically configure the report to include content relevant to different client needs"
    },
    port: {
      title: "Customer Portal",
      sub_title: "Our Customer Portal is your branded window of communication with your clients through our system. It features",
      item_1: "Secure client login with for example Swedish Bank ID or equivalents for foreign users",
      item_2: "Unique possibility for the clients to see holdings from many depot banks consolidated which the banks themselves can not offer",
      item_3: "A way to communicate with your clients in a GDPR-compliant way by posting relevant customer documentation in the portal"
    }
  },
  short_solutions: {
    title: "What we can do for you",
    wc: {
      title: "Wealth consolidation",
      text: "Sharpfin enables consolidation of both allocation and performance for your clients with holdings scattered across banks, with multiple depots in one bank or with your unlisted securities."
    },
    adv: {
      title: "Remote client onboarding",
      text: "Digitize all your customer documentation in a simple and structured way. Utilize our seamless integration with Scrive to sign remotely."
    },
    rm: {
      title: "Monitor your risks",
      text: "We make sure that your clients holdings are in line with the agreed risk level at all times. Sharpfin offers constant real-time monitoring of your clients allocation and risks."
    },
    wa: {
      title: "Save administration time",
      text: "Calculating your management fees can be a time consuming task especially if you offer performance fees or management fees based on daily asset under management. Using Sharpfin, this task is done within less than 5 seconds."
    },
    brand: {
      title: "Strengthen your brand",
      text: "By using our reporting or customer portal function you can move closer to your clients with branded, secure login to the system or tailor made client reporting."
    },
    cr: {
      title: "Limit compliancy risk",
      text: "Together with our partners we offer to monitor all your clients for PEP and money laundring on daily basis. You can easily manage this process through the Sharpfin user interface.",
    }
  },
  customer_page: {
    modules: "Commonly used features",
    what: "What do you do?",
    asset_managers: {
      title: "Wealth Manager",
      short: "Wealth management is possible with only one tool for customer onboarding, constant monitoring of KYC and AML, flexible portfolio management and branded customer reporting. Sharpfin is the proof.",
      item_1: "Does your firm have an optimal balance of human and system capital to meet the increased pressure from regulations while providing the best service towards your clients?",
      item_2: "Sharpfins SaaS solution serves Independent Wealth Managers with technology that supports new client acquisition, automates reporting and free time up to provide even better investment advice for your clients.",
      item_3: "Don't stand the risk of losing business entirely or being stuck in a non-profit waste land. Contact Sharpfin for a consultation, how our cloud-based technology can serve your continued growth for the future."
    },
    family_offices: {
      title: "Family Office",
      short: "Free up your time utilizing Sharpfins consolidation of wealth management data throughout multiple sources.",
      item_1: "Do you think it’s possible to deliver top class wealth management holding on to tedious manual processes for data scattered over multiple sources?",
      item_2: "Imagine that a you had a cloud based solution that would consolidate all these data for you, empowering you to take control and free up time for you to make active investment decisions. Book a meeting and find out already today how Sharpfin Technologies puts a new standard for Family Office Wealth Management."
    },
    financial_advisors: {
      title: "Financial- and Pension advisor",
      short: "Sharpfins advisory portal helps you to significantly cut time in your advisory processes, all while making the results electronically traceable and with a seamless integration of electronic signatures.",
      item_1: "Do you ever have the feeling that regulatory paperwork takes up too much time of your meetings and that you hardly have any time left to focus on you clients’ financial needs for the future?",
      item_2: "Sharpfin helps pension and insurance companies to improve efficiency in their client meetings with up to 75% per meeting compared to previous solutions.",
      item_3: "Our offering includes:",
      list_1: "a completely digital advisory process",
      list_2: "full electronic traceability",
      list_3: "a complete set of documentation automatically generated and branded in yourcorporate identity, and",
      list_4: "integration with electronic signatures via Scrive enabling you to serve your clients remote",
      end: "Book a meeting to find out how we can help your organization."
    }
  },
  quotes: {
    title: "What you might say when using Sharpfin",
    soko: {
      title: "CEO Consensus Asset Management",
      quote: "With Sharpfin we have found a vendor with a brilliant understanding for our needs. Their solution significantly increases quality in our customer reporting and saves a lot of time for our wealth management and administration personnel."
    },
    wolf: {
      title: "Regional Manager, Privat Consult",
      quote: "I love the user friendliness of Sharpfin Wealth Management Suite. With their flexible compliance rules engine we now have a better view over the risks in our investments, and with a full history of changes."
    }
  },
  sharpfin_insider: {
    title: "Sharpfin Insider",
    read: "Read our latest news",
    read_all: "Read all news",
    miss: "Never miss a thing",
    subscribe_text: "Subscribe to our newsletter",
    subscribe_btn: "Subscribe",
    published: "Published",
    why_subscribe: "Subscribe to our newsletter. In Sharpfin Insider we share important updates, interesting articles, release notes and trade secrets. You don't wanna miss it.",
    all_articles: "All Articles"
  },
  contact: {
    email: "Email",
    name: "Name",
    message: "Message",
    send: "Send",
    phone: "Phone",
    know_more: "Do you want to know more? Send us a message below.",
    company_name: "Company Name"
  },
  footer: {
    sales: "Sales",
    support: "Support",
    address: "Address"
  },
  team: {
    title: "Meet the Team",
    title_short: "About us"
  },
  success: {
    thanks: "Thanks for submitting!",
    go_back: "Go back"
  },
  press: {
    title: "Press Releases"
  },
  whitepaper: {
    title: "Whitepapers"
  },
  video: {
    title: "See Sharpfin in Action"
  }

}
export default translations
