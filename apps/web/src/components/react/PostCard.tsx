type Props = {
  title: string;
  tags: string[];
  id: number;
};

export const PostCard = ({ title, tags, id }: Props) => {
  return (
    <a href={`/postdetail/${id}`}>
      <div className="card w-96  h-40 bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-end">
            {tags.map((tag: string) => {
              return <div className="badge badge-outline"> {tag} </div>;
            })}
          </div>
        </div>
      </div>
    </a>
  );
};
