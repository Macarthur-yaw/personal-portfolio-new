const About = () => {
  return (
    <>
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
         <h2 className="text-2xl uppercase tracking-widest font-serif text-center font-semibold text-slate-200 mb-4">
       ABOUT ME
</h2></div>

      <div
        id="about"
        className="mr-auto mb-16 md:scroll-mt-16 md:mb-24 lg:mb-36  lg:scroll-mt-24  md:px-12 lg:px-0"
      >
           

        <p className="text-gray-300 mb-4 leading-relaxed">
          I’m a software engineer passionate about building digital experiences that are seamless, engaging, and accessible. I enjoy turning complex problems into simple, intuitive interfaces that perform beautifully across devices.
        </p>

        <p className="text-gray-300 mb-4 leading-relaxed">
          Beyond coding, I love sharing knowledge through JavaScript tutorials and mentoring others who are eager to learn. Teaching is one of the ways I reinforce my own skills while helping the community grow.
        </p>

        <p className="text-gray-300 leading-relaxed">
          When I’m not in front of a screen, you can find me exploring the outdoors, reading, gaming, or spending quality time with friends and family. Every day is an opportunity to create, learn, and discover something new.
        </p>
      </div>
    </>
  );
};

export default About;
