import PromptCard from "./PromptCard";
import Link from "next/link";

const Profile = ({ name, desc, data, handleEdit, handleDelete, viewFavorites }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='orange_gradient'>{name} Profile</span>
      </h1>
      <br/>

      {viewFavorites && (
        <div className='flex items-center'>
          <p className='desc text-left'>Click the button to view saved prompts </p>
          <Link href='/profile/favorites' className="black_btn mt-5 ml-2">
            Favorites
          </Link>
        </div>
      )}
      <br/>
      <hr/>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;