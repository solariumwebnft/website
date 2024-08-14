import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { SparklesBackground } from "@/components/sparklesBackground";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="relative z-[0] m-0 flex min-h-screen w-full flex-col bg-background">
      <SparklesBackground />
      <header className="fixed top-0 z-10 w-full">
        <Navbar />
      </header>
      <main className="flex flex-grow flex-col justify-center px-10 pt-[4rem] md:px-20">
        <div className="flex max-w-full flex-col gap-4 py-20 text-left text-white">
          <h1 className="text-xl font-bold">Privacy Policy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            dictum eleifend massa, nec laoreet ex placerat ac. Pellentesque et
            enim imperdiet, feugiat sapien blandit, pellentesque nunc. Sed
            suscipit volutpat leo eu scelerisque. Duis vitae mattis lacus, sed
            pharetra nisi. Suspendisse id mauris vel nulla volutpat fringilla.
            Pellentesque vitae ultrices neque. Suspendisse eget velit lectus.
            Sed vitae dignissim sem.
          </p>
          <p>
            Cras lorem neque, tincidunt ac fringilla vel, dapibus a enim. Cras
            ullamcorper facilisis semper. In tempor ultrices bibendum.
            Pellentesque purus nisi, congue vel tincidunt quis, mattis non eros.
            Praesent suscipit augue quam. Fusce ultricies luctus risus. Nullam
            ullamcorper vestibulum urna ac congue. Sed ut magna vulputate,
            mollis orci at, egestas sapien. Cras eget augue mauris. Proin quis
            arcu a felis accumsan finibus.
          </p>
          <p>
            Proin sit amet tincidunt orci. Vivamus non libero bibendum,
            consectetur dolor sit amet, auctor urna. Nullam viverra ipsum elit,
            a posuere turpis lacinia eget. Sed scelerisque mi et luctus rutrum.
            Sed vel ultricies nunc. Fusce dui lacus, imperdiet at viverra sed,
            mollis eget ex. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Sed
            cursus tortor fringilla arcu placerat mollis. Fusce quis ipsum
            vulputate, semper tellus ac, rhoncus eros. Maecenas malesuada leo in
            dignissim laoreet. Sed a gravida augue. Praesent fermentum laoreet
            pretium. Donec molestie turpis mi, sed blandit diam ultrices ut.
            Mauris velit sem, gravida non dictum in, porta eu sem.
          </p>
          <p>
            Mauris venenatis quam in ex iaculis vulputate. Nunc hendrerit at
            arcu id aliquam. Aenean at volutpat nunc. In fringilla leo id erat
            accumsan finibus. Aliquam tristique consequat tellus eu aliquam. Ut
            nec nulla dignissim, laoreet est ac, semper est. Sed nec purus nibh.
            Morbi ut ex feugiat, aliquet augue sit amet, euismod eros. Integer
            cursus aliquam ipsum, eu consequat nisl aliquam non. Praesent id
            metus vel leo volutpat imperdiet. Aenean fermentum tincidunt rutrum.
            Nunc neque quam, feugiat ac semper at, facilisis ac odio. Phasellus
            ante ante, semper eget ipsum vel, malesuada dictum ante. Etiam sit
            amet rhoncus leo, ac pharetra arcu. Duis suscipit fringilla sapien,
            a lacinia sem finibus et. Suspendisse cursus dignissim arcu a
            sagittis.
          </p>
          <p>
            Fusce mollis, lectus vel sollicitudin molestie, enim urna vestibulum
            quam, sit amet facilisis dolor urna sit amet nulla. Cras imperdiet
            commodo dolor, id rhoncus mauris. Suspendisse commodo orci ut
            consequat aliquet. Curabitur eu porta ex. Maecenas metus dui, mattis
            quis nulla a, facilisis tempus lacus. Donec eu metus elit.
            Pellentesque laoreet magna eu enim eleifend elementum. Sed tortor
            metus, scelerisque vel dolor vehicula, placerat bibendum nisl.
            Aenean vehicula lacinia faucibus. Pellentesque viverra volutpat
            molestie. Sed non condimentum erat, nec lacinia risus. Fusce in
            justo id nisl varius placerat id eget ipsum.
          </p>
        </div>
      </main>
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
