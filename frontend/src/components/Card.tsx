interface CardProps {
  name: string;
  pic: string;
}

const Card = ({ name, pic }: CardProps) => {
  return (
    <div className="flex flex-col hover:bg-slate-100/40">
      <img src={pic} alt="image" />
      <a>{name}</a>

      <a href="/select">
        <button className="btn btn-wide">Wide</button>
      </a>
    </div>
  );
};

export default Card;
