import React from 'react'
import { Table , Space} from "antd";
const { Column } = Table;

export default function TableComponent(props) {
    return (
        <Table dataSource={props.users}>
            
        <Column title="name" dataIndex="name" />
        <Column title="mail" dataIndex="mail" />
        <Column title="phone" dataIndex="id" />
        <Column
              title="Action"
              render={(text, users) => (
                <Space size="middle">
                  
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => props.deleteuser(users.id)}
                    key={users.id}
                  >
                    Delete
                  </button>
                </Space>
              )}
            />
        </Table>
    )
}
