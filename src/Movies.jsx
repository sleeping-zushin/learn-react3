import { Button, Card, Form, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { movies } from "./data/movie";
import medicineApi from "./api/medicineApi";
import blogApi from "./api/blogApi";
import { MovieAddForm } from "./components/MovieAddForm";

export const Movies = () => {
  const [medicineList, setMedicineList] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [contentType, setContentType] = useState("medicine");

  useEffect(() => {
    fetchMedicines();
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (contentType === "blogs") {
      fetchBlogs();
    }
    if (contentType === "medicine") {
      fetchMedicines();
    }
    console.log("Change state to " + contentType);
  }, [contentType]);

  const fetchBlogs = async () => {
    try {
      const data = await blogApi.getBlogs();
      console.log("Fetched blog:", data);
      setBlogList(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };
  const fetchMedicines = async () => {
    try {
      const data = await medicineApi.getMedicines();
      console.log("Fetched medicines:", data);
      setMedicineList(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };



  return (
    <>
      <div>Movies List</div>
      <Button
        onClick={() => {
          setContentType(contentType === "blogs" ? "medicine" : "blogs");
          setBlogList([]);
          setMedicineList([]);
        }}
      >
        {contentType === "blogs" ? "Show medicine" : "Show blogs"}
      </Button>
      {contentType === "medicine" && (
        <>
          <Button type="primary" onClick={fetchMedicines}>
            Fetch Medicines
          </Button>
          {/* medicine list */}
          <MovieAddForm />
          
          {medicineList.map((medicine) => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={medicine.poster} />}
            >
              <Meta
                title={medicine.medicinename}
                description={medicine.createdby}
              />
            </Card>
          ))}
        </>
      )}
      {contentType === "blogs" && (
        <>
          <Button type="primary" onClick={fetchBlogs}>
            Fetch Blog
          </Button>
          {blogList.length > 0 &&
            blogList.map((blog) => (
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={blog.image} />}
              >
                <Meta
                  title={blog.title}
                  description={blog.content.substring(60)}
                />
              </Card>
            ))}
        </>
      )}
    </>
  );
};
