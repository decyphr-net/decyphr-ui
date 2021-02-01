import React from 'react';

type Props = {
  title: string;
  children?: JSX.Element[];
}

export const Panel: React.FC<Props> = ({title, children }: Props) => (
  <div className="column is-4 has-background-white" style={{display: "inline"}}>
    <p className="panel-heading has-background-info has-text-white">
      {title}
    </p>
    {children}
  </div>
)

