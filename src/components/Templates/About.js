import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Modal from '../Views/Modal';
import Title from '../Atoms/Title';
import Text from '../Atoms/Text';

const About = ({ products }) => (
  <>
    <Title>About</Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque odio pharetra,
      rhoncus velit eget, feugiat magna. Integer ac augue aliquam, tempor diam nec, pulvinar velit.
      Pellentesque et sem a diam fringilla egestas nec vel metus. Etiam ac convallis leo. Vivamus
      vitae volutpat nisl, mollis hendrerit libero. Vivamus sed lobortis ligula. Suspendisse a nisi
      erat. Donec mi ante, condimentum nec efficitur non, egestas et lorem. Duis at urna ut mauris
      fringilla dignissim at in odio. Ut consectetur purus et maximus aliquam. Sed consectetur diam
      quis accumsan condimentum. Proin porta condimentum velit quis convallis.
    </Text>
    <br />
    <Text>
      Donec mauris tellus, lobortis id dignissim id, luctus ut purus. Etiam rutrum nibh consectetur
      purus tincidunt scelerisque. Etiam faucibus volutpat lectus, quis blandit diam consectetur ac.
      In hac habitasse platea dictumst. Sed rhoncus mattis condimentum. Vivamus sit amet mi volutpat
      enim tincidunt fringilla. Etiam porttitor dolor eleifend felis consectetur facilisis. Ut
      pulvinar sollicitudin erat, nec malesuada nunc scelerisque nec. Aliquam vel dolor diam. Cras
      efficitur dignissim justo, ac tristique tellus pellentesque pharetra. Quisque pharetra lectus
      molestie, posuere lectus eget, tempor justo.
    </Text>
    <Switch>
      <Route path="/about/modal">
        <Modal products={products} />
      </Route>
    </Switch>
  </>
);

About.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default About;
