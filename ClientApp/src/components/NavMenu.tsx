import { Link } from "react-router-dom";
import { Toolbar, Button, Typography } from '@mui/material';

function NavMenu() {
    return (
      <Toolbar>
        <Typography>Shopping Memo</Typography>
        <Button component={Link} to={"/"}>Home</Button>
        <Button component={Link} to={"/counter"}>Counter</Button>
        <Button component={Link} to={"/fetch-data"}>Fetch data</Button>
      </Toolbar>
    );
}

export { NavMenu };