import * as React from 'react';

interface IndexProps {
  className?: string;
}

const IndexLayout: React.SFC<IndexProps> = props => {
  return <div className={props.className}>{props.children}</div>;
};

export default IndexLayout;
