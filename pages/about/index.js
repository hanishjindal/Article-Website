import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="flex flex-col items-center p-20">
      <h1 className="text-8xl mb-5">Article Co.</h1>
      <div className="flex my-8">
        <Image
          src="/image.png"
          alt=""
          width={200}
          height={100}
          className="border-4 border-grey-700 mr-10 md:mr-20 rounded-xl "
        />
        <div className="flex flex-col mt-5">
          <h2 className="text-4xl">Hanish Jindal</h2>
          <span className="italic">Developer</span>
        </div>
      </div>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, odit
        blanditiis suscipit sunt enim et corporis veniam sit architecto
        voluptatum. Minus doloremque eligendi aliquid pariatur sit ratione sunt
        illo molestiae placeat necessitatibus. Libero omnis illum vel qui nemo!
        Numquam quo vel officia excepturi quasi sed ab necessitatibus maiores
        nesciunt, accusamus qui optio corrupti aliquid atque iusto dicta
        voluptatem eos amet soluta. Ex, vel incidunt explicabo ipsum eaque natus
        modi quas nisi laboriosam rem consequatur impedit esse dolores culpa
        adipisci nulla. Ab eius dolores numquam quaerat sunt deserunt sit
        laudantium modi maxime molestiae harum, excepturi veniam debitis hic
        necessitatibus quasi et magni repellendus ipsa vitae aut possimus rem
        cumque! Dolor tempore labore accusamus quam autem odit molestias
        incidunt enim officia sed. Dolore dolores ab nihil quia quos itaque sed,
        consectetur, repellat rem iste animi distinctio totam dolorum cumque
        unde voluptatem vel nostrum voluptatum, accusantium temporibus maxime
        vero a. Optio ipsum magni laboriosam fugiat modi eveniet totam eos?
        Quas, nihil. Architecto dolor, commodi molestias consectetur ab sunt,
        non natus repellendus nam asperiores mollitia quis aliquam, ea
        reprehenderit fugit iure repudiandae consequatur. Officia debitis esse
        quas quis autem dolores ipsa deleniti dolor odit excepturi sunt nobis,
        ad eius earum, laudantium placeat expedita omnis.
      </p>
    </div>
  );
}

export default index;
