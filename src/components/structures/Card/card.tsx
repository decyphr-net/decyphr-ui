import React from 'react';

type Props = {
  title: string;
  description: string;
  children?: JSX.Element;
}

const Card: React.FC = ({title, description, children }: Props) => (
  <div className="column">
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
)

export default Card;
