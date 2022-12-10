type Props = {
  data: any;
};

export const CardList = ({ data }: Props) => {
  console.log(data);
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {data?.map((post: any) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>

                <div className="card-actions justify-end">
                  {post.tags.map((tag: string) => {
                    return <div className="badge badge-outline"> {tag} </div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
