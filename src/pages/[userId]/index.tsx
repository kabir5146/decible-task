import styles from "@/styles/Home.module.css";
import { Table, Button, Typography, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { columns, dataSource } from "@/utils/statics";
import { useQuery } from "@apollo/client";
import { CALLS_QUERY } from "@/mutation/callMutation";
import { useRouter } from "next/router";

const DataPage = () => {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1);
  const [calls,setCalls] = useState([]);
  console.log("🚀 ~ file: index.tsx:12 ~ DataPage ~ currentPage:", calls)


  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    refetch();
  };
 useEffect(() => {
    refetch({ page: currentPage });
  }, [currentPage,]);
  const {loading,error,data,refetch}:any = useQuery(CALLS_QUERY,{
    variables: {
      offset: (currentPage - 2) * 10,
      limit:10,
    },
  })
  console.log("🚀 ~ file: home.tsx:32 ~ HomePage ~ data:",data?.paginatedCalls?.nodes)
  if(loading) return <h1>Loading...</h1>
   if(error){
       console.log(error.message)
   }
   if(data?.quotes?.length == 0){
    return  <h2>No Quotes available</h2>
   }

  
 
    
 

  return (
    <main className={`${styles.main}`}>
      <div>
        {/* button here  */}
        <div
          style={{
            border: "1px solid #000",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px 16px",
            alignItems: "center",
            marginBottom: "40px",
            width: "1200px",
          }}
        >
          <p
            style={{
              textTransform: "capitalize",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Calls Inc
          </p>
          <Button
            style={{
              background: "#000",
              color: "#fff",
            }}
          >
            Log out
          </Button>
        </div>
      </div>
      <div className="">
        {/* title here  */}
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <Typography.Text
            style={{
              textTransform: "capitalize",
              textAlign: "start",
              fontSize: "30px",
            }}
          >
            Turing Technologies Frontend Test
          </Typography.Text>
        </div>
        {/* status here  */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <Typography.Text>
            Filter by: <Typography.Text strong>Status</Typography.Text>
          </Typography.Text>
          <div>
            <DownOutlined style={{ fontSize: "10px" }} />
          </div>
        </div>
        {/* table is here  */}
        <Table
          dataSource={data?.paginatedCalls?.nodes}
          columns={columns}
          className={styles.table}
          pagination={false}
        />

        {/* pagination is here */}
        <div className="">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              color: "white",
              marginTop: "50px",
            }}
          >
            <Button
              title="previous"
              type="text"
              shape="default"
              icon={<LeftOutlined style={{ fontSize: "10px" }} />}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            {[...Array(Math.floor(data?.paginatedCalls?.totalCount/10 || 10))].map((page,i) => (
              <Button
                key={i}
                type="text"
                shape="default"
                size="small"
                onClick={() => handlePageChange(i + 1)}
                disabled={currentPage === i+1 }
                style={{
                  background:
                    currentPage === i + 1 ? "black" : "transparent",
                  color: currentPage === i + 1 ? "white" : "black",
                }}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              title="next"
              type="text"
              shape="default"
              icon={<RightOutlined style={{ fontSize: "10px" }} />}
              disabled={currentPage === Math.floor(data?.paginatedCalls?.totalCount/10 || 10)}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </div>
          <Row justify="center" style={{ marginTop: "8px" }}>
            <Col>
              <Typography.Text style={{ textAlign: "center" }}>
                1 - {Math.floor(data?.paginatedCalls?.totalCount/10 || 10)} of 
                
                {data?.paginatedCalls?.totalCount} results
              </Typography.Text>
            </Col>
          </Row>
        </div>
      </div>
    </main>
  );
};

export default DataPage;
