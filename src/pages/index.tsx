import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Table, Button } from "antd";

const inter = Inter({ subsets: ["latin"] });

const dataSource = [
  {
    callType: "Voice Mail",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "4823 seconds",
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
    durationSeconds: "4823 seconds",
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
    durationSeconds: "4823 seconds",
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
    durationSeconds: "4823 seconds",
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
    durationSeconds: "4823 seconds",
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
    durationSeconds: "4823 seconds",
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
    durationSeconds: "4823 seconds",
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
    durationSeconds: "4823 seconds",
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
    durationSeconds: "4823 seconds",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
];

const columns = [
  // 1st column
  {
    title: "CALL TYPE",
    dataIndex: "callType",
    key: "callType",
    render: (text, record) => (
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
    render: (text) => <span style={{ color: "#9144ef" }}>{text}</span>,
  },
  {
    title: "DURATION",
    dataIndex: "duration",
    key: "duration",
    render: (text, record) => (
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
    render: (text) => <span>{text}</span>,
  },
  {
    title: "TO",
    dataIndex: "to",
    key: "to",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "VIA",
    dataIndex: "via",
    key: "via",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "CREATED AT",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (text, record) => (
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

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </main>
    </>
  );
}
