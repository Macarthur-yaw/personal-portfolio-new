import { useState, useEffect } from "react";
import { getPosts } from "../config/sanity";

interface BlogPost {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  datePublished: string;
  content: Array<{
    _key: string;
    _type: string;
    children: Array<{
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }>;
    markDefs: any[];
    style: string;
  }>;
}

export default function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load blog posts");
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const extractTextContent = (content: BlogPost["content"], limit: number = 150) => {
    const fullText = content
      .map((block) => block.children.map((child) => child.text).join(""))
      .join(" ");
    
    if (fullText.length <= limit) {
      return { text: fullText, isTruncated: false };
    }
    
    return { 
      text: fullText.slice(0, limit) + "...", 
      isTruncated: true 
    };
  };

  if (loading) {
    return (
      <div id="blogs">
        <div className="text-slate-400">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div id="blogs">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
            <h2 className="text-2xl tracking-widest font-serif text-center uppercase font-semibold text-slate-200 mb-4">
       
          Blog
        </h2>
      </div>

      <div className="mt-2" id="blogs">
        {posts.map((post) => {
          const { text } = extractTextContent(post.content);
          
          return (
            <div key={post._id} className="p-2 flex md:flex-row flex-col mb-12 items-start gap-4">
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={`/blogs/${post.slug.current}`}
                      rel="noreferrer noopener"
                    >
                      <span className="text-[1rem]">
                        {post.title} ·{" "}
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <h2 className="mt-2 text-sm leading-normal text-slate-400 text-[1rem]">
                  {text}
                </h2>
            
                <p className="mt-2 text-xs text-slate-500">
                  {formatDate(post.datePublished)}
                </p>
              </div>
            </div>
          );
        })}

        {posts.length === 0 && (
          <p className="text-slate-400">No blog posts available yet.</p>
        )}
      </div>
    </>
  );
}