var e=e=>{switch(e){case`bookClassJourney`:return'---\ntitle: "Book a class"\n---\ngraph LR\n  Member@{ icon: "fa:user", shape: rounded, label: "Member" }\n  StudioWebApp@{ shape: rectangle, label: "Web App" }\n  StudioExperienceApi@{ shape: rectangle, label: "Experience Service" }\n  ExternalSystemsCms@{ shape: rectangle, label: "Content Platform" }\n  ExternalSystemsClassPlatform@{ shape: rectangle, label: "Class Platform" }\n  StudioProfileApi@{ shape: rectangle, label: "Profile Service" }\n  ExternalSystemsEmail@{ shape: rectangle, label: "Email Service" }\n  Member -. "`Find classes (gym, date, class type)`" .-> StudioWebApp\n  StudioWebApp -. "`Search classes`" .-> StudioExperienceApi\n  StudioExperienceApi -. "`Fetch gym and class descriptions`" .-> ExternalSystemsCms\n  ExternalSystemsCms -. "`Descriptions and images`" .-> StudioExperienceApi\n  StudioExperienceApi -. "`Search timetable`" .-> ExternalSystemsClassPlatform\n  ExternalSystemsClassPlatform -. "`Classes with spaces left`" .-> StudioExperienceApi\n  StudioExperienceApi -. "`Classes with descriptions and spaces left`" .-> StudioWebApp\n  StudioWebApp -. "`Classes`" .-> Member\n  Member -. "`Book class`" .-> StudioWebApp\n  StudioWebApp -. "`Book class`" .-> StudioExperienceApi\n  StudioExperienceApi -. "`Get member details`" .-> StudioProfileApi\n  StudioProfileApi -. "`Name, email, membership ID`" .-> StudioExperienceApi\n  StudioExperienceApi -. "`Create booking`" .-> ExternalSystemsClassPlatform\n  ExternalSystemsClassPlatform -. "`Send booking confirmation`" .-> ExternalSystemsEmail\n  ExternalSystemsClassPlatform -. "`Booking confirmation`" .-> StudioExperienceApi\n  StudioExperienceApi -. "`Booking confirmation`" .-> StudioWebApp\n  StudioWebApp -. "`Booking confirmed`" .-> Member\n';case`index`:return`---
title: "Landscape"
---
graph TB
  Member@{ icon: "fa:user", shape: rounded, label: "Member" }
  Studio@{ shape: rectangle, label: "Studio" }
  subgraph ExternalSystems["\`External Systems\`"]
    ExternalSystems.ClassPlatform@{ shape: rectangle, label: "Class Platform" }
    ExternalSystems.Cms@{ shape: rectangle, label: "Content Platform" }
    ExternalSystems.Identity@{ shape: rectangle, label: "Identity Provider" }
    ExternalSystems.Payments@{ shape: rectangle, label: "Payment Gateway" }
    ExternalSystems.Email@{ shape: rectangle, label: "Email Service" }
  end
  Member -.-> Studio
  Studio -.-> ExternalSystems.ClassPlatform
  Studio -.-> ExternalSystems.Cms
  Studio -.-> ExternalSystems.Identity
  ExternalSystems.ClassPlatform -. "\`Take payment for paid classes\`" .-> ExternalSystems.Payments
  ExternalSystems.ClassPlatform -. "\`Send booking confirmation\`" .-> ExternalSystems.Email
`;case`studio`:return`---
title: "Studio"
---
graph TB
  Member@{ icon: "fa:user", shape: rounded, label: "Member" }
  subgraph _gr1["\`Studio\`"]
    subgraph _gr1._gr2["\`Customer Layer\`"]
      _gr1._gr2.StudioWebApp@{ shape: rectangle, label: "Web App" }
      _gr1._gr2.StudioMobileApp@{ shape: rectangle, label: "Mobile App" }
    end
    subgraph _gr1._gr3["\`Experience Layer\`"]
      _gr1._gr3.StudioExperienceApi@{ shape: rectangle, label: "Experience Service" }
    end
    subgraph _gr1._gr4["\`Domain Layer\`"]
      _gr1._gr4.StudioProfileApi@{ shape: rectangle, label: "Profile Service" }
      _gr1._gr4.StudioEvents@{ shape: horizontal-cylinder, label: "Events" }
    end
  end
  ExternalSystems@{ shape: rectangle, label: "External Systems" }
  Member -.-> _gr1._gr2.StudioWebApp
  Member -.-> _gr1._gr2.StudioMobileApp
  _gr1._gr2.StudioWebApp -.-> _gr1._gr3.StudioExperienceApi
  _gr1._gr2.StudioMobileApp -.-> _gr1._gr3.StudioExperienceApi
  _gr1._gr3.StudioExperienceApi -.-> ExternalSystems
  _gr1._gr3.StudioExperienceApi -.-> _gr1._gr4.StudioProfileApi
  _gr1._gr3.StudioExperienceApi -.-> _gr1._gr4.StudioEvents
  _gr1._gr4.StudioProfileApi -.-> ExternalSystems
  _gr1._gr4.StudioProfileApi -.-> _gr1._gr4.StudioEvents
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};