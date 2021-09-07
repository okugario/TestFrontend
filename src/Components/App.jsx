import React from "react";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Table, Checkbox, Modal } from "antd";
import Dal from "./Dal";
function App() {
  const [Arr, NewArr] = useState(null);

  const [SelectRowKeys, NewSelectRowKeys] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Profile, SetNewProfile] = useState(null);
  const ProfileHandler = (Action, Data) => {
    let NewProfile = { ...Profile };
    switch (Action) {
      case "ChangeCaption":
        NewProfile.title = Data;
        SetNewProfile(NewProfile);
        break;
      case "ChangeCheckbox":
        NewProfile.completed = Data;
        SetNewProfile(NewProfile);
        break;
    }
  };
  const handeOk = () => {
    setIsModalVisible(false);
  };
  const handleCansel = () => {
    setIsModalVisible(false);
  };
  const Zapros = () => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => NewArr(json));
  };

  const VCons = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        SetNewProfile(json);
        setIsModalVisible(true);
      });
  };

  const columns = [
    {
      title: "Наименование",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Статус",
      dataIndex: "completed",
      key: "completed",
      render: (Value) => {
        return <Checkbox defaultChecked={Value} />;
      },
    },
  ];
  useEffect(Zapros, []);
  return (
    <>
      <Modal
        destroyOnClose={true}
        title="Задача"
        visible={isModalVisible}
        onOk={handeOk}
        onCancel={handleCansel}
      >
        <Dal Profile={Profile} ProfileHandler={ProfileHandler} />
      </Modal>
      <Table
        dataSource={Arr}
        rowSelection={{
          selectedRowKeys: [SelectRowKeys],
          hideSelectAll: true,
          renderCell: () => null,
        }}
        columns={columns}
        pagination={false}
        rowKey="id"
        size={"small"}
        onRow={(Record) => {
          return {
            onDoubleClick: () => {
              VCons(Record.id);
            },
            onClick: () => {
              NewSelectRowKeys(Record.id);
            },
          };
        }}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("index"));
