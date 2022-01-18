export default function Homepage() {
  return (
    <div className="mt-16 container mx-auto">
      <h1 className="text-center text-5xl my-8 border-b border-white">
        BlockchainMentorLive Schedule
      </h1>

      <div className="flex w-full justify-around">
        <div className="flex flex-col my-8 justify-center w-1/3   bg-white text-red-700 p-8">
          <div className="border-b border-red-200 font-medium text-2xl text-center">
            Tutorial videos
          </div>
          <div className="text-center text-lg">Tuesdays and Thursdays</div>
          <div className="text-center text-sm">9am US Central</div>
        </div>

        <div className="flex flex-col my-8 justify-center w-1/3 bg-white text-red-700 p-8">
          <div className="border-b border-red-200  font-medium text-2xl text-center">
            Livestream
          </div>
          <div className="text-center text-lg">Each Sunday</div>
          <div className="text-center text-sm">12pm US Central</div>
          <div className="text-center text-sm">
            <a href="https://youtube.com/blockchainmentorlive">
              https://youtube.com/blockchainmentorlive
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-around">
        <div className="flex flex-col my-8 justify-center w-1/3 border bg-white text-red-700 p-8">
          <div className="border-b border-red-200  font-medium text-2xl text-center">
            One on One Mentoring
          </div>
          <div className="text-center text-lg">Monday - Friday</div>
          <div className="text-center text-sm">10am - 5pm US Central</div>
          <div className="text-center text-lg ">
            <a href="https://devmentor.live/book" className="underline">
              <button className="bg-red-700 border p-4 mt-8 mb-0 shadow text-white">
                Schedule a session now!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
