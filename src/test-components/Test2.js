<div className="container mx-auto py-8  mt-16 ">
<h1 className="ssm:px-44 text-center text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">Explore live spaces with cute
<span className="underline leading-8 underline-offset-8	decoration-8 decoration-[#8B5CF6]">{" "}  Gardens</span></h1>

<div className="flex flex-wrap justify-center py-8  mt-16">
{liveGardens.map((livegarden) => (
  <div
    key={livegarden.id}
    className="w-full sm:w-1/2 md:w-1/3 p-4"
    style={{ minWidth: '250px', minHeight: '300px' }}
  >
    <Garden livegarden={livegarden} />
  </div>
))}
</div>
</div>