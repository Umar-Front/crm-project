import { useState } from "react";
import { GenericTable } from "../../Generics/Table";
import { Container } from "./style";
import { BreadCrumb } from '../../Generics/BreadCrumb'

export const AllLids = () => {
  const headCells = [
    { id: "name", label: "O'quvchining ismi" },
    { id: "group", label: "Guruh / Fan" },
    { id: "date", label: "Dars kuni va vaqti" },
    { id: "addedDate", label: "Qo’shilgan sana" },
    { id: "admin", label: "Moderator" },
  ];
  let rows = [
    {
      id: 1,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
    {
      id: 2,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
    {
      id: 3,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
    {
      id: 4,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
    {
      id: 5,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
    {
      id: 6,
      name: "Webbrain",
      group: "Frontend",
      date: "21.05.2024",
      addedDate: "21.05.2024",
      admin: "Webbrain Admin",
    },
  ];

  const [open, setOpen] = useState(false)
  return (
    <Container>
      <BreadCrumb>
        <button onClick={() => setOpen(!open)}>Filter</button>
        <button onClick={() => setOpen(!open)}>Import</button>
        <button onClick={() => setOpen(!open)}>Buyurtma berish</button>
      </BreadCrumb>
      <GenericTable open={open} headCells={headCells} rows={rows} />
    </Container>
  );
};