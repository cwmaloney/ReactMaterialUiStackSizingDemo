import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";

const styles = {
  page: {
    height: "100vh",
    width: "100%",
    margin: 0,
    border: "5px solid blueviolet"
  },
  stack: {
    height: "100%",
    border: "5px solid silver"
  },
  box: {
    // height: "100%",
    flex: "100 .1 20vh",
    border: "5px solid blue"
  },
  header: {
    display: "hidden",
    border: "5px solid cornflowerblue"
  },
  tableWrapper: {
    // height: "100%",
    flex: "100 .1 20vh",
    overflowY: "scroll",
    border: "5px solid red"
  },
  tableContainer: {
    height: "100%",
    border: "5px solid green"
  },
  table: {
    border: "5px solid pink",
    stickyHeader: true
  },
  tableBody: {},
  row: {
    height: "50px",
    border: "5px solid green"
  }
};

export default function BasicTable() {
  return (
    <Box sx={styles.page}>
      <Stack direction="column" sx={styles.stack}>
        <Typography sx={styles.header}>
          line 1
          <br />
          line 2
          <br />
        </Typography>
        <Box sx={styles.box}>
          <Stack direction="column" sx={styles.stack}>
            <Typography sx={styles.header}>
              line 1
              <br />
            </Typography>
            <Box sx={styles.box}>
              <Stack direction="column" sx={styles.stack}>
                <Typography sx={styles.header}>
                  line 1
                  <br />
                  line 2
                  <br />
                  line 3
                  <br />
                </Typography>
                <Box sx={styles.tableWrapper}>
                  {/* <Typography sx={styles.header}>
                    line 1
                    <br />
                    line 2
                    <br />
                  </Typography>
                  <Box sx={styles.row}>content 1</Box>
                  <Box sx={styles.row}>content 2</Box>
                  <Box sx={styles.row}>content 3</Box>
                  <Box sx={styles.row}>content 4</Box>
                  <Box sx={styles.row}>content 5</Box>
                  <Box sx={styles.row}>content 6</Box>
                  <Box sx={styles.row}>content 7</Box>
                  <Box sx={styles.row}>content 8</Box>
                  <Box sx={styles.row}>content 9</Box>
                  <Box sx={styles.row}>content 10</Box> */}
                  <TableContainer sx={styles.tableContainer}>
                    <Table
                      stickyHeader={true}
                      sx={styles.table}
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Dessert (100g serving)</TableCell>
                          <TableCell align="right">Calories</TableCell>
                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={styles.tableBody}>
                        {rows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yogurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Eclair2", 262, 16.0, 24, 6.0),
  createData("Cupcake2", 305, 3.7, 67, 4.3),
  createData("Gingerbread2", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt2", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich2", 237, 9.0, 37, 4.3),
  createData("Eclair3", 262, 16.0, 24, 6.0),
  createData("Cupcake3", 305, 3.7, 67, 4.3),
  createData("Frozen yoghurt3", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich3", 237, 9.0, 37, 4.3),
  createData("Eclair4", 262, 16.0, 24, 6.0),
  createData("Cupcake4", 305, 3.7, 67, 4.3),
  createData("Frozen yoghurt4", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich4", 237, 9.0, 37, 4.3),
  createData("Eclair5", 262, 16.0, 24, 6.0),
  createData("Cupcake5", 305, 3.7, 67, 4.3)
];
