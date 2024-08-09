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
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { AuthContext } from "../../store/contexHook";

export default function adminUser() {
  const [contact, setContact] = useState([]);

  // useContext

  const { authorization } = useContext(AuthContext);
  const allUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/admin/contacts",
        {
          method: "GET",
          headers: {
            Authorization: authorization,
          },
        }
      );
      console.log(response.data);
      setContact(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/admin/contacts/delete/${id}`,
        {
          headers: {
            Authorization: authorization,
          },
        }
      );
      const resp = await contact.filter((doc) => !doc == id);
      setContact(resp);
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
              <Th>All Usersname</Th>
              <Th>Emails</Th>
              <Th>message</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contact.map((data) => (
              <Tr>
                <Td>{data.username}</Td>
                <Td>{data.Email}</Td>
                <Td>{data.messageBox}</Td>
                <Td>
                  <MdDelete
                    onClick={() => handleDelete(data._id)}
                    style={{ fontSize: "24px", color: "crimson" }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
