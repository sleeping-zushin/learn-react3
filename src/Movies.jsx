import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { movies } from "./data/movie";

export const Movies = () => {
  return (
    <>
      <div>Movies List</div>
      {movies.map(movie => <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={movie.poster}
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>)
      }

      
    </>
  );
};
