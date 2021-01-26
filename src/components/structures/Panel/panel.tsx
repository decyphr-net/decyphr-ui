import React from 'react';
import Button from "../../elements/Button"

type Props = {
  title: string;
  description: string;
  children?: JSX.Element;
}

const Panel: React.FC = ({title, description, children }: Props) => (
  <div className="column">
    <div className=" box columns">
      <div className="column is-3">
      <figure className="image is-128x128">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
      </div>
      <div className="column is-9 is-block">
        <h3 className="m-4 is-size-3 has-text-left">{title}</h3>
        <p className="m-4 has-text-left">{description}</p>
        <Button as="a" text="Continue" color="primary" className="is-pulled-right mr-3 ml-3" />
        <Button as="a" text="Options" color="secondary" className="button is-pulled-right mr-3 ml-6" />
        </div>
    </div>
  </div>
)

export default Panel;
