var e=e=>{switch(e){case`bookClassJourney`:return`digraph {
  likec4_viewId = "bookClassJourney";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "member" [
    likec4_id = "member";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Member</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Gym member who finds and books classes</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "webapp" [
    likec4_id = "studio.webApp";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Web App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Member-facing web application</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "experienceapi" [
    likec4_id = "studio.experienceApi";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Experience Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Orchestrates journeys across Studio services<BR/>and the booking platform</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "cms" [
    likec4_id = "externalSystems.cms";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Content Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Gym and class descriptions, images</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "classplatform" [
    likec4_id = "externalSystems.classPlatform";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Class Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Vendor’s headless SaaS platform: gyms,<BR/>timetables, classes and bookings</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "profileapi" [
    likec4_id = "studio.profileApi";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Profile Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Member profiles and preferences</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "email" [
    likec4_id = "externalSystems.email";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Email Service</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "member" -> "webapp" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Find classes (gym, date, class type)</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "webapp" -> "experienceapi" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Search classes</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "experienceapi" -> "cms" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Fetch gym and class descriptions</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "experienceapi" -> "cms" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Descriptions and images</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "experienceapi" -> "classplatform" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Search timetable</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "experienceapi" -> "classplatform" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Classes with spaces left</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "webapp" -> "experienceapi" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Classes with descriptions and spaces<BR/>left</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "member" -> "webapp" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Classes</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "member" -> "webapp" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Book class</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "webapp" -> "experienceapi" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Book class</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "experienceapi" -> "profileapi" [
    likec4_id = "step-11";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Get member details</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "experienceapi" -> "profileapi" [
    likec4_id = "step-12";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>11</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Name, email, membership ID</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "experienceapi" -> "classplatform" [
    likec4_id = "step-13";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>12</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Create booking</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "classplatform" -> "email" [
    likec4_id = "step-14";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>13</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Send booking confirmation</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "experienceapi" -> "classplatform" [
    likec4_id = "step-15";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>14</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Booking confirmation</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "webapp" -> "experienceapi" [
    likec4_id = "step-16";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>15</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Booking confirmation</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "member" -> "webapp" [
    likec4_id = "step-17";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>16</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Booking confirmed</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`joinWaitlistJourney`:return`digraph {
  likec4_viewId = "joinWaitlistJourney";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "member" [
    likec4_id = "member";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Member</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Gym member who finds and books classes</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "mobileapp" [
    likec4_id = "studio.mobileApp";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Member-facing mobile application</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "experienceapi" [
    likec4_id = "studio.experienceApi";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Experience Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Orchestrates journeys across Studio services<BR/>and the booking platform</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "classplatform" [
    likec4_id = "externalSystems.classPlatform";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Class Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Vendor’s headless SaaS platform: gyms,<BR/>timetables, classes and bookings</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "push" [
    likec4_id = "externalSystems.push";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Push Notification Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Sends notifications to the mobile app</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "member" -> "mobileapp" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Join waitlist for a full class</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "mobileapp" -> "experienceapi" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Join waitlist</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "experienceapi" -> "classplatform" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Add to waitlist</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "experienceapi" -> "classplatform" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Waitlist position</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "mobileapp" -> "experienceapi" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Waitlist position</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "member" -> "mobileapp" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">You are number 3 on the waitlist</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "classplatform" -> "classplatform" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Space opens: offer it to the first<BR/>member on the waitlist</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "classplatform" -> "push" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">Notify member</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "member" -> "push" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">A space is free: confirm within 30<BR/>minutes</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=ortho
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_externalsystems {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EXTERNAL SYSTEMS</B></FONT>>,
            likec4_depth=1,
            likec4_id=externalSystems,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        classplatform [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=externalSystems,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Class Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Vendor’s headless SaaS platform: gyms,<BR/>timetables, classes and bookings</FONT></TD></TR></TABLE>>,
            likec4_id="externalSystems.classPlatform",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        cms [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Content Platform</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Gym and class descriptions, images</FONT></TD></TR></TABLE>>,
            likec4_id="externalSystems.cms",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        identity [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Identity Provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Member sign-in</FONT></TD></TR></TABLE>>,
            likec4_id="externalSystems.identity",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        payments [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=externalSystems,
            height=2.5,
            label=<<FONT POINT-SIZE="20">Payment Gateway</FONT>>,
            likec4_id="externalSystems.payments",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        email [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=externalSystems,
            height=2.5,
            label=<<FONT POINT-SIZE="20">Email Service</FONT>>,
            likec4_id="externalSystems.email",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        push [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=externalSystems,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Push Notification Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Sends notifications to the mobile app</FONT></TD></TR></TABLE>>,
            likec4_id="externalSystems.push",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    member [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Member</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Gym member who finds and books classes</FONT></TD></TR></TABLE>>,
        likec4_id=member,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    studio [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Studio</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The gym chain’s own member experience</FONT></TD></TR></TABLE>>,
        likec4_id=studio,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    member -> studio [arrowhead=normal,
        likec4_id="1l3zkei",
        minlen=0,
        style=dashed,
        weight=2];
    studio -> classplatform [arrowhead=normal,
        likec4_id="1ue0pgu",
        style=dashed];
    studio -> cms [arrowhead=normal,
        likec4_id="4fjeea",
        minlen=1,
        style=dashed];
    studio -> identity [arrowhead=normal,
        likec4_id="18f2095",
        minlen=1,
        style=dashed];
    classplatform -> payments [arrowhead=normal,
        likec4_id=jnqh2q,
        minlen=1,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Take payment for paid classes</FONT></TD></TR></TABLE>>];
    classplatform -> email [arrowhead=normal,
        likec4_id="43g2t3",
        minlen=1,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Send booking confirmation</FONT></TD></TR></TABLE>>];
    classplatform -> push [arrowhead=normal,
        likec4_id=d0ys79,
        minlen=1,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Notify member when a waitlist space<BR/>opens</FONT></TD></TR></TABLE>>];
}
`;case`studio`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=studio,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=ortho
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph "cluster_@gr1" {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>STUDIO</B></FONT>>,
            likec4_depth=2,
            likec4_id="@gr1",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph "cluster_@gr2" {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CUSTOMER LAYER</B></FONT>>,
                likec4_depth=1,
                likec4_id="@gr2",
                likec4_level=0,
                margin=40,
                style=filled
            ];
            webapp [group="@gr1",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Web App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Member-facing web application</FONT></TD></TR></TABLE>>,
                likec4_id="studio.webApp",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            mobileapp [group="@gr1",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Member-facing mobile application</FONT></TD></TR></TABLE>>,
                likec4_id="studio.mobileApp",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        subgraph "cluster_@gr3" {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EXPERIENCE LAYER</B></FONT>>,
                likec4_depth=1,
                likec4_id="@gr3",
                likec4_level=0,
                margin=32,
                style=filled
            ];
            experienceapi [group="@gr1",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Experience Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Orchestrates journeys across Studio services<BR/>and the booking platform</FONT></TD></TR></TABLE>>,
                likec4_id="studio.experienceApi",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        subgraph "cluster_@gr4" {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DOMAIN LAYER</B></FONT>>,
                likec4_depth=1,
                likec4_id="@gr4",
                likec4_level=0,
                margin=40,
                style=filled
            ];
            profileapi [group="@gr1",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Profile Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Member profiles and preferences</FONT></TD></TR></TABLE>>,
                likec4_id="studio.profileApi",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            events [group="@gr1",
                height=2.389,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Events</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Domain events published by Studio services</FONT></TD></TR></TABLE>>,
                likec4_id="studio.events",
                likec4_level=1,
                margin="0.278,0.223",
                width=4.445];
        }
    }
    member [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Member</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Gym member who finds and books classes</FONT></TD></TR></TABLE>>,
        likec4_id=member,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    member -> webapp [arrowhead=normal,
        likec4_id=mwq3ud,
        style=dashed];
    member -> mobileapp [arrowhead=normal,
        likec4_id="16p6eyt",
        style=dashed];
    webapp -> experienceapi [arrowhead=normal,
        likec4_id="1bsnul9",
        style=dashed,
        weight=2];
    mobileapp -> experienceapi [arrowhead=normal,
        likec4_id="1uoupwt",
        style=dashed,
        weight=2];
    experienceapi -> profileapi [arrowhead=normal,
        likec4_id="13miben",
        style=dashed,
        weight=2];
    externalsystems [height=2.5,
        label=<<FONT POINT-SIZE="20">External Systems</FONT>>,
        likec4_id=externalSystems,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    experienceapi -> externalsystems [arrowhead=normal,
        likec4_id=cvquu1,
        style=dashed];
    experienceapi -> events [arrowhead=normal,
        likec4_id=elf9tf,
        style=dashed,
        weight=2];
    profileapi -> externalsystems [arrowhead=normal,
        likec4_id="2guxik",
        style=dashed];
    profileapi -> events [arrowhead=normal,
        likec4_id="1f3wzpi",
        minlen=0,
        style=dashed,
        weight=2];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`bookClassJourney`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3129pt" height="1134pt"
 viewBox="0.00 0.00 3129.00 1134.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1119.05)">
<!-- member -->
<g id="node1" class="node">
<title>member</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="326.06,-642 0,-642 0,-462 326.06,-462 326.06,-642"/>
<text xml:space="preserve" text-anchor="start" x="126.36" y="-555" font-family="Arial" font-size="20.00" fill="#f8fafc">Member</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-532" font-family="Arial" font-size="15.00" fill="#cbd5e1">Gym member who finds and books classes</text>
</g>
<!-- webapp -->
<g id="node2" class="node">
<title>webapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1027.63,-642 707.59,-642 707.59,-462 1027.63,-462 1027.63,-642"/>
<text xml:space="preserve" text-anchor="start" x="826.47" y="-555" font-family="Arial" font-size="20.00" fill="#eff6ff">Web App</text>
<text xml:space="preserve" text-anchor="start" x="763.81" y="-532" font-family="Arial" font-size="15.00" fill="#bfdbfe">Member&#45;facing web application</text>
</g>
<!-- experienceapi -->
<g id="node3" class="node">
<title>experienceapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1760.36,-642 1419.3,-642 1419.3,-462 1760.36,-462 1760.36,-642"/>
<text xml:space="preserve" text-anchor="start" x="1503.68" y="-564" font-family="Arial" font-size="20.00" fill="#eff6ff">Experience Service</text>
<text xml:space="preserve" text-anchor="start" x="1439.35" y="-541" font-family="Arial" font-size="15.00" fill="#bfdbfe">Orchestrates journeys across Studio services</text>
<text xml:space="preserve" text-anchor="start" x="1507.27" y="-523" font-family="Arial" font-size="15.00" fill="#bfdbfe">and the booking platform</text>
</g>
<!-- cms -->
<g id="node4" class="node">
<title>cms</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2446.48,-1104 2126.44,-1104 2126.44,-924 2446.48,-924 2446.48,-1104"/>
<text xml:space="preserve" text-anchor="start" x="2211.43" y="-1017" font-family="Arial" font-size="20.00" fill="#f0f9ff">Content Platform</text>
<text xml:space="preserve" text-anchor="start" x="2166.41" y="-994" font-family="Arial" font-size="15.00" fill="#b6ecf7">Gym and class descriptions, images</text>
</g>
<!-- classplatform -->
<g id="node5" class="node">
<title>classplatform</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2446.59,-642 2126.34,-642 2126.34,-462 2446.59,-462 2446.59,-642"/>
<text xml:space="preserve" text-anchor="start" x="2221.45" y="-564" font-family="Arial" font-size="20.00" fill="#f0f9ff">Class Platform</text>
<text xml:space="preserve" text-anchor="start" x="2146.39" y="-541" font-family="Arial" font-size="15.00" fill="#b6ecf7">Vendor’s headless SaaS platform: gyms,</text>
<text xml:space="preserve" text-anchor="start" x="2176.4" y="-523" font-family="Arial" font-size="15.00" fill="#b6ecf7">timetables, classes and bookings</text>
</g>
<!-- profileapi -->
<g id="node6" class="node">
<title>profileapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2446.48,-180 2126.44,-180 2126.44,0 2446.48,0 2446.48,-180"/>
<text xml:space="preserve" text-anchor="start" x="2221.99" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">Profile Service</text>
<text xml:space="preserve" text-anchor="start" x="2176.41" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">Member profiles and preferences</text>
</g>
<!-- email -->
<g id="node7" class="node">
<title>email</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3098.97,-642 2778.93,-642 2778.93,-462 3098.97,-462 3098.97,-642"/>
<text xml:space="preserve" text-anchor="start" x="2877.82" y="-544" font-family="Arial" font-size="20.00" fill="#f0f9ff">Email Service</text>
</g>
<!-- member&#45;&gt;webapp -->
<g id="edge1" class="edge">
<title>member&#45;&gt;webapp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M311.17,-641.97C335.44,-653.12 360.9,-662.77 386.06,-669 498.9,-696.91 534.83,-697.23 647.59,-669 669.26,-663.57 691.14,-655.55 712.25,-646.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="713.06,-648.71 718.81,-643.22 710.89,-643.93 713.06,-648.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="389.06,-693.05 389.06,-725.85 413.06,-725.85 413.06,-693.05 389.06,-693.05"/>
<text xml:space="preserve" text-anchor="start" x="397.17" y="-706.25" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.06,-693.05 416.06,-725.85 644.59,-725.85 644.59,-693.05 416.06,-693.05"/>
<text xml:space="preserve" text-anchor="start" x="419.06" y="-703.85" font-family="Arial" font-size="14.00" fill="#c9c9c9">Find classes (gym, date, class type)</text>
</g>
<!-- member&#45;&gt;webapp -->
<g id="edge8" class="edge">
<title>member&#45;&gt;webapp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M335.84,-552C449.38,-552 597.11,-552 707.88,-552"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="336.19,-549.38 328.69,-552 336.19,-554.63 336.19,-549.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="475.43,-555 475.43,-587.8 499.43,-587.8 499.43,-555 475.43,-555"/>
<text xml:space="preserve" text-anchor="start" x="483.54" y="-568.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="502.43,-555 502.43,-587.8 558.22,-587.8 558.22,-555 502.43,-555"/>
<text xml:space="preserve" text-anchor="start" x="505.43" y="-565.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Classes</text>
</g>
<!-- member&#45;&gt;webapp -->
<g id="edge9" class="edge">
<title>member&#45;&gt;webapp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M325.93,-498.21C345.99,-493.27 366.37,-489.06 386.06,-486.2 501.09,-469.51 532.59,-469.3 647.59,-486.2 664.09,-488.63 681.07,-492.03 697.93,-496.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="696.99,-498.49 704.9,-497.72 698.24,-493.39 696.99,-498.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="466.48,-489.2 466.48,-522 490.48,-522 490.48,-489.2 466.48,-489.2"/>
<text xml:space="preserve" text-anchor="start" x="474.58" y="-502.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="493.48,-489.2 493.48,-522 567.17,-522 567.17,-489.2 493.48,-489.2"/>
<text xml:space="preserve" text-anchor="start" x="496.48" y="-500" font-family="Arial" font-size="14.00" fill="#c9c9c9">Book class</text>
</g>
<!-- member&#45;&gt;webapp -->
<g id="edge17" class="edge">
<title>member&#45;&gt;webapp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M284.36,-456.47C315.75,-436.65 350.74,-418.64 386.06,-408.2 497.53,-375.26 536.22,-374.91 647.59,-408.2 685.83,-419.63 723.59,-440.12 756.7,-462.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="283.04,-454.2 278.15,-460.47 285.88,-458.62 283.04,-454.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="438.56,-411.2 438.56,-444 470.14,-444 470.14,-411.2 438.56,-411.2"/>
<text xml:space="preserve" text-anchor="start" x="446.56" y="-424.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">16</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="473.14,-411.2 473.14,-444 595.09,-444 595.09,-411.2 473.14,-411.2"/>
<text xml:space="preserve" text-anchor="start" x="476.14" y="-422" font-family="Arial" font-size="14.00" fill="#c9c9c9">Booking confirmed</text>
</g>
<!-- webapp&#45;&gt;experienceapi -->
<g id="edge2" class="edge">
<title>webapp&#45;&gt;experienceapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1002.4,-641.85C1029.55,-655.95 1058.68,-668.38 1087.63,-676 1204.39,-706.76 1242.24,-705.6 1359.3,-676 1386.08,-669.23 1413.14,-658.64 1438.82,-646.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1439.89,-648.84 1445.49,-643.2 1437.59,-644.12 1439.89,-648.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1159.5,-701.63 1159.5,-734.43 1183.5,-734.43 1183.5,-701.63 1159.5,-701.63"/>
<text xml:space="preserve" text-anchor="start" x="1167.6" y="-714.83" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1186.5,-701.63 1186.5,-734.43 1287.43,-734.43 1287.43,-701.63 1186.5,-701.63"/>
<text xml:space="preserve" text-anchor="start" x="1189.5" y="-712.43" font-family="Arial" font-size="14.00" fill="#c9c9c9">Search classes</text>
</g>
<!-- webapp&#45;&gt;experienceapi -->
<g id="edge7" class="edge">
<title>webapp&#45;&gt;experienceapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1037.86,-552C1152.82,-552 1304.28,-552 1419.3,-552"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1038.08,-549.38 1030.58,-552 1038.08,-554.63 1038.08,-549.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1090.63,-555 1090.63,-594.6 1114.63,-594.6 1114.63,-555 1090.63,-555"/>
<text xml:space="preserve" text-anchor="start" x="1098.73" y="-571.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.63,-555 1117.63,-594.6 1356.3,-594.6 1356.3,-555 1117.63,-555"/>
<text xml:space="preserve" text-anchor="start" x="1120.63" y="-577.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Classes with descriptions and spaces</text>
<text xml:space="preserve" text-anchor="start" x="1227.62" y="-560.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">left</text>
</g>
<!-- webapp&#45;&gt;experienceapi -->
<g id="edge10" class="edge">
<title>webapp&#45;&gt;experienceapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1027.37,-498.43C1047.46,-493.4 1067.89,-489.1 1087.63,-486.2 1207.09,-468.64 1239.73,-469.4 1359.3,-486.2 1375.77,-488.51 1392.71,-491.72 1409.58,-495.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1408.65,-497.96 1416.55,-497.08 1409.83,-492.84 1408.65,-497.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1173.11,-489.2 1173.11,-522 1197.11,-522 1197.11,-489.2 1173.11,-489.2"/>
<text xml:space="preserve" text-anchor="start" x="1181.22" y="-502.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1200.11,-489.2 1200.11,-522 1273.81,-522 1273.81,-489.2 1200.11,-489.2"/>
<text xml:space="preserve" text-anchor="start" x="1203.11" y="-500" font-family="Arial" font-size="14.00" fill="#c9c9c9">Book class</text>
</g>
<!-- webapp&#45;&gt;experienceapi -->
<g id="edge16" class="edge">
<title>webapp&#45;&gt;experienceapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M986.28,-456.34C1017.45,-436.18 1052.32,-417.82 1087.63,-407.2 1203.26,-372.43 1243.3,-373.67 1359.3,-407.2 1399.35,-418.78 1439.15,-439.66 1474.07,-462.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="984.93,-454.08 980.11,-460.4 987.82,-458.47 984.93,-454.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1137.81,-410.2 1137.81,-443 1169.38,-443 1169.38,-410.2 1137.81,-410.2"/>
<text xml:space="preserve" text-anchor="start" x="1145.81" y="-423.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">15</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1172.38,-410.2 1172.38,-443 1309.12,-443 1309.12,-410.2 1172.38,-410.2"/>
<text xml:space="preserve" text-anchor="start" x="1175.38" y="-421" font-family="Arial" font-size="14.00" fill="#c9c9c9">Booking confirmation</text>
</g>
<!-- experienceapi&#45;&gt;cms -->
<g id="edge3" class="edge">
<title>experienceapi&#45;&gt;cms</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1611.96,-641.77C1640.73,-742.04 1702.68,-900.32 1820.36,-977 1906.62,-1033.21 2021.89,-1042.72 2116.09,-1038.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2116.22,-1040.67 2123.57,-1037.64 2115.93,-1035.43 2116.22,-1040.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1823.36,-1041.93 1823.36,-1074.73 1847.36,-1074.73 1847.36,-1041.93 1823.36,-1041.93"/>
<text xml:space="preserve" text-anchor="start" x="1831.47" y="-1055.13" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1850.36,-1041.93 1850.36,-1074.73 2063.34,-1074.73 2063.34,-1041.93 1850.36,-1041.93"/>
<text xml:space="preserve" text-anchor="start" x="1853.36" y="-1052.73" font-family="Arial" font-size="14.00" fill="#c9c9c9">Fetch gym and class descriptions</text>
</g>
<!-- experienceapi&#45;&gt;cms -->
<g id="edge4" class="edge">
<title>experienceapi&#45;&gt;cms</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1691.35,-648.73C1730.16,-683.81 1775.87,-722.53 1820.36,-754 1917.4,-822.65 2034.21,-887.89 2126.49,-935.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1693.24,-646.9 1685.92,-643.8 1689.71,-650.78 1693.24,-646.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1850.2,-901.03 1850.2,-933.83 1874.2,-933.83 1874.2,-901.03 1850.2,-901.03"/>
<text xml:space="preserve" text-anchor="start" x="1858.31" y="-914.23" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1877.2,-901.03 1877.2,-933.83 2036.5,-933.83 2036.5,-901.03 1877.2,-901.03"/>
<text xml:space="preserve" text-anchor="start" x="1880.2" y="-911.83" font-family="Arial" font-size="14.00" fill="#c9c9c9">Descriptions and images</text>
</g>
<!-- experienceapi&#45;&gt;classplatform -->
<g id="edge5" class="edge">
<title>experienceapi&#45;&gt;classplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1743.19,-641.99C1768.23,-653.14 1794.48,-662.79 1820.36,-669 1926.66,-694.53 1960.28,-695.54 2066.34,-669 2088.02,-663.57 2109.91,-655.55 2131.02,-646.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2131.85,-648.71 2137.59,-643.22 2129.67,-643.93 2131.85,-648.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1874.32,-691.53 1874.32,-724.33 1898.32,-724.33 1898.32,-691.53 1874.32,-691.53"/>
<text xml:space="preserve" text-anchor="start" x="1882.43" y="-704.73" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1901.32,-691.53 1901.32,-724.33 2012.38,-724.33 2012.38,-691.53 1901.32,-691.53"/>
<text xml:space="preserve" text-anchor="start" x="1904.32" y="-702.33" font-family="Arial" font-size="14.00" fill="#c9c9c9">Search timetable</text>
</g>
<!-- experienceapi&#45;&gt;classplatform -->
<g id="edge6" class="edge">
<title>experienceapi&#45;&gt;classplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1770.54,-552C1880.72,-552 2020.5,-552 2126.61,-552"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1770.84,-549.38 1763.34,-552 1770.84,-554.63 1770.84,-549.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1852.15,-555 1852.15,-587.8 1876.15,-587.8 1876.15,-555 1852.15,-555"/>
<text xml:space="preserve" text-anchor="start" x="1860.26" y="-568.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1879.15,-555 1879.15,-587.8 2034.55,-587.8 2034.55,-555 1879.15,-555"/>
<text xml:space="preserve" text-anchor="start" x="1882.15" y="-565.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Classes with spaces left</text>
</g>
<!-- experienceapi&#45;&gt;classplatform -->
<g id="edge13" class="edge">
<title>experienceapi&#45;&gt;classplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1760.15,-497.76C1780.27,-493.01 1800.66,-488.97 1820.36,-486.2 1928.62,-470.99 1958.18,-470.31 2066.34,-486.2 2082.85,-488.63 2099.84,-492.03 2116.71,-496.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2115.77,-498.49 2123.68,-497.72 2117.01,-493.39 2115.77,-498.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1875.59,-489.2 1875.59,-522 1907.16,-522 1907.16,-489.2 1875.59,-489.2"/>
<text xml:space="preserve" text-anchor="start" x="1883.59" y="-502.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">12</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1910.16,-489.2 1910.16,-522 2011.11,-522 2011.11,-489.2 1910.16,-489.2"/>
<text xml:space="preserve" text-anchor="start" x="1913.16" y="-500" font-family="Arial" font-size="14.00" fill="#c9c9c9">Create booking</text>
</g>
<!-- experienceapi&#45;&gt;classplatform -->
<g id="edge15" class="edge">
<title>experienceapi&#45;&gt;classplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1716.1,-456.84C1748.43,-437.27 1784.32,-419.5 1820.36,-409.2 1925.48,-379.17 1961.54,-378.07 2066.34,-409.2 2104.21,-420.45 2141.64,-440.55 2174.57,-462.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1715.1,-454.37 1710.1,-460.54 1717.86,-458.84 1715.1,-454.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1857.69,-412.2 1857.69,-445 1889.27,-445 1889.27,-412.2 1857.69,-412.2"/>
<text xml:space="preserve" text-anchor="start" x="1865.69" y="-425.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">14</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1892.27,-412.2 1892.27,-445 2029,-445 2029,-412.2 1892.27,-412.2"/>
<text xml:space="preserve" text-anchor="start" x="1895.27" y="-423" font-family="Arial" font-size="14.00" fill="#c9c9c9">Booking confirmation</text>
</g>
<!-- experienceapi&#45;&gt;profileapi -->
<g id="edge11" class="edge">
<title>experienceapi&#45;&gt;profileapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1666.83,-462.03C1708.9,-415.83 1763.98,-360.87 1820.36,-320.2 1911.93,-254.14 2025.3,-197.59 2117.19,-157.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2118,-159.59 2123.81,-154.17 2115.89,-154.78 2118,-159.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1861.98,-323.2 1861.98,-356 1893.56,-356 1893.56,-323.2 1861.98,-323.2"/>
<text xml:space="preserve" text-anchor="start" x="1869.98" y="-336.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">10</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1896.56,-323.2 1896.56,-356 2024.71,-356 2024.71,-323.2 1896.56,-323.2"/>
<text xml:space="preserve" text-anchor="start" x="1899.56" y="-334" font-family="Arial" font-size="14.00" fill="#c9c9c9">Get member details</text>
</g>
<!-- experienceapi&#45;&gt;profileapi -->
<g id="edge12" class="edge">
<title>experienceapi&#45;&gt;profileapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1612.79,-452.17C1641.38,-348.46 1702.32,-190.95 1820.36,-115.2 1910.02,-57.66 2030.59,-52.67 2126.49,-61.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1610.34,-451.19 1610.91,-459.12 1615.4,-452.56 1610.34,-451.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1832.43,-118.2 1832.43,-151 1864,-151 1864,-118.2 1832.43,-118.2"/>
<text xml:space="preserve" text-anchor="start" x="1840.43" y="-131.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">11</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1867,-118.2 1867,-151 2054.27,-151 2054.27,-118.2 1867,-118.2"/>
<text xml:space="preserve" text-anchor="start" x="1870" y="-129" font-family="Arial" font-size="14.00" fill="#c9c9c9">Name, email, membership ID</text>
</g>
<!-- classplatform&#45;&gt;email -->
<g id="edge14" class="edge">
<title>classplatform&#45;&gt;email</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2446.17,-552C2543.89,-552 2669.06,-552 2768.67,-552"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2768.62,-554.63 2776.12,-552 2768.62,-549.38 2768.62,-554.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2509.59,-555 2509.59,-587.8 2541.16,-587.8 2541.16,-555 2509.59,-555"/>
<text xml:space="preserve" text-anchor="start" x="2517.59" y="-568.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">13</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2544.16,-555 2544.16,-587.8 2715.93,-587.8 2715.93,-555 2544.16,-555"/>
<text xml:space="preserve" text-anchor="start" x="2547.16" y="-565.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Send booking confirmation</text>
</g>
</g>
</svg>
`;case`joinWaitlistJourney`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2780pt" height="537pt"
 viewBox="0.00 0.00 2780.00 537.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 521.65)">
<!-- member -->
<g id="node1" class="node">
<title>member</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="326.06,-266 0,-266 0,-86 326.06,-86 326.06,-266"/>
<text xml:space="preserve" text-anchor="start" x="126.36" y="-179" font-family="Arial" font-size="20.00" fill="#f8fafc">Member</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-156" font-family="Arial" font-size="15.00" fill="#cbd5e1">Gym member who finds and books classes</text>
</g>
<!-- mobileapp -->
<g id="node2" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1005.88,-385 685.84,-385 685.84,-205 1005.88,-205 1005.88,-385"/>
<text xml:space="preserve" text-anchor="start" x="795.83" y="-298" font-family="Arial" font-size="20.00" fill="#eff6ff">Mobile App</text>
<text xml:space="preserve" text-anchor="start" x="733.73" y="-275" font-family="Arial" font-size="15.00" fill="#bfdbfe">Member&#45;facing mobile application</text>
</g>
<!-- experienceapi -->
<g id="node3" class="node">
<title>experienceapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1603.2,-380 1262.14,-380 1262.14,-200 1603.2,-200 1603.2,-380"/>
<text xml:space="preserve" text-anchor="start" x="1346.52" y="-302" font-family="Arial" font-size="20.00" fill="#eff6ff">Experience Service</text>
<text xml:space="preserve" text-anchor="start" x="1282.19" y="-279" font-family="Arial" font-size="15.00" fill="#bfdbfe">Orchestrates journeys across Studio services</text>
<text xml:space="preserve" text-anchor="start" x="1350.11" y="-261" font-family="Arial" font-size="15.00" fill="#bfdbfe">and the booking platform</text>
</g>
<!-- classplatform -->
<g id="node4" class="node">
<title>classplatform</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2179.71,-351 1859.46,-351 1859.46,-171 2179.71,-171 2179.71,-351"/>
<text xml:space="preserve" text-anchor="start" x="1954.57" y="-273" font-family="Arial" font-size="20.00" fill="#f0f9ff">Class Platform</text>
<text xml:space="preserve" text-anchor="start" x="1879.51" y="-250" font-family="Arial" font-size="15.00" fill="#b6ecf7">Vendor’s headless SaaS platform: gyms,</text>
<text xml:space="preserve" text-anchor="start" x="1909.52" y="-232" font-family="Arial" font-size="15.00" fill="#b6ecf7">timetables, classes and bookings</text>
</g>
<!-- push -->
<g id="node5" class="node">
<title>push</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2749.77,-180 2429.73,-180 2429.73,0 2749.77,0 2749.77,-180"/>
<text xml:space="preserve" text-anchor="start" x="2478.58" y="-93" font-family="Arial" font-size="20.00" fill="#f0f9ff">Push Notification Service</text>
<text xml:space="preserve" text-anchor="start" x="2467.17" y="-70" font-family="Arial" font-size="15.00" fill="#b6ecf7">Sends notifications to the mobile app</text>
</g>
<!-- member&#45;&gt;mobileapp -->
<g id="edge1" class="edge">
<title>member&#45;&gt;mobileapp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M325.9,-205.31C346.15,-208.93 366.58,-212.57 386.06,-216 481.96,-232.89 589.22,-251.38 675.9,-266.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="675.27,-268.78 683.11,-267.46 676.16,-263.61 675.27,-268.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="408.93,-260.28 408.93,-293.08 432.93,-293.08 432.93,-260.28 408.93,-260.28"/>
<text xml:space="preserve" text-anchor="start" x="417.03" y="-273.48" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.93,-260.28 435.93,-293.08 602.98,-293.08 602.98,-260.28 435.93,-260.28"/>
<text xml:space="preserve" text-anchor="start" x="438.93" y="-271.08" font-family="Arial" font-size="14.00" fill="#c9c9c9">Join waitlist for a full class</text>
</g>
<!-- member&#45;&gt;mobileapp -->
<g id="edge6" class="edge">
<title>member&#45;&gt;mobileapp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M336.32,-138.69C424.61,-126.45 532.82,-122.23 625.84,-150.2 664.47,-161.82 702.57,-182.71 735.89,-205.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="335.97,-136.09 328.92,-139.75 336.72,-141.28 335.97,-136.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="389.06,-153.2 389.06,-186 413.06,-186 413.06,-153.2 389.06,-153.2"/>
<text xml:space="preserve" text-anchor="start" x="397.17" y="-166.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.06,-153.2 416.06,-186 622.84,-186 622.84,-153.2 416.06,-153.2"/>
<text xml:space="preserve" text-anchor="start" x="419.06" y="-164" font-family="Arial" font-size="14.00" fill="#c9c9c9">You are number 3 on the waitlist</text>
</g>
<!-- member&#45;&gt;push -->
<g id="edge9" class="edge">
<title>member&#45;&gt;push</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M335.59,-108.05C471.5,-60.34 667.38,-5 844.86,-5 844.86,-5 844.86,-5 2020.58,-5 2159.96,-5 2316.48,-30.33 2429.9,-53.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="334.96,-105.49 328.77,-110.47 336.71,-110.44 334.96,-105.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1313.46,-8 1313.46,-47.6 1337.46,-47.6 1337.46,-8 1313.46,-8"/>
<text xml:space="preserve" text-anchor="start" x="1321.57" y="-24.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1340.46,-8 1340.46,-47.6 1551.88,-47.6 1551.88,-8 1340.46,-8"/>
<text xml:space="preserve" text-anchor="start" x="1343.46" y="-30.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">A space is free: confirm within 30</text>
<text xml:space="preserve" text-anchor="start" x="1421.66" y="-13.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">minutes</text>
</g>
<!-- mobileapp&#45;&gt;experienceapi -->
<g id="edge2" class="edge">
<title>mobileapp&#45;&gt;experienceapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1005.51,-293.64C1081.58,-292.99 1173.05,-292.21 1251.71,-291.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1251.72,-294.16 1259.2,-291.47 1251.68,-288.91 1251.72,-294.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1081.72,-296.09 1081.72,-328.89 1105.72,-328.89 1105.72,-296.09 1081.72,-296.09"/>
<text xml:space="preserve" text-anchor="start" x="1089.83" y="-309.29" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1108.72,-296.09 1108.72,-328.89 1186.3,-328.89 1186.3,-296.09 1108.72,-296.09"/>
<text xml:space="preserve" text-anchor="start" x="1111.72" y="-306.89" font-family="Arial" font-size="14.00" fill="#c9c9c9">Join waitlist</text>
</g>
<!-- mobileapp&#45;&gt;experienceapi -->
<g id="edge5" class="edge">
<title>mobileapp&#45;&gt;experienceapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1015.69,-236.41C1032.49,-232.26 1049.42,-228.73 1065.88,-226.2 1125.74,-217.02 1142.14,-218.02 1202.14,-226.2 1221.81,-228.88 1242.17,-232.8 1262.28,-237.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1015.37,-233.78 1008.75,-238.17 1016.67,-238.87 1015.37,-233.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068.88,-229.2 1068.88,-262 1092.88,-262 1092.88,-229.2 1068.88,-229.2"/>
<text xml:space="preserve" text-anchor="start" x="1076.99" y="-242.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1095.88,-229.2 1095.88,-262 1199.14,-262 1199.14,-229.2 1095.88,-229.2"/>
<text xml:space="preserve" text-anchor="start" x="1098.88" y="-240" font-family="Arial" font-size="14.00" fill="#c9c9c9">Waitlist position</text>
</g>
<!-- experienceapi&#45;&gt;classplatform -->
<g id="edge3" class="edge">
<title>experienceapi&#45;&gt;classplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1602.85,-281.61C1680.35,-277.77 1771.98,-273.23 1849.46,-269.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1849.43,-272.01 1856.79,-269.02 1849.17,-266.77 1849.43,-272.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1671.64,-281.1 1671.64,-313.9 1695.64,-313.9 1695.64,-281.1 1671.64,-281.1"/>
<text xml:space="preserve" text-anchor="start" x="1679.75" y="-294.3" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1698.64,-281.1 1698.64,-313.9 1791.01,-313.9 1791.01,-281.1 1698.64,-281.1"/>
<text xml:space="preserve" text-anchor="start" x="1701.64" y="-291.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">Add to waitlist</text>
</g>
<!-- experienceapi&#45;&gt;classplatform -->
<g id="edge4" class="edge">
<title>experienceapi&#45;&gt;classplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1612.83,-217.9C1629.65,-213.17 1646.61,-209.13 1663.2,-206.2 1727.29,-194.87 1798.11,-201.85 1859.56,-214.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1612.32,-215.32 1605.85,-219.93 1613.78,-220.36 1612.32,-215.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1666.2,-209.2 1666.2,-242 1690.2,-242 1690.2,-209.2 1666.2,-209.2"/>
<text xml:space="preserve" text-anchor="start" x="1674.31" y="-222.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1693.2,-209.2 1693.2,-242 1796.46,-242 1796.46,-209.2 1693.2,-209.2"/>
<text xml:space="preserve" text-anchor="start" x="1696.2" y="-220" font-family="Arial" font-size="14.00" fill="#c9c9c9">Waitlist position</text>
</g>
<!-- classplatform&#45;&gt;classplatform -->
<g id="edge7" class="edge">
<title>classplatform&#45;&gt;classplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1970,-350.98C1957.81,-407.28 1974.33,-461 2019.58,-461 2062.09,-461 2079.25,-413.58 2071.06,-361.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2073.67,-360.85 2069.71,-353.96 2068.51,-361.81 2073.67,-360.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1906.2,-464 1906.2,-503.6 1930.2,-503.6 1930.2,-464 1906.2,-464"/>
<text xml:space="preserve" text-anchor="start" x="1914.3" y="-480.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1933.2,-464 1933.2,-503.6 2132.97,-503.6 2132.97,-464 1933.2,-464"/>
<text xml:space="preserve" text-anchor="start" x="1936.2" y="-486.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Space opens: offer it to the first</text>
<text xml:space="preserve" text-anchor="start" x="1963.05" y="-469.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">member on the waitlist</text>
</g>
<!-- classplatform&#45;&gt;push -->
<g id="edge8" class="edge">
<title>classplatform&#45;&gt;push</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2179.6,-213.14C2254.53,-190.59 2343.96,-163.67 2420.07,-140.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2420.44,-143.4 2426.86,-138.72 2418.93,-138.37 2420.44,-143.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2242.71,-193.82 2242.71,-226.62 2266.71,-226.62 2266.71,-193.82 2242.71,-193.82"/>
<text xml:space="preserve" text-anchor="start" x="2250.81" y="-207.02" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2269.71,-193.82 2269.71,-226.62 2366.73,-226.62 2366.73,-193.82 2269.71,-193.82"/>
<text xml:space="preserve" text-anchor="start" x="2272.71" y="-204.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">Notify member</text>
</g>
</g>
</svg>
`;case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1736pt" height="858pt"
 viewBox="0.00 0.00 1736.00 858.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 843.05)">
<g id="clust1" class="cluster">
<title>cluster_externalsystems</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-589.2 1698,-589.2 1698,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-576.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EXTERNAL SYSTEMS</text>
</g>
<!-- classplatform -->
<g id="node1" class="node">
<title>classplatform</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="798.12,-528 477.88,-528 477.88,-348 798.12,-348 798.12,-528"/>
<text xml:space="preserve" text-anchor="start" x="572.99" y="-450" font-family="Arial" font-size="20.00" fill="#f0f9ff">Class Platform</text>
<text xml:space="preserve" text-anchor="start" x="497.93" y="-427" font-family="Arial" font-size="15.00" fill="#b6ecf7">Vendor’s headless SaaS platform: gyms,</text>
<text xml:space="preserve" text-anchor="start" x="527.94" y="-409" font-family="Arial" font-size="15.00" fill="#b6ecf7">timetables, classes and bookings</text>
</g>
<!-- cms -->
<g id="node2" class="node">
<title>cms</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1228.02,-528 907.98,-528 907.98,-348 1228.02,-348 1228.02,-528"/>
<text xml:space="preserve" text-anchor="start" x="992.97" y="-441" font-family="Arial" font-size="20.00" fill="#f0f9ff">Content Platform</text>
<text xml:space="preserve" text-anchor="start" x="947.95" y="-418" font-family="Arial" font-size="15.00" fill="#b6ecf7">Gym and class descriptions, images</text>
</g>
<!-- identity -->
<g id="node3" class="node">
<title>identity</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1658.02,-528 1337.98,-528 1337.98,-348 1658.02,-348 1658.02,-528"/>
<text xml:space="preserve" text-anchor="start" x="1425.74" y="-441" font-family="Arial" font-size="20.00" fill="#f0f9ff">Identity Provider</text>
<text xml:space="preserve" text-anchor="start" x="1446.32" y="-418" font-family="Arial" font-size="15.00" fill="#b6ecf7">Member sign&#45;in</text>
</g>
<!-- payments -->
<g id="node4" class="node">
<title>payments</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-228 47.98,-228 47.98,-48 368.02,-48 368.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="126.3" y="-130" font-family="Arial" font-size="20.00" fill="#f0f9ff">Payment Gateway</text>
</g>
<!-- email -->
<g id="node5" class="node">
<title>email</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="576.87" y="-130" font-family="Arial" font-size="20.00" fill="#f0f9ff">Email Service</text>
</g>
<!-- push -->
<g id="node6" class="node">
<title>push</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1228.02,-228 907.98,-228 907.98,-48 1228.02,-48 1228.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="956.84" y="-141" font-family="Arial" font-size="20.00" fill="#f0f9ff">Push Notification Service</text>
<text xml:space="preserve" text-anchor="start" x="945.42" y="-118" font-family="Arial" font-size="15.00" fill="#b6ecf7">Sends notifications to the mobile app</text>
</g>
<!-- member -->
<g id="node7" class="node">
<title>member</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="795.03,-828 468.97,-828 468.97,-648 795.03,-648 795.03,-828"/>
<text xml:space="preserve" text-anchor="start" x="595.33" y="-741" font-family="Arial" font-size="20.00" fill="#f8fafc">Member</text>
<text xml:space="preserve" text-anchor="start" x="489.02" y="-718" font-family="Arial" font-size="15.00" fill="#cbd5e1">Gym member who finds and books classes</text>
</g>
<!-- studio -->
<g id="node8" class="node">
<title>studio</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1231.45,-828 904.55,-828 904.55,-648 1231.45,-648 1231.45,-828"/>
<text xml:space="preserve" text-anchor="start" x="1039.65" y="-741" font-family="Arial" font-size="20.00" fill="#eff6ff">Studio</text>
<text xml:space="preserve" text-anchor="start" x="924.6" y="-718" font-family="Arial" font-size="15.00" fill="#bfdbfe">The gym chain’s own member experience</text>
</g>
<!-- classplatform&#45;&gt;payments -->
<g id="edge5" class="edge">
<title>classplatform&#45;&gt;payments</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M477.88,-438C355.63,-438 208,-438 208,-438 208,-438 208,-238.13 208,-238.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.63,-238.13 208,-230.63 205.38,-238.13 210.63,-238.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="47.14,-438 47.14,-460.8 243.01,-460.8 243.01,-438 47.14,-438"/>
<text xml:space="preserve" text-anchor="start" x="50.14" y="-443.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Take payment for paid classes</text>
</g>
<!-- classplatform&#45;&gt;email -->
<g id="edge6" class="edge">
<title>classplatform&#45;&gt;email</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M638,-348.4C638,-348.4 638,-238.45 638,-238.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="640.63,-238.45 638,-230.95 635.38,-238.45 640.63,-238.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="466.23,-293.42 466.23,-316.22 638,-316.22 638,-293.42 466.23,-293.42"/>
<text xml:space="preserve" text-anchor="start" x="469.23" y="-299.22" font-family="Arial" font-size="14.00" fill="#c9c9c9">Send booking confirmation</text>
</g>
<!-- classplatform&#45;&gt;push -->
<g id="edge7" class="edge">
<title>classplatform&#45;&gt;push</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M797.86,-408C837.59,-408 869.07,-408 869.07,-408 869.07,-408 869.07,-138 869.07,-138 869.07,-138 897.85,-138 897.85,-138"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="897.85,-140.63 905.35,-138 897.85,-135.38 897.85,-140.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="869.07,-294.22 869.07,-333.82 1102.27,-333.82 1102.27,-294.22 869.07,-294.22"/>
<text xml:space="preserve" text-anchor="start" x="872.07" y="-316.82" font-family="Arial" font-size="14.00" fill="#c9c9c9">Notify member when a waitlist space</text>
<text xml:space="preserve" text-anchor="start" x="872.07" y="-300.02" font-family="Arial" font-size="14.00" fill="#c9c9c9">opens</text>
</g>
<!-- member&#45;&gt;studio -->
<g id="edge1" class="edge">
<title>member&#45;&gt;studio</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M794.97,-708C794.97,-708 894.34,-708 894.34,-708"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="894.34,-710.63 901.84,-708 894.34,-705.38 894.34,-710.63"/>
</g>
<!-- studio&#45;&gt;classplatform -->
<g id="edge2" class="edge">
<title>studio&#45;&gt;classplatform</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M904.56,-768C864.87,-768 833.6,-768 833.6,-768 833.6,-768 833.6,-468 833.6,-468 833.6,-468 808.25,-468 808.25,-468"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="808.25,-465.38 800.75,-468 808.25,-470.63 808.25,-465.38"/>
</g>
<!-- studio&#45;&gt;cms -->
<g id="edge3" class="edge">
<title>studio&#45;&gt;cms</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1068,-648.4C1068,-648.4 1068,-538.45 1068,-538.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1070.63,-538.45 1068,-530.95 1065.38,-538.45 1070.63,-538.45"/>
</g>
<!-- studio&#45;&gt;identity -->
<g id="edge4" class="edge">
<title>studio&#45;&gt;identity</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1231.18,-738C1352.82,-738 1498,-738 1498,-738 1498,-738 1498,-538.13 1498,-538.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1500.63,-538.13 1498,-530.63 1495.38,-538.13 1500.63,-538.13"/>
</g>
</g>
</svg>
`;case`studio`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 16.1.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="978pt" height="1420pt"
 viewBox="0.00 0.00 978.00 1420.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1405.45)">
<g id="clust1" class="cluster">
<title>cluster_@gr1</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-220 8,-1202.4 940,-1202.4 940,-220 8,-220"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1189.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">STUDIO</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_@gr2</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="64,-860 64,-1141.2 894,-1141.2 894,-860 64,-860"/>
<text xml:space="preserve" text-anchor="start" x="72" y="-1128.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CUSTOMER LAYER</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_@gr3</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="486,-568 486,-833.2 892,-833.2 892,-568 486,-568"/>
<text xml:space="preserve" text-anchor="start" x="494" y="-820.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EXPERIENCE LAYER</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_@gr4</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-260 48,-541.2 900,-541.2 900,-260 48,-260"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-528.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DOMAIN LAYER</text>
</g>
<!-- webapp -->
<g id="node1" class="node">
<title>webapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="424.02,-1080 103.98,-1080 103.98,-900 424.02,-900 424.02,-1080"/>
<text xml:space="preserve" text-anchor="start" x="222.87" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">Web App</text>
<text xml:space="preserve" text-anchor="start" x="160.2" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">Member&#45;facing web application</text>
</g>
<!-- mobileapp -->
<g id="node2" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="854.02,-1080 533.98,-1080 533.98,-900 854.02,-900 854.02,-1080"/>
<text xml:space="preserve" text-anchor="start" x="643.97" y="-993" font-family="Arial" font-size="20.00" fill="#eff6ff">Mobile App</text>
<text xml:space="preserve" text-anchor="start" x="581.86" y="-970" font-family="Arial" font-size="15.00" fill="#bfdbfe">Member&#45;facing mobile application</text>
</g>
<!-- experienceapi -->
<g id="node3" class="node">
<title>experienceapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="859.53,-780 518.47,-780 518.47,-600 859.53,-600 859.53,-780"/>
<text xml:space="preserve" text-anchor="start" x="602.85" y="-702" font-family="Arial" font-size="20.00" fill="#eff6ff">Experience Service</text>
<text xml:space="preserve" text-anchor="start" x="538.52" y="-679" font-family="Arial" font-size="15.00" fill="#bfdbfe">Orchestrates journeys across Studio services</text>
<text xml:space="preserve" text-anchor="start" x="606.45" y="-661" font-family="Arial" font-size="15.00" fill="#bfdbfe">and the booking platform</text>
</g>
<!-- profileapi -->
<g id="node4" class="node">
<title>profileapi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="408.02,-480 87.98,-480 87.98,-300 408.02,-300 408.02,-480"/>
<text xml:space="preserve" text-anchor="start" x="183.53" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">Profile Service</text>
<text xml:space="preserve" text-anchor="start" x="137.95" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">Member profiles and preferences</text>
</g>
<!-- events -->
<g id="node5" class="node">
<title>events</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="860.18,-476 517.82,-476 517.82,-304 860.18,-304 860.18,-476"/>
<text xml:space="preserve" text-anchor="start" x="658.43" y="-393" font-family="Arial" font-size="20.00" fill="#eff6ff">Events</text>
<text xml:space="preserve" text-anchor="start" x="541.84" y="-370" font-family="Arial" font-size="15.00" fill="#bfdbfe">Domain events published by Studio services</text>
</g>
<!-- member -->
<g id="node6" class="node">
<title>member</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="642.03,-1390.4 315.97,-1390.4 315.97,-1210.4 642.03,-1210.4 642.03,-1390.4"/>
<text xml:space="preserve" text-anchor="start" x="442.33" y="-1303.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Member</text>
<text xml:space="preserve" text-anchor="start" x="336.02" y="-1280.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">Gym member who finds and books classes</text>
</g>
<!-- externalsystems -->
<g id="node7" class="node">
<title>externalsystems</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="797.02,-180 476.98,-180 476.98,0 797.02,0 797.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="559.2" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">External Systems</text>
</g>
<!-- webapp&#45;&gt;experienceapi -->
<g id="edge3" class="edge">
<title>webapp&#45;&gt;experienceapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M423.71,-990C478.47,-990 526.22,-990 526.22,-990 526.22,-990 526.22,-790.13 526.22,-790.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="528.85,-790.13 526.22,-782.63 523.6,-790.13 528.85,-790.13"/>
</g>
<!-- mobileapp&#45;&gt;experienceapi -->
<g id="edge4" class="edge">
<title>mobileapp&#45;&gt;experienceapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M694,-900.4C694,-900.4 694,-790.45 694,-790.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="696.63,-790.45 694,-782.95 691.38,-790.45 696.63,-790.45"/>
</g>
<!-- experienceapi&#45;&gt;profileapi -->
<g id="edge5" class="edge">
<title>experienceapi&#45;&gt;profileapi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M518.49,-720C397.32,-720 256,-720 256,-720 256,-720 256,-490.27 256,-490.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="258.63,-490.27 256,-482.77 253.38,-490.27 258.63,-490.27"/>
</g>
<!-- experienceapi&#45;&gt;events -->
<g id="edge7" class="edge">
<title>experienceapi&#45;&gt;events</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M689,-600.4C689,-600.4 689,-486.32 689,-486.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="691.63,-486.32 689,-478.82 686.38,-486.32 691.63,-486.32"/>
</g>
<!-- experienceapi&#45;&gt;externalsystems -->
<g id="edge6" class="edge">
<title>experienceapi&#45;&gt;externalsystems</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M518.71,-660C509.67,-660 504.21,-660 504.21,-660 504.21,-660 504.21,-190.22 504.21,-190.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="506.83,-190.22 504.21,-182.72 501.58,-190.22 506.83,-190.22"/>
</g>
<!-- profileapi&#45;&gt;events -->
<g id="edge9" class="edge">
<title>profileapi&#45;&gt;events</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M407.83,-419C407.83,-419 507.65,-419 507.65,-419"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="507.65,-421.63 515.15,-419 507.65,-416.38 507.65,-421.63"/>
</g>
<!-- profileapi&#45;&gt;externalsystems -->
<g id="edge8" class="edge">
<title>profileapi&#45;&gt;externalsystems</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M407.79,-361C453.21,-361 490.59,-361 490.59,-361 490.59,-361 490.59,-190.39 490.59,-190.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="493.22,-190.39 490.59,-182.89 487.97,-190.39 493.22,-190.39"/>
</g>
<!-- member&#45;&gt;webapp -->
<g id="edge1" class="edge">
<title>member&#45;&gt;webapp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M369.99,-1210.62C369.99,-1210.62 369.99,-1090.37 369.99,-1090.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="372.62,-1090.37 369.99,-1082.87 367.37,-1090.37 372.62,-1090.37"/>
</g>
<!-- member&#45;&gt;mobileapp -->
<g id="edge2" class="edge">
<title>member&#45;&gt;mobileapp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M588.01,-1210.62C588.01,-1210.62 588.01,-1090.37 588.01,-1090.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="590.63,-1090.37 588.01,-1082.87 585.38,-1090.37 590.63,-1090.37"/>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};