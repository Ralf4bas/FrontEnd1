const About = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-xl mt-8">
      <div className="flex flex-col items-center text-center">
        <img
          src="src\pages\profile.jpg"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4 shadow-md"
        />

        <h2 className="text-2xl font-bold text-blue-700 mb-2">About Me</h2>

        {/* Identitas Diri */}
        <div className="mb-4">
          <p className="text-gray-800 font-semibold">
            Nama: <span className="font-normal">Ralf Alexander Abas </span>
          </p>
          <p className="text-gray-800 font-semibold">
            NIM / ID Mahasiswa: <span className="font-normal">105022310117</span>
          </p>
          <p className="text-gray-800 font-semibold">
            Jurusan: <span className="font-normal">Teknik Informatika</span>
          </p>
        </div>

        {/* Deskripsi Singkat */}
        <p className="text-gray-700 leading-relaxed">
          Halo! Saya ralf seorang developer yang gemar membangun aplikasi web modern menggunakan React dan TypeScript.
          Saya senang mempelajari hal-hal baru, bereksperimen dengan teknologi,dan berbagi pengetahuan melalui proyek open-source.
          Di luar dunia coding, saya juga suka bermain game biasanya untuk bersantai, sekaligus mencari inspirasi dari berbagai genre permainan.
        </p>
      </div>
    </div>
  );
};

export default About;
