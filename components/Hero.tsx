import Button from "./Button";

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-deep leading-tight">
            Talk to the ones you miss, powered by AI
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Upload WhatsApp or Messenger chats as a txt file, add photos or a short video, then talk again through AI chat or FaceTime style video calls. Talk again, remember forever.
          </p>
          <div className="mt-6 space-x-3">
            <Button href="/how-it-works">See how it works</Button>
            <a href="#upload" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-deep text-deep hover:bg-white">Upload chat</a>
          </div>
          <p className="mt-3 text-xs text-gray-500">Your memories are private and encrypted, you stay in control</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="h-64 rounded-xl bg-deep flex items-center justify-center text-white">Mockup area</div>
          <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
            <div className="bg-mist p-3 rounded">AI chat</div>
            <div className="bg-mist p-3 rounded">AI video</div>
            <div className="bg-mist p-3 rounded">Secure upload</div>
          </div>
        </div>
      </div>
    </section>
  );
}
