import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { AuthContext } from "../../store/contexHook";

export default function adminUser() {
  const [myUsers, setMyUsers] = useState([]);

  // useContext

  const { authorization } = useContext(AuthContext);

  const allUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/admin/users",
        {
          method: "GET",
          headers: {
            Authorization: authorization,
          },
        }
      );

      setMyUsers(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/admin/users/delete/${id}`,
        {
          headers: {
            Authorization: authorization,
          },
        }
      );
      const resp = myUsers.filter((user) => user.id !== id);
      setMyUsers(resp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Admin Pannel</TableCaption>
          <Thead>
            <Tr>
              <Th>All Users</Th>
              <Th>Emails</Th>
              <Th>Numbers</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {myUsers.map((data) => {
              return (
                <Tr key={data.id}>
                  <Td>{data.username}</Td>
                  <Td>{data.email}</Td>
                  <Td>{data.Phone_Number}</Td>
                  <Td>
                    <FaUserEdit style={{ fontSize: "24px" }} />
                  </Td>
                  <Td>
                    <MdDelete
                      onClick={() => handleDelete(data._id)}
                      style={{ fontSize: "24px", color: "crimson" }}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
