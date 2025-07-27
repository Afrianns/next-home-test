import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="space-y-3 mb-10 max-md:mx-5">
      <div className="my-10">
        <div className="flex items-center gap-x-2 justify-center text-gray-600 text-sm mt-5">
          <span>05 Agustus 2025</span>
          <span>created by admin</span>
        </div>
        <h1 className="text-center font-bold text-2xl">
          Welcome to Detail {id} Articles
        </h1>
      </div>
      <Image
        src="/young-male-designer.jpg"
        alt="Image"
        className="rounded-md object-cover w-full h-[400px]"
        width={500}
        height={400}
      />
      <p className="my-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut voluptates
        reprehenderit nulla harum consequatur voluptatibus ratione consequuntur
        nihil alias, qui minus voluptate esse optio cumque, inventore corporis
        officia, dicta voluptatem ipsa? Quasi quia obcaecati laboriosam
        dignissimos accusamus omnis tempore vel, est, minima necessitatibus
        perspiciatis quibusdam laborum corporis id eius dolore perferendis ex
        molestiae ipsam! Illo tenetur at alias dolore obcaecati a minus in
        illum, corporis numquam aliquid vitae? Nisi eaque aut tenetur error
        recusandae. Aliquam temporibus sapiente, voluptas harum, itaque quasi
        nemo quidem laborum, fugiat cum porro sunt minus cumque dolorem aperiam
        doloremque. Id deserunt rerum officiis, harum, accusamus fugit
        provident, sed obcaecati atque corrupti aliquid. Commodi nam sapiente
        ipsam, voluptatum perspiciatis minima! Vel eveniet quaerat doloribus
        velit commodi earum facere magni, veritatis officiis libero nisi, beatae
        dolore cumque voluptatibus veniam assumenda deleniti, quidem similique
        iure dicta animi molestias iste saepe? Numquam ad qui perferendis, totam
        ipsum recusandae quas suscipit voluptas accusamus voluptatem odit, quia
        at eaque minus a quod mollitia placeat architecto dignissimos maxime
        vitae delectus! Consequuntur impedit qui perferendis facilis dolorem
        molestias repellat doloribus doloremque numquam placeat, minima delectus
        laudantium excepturi officia temporibus! Dolorum eos cum doloremque
        alias sequi ut repellat quo voluptatibus consectetur, quas commodi nisi.
      </p>
    </div>
  );
}
