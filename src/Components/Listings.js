import React, { useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Listings(props) {
    useEffect(()=>{
        console.log(props, 'current user')
    },[props.user])
  return (
    <div>
        {props.user.userName &&(
            <div>Logged in as: {props.user.userName}</div>
        )}
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Hours</TableCell>
          <TableCell>Address</TableCell>
          {props.user.userName &&(
            <TableCell>Delete</TableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.businesses.map((listing, index) => (
          <TableRow key={listing.id}>
            <TableCell>
              <Link to={`/details/${listing.id}`}>{listing.name}</Link>
            </TableCell>
            <TableCell>{listing.description}</TableCell>
            <TableCell>{listing.hours}</TableCell>
            <TableCell>{listing.address}</TableCell>
            {props.user.userName &&(
            <TableCell>
                        <IconButton onClick={() => props.removeBusiness(index)}>
                            <DeleteIcon/>
                        </IconButton>
                    </TableCell>

            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
