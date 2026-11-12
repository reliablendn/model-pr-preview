var e=e=>{switch(e){case`bookClassJourney`:return`@startuml
title "Book a class"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Member>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<StudioWebApp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<StudioExperienceApi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ExternalSystemsCms>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ExternalSystemsClassPlatform>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<StudioProfileApi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ExternalSystemsEmail>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
person "==Member\\n\\nGym member who finds and books classes" <<Member>> as Member
rectangle "==Web App\\n\\nMember-facing web application" <<StudioWebApp>> as StudioWebApp
rectangle "==Experience Service\\n\\nOrchestrates journeys across Studio services and the booking platform" <<StudioExperienceApi>> as StudioExperienceApi
rectangle "==Content Platform\\n\\nGym and class descriptions, images" <<ExternalSystemsCms>> as ExternalSystemsCms
rectangle "==Class Platform\\n\\nVendor’s headless SaaS platform: gyms, timetables, classes and bookings" <<ExternalSystemsClassPlatform>> as ExternalSystemsClassPlatform
rectangle "==Profile Service\\n\\nMember profiles and preferences" <<StudioProfileApi>> as StudioProfileApi
rectangle "==Email Service" <<ExternalSystemsEmail>> as ExternalSystemsEmail

Member .[#8D8D8D,thickness=2].> StudioWebApp : <color:#8D8D8D>Find classes (gym, date, class type)
StudioWebApp .[#8D8D8D,thickness=2].> StudioExperienceApi : <color:#8D8D8D>Search classes
StudioExperienceApi .[#8D8D8D,thickness=2].> ExternalSystemsCms : <color:#8D8D8D>Fetch gym and class descriptions
ExternalSystemsCms .[#8D8D8D,thickness=2].> StudioExperienceApi : <color:#8D8D8D>Descriptions and images
StudioExperienceApi .[#8D8D8D,thickness=2].> ExternalSystemsClassPlatform : <color:#8D8D8D>Search timetable
ExternalSystemsClassPlatform .[#8D8D8D,thickness=2].> StudioExperienceApi : <color:#8D8D8D>Classes with spaces left
StudioExperienceApi .[#8D8D8D,thickness=2].> StudioWebApp : <color:#8D8D8D>Classes with descriptions and spaces left
StudioWebApp .[#8D8D8D,thickness=2].> Member : <color:#8D8D8D>Classes
Member .[#8D8D8D,thickness=2].> StudioWebApp : <color:#8D8D8D>Book class
StudioWebApp .[#8D8D8D,thickness=2].> StudioExperienceApi : <color:#8D8D8D>Book class
StudioExperienceApi .[#8D8D8D,thickness=2].> StudioProfileApi : <color:#8D8D8D>Get member details
StudioProfileApi .[#8D8D8D,thickness=2].> StudioExperienceApi : <color:#8D8D8D>Name, email, membership ID
StudioExperienceApi .[#8D8D8D,thickness=2].> ExternalSystemsClassPlatform : <color:#8D8D8D>Create booking
ExternalSystemsClassPlatform .[#8D8D8D,thickness=2].> ExternalSystemsEmail : <color:#8D8D8D>Send booking confirmation
ExternalSystemsClassPlatform .[#8D8D8D,thickness=2].> StudioExperienceApi : <color:#8D8D8D>Booking confirmation
StudioExperienceApi .[#8D8D8D,thickness=2].> StudioWebApp : <color:#8D8D8D>Booking confirmation
StudioWebApp .[#8D8D8D,thickness=2].> Member : <color:#8D8D8D>Booking confirmed
@enduml
`;case`joinWaitlistJourney`:return`@startuml
title "Join a waitlist"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Member>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<StudioMobileApp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<StudioExperienceApi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ExternalSystemsClassPlatform>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ExternalSystemsPush>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
person "==Member\\n\\nGym member who finds and books classes" <<Member>> as Member
rectangle "==Mobile App\\n\\nMember-facing mobile application" <<StudioMobileApp>> as StudioMobileApp
rectangle "==Experience Service\\n\\nOrchestrates journeys across Studio services and the booking platform" <<StudioExperienceApi>> as StudioExperienceApi
rectangle "==Class Platform\\n\\nVendor’s headless SaaS platform: gyms, timetables, classes and bookings" <<ExternalSystemsClassPlatform>> as ExternalSystemsClassPlatform
rectangle "==Push Notification Service\\n\\nSends notifications to the mobile app" <<ExternalSystemsPush>> as ExternalSystemsPush

Member .[#8D8D8D,thickness=2].> StudioMobileApp : <color:#8D8D8D>Join waitlist for a full class
StudioMobileApp .[#8D8D8D,thickness=2].> StudioExperienceApi : <color:#8D8D8D>Join waitlist
StudioExperienceApi .[#8D8D8D,thickness=2].> ExternalSystemsClassPlatform : <color:#8D8D8D>Add to waitlist
ExternalSystemsClassPlatform .[#8D8D8D,thickness=2].> StudioExperienceApi : <color:#8D8D8D>Waitlist position
StudioExperienceApi .[#8D8D8D,thickness=2].> StudioMobileApp : <color:#8D8D8D>Waitlist position
StudioMobileApp .[#8D8D8D,thickness=2].> Member : <color:#8D8D8D>You are number 3 on the waitlist
ExternalSystemsClassPlatform .[#8D8D8D,thickness=2].> ExternalSystemsClassPlatform : <color:#8D8D8D>Space opens: offer it to the first member on the waitlist
ExternalSystemsClassPlatform .[#8D8D8D,thickness=2].> ExternalSystemsPush : <color:#8D8D8D>Notify member
ExternalSystemsPush .[#8D8D8D,thickness=2].> Member : <color:#8D8D8D>A space is free: confirm within 30 minutes
@enduml
`;case`index`:return`@startuml
title "Landscape"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Member>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Studio>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ExternalSystemsClassPlatform>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ExternalSystemsCms>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ExternalSystemsIdentity>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ExternalSystemsPayments>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ExternalSystemsEmail>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ExternalSystemsPush>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
person "==Member\\n\\nGym member who finds and books classes" <<Member>> as Member
rectangle "==Studio\\n\\nThe gym chain’s own member experience" <<Studio>> as Studio
rectangle "External Systems" <<ExternalSystems>> as ExternalSystems {
  skinparam RectangleBorderColor<<ExternalSystems>> #3b82f6
  skinparam RectangleFontColor<<ExternalSystems>> #3b82f6
  skinparam RectangleBorderStyle<<ExternalSystems>> dashed

  rectangle "==Class Platform\\n\\nVendor’s headless SaaS platform: gyms, timetables, classes and bookings" <<ExternalSystemsClassPlatform>> as ExternalSystemsClassPlatform
  rectangle "==Content Platform\\n\\nGym and class descriptions, images" <<ExternalSystemsCms>> as ExternalSystemsCms
  rectangle "==Identity Provider\\n\\nMember sign-in" <<ExternalSystemsIdentity>> as ExternalSystemsIdentity
  rectangle "==Payment Gateway" <<ExternalSystemsPayments>> as ExternalSystemsPayments
  rectangle "==Email Service" <<ExternalSystemsEmail>> as ExternalSystemsEmail
  rectangle "==Push Notification Service\\n\\nSends notifications to the mobile app" <<ExternalSystemsPush>> as ExternalSystemsPush
}

Member .[#8D8D8D,thickness=2].> Studio
Studio .[#8D8D8D,thickness=2].> ExternalSystemsClassPlatform
Studio .[#8D8D8D,thickness=2].> ExternalSystemsCms
Studio .[#8D8D8D,thickness=2].> ExternalSystemsIdentity
ExternalSystemsClassPlatform .[#8D8D8D,thickness=2].> ExternalSystemsPayments : <color:#8D8D8D>Take payment for paid classes
ExternalSystemsClassPlatform .[#8D8D8D,thickness=2].> ExternalSystemsEmail : <color:#8D8D8D>Send booking confirmation
ExternalSystemsClassPlatform .[#8D8D8D,thickness=2].> ExternalSystemsPush : <color:#8D8D8D>Notify member when a waitlist space opens
@enduml
`;case`studio`:return`@startuml
title "Studio"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Member>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<StudioWebApp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<StudioMobileApp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<StudioExperienceApi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<StudioProfileApi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ExternalSystems>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam queue<<StudioEvents>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==Member\\n\\nGym member who finds and books classes" <<Member>> as Member
rectangle "Studio" <<@gr1>> as @gr1 {
  skinparam RectangleBorderColor<<@gr1>> #3b82f6
  skinparam RectangleFontColor<<@gr1>> #3b82f6
  skinparam RectangleBorderStyle<<@gr1>> dashed

  rectangle "Customer Layer" <<@gr2>> as @gr2 {
    skinparam RectangleBorderColor<<@gr2>> #3b82f6
    skinparam RectangleFontColor<<@gr2>> #3b82f6
    skinparam RectangleBorderStyle<<@gr2>> dashed

    rectangle "==Web App\\n\\nMember-facing web application" <<StudioWebApp>> as StudioWebApp
    rectangle "==Mobile App\\n\\nMember-facing mobile application" <<StudioMobileApp>> as StudioMobileApp
  }
  rectangle "Experience Layer" <<@gr3>> as @gr3 {
    skinparam RectangleBorderColor<<@gr3>> #3b82f6
    skinparam RectangleFontColor<<@gr3>> #3b82f6
    skinparam RectangleBorderStyle<<@gr3>> dashed

    rectangle "==Experience Service\\n\\nOrchestrates journeys across Studio services and the booking platform" <<StudioExperienceApi>> as StudioExperienceApi
  }
  rectangle "Domain Layer" <<@gr4>> as @gr4 {
    skinparam RectangleBorderColor<<@gr4>> #3b82f6
    skinparam RectangleFontColor<<@gr4>> #3b82f6
    skinparam RectangleBorderStyle<<@gr4>> dashed

    rectangle "==Profile Service\\n\\nMember profiles and preferences" <<StudioProfileApi>> as StudioProfileApi
    queue "==Events\\n\\nDomain events published by Studio services" <<StudioEvents>> as StudioEvents
  }
}
rectangle "==External Systems" <<ExternalSystems>> as ExternalSystems

Member .[#8D8D8D,thickness=2].> StudioWebApp
Member .[#8D8D8D,thickness=2].> StudioMobileApp
StudioWebApp .[#8D8D8D,thickness=2].> StudioExperienceApi
StudioMobileApp .[#8D8D8D,thickness=2].> StudioExperienceApi
StudioExperienceApi .[#8D8D8D,thickness=2].> ExternalSystems
StudioExperienceApi .[#8D8D8D,thickness=2].> StudioProfileApi
StudioExperienceApi .[#8D8D8D,thickness=2].> StudioEvents
StudioProfileApi .[#8D8D8D,thickness=2].> ExternalSystems
StudioProfileApi .[#8D8D8D,thickness=2].> StudioEvents
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};