import Image from "next/image";

export default function Home() {
  const imageArray = ["running", "weight-lifting", "bodyweight", "pullup"];
  return (
    <div className="py-8">
      {" "}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 px-12">
        {imageArray.map((x, index) => (
          <div key={index} className="relative">
            <Image
              src={`/${x}.avif`}
              alt={`${x} example`}
              width={800}
              height={500}
              layout="responsive"
              className="rounded-xl object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                {x}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {/* <Image
        src="/running.avif"
        alt="Unsplash example"
        width={800}
        height={500}
        className="rounded-xl object-cover"
      />
      <Image
        src="/weight-lifting.avif"
        alt="weight lifting example"
        width={800}
        height={500}
        className="rounded-xl object-cover"
      />
      <Image
        src="/bodyweight.avif"
        alt="weight lifting example"
        width={800}
        height={500}
        className="rounded-xl object-cover"
      />
      <Image
        src="/pullup.avif"
        alt="weight lifting example"
        width={800}
        height={500}
        className="rounded-xl object-cover"
      /> */}
    </div>
  );
}
