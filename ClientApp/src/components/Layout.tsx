import { FC } from 'react';
import { Container } from '@mui/material';

import { NavMenu } from './NavMenu';

const Layout: FC = (props) => {
    return (
      <div>
        <NavMenu />
        <Container>
          {props.children}
        </Container>
      </div>
    );
};

export { Layout };
