export default function Homepage() {
  const pageUrl = `https://youtube.com/${process.env.YOUTUBE_SLUG}`;
  return (
    <div className="mt-2 container mx-auto">
      <h1 className="text-center text-3xl border-white py-2">
        BlockchainMentorLive Schedule
      </h1>

      <div className="bg-white rounded-sm">
        <div className="text-center text-sm text-gray-600 py-2">
          <a
            href="https://youtube.com/blockchainmentorlive"
            className="text-blue-500 text-lg font-medium">
            https://youtube.com/blockchainmentorlive
          </a>
        </div>

        <div className="flex w-full flex-col md:flex-row md:px-16  justify-around">
          <div className="flex flex-col justify-center w-1/3 text-gray-700 my-8 px-8 md:my-16">
            <div className="border-gray-200 font-medium text-2xl text-center">
              Tutorial videos
            </div>
            <div className="bg-blue-100 py-4 border-t border-b border-blue-300">
              <div className="text-center text-lg">Tuesdays and Thursdays</div>
              <div className="text-center text-sm">9am US Central</div>
            </div>
            <div>
              <a
                href={pageUrl}
                className="text-center block pt-2 text-blue-500">
                Watch on Solidity and DeFi screencasts on Youtube
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center w-1/3 text-gray-700 my-8 px-8 md:my-16">
            <div className="border-gray-200 font-medium text-2xl text-center">
              Livestream
            </div>
            <div className="bg-blue-100 py-8 border-t border-b border-blue-300">
              <div className="text-center text-lg">Each Sunday</div>
              <div className="text-center text-sm">12pm US Central</div>
            </div>
            <div>
              <a
                href={pageUrl}
                className="text-center block pt-2 text-blue-500">
                Watch on Solidity and DeFi screencasts on Youtube
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-around md:flex-row md:px-16 ">
          <div className="bg-blue-100 flex  flex-col justify-center w-1/3 text-gray-700 p-8 border border-blue-200 my-8 md:my-16">
            <div className="border-b border-gray-200 font-medium text-2xl text-center">
              One on One Mentoring
            </div>
            <div className="text-center text-lg">Monday - Friday</div>
            <div className="text-center text-sm">10am - 5pm US Central</div>
            <div className="text-center text-lg ">
              <a href="https://devmentor.live/book" className="underline">
                <button className="bg-gray-600 border px-10 py-3 mt-8 mb-0 shadow text-white rounded-sm">
                  Schedule a session now!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
