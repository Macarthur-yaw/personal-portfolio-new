
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
  const navigate = useNavigate(); 
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    getSinglePosts(slug)
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [slug]);

  return (
    <div className="w-full min-h-screen bg-[#1c1917] text-slate-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 border-[1px] rounded text-slate-200 hover:bg-slate-800 transition-colors"
        >
          &larr; Back
        </button>

        {/* Loading for data fetching */}
        {isLoading && (
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mb-8">
            <div 
              className="h-full bg-slate-400 rounded-full" 
              style={{
                width: '40%',
                animation: 'loading 1.5s ease-in-out infinite'
              }}
            />
            <style>{`
              @keyframes loading {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(350%);
                }
              }
            `}</style>
          </div>
        )}

        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {post != null && (
            <>
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{post.title}</h1>
                <p className="text-sm text-slate-500">
                  {new Date(post.datePublished).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <hr className="border-slate-700 mt-4" />
              </header>

              <article className="prose prose-invert max-w-none mt-8 space-y-6 text-[1rem] leading-relaxed">
                {post.content.map((block) =>
                  block.children.map((child) => <p key={child._key}>{child.text}</p>)
                )}
              </article>
            </>
          )}
        </div>
      </div>
    </div>
  );
}