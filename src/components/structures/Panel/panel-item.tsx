import React from 'react';
import { FaCheckCircle, FaBook } from 'react-icons/fa';


type Props = {
  id: string;
  title: string;
  isCompleted: boolean;
  children?: JSX.Element;
}

export const PanelItem: React.FC<Props> = ({id, title, isCompleted }: Props) => (
  <div className="pt-2">
    <a className="panel-block" href={`/courseware/${id}`}>
      <span className="panel-icon">
        {isCompleted
          ? <FaCheckCircle className="has-text-success" />
          : <FaBook />
        }
      </span>
      {title}
    </a>
  </div>
)
