import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(4)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [tempt, setTempt] = React.useState("");
  const [speed, setSpeed] = React.useState("");
  const Changetempt = (event) => {
    setTempt(event.target.value);
  };

  const Changespeed = (event) => {
    setSpeed(event.target.value);
  };

  return (
    <div>
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
          value={tempt}
          id="tempt"
          onChange={Changetempt}
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
    </div>
  );
}
