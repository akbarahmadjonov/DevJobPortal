import React from "react";
import "./OpenPaused.scss";
import { VscFolderActive } from "react-icons/vsc";
import { GiSandsOfTime } from "react-icons/gi";
import { BsHeadphones } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { Select } from "antd";
import { Dropdown, Menu } from "antd";

export const OpenPaused = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="1" danger>
        Delete this job
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="open-paused">
      <div className="container">
        <div className="open-paused__inner">
          <div className="open-paused__block">
            <h2 className="job__title">Senior Flutter+PostgreSQL Devel...</h2>
            <span className="job__createdTime">Created: June 1</span>
          </div>
          <div className="open-paused__box">
            <div className="open-paused__block">
              <div className="open-paused__box-outer">
                <VscFolderActive
                  style={{ color: "#0050C8", fontSize: "23px" }}
                />
                <span>Active</span>
                <span>4</span>
              </div>
            </div>
            <div className="open-paused__block">
              <div className="open-paused__box-outer">
                <GiSandsOfTime style={{ color: "#0050C8", fontSize: "23px" }} />
                <span>Proposed</span>
                <span>4</span>
              </div>
            </div>
            <div className="open-paused__block">
              <div className="open-paused__box-outer">
                <BsHeadphones style={{ color: "#0050C8", fontSize: "23px" }} />
                <span>Interview</span>
                <span>0</span>
              </div>
            </div>
            <div className="open-paused__block">
              <div className="open-paused__box-outer">
                <FaPeopleGroup style={{ color: "#0050C8", fontSize: "23px" }} />
                <span>Hired</span>
                <span>0</span>
              </div>
            </div>
          </div>
          <div className="open-paused__disQua">
            <HiOutlineDesktopComputer
              style={{ color: "#0050C8", fontSize: "23px" }}
            />
            <span>Disqualified</span>
            <span>0</span>
          </div>
          <div className="open-paused__block">
            <Select
              defaultValue="Paused"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[{ value: "Paused" }]}
            />
          </div>
          <div className="open-paused__block">
            <Dropdown overlay={dropdownMenu} trigger={["click"]}>
              <div
                onClick={(e) => e.preventDefault()}
                className="open-paused__dotsIcon"
              >
                <BsThreeDots style={{ color: "#0050C8", fontSize: "23px" }} />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};