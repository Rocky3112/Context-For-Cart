import Image1 from "../../images/Rectangle1.png"
import Image2 from "../../images/Rectangle2.png"
import Image3 from "../../images/Rectangle3.png"
import Image4 from "../../images/Rectangle4.png"



const ContainerBox = () => {
    return (
        <div className="lg:w-[1250px] mx-auto px-5 lg:pt-16 py-5">

<div className="grid grid-cols-12 gap-3 lg:gap-5">

<div className=" col-span-6 row-span-8">
  <img className="rounded-lg lg:w-full lg:h-[500px] h-[168px] w-[160px]" src={Image1} alt="" />
</div>

<div className=" col-span-6 row-span-6">
  <img className="rounded-lg lg:w-full lg:h-[350px] h-[122px] w-[160px] mb-2 lg:mb-0" src={Image2} alt="" />
</div>

<div className="col-span-6 row-span-6">
  <img className="rounded-lg lg:w-full lg:h-[350px] h-[124px] w-[160px]" src={Image4} alt="" />
</div>

<div className=" col-span-6 row-span-4">
  <img className="lg:w-full lg:h-[200px] h-[77px] w-[160px]" src={Image3} alt="" />
</div>

</div>


        </div>

    );
};

export default ContainerBox;