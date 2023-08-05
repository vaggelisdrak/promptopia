'use client'

import { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'
import Loading from '@components/Loading'

const MyProfile = () => {

    const router = useRouter();

    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            setPosts(data)
            setLoading(false);
        }

        console.log(posts);

        if (session?.user.id) {
          fetchPosts();
        }
    },[]);


  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?")

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((item) => item._id !== post._id);

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const viewFavorites = () => {
    router.push('/favorites');
  };

  if(loading){
    return <Loading/>;
  }

  return (
    <Profile
        name="My"
        desc="Welcome to the profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        viewFavorites={viewFavorites}
    />
  )
}

export default MyProfile