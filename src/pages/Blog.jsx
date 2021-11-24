import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PaperCard from "../components/PaperCard";

const urlBase = "http://localhost:5000/blog";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetch(urlBase)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto">
      <section className=" bg-gray-50">
        <div className="m-10 ">
          <Link
            className="bg-primary hover:bg-secondary-100 text-white font-bold py-2 px-4 rounded"
            to="/create"
          >
            Create
          </Link>
        </div>

        {blogs &&
          blogs.map((blog) => (
            <PaperCard
              key={blog.id}
              title={blog.title}
              date={blog.date}
              text={blog.text}
              id={blog.id}
              imgSrc={blog.imgSrc}
            />
          ))}
        {/* 
        <PaperCard
          title="Jenis-Jenis Kolam Renang"
          date="7 September 2021"
          text={`Berbagai macam kolam renang di buat orang dan dilengkapi fasilitas dan perlengkapan lainnya berdasarkan arsitektur dan konstruksi yang memadai. Kolam renang ini biasannya di sebut dengan kolam renang buatan atau “artificial bething
          places”.
          \n
          - Macam-Macam Kolam Renang
          Kolam renang di pandang dari segi lokasi dapat dibedakan menjadi dua
          macam, yaitu :
          a. Indoor-pool, yaitu kolam renang yang berlokasi di halaman perumahan atau pemukiman penduduk. Koalm renang seperti ini biasanya dimiliki dan diperuntukkan bagi perseorangan atau kelompok yang digunakan untuk keluarga atau tamu-tamunya.
          b. Outdoor-pool, yaitu kolam renang yang berlokasi di luar halaman pemukiman penduduk, kolam renang semacam ini biasanya diperuntukan bagi umum.
          
          - Tipe Kolam Renang
          Kolam renang buatan pada umumnya dibedakan berdasarkan cara penggantian atau pengolahan airnya, dalam hal ini maka kolam renang dibagi menjadi beberapa tipe antara lain : 
          Fill and draw fools
Tipe kolam renang ini menggunakan air kolamnya secara terus menerus dalam satu priode waktu tertentu. Setelah air kolam tampak kotor baru dikuras/dibuang kemudian seluruhnya diganti dengan air yang baru dan bersih.Untuk menentukan kotor tidaknya air adalah dengan melihat keadaan fisik air tersebut atau dari jumlah perenang. Tipe yang seperti ini adalah tipe yang paling tidak baik.
b. Flow through pools
Pada tipe ini air kolam mengalir terus menerus setiap saat sehingga air kolam senantiasa dalam keadaan bersih. Hal ini disebabkan karena air yang baru, kolam renang tipe ini adalah yang terbaik tetapi membutuhkan banyak air. Kolam renang tipe ini umumnya terdapat di daerah pegunungan atau tempat-tempat yang ada sumber airnya.
c. Recirculating pools (kolam renang resirkulasi)
Pada tipe ini air kolam renang yang telah dipakai dan kotor secara terus menerus (berputar) dialirkan melalui instalasi-instalasi penyaringan (filteroffilter) dan dipompa kembali kedalam kolam renang setelah bersih dan didesinfektan dengan zat chlor. Kolam renang tipe ini adalah hemat sekali, karena tidak begitu membutuhkan banyak air asalkan harus dijaga bahwa proses penyaringan dan pendesinfeksian air tersebut harus berjalan
dengan baik.”`}
          imgSrc="img/blog/img-21.jpg"
        />
        <PaperCard
          title="Kolam Renang Menurut Menkes"
          date="7 September 2021"
          text="Kolam renang dapat diartikan sebagai tempat dimana orang melakukan suatu kegiatan mandi atau membersihkan badan baik yang bertujuan untuk olahraga maupun hanya sekedar mencari kesenangan semata. Berenang memang dapat melepaskan rasa jenuh akibat kegiatan rutin sehari-hari. Namun demikian kegiatan
berenang sering kali menimbulkan pengaruh kurang baik bagi kesehatan keamanan para perenang.Hal ini dapat terjadi karena keadaan kolam renang yang tidak memenmuhi persyaratan kesehatan baik dari segi kuantitas maupunkualitasnya.
Untuk itu kolam renang perlu mendapatkan perhatian khusus terutamakualitas airnya agar para perenang terhindar dari penularan penyakit dan kecelakaan.
Banyak definisi kolam renang yang telah dikemukakan antara lain menurut menteri kesehatan dalam permenkes No.061/menkes/per/I/1991, tentang persyaratan kolam renang dan pemandian umum menyatakan “ kolam renang adalah suatu usaha bagi umum yang menyediakan tempat untuk berenang, berekreasi, berolah raga serta juga pelayanan lainnya menggunakan air bersih yang telah diolah”."
          imgSrc="img/blog/img-20.jpg"
        /> */}
      </section>
    </div>
  );
};

export default Blog;
