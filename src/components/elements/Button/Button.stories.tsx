import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf(`Button`, module).add(`Square`, () => {
  return (
    <>
      <h1>Normal Square</h1>
      <Button text="Square Primary" color="primary" />
      <Button text="Square Secondary" color="secondary" />
      <br />
      <br />
      <h1>Square With Drop Shadow</h1>
      <Button text="Shadowed Primary" color="primary" modifier="shadow" />
      <Button text="Shadowed Secondary" color="secondary"  modifier="shadow" />
    </>
  )
})

storiesOf(`Button`, module).add(`Rounded`, () => {
  return (
    <>
      <h1>Rounded</h1>
      <Button text="Rounded Primary" color="primary" variant="rounded" />
      <Button text="Rounded Secondary" color="secondary" variant="rounded" />
      <br />
      <br />
      <h1>Rounded With Drop Shadow</h1>
      <Button text="Rounded Shadowed Primary" color="primary" variant="rounded" modifier="shadow" />
      <Button text="Rounded Shadowed Secondary" color="secondary" variant="rounded" modifier="shadow" />
    </>
  )
})

