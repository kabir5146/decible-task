import styles from "@/styles/Home.module.css";
import { Table, Button, Typography, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { columns, dataSource } from "@/utils/statics";

const DataPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 10;

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
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
          dataSource={dataSource}
          columns={columns}
          className={styles.table}
          pagination={false}
        />

        {/* pagination is here */}
        <div className="">
          {/* <div
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
                {[...Array(totalPages).keys()].map((page) => (
                  <Button
                    key={page + 1}
                    type="text"
                    shape="default"
                    size="small"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={currentPage === page + 1}
                  >
                    {page + 1}
                  </Button>
                ))}
                <Button
                  title="next"
                  type="text"
                  shape="default"
                  icon={<RightOutlined style={{ fontSize: "10px" }} />}
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </div> */}
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
            {Array(totalPages).map((page) => (
              <Button
                key={page + 1}
                type="text"
                shape="default"
                size="small"
                onClick={() => handlePageChange(page + 1)}
                disabled={currentPage === page + 1}
                style={{
                  background:
                    currentPage === page + 1 ? "black" : "transparent",
                  color: currentPage === page + 1 ? "white" : "black",
                }}
              >
                {page + 1}
              </Button>
            ))}
            <Button
              title="next"
              type="text"
              shape="default"
              icon={<RightOutlined style={{ fontSize: "10px" }} />}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </div>
          <Row justify="center" style={{ marginTop: "8px" }}>
            <Col>
              <Typography.Text style={{ textAlign: "center" }}>
                1 - 10 of 25 results
              </Typography.Text>
            </Col>
          </Row>
        </div>
      </div>
    </main>
  );
};

export default DataPage;