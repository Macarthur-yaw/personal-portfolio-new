import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSinglePosts } from "../config/sanity";

interface BlogPost {
  _id: string;
  title: string;
  datePublished: string;
  content: Array<{
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      text: string;
    }>;
  }>;
}

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate(); // Add this
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!slug) return;
    getSinglePosts(slug)
      .then((data) => setPost(data))
      .catch((error) => console.log(error));
  }, [slug]);

  

  return (
    <div className="w-full min-h-screen bg-[#1c1917] text-slate-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 border-[1px] rounded text-slate-200"
        >
          &larr; Back
        </button>

        {/* Header */}
      {post != null &&(  <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{ post.title}</h1>
          <p className="text-sm text-slate-500">
            {new Date(post.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <hr className="border-slate-700 mt-4" />
        </header>)
}

     
       {post != null &&(   <article className="prose prose-invert max-w-none mt-8 space-y-6 text-[1rem] leading-relaxed">
          {post.content.map((block) =>
            block.children.map((child) => <p key={child._key}>{child.text}</p>)
          )}
        </article>)}

        {/* Optional Footer */}
        {/* <footer className="mt-12 border-t border-slate-700 pt-6 text-sm text-center text-slate-400">
        &copy;  <p>MacArthur Kevin</p>
        </footer> */}
      </div>
    </div>
  );
}
