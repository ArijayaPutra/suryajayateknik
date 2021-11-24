import ClientCard from "./ClientCard";
import thekayonkepitu from "../img/c1-thekayonkepitu.jpg";
import toyadevasya from "../img/c2-toyadevasya.jpg";
import bebektepisawah from "../img/c3-bebektepisawah.jpg";
import kajanegroups from "../img/c4-kajanegroups.jpg";
import ubudtropical from "../img/c5-ubudtropical.jpg";
import vilaagungkhalia from "../img/c6-vilaagungkhalia.jpg";

const ClientSection = () => {
  return (
    <div>
      <div className="font-roboto text-4xl text-green-600 text-center mb-5 mt-24">
        Our Client
      </div>
      <section
        id="client"
        className="bg-white flex flex-wrap justify-center p-2"
      >
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 md:gap-5 lg:gap-14 xl:grid-cols-3">
          <ClientCard
            client="The Kayon"
            location="Ubud"
            imgSrc={thekayonkepitu}
            data-aos="fade-left"
            data-aos-delay="200"
          />
          <ClientCard
            client="Toya Devasya"
            location="Kintamani"
            imgSrc={toyadevasya}
            data-aos="fade-left"
          />
          <ClientCard
            client="Vila Bebek Tepi Sawah"
            location="Ubud"
            imgSrc={bebektepisawah}
          />
          <ClientCard
            client="Kajane Group"
            location="Tegallalang"
            imgSrc={kajanegroups}
          />
          <ClientCard
            client="Villa Agung Khalia"
            location="Ubud"
            imgSrc={vilaagungkhalia}
          />
          <ClientCard
            client="Ubud Tropical"
            location="Ubud"
            imgSrc={ubudtropical}
          />
        </div>
      </section>
    </div>
  );
};

export default ClientSection;
