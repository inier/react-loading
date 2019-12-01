import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text  } from '@storybook/addon-knobs';
import { DisappearedLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('DisappearedLoading', module)
  .addDecorator(withKnobs)
  .add('DisappearedLoading', () => {
    let speed = 1;
    let color = '';
    speed = number('动画速度(s)')
    color = text('颜色')
    return (
      <Container>
        <DisappearedLoading speed={speed} color={color} style={{ margin: "100px 60px" }}></DisappearedLoading>
      </Container>
    );
  });
