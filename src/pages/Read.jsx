import axios from "axios";
import React from "react";
import "../css/CRUD.css";
import { useState,useEffect } from "react";

const Read = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
   
    axios.get("http://localhost/CRUD_API/api/read.php").then(function (res) {
      setData(res.data.message);
    });
    
  }, [])

  return (
    <>
      <div class="container">
        <div class="table">
          <div class="table-header">
            <div class="header__item">
              <a id="name" class="filter__link" href="#">
                Firstname
              </a>
            </div>
            <div class="header__item">
              <a id="wins" class="filter__link filter__link--number" href="#">
                Lastname
              </a>
            </div>
            <div class="header__item">
              <a id="draws" class="filter__link filter__link--number" href="#">
                Email
              </a>
            </div>
            <div class="header__item">
              <a id="losses" class="filter__link filter__link--number" href="#">
                Action
              </a>
            </div>
          </div>
          {data.map((userInfo) => {
            return (
              <div class="table-content">
                <div class="table-row">
                  <div class="table-data">{userInfo.firstname}</div>
                  <div class="table-data">{userInfo.lastname}</div>
                  <div class="table-data">{userInfo.email}</div>
                  <div class="table-data">
                    <a href="#" className="edit">
                      Edit
                    </a>
                    <a
                      href={`http://localhost/CRUD_API/api/delete.php?id=${userInfo.id}`}
                      className="delete"
                    >
                      Remove
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Read;
