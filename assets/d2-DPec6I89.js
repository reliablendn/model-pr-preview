var e=e=>{switch(e){case`bookClassJourney`:return`direction: right

Member: {
  label: "Member"
  shape: c4-person
}
StudioWebApp: {
  label: "Web App"
}
StudioExperienceApi: {
  label: "Experience Service"
}
ExternalSystemsCms: {
  label: "Content Platform"
}
ExternalSystemsClassPlatform: {
  label: "Class Platform"
}
StudioProfileApi: {
  label: "Profile Service"
}
ExternalSystemsEmail: {
  label: "Email Service"
}

Member -> StudioWebApp: "Find classes (gym, date, class type)"
StudioWebApp -> StudioExperienceApi: "Search classes"
StudioExperienceApi -> ExternalSystemsCms: "Fetch gym and class descriptions"
ExternalSystemsCms -> StudioExperienceApi: "Descriptions and images"
StudioExperienceApi -> ExternalSystemsClassPlatform: "Search timetable"
ExternalSystemsClassPlatform -> StudioExperienceApi: "Classes with spaces left"
StudioExperienceApi -> StudioWebApp: "Classes with descriptions and spaces left"
StudioWebApp -> Member: "Classes"
Member -> StudioWebApp: "Book class"
StudioWebApp -> StudioExperienceApi: "Book class"
StudioExperienceApi -> StudioProfileApi: "Get member details"
StudioProfileApi -> StudioExperienceApi: "Name, email, membership ID"
StudioExperienceApi -> ExternalSystemsClassPlatform: "Create booking"
ExternalSystemsClassPlatform -> ExternalSystemsEmail: "Send booking confirmation"
ExternalSystemsClassPlatform -> StudioExperienceApi: "Booking confirmation"
StudioExperienceApi -> StudioWebApp: "Booking confirmation"
StudioWebApp -> Member: "Booking confirmed"
`;case`index`:return`direction: down

Member: {
  label: "Member"
  shape: c4-person
}
Studio: {
  label: "Studio"
}
ExternalSystems: {
  label: "External Systems"

  ClassPlatform: {
    label: "Class Platform"
  }
  Cms: {
    label: "Content Platform"
  }
  Identity: {
    label: "Identity Provider"
  }
  Payments: {
    label: "Payment Gateway"
  }
  Email: {
    label: "Email Service"
  }
}

Member -> Studio
Studio -> ExternalSystems.ClassPlatform
Studio -> ExternalSystems.Cms
Studio -> ExternalSystems.Identity
ExternalSystems.ClassPlatform -> ExternalSystems.Payments: "Take payment for paid classes"
ExternalSystems.ClassPlatform -> ExternalSystems.Email: "Send booking confirmation"
`;case`studio`:return`direction: down

Member: {
  label: "Member"
  shape: c4-person
}
@gr1: {
  label: "Studio"

  : {
    label: "Customer Layer"

    OWebApp: {
      label: "Web App"
    }
    OMobileApp: {
      label: "Mobile App"
    }
  }
  : {
    label: "Experience Layer"

    OExperienceApi: {
      label: "Experience Service"
    }
  }
  : {
    label: "Domain Layer"

    OProfileApi: {
      label: "Profile Service"
    }
    OEvents: {
      label: "Events"
      shape: queue
    }
  }
}
ExternalSystems: {
  label: "External Systems"
}

Member -> @gr1..OWebApp
Member -> @gr1..OMobileApp
@gr1..OWebApp -> @gr1..OExperienceApi
@gr1..OMobileApp -> @gr1..OExperienceApi
@gr1..OExperienceApi -> ExternalSystems
@gr1..OExperienceApi -> @gr1..OProfileApi
@gr1..OExperienceApi -> @gr1..OEvents
@gr1..OProfileApi -> ExternalSystems
@gr1..OProfileApi -> @gr1..OEvents
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};