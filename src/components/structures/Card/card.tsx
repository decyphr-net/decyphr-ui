import React from 'react';

type CardProps = {
  title: string;
  description: string;
  children?: JSX.Element;
}

export const Card: React.FC<CardProps> = ({title, description }: CardProps) => (
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

type CourseCardProps = {
  title: string;
  description: string;
  imgSrc: string;
  children?: JSX.Element[];
}

export const CourseCard: React.FC<CourseCardProps> = ({title, description, imgSrc, children }: CourseCardProps) => (
  <div className="column">
    <div className=" box columns">
      <div className="column is-3">
      <figure className="image is-128x128">
        <img className="is-rounded" src={imgSrc} />
      </figure>
      </div>
      <div className="column is-9 is-block">
        <h3 className="m-4 is-size-3 has-text-left">{title}</h3>
        <p className="m-4 has-text-left">{description}</p>
          {children}
        </div>
    </div>
  </div>
)

type BookCardProps = {
  title: string;
  description: string;
  imgSrc: string;
  children?: JSX.Element[];
}

export const BookCard: React.FC<BookCardProps> = ({title, description, imgSrc, children }: BookCardProps) => (
  <div className="column">
    <div className=" box columns pt-0">
      <div className="column is-3 pt-0 mb-3">
      <figure className="image is-128x128">
        <img src={imgSrc} />
      </figure>
      </div>
      <div className="column is-9 is-block">
        <h3 className="m-4 is-size-3 has-text-left">{title}</h3>
        <p className="m-4 has-text-left">{description}</p>
          {children}
        </div>
    </div>
  </div>
)
