import classes from './Card.module.scss';

type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = props => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
