import { Button } from "antd";

export const dataSource = [
  {
    callType: "Voice Mail",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Archived",
  },
  {
    callType: "Answered",
    direction: "Inbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
  {
    callType: "Missed",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
  {
    callType: "Voice Mail",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Archived",
  },
  {
    callType: "Answered",
    direction: "Inbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
  {
    callType: "Missed",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
  {
    callType: "Voice Mail",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Archived",
  },
  {
    callType: "Answered",
    direction: "Inbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
  {
    callType: "Missed",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
];

export const columns = [
  // 1st column
  {
    title: "CALL TYPE",
    dataIndex: "callType",
    key: "callType",
    render: (text: any, record: any) => (
      <span
        style={{
          color:
            record.callType === "Missed"
              ? "#ef4444"
              : record.callType === "Voice Mail"
              ? "#9144ef"
              : "#18ffc9",
        }}
      >
        {text}
      </span>
    ),
  },
  // 2nd column
  {
    title: "DIRECTION",
    dataIndex: "direction",
    key: "direction",
    render: (text: any) => <span style={{ color: "#9144ef" }}>{text}</span>,
  },
  {
    title: "DURATION",
    dataIndex: "duration",
    key: "duration",
    render: (text: any, record: any) => (
      <>
        <p>{text}</p>
        <p style={{ color: "#9144ef" }}>{record.durationSeconds}</p>
      </>
    ),
  },
  {
    title: "FORM",
    dataIndex: "from",
    key: "from",
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: "TO",
    dataIndex: "to",
    key: "to",
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: "VIA",
    dataIndex: "via",
    key: "via",
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: "CREATED AT",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (text: any, record: any) => (
      <Button
        style={{
          color: record.callType === "Answered" ? "#000000" : "#18ffc9",
          background:
            record.callType === "Answered" ? "#bdbdbd4c" : "#60ffef2a",
          border: 0,
        }}
      >
        {text}
      </Button>
    ),
  },
  {
    title: "ACTIONS",
    key: "actions",
    render: () => (
      <Button
        style={{
          color: "#ffffff",
          background: "#000000",
          border: 0,
        }}
        className=""
      >
        Add Note
      </Button>
    ),
  },
];
