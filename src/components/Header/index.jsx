import React from 'react';
import { Container } from './styled';
import Switch from 'react-switch';
import { shade } from 'polished';

const Header = ({toggleTheme}) => {

  return (
    <Container>
        Theme Switcher (ReactJS)

        <Switch
          onChange={toggleTheme}
          checked={false}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15,'#7159C1')}
          onColor= {'#C29'}
        />
    </Container>
  )
}

export default Header;