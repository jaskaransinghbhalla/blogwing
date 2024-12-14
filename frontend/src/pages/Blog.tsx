export default function Blog() {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="col-span-2 m-8">
        <div className="text-5xl font-bold my-2">
          Taxing Laughter : The Joke Tax Chronicles
        </div>
        <div className="text-gray-500">Posted on Aug 5, 2024</div>
        <div className="text-md my-8 text-justify mr-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, aut
          rerum! Commodi qui esse consectetur accusamus aut quis! Dignissimos
          quidem quasi consequuntur libero tempora nemo eligendi maxime ipsum
          mollitia nam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat, aut rerum! Commodi qui esse consectetur accusamus aut quis!
          Dignissimos quidem quasi consequuntur libero tempora nemo eligendi
          maxime ipsum mollitia nam.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Placeat, aut rerum! Commodi qui esse consectetur
          accusamus aut quis! Dignissimos quidem quasi consequuntur libero
          tempora nemo eligendi maxime ipsum mollitia nam.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Placeat, aut rerum! Commodi qui
          esse consectetur accusamus aut quis! Dignissimos quidem quasi
          consequuntur libero tempora nemo eligendi maxime ipsum mollitia nam.
        </div>
      </div>
      <div className="col-span-1 m-8">
        <div className="border rounded p-5">
          <div className="text-lg font-bold pb-2">Author</div>

          <div className="flex">
            <div className="bg-gray-500 w-[50px] h-[50px] rounded-full"></div>
            <div className="pl-4">
              <div className="font-semibold"> John Walker</div>
              <div> Master of Computer Technology, University of Pitsburg</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
