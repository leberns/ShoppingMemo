import { Link } from "react-router-dom";
import { Toolbar, Button } from '@mui/material';

function NavMenu(props) {
    return (
      <Toolbar>
        <Button component={Link} to={"/"}>Shopping Memo</Button>
        <Button component={Link} to={"/"}>Home</Button>
        <Button component={Link} to={"/counter"}>Counter</Button>
        <Button component={Link} to={"/fetch-data"}>Fetch data</Button>
      </Toolbar>
    );
}

export { NavMenu };