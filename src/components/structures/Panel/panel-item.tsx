import React from 'react';


type Props = {
  id: string;
  title: string;
  isCompleted: boolean;
  children?: JSX.Element;
}

export const PanelItem: React.FC<Props> = ({id, title, isCompleted }: Props) => (
  <div className="pt-4">
    <a className="panel-block" href={`/courseware/${id}`}>
      <span className="panel-icon">
        {isCompleted
          ? <i className="fas fa-check-circle has-text-success" aria-hidden="true"></i>
          : <i className="fas fa-book" aria-hidden="true"></i>
        }
      </span>
      {title}
    </a>
  </div>
)
