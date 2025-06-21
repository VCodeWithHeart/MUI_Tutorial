import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MUITable = () => {
  const tableHead = [...new Set(tableData?.flatMap((cur) => Object.keys(cur)))];
  return (
    <Box margin={5}>
      <TableContainer component={Paper} sx={{ maxHeight: "600px" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow sx={{ textTransform: "uppercase" }}>
              {tableHead?.map((columns) => (
                <TableCell
                  key={columns}
                  align={
                    columns?.toLowerCase().includes("ip") ? "center" : "left"
                  }
                >
                  {columns?.includes("_") ? columns.replace("_", "") : columns}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.map((row) => (
              <TableRow key={row?.id}>
                {tableHead?.map((col, index) => {
                  return (
                    <TableCell
                      key={index}
                      align={
                        col?.toLowerCase().includes("ip") ? "center" : "left"
                      }
                    >
                      {row[col]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MUITable;

const tableData = [
  {
    id: 1,
    first_name: "Alex",
    last_name: "Morgan",
    email: "alex.morgan@example.com",
    gender: "Non-binary",
    ip_address: "192.168.1.101",
  },
  {
    id: 2,
    first_name: "Jordan",
    last_name: "Lee",
    email: "jordan.lee@example.com",
    gender: "Male",
    ip_address: "10.0.0.23",
  },
  {
    id: 3,
    first_name: "Taylor",
    last_name: "Smith",
    email: "taylor.smith@example.com",
    gender: "Female",
    ip_address: "172.16.254.1",
  },
  {
    id: 4,
    first_name: "Casey",
    last_name: "Brown",
    email: "casey.brown@example.com",
    gender: "Male",
    ip_address: "192.168.0.15",
  },
  {
    id: 5,
    first_name: "Riley",
    last_name: "Davis",
    email: "riley.davis@example.com",
    gender: "Female",
    ip_address: "10.10.10.10",
  },
  {
    id: 6,
    first_name: "Morgan",
    last_name: "Taylor",
    email: "morgan.taylor@example.com",
    gender: "Non-binary",
    ip_address: "192.168.1.45",
  },
  {
    id: 7,
    first_name: "Sam",
    last_name: "Wilson",
    email: "sam.wilson@example.com",
    gender: "Male",
    ip_address: "172.16.0.99",
  },
  {
    id: 8,
    first_name: "Avery",
    last_name: "Moore",
    email: "avery.moore@example.com",
    gender: "Female",
    ip_address: "10.0.1.17",
  },
  {
    id: 9,
    first_name: "Quinn",
    last_name: "Anderson",
    email: "quinn.anderson@example.com",
    gender: "Non-binary",
    ip_address: "192.168.2.33",
  },
  {
    id: 10,
    first_name: "Jamie",
    last_name: "Clark",
    email: "jamie.clark@example.com",
    gender: "Female",
    ip_address: "10.20.30.40",
  },
  {
    id: 11,
    first_name: "Eli",
    last_name: "Parker",
    email: "eli.parker@example.com",
    gender: "Male",
    ip_address: "192.168.3.12",
  },
  {
    id: 12,
    first_name: "Skyler",
    last_name: "Harris",
    email: "skyler.harris@example.com",
    gender: "Non-binary",
    ip_address: "172.16.1.88",
  },
  {
    id: 13,
    first_name: "Peyton",
    last_name: "Lewis",
    email: "peyton.lewis@example.com",
    gender: "Female",
    ip_address: "10.0.2.56",
  },
  {
    id: 14,
    first_name: "Drew",
    last_name: "Walker",
    email: "drew.walker@example.com",
    gender: "Male",
    ip_address: "192.168.4.77",
  },
  {
    id: 15,
    first_name: "Bailey",
    last_name: "Young",
    email: "bailey.young@example.com",
    gender: "Female",
    ip_address: "10.30.40.50",
  },
];
