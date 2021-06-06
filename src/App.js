import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    maxWidth: 800
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  },
  selectEmpty: {
    marginTop: theme.spacing(4)
  }
}));

function createData(name, State, Pattern, Speed, Temperature, Charge) {
  return { name, State, Pattern, Speed, Temperature, Charge };
}

export default function BasicTable() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [tempt, setTempt] = React.useState("");
  const [speed, setSpeed] = React.useState("");
  const [tem, setTem] = React.useState("");
  const rows = [createData("Room_301", "ON", "Warm", "High", 26, 5)];
  const Changetempt = (event) => {
    setTempt(event.target.value);
  };

  const Changespeed = (event) => {
    setSpeed(event.target.value);
  };

  const Changetem = (event) => {
    setTem(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box p="1rem">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          SETTING
        </Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>SETTING</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Pattern-label">Pattern</InputLabel>
                <Select
                  labelId="Pattern-label"
                  id="Pattern"
                  value={tempt}
                  onChange={Changetempt}
                  label="tempt"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Cold</MenuItem>
                  <MenuItem value={20}>Warm</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="TempRangelabel">TempRange</InputLabel>
                <Select
                  labelId="TempRangelabel"
                  id="TempRange"
                  value={tempt}
                  onChange={Changetempt}
                  label="tempt"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>18-26</MenuItem>
                  <MenuItem value={20}>26-30</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="speedlabel">Speed</InputLabel>
                <Select
                  labelId="speedlabel"
                  value={speed}
                  id="speed"
                  onChange={Changespeed}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>High</MenuItem>
                  <MenuItem value={2}>Middle</MenuItem>
                  <MenuItem value={3}>Low</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="temptlabel">Temperature</InputLabel>
                <Select
                  labelId="temptlabel"
                  value={tem}
                  id="tempt"
                  onChange={Changetem}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Cold</ListSubheader>
                  <MenuItem value={10}>18</MenuItem>
                  <MenuItem value={10}>19</MenuItem>
                  <MenuItem value={10}>20</MenuItem>
                  <MenuItem value={10}>21</MenuItem>
                  <MenuItem value={10}>22</MenuItem>
                  <MenuItem value={10}>23</MenuItem>
                  <MenuItem value={10}>24</MenuItem>
                  <MenuItem value={10}>25</MenuItem>
                  <MenuItem value={10}>26</MenuItem>
                  <ListSubheader>Warm</ListSubheader>
                  <MenuItem value={20}>26</MenuItem>
                  <MenuItem value={20}>27</MenuItem>
                  <MenuItem value={20}>28</MenuItem>
                  <MenuItem value={20}>29</MenuItem>
                  <MenuItem value={20}>30</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>RoomID</TableCell>
              <TableCell align="right">State&nbsp;(ON/OFF)</TableCell>
              <TableCell align="right">Pattern</TableCell>
              <TableCell align="right">Speed</TableCell>
              <TableCell align="right">Temperature&nbsp;(C)</TableCell>
              <TableCell align="right">Charge&nbsp;($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.State}</TableCell>
                <TableCell align="right">{row.Pattern}</TableCell>
                <TableCell align="right">{row.Speed}</TableCell>
                <TableCell align="right">{row.Temperature}</TableCell>
                <TableCell align="right">{row.Charge}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
