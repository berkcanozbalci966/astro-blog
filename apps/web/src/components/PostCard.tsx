type Props = {
  title: string,
  tags:string[] 
};

export const PostCard = ({ title, tags }: Props) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-end">
            {tags.map((tag: string) => {
              return <div className="badge badge-outline"> {tag} </div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
