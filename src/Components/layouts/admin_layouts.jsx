import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Admin_layouts() {
  return (
    <>
      <Box style={{ margin: "50px" }}>
        <ul>
          <Link to="/admin">
            <li>Home</li>
          </Link>
          <Link to="/admin/users">
            <li>users</li>
          </Link>
          <Link to="/admin/contacts">
            <li>contact</li>
          </Link>
        </ul>
      </Box>
      <Outlet /> {/* show our routes pages  */}
    </>
  );
}
