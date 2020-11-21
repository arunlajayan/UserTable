import React from 'react'
import { Table, Space } from "antd"
const { Column } = Table;

const UserTable = props => (
  <Table dataSource={props.users}>


    <Column title="name" dataIndex="name" />
    <Column title="mail" dataIndex="mail" />
    <Column title="phone" dataIndex="phone" />
    <Column
      title="Action"
      render={(text, user) => (
        <Space size="middle">
          <button type="button"
            onClick={() => props.editRow(user)
            }
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            type="button"
            onClick={() => props.deleteUser(user.id)}

          >
            Delete
                  </button>
        </Space>
      )}
    />
  </Table>
)

export default UserTable
