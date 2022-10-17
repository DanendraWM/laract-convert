import { Link } from "@inertiajs/inertia-react";
const Card = (props) => {
  // console.log(props.title);
  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-center">
          <Link href={`/convert/${props.title}`} className="btn btn-primary">
            Convert Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
