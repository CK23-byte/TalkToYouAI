export const metadata = { title: "How it works, TalkToYou AI" };

export default function Page() {
  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold">How TalkToYou AI brings your memories back to life</h1>
      <p className="mt-4 text-gray-700">Every conversation starts with a memory. TalkToYou AI uses advanced AI chat, lifelike video avatars, and secure memory data to recreate authentic interactions with the people who matter most.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold">Step 1, Upload your chat</h3>
          <p className="mt-2 text-sm text-gray-700">Export WhatsApp or Messenger as a txt file, upload securely. We analyze style, tone and emotion to recreate natural responses.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold">Step 2, Add voice and photos</h3>
          <p className="mt-2 text-sm text-gray-700">Add photos, a short clip or a voice note. We create a realistic avatar and voice for FaceTime style video calls.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold">Step 3, Talk again</h3>
          <p className="mt-2 text-sm text-gray-700">Chat in a familiar interface or switch to video. Talk again, remember forever.</p>
        </div>
      </div>
    </section>
  );
}
