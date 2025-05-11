import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import companypath from "../admin/BackendURL";
// import { Carousel } from "@material-tailwind/react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  


function Homepage() {

    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(0)



    useEffect(() => {
        fetch(companypath + 'challengesdata').then((res) => res.json()).then((result) => {
            console.log(result)
            setData(result)
        })
    }, [refresh])



    const slides = [
        { image: 'https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png', title: 'Airtable Credits', title2: 'Streamline your startup with Airtable' },
        { image: 'https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png', title: 'Competitive salary', title2: 'Begin your journey stress-free' },
        { image: 'https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png', title: '$10,000 USD in company funding', title2: 'Kickstart your venture with solid funding' },
        { image: 'https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png', title: '10% founder equity', title2: 'Own your share in what you create' },
        { image: 'https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png', title: '$100000 USD AWS Credits', title2: 'Harness AWS for robust infrastructure' },
        { image: 'https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png', title: '$1000 OpenAI Credits', title2: 'Leverage cutting-edge AI to build smart solutions .' },

        // {image: '',title: '',title2:''},



    ];


    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };


    return (
        <>
            <Navbar />
            {/* <h1 className="md:bg-[red] lg:bg-[yellow] sm:bg-[blue]">hello</h1> */}

            <div className="flex justify-center imageforhome">
                <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/66b7a9b742a15fc71db053f3_pv%20team%20cropped.png" className=""></img>
            </div>

            <div className="flex justify-center ">
                <h1 className="magic-text-heading text-5xl sm:text-white sm:font-bold text-3xl sm:text-4xl md:text-[90px] lg:text-[90px] font-semibold md:font-extrabold">
                    Startupathon
                </h1>
            </div>

            <div className="flex justify-center flex-wrap w-full items-center">
                <h1 className="text-xl sm:text-3xl text-white text-3xl font-[600] text-center">Your Chance to Build, Lead, and Succeed as a Founder </h1>
            </div>

            <div className="flex justify-center mt-10 w-full">
                <div className="border border-[#7A56D6] w-[763px] h-[502px]">
                    {/* <video width="320" height="240" controls>
                        <source src="movie.mp4" type="video/mp4">
                            <source src="movie.ogg" type="video/ogg">
                                Your browser does not support the video tag.
                            </video> */}

                    {/* <iframe width="763" height="502" src="https://www.loom.com/share/996f59a2e5c34fd38b86544833c23dde?sid=c33b75e8-2703-4e37-99cb-9a3fa53bcef3" frameborder="1" allowFullScreen></iframe> */}
{/* 
                    <iframe width="763" height="502" src="https://www.youtube.com/embed/668nUCeBHyY?si=7cVPipQKxyEon_Ls" title="YouTube video player" frameborder="0" allow="accelerometer" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}  
                </div>
            </div>


            <div className="flex justify-center flex-wrap w-full mt-10">
                <button className="w-[330px] h-[45px] md:w-[230px] md:h-[65px] bg-gray-900 px-3 py-2 text-lg font-medium applyforfellowship rounded-sm m-5 mx-3">Ongoing Startupathon</button>

                <button className="w-[330px] h-[45px] md:w-[230px] md:h-[65px] bg-gray-900 px-3 py-2 text-lg font-medium applyforfellowship rounded-sm m-5 mx-3">Startupathon Guide</button>

                <button className="w-[330px] h-[45px] md:w-[230px] md:h-[65px] bg-gray-900 px-3 py-2 text-lg font-medium applyforfellowship rounded-sm m-5 mx-3">Past Startupathons</button>

                <button className="w-[330px] h-[45px] md:w-[230px] md:h-[65px] bg-gray-900 px-3 py-2 text-lg font-medium applyforfellowship rounded-sm m-5 mx-3">Mentor Network</button>
            </div>


            <div className="flex justify-center flex-wrap mt-10">
                <h1 className="text-xl sm:text-3xl text-white text-3xl font-[600] text-center">Startupathon Success Comes with Extraordinary Rewards</h1>
            </div>


            <div className="hidden lg:flex justify-center items-center mt-10 flex-wrap">

                <div className="w-[900px] h-[300px] flex justify-center flex-wrap">
                    <div className="w-[150px] h-[150px] border border-[#7A56D6] flex justify-center items-center mx-5 my-5 shadow">
                        <div>
                            <div className="flex justify-center">
                                <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png" className="w-[50px] h-[50px]"></img></div>
                            <h1 className="text-white text-center">Airtable Credits</h1>
                            {/* <p className="text-white text-center">Streamline your startup with Airtable</p> */}

                        </div>
                    </div>

                    <div className="w-[150px] h-[150px] border border-[#7A56D6] flex justify-center items-center mx-5 my-5 shadow">
                        <div>
                            <div className="flex justify-center">
                                <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png" className="w-[50px] h-[50px]"></img></div>
                            <h1 className="text-white text-center">Competitive salary</h1>
                            {/* <p className="text-white text-center">Begin your journey stress-free</p> */}

                        </div>
                    </div>





                    <div className="w-[150px] h-[150px] border border-[#7A56D6] flex justify-center items-center mx-5 my-5 shadow">
                        <div>
                            <div className="flex justify-center">
                                <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png" className="w-[50px] h-[50px]"></img></div>
                            <h1 className="text-white text-center">$10,000 USD in company funding</h1>
                            {/* <p className="text-white text-center">Kickstart your venture with solid funding</p> */}

                        </div>
                    </div>



                    <div className="w-[150px] h-[150px] border border-[#7A56D6] flex justify-center items-center mx-5 my-5 shadow">
                        <div>
                            <div className="flex justify-center">
                                <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png" className="w-[50px] h-[50px]"></img></div>
                            <h1 className="text-white text-center">10% founder equity</h1>
                            {/* <p className="text-white text-center">Own your share in what you create</p> */}

                        </div>
                    </div>


                    <div className="w-[150px] h-[150px] border border-[#7A56D6] flex justify-center items-center mx-5 my-5 shadow">
                        <div>
                            <div className="flex justify-center">
                                <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png" className="w-[50px] h-[50px]"></img></div>
                            <h1 className="text-white text-center">$100000 USD AWS Credits</h1>
                            {/* <p className="text-white text-center">Harness AWS for robust infrastructure.</p> */}

                        </div>
                    </div>


                    <div className="w-[150px] h-[150px] border border-[#7A56D6] flex justify-center items-center mx-5 my-5 shadow">
                        <div>
                            <div className="flex justify-center">
                                <img src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png" className="w-[50px] h-[50px]"></img></div>
                            <h1 className="text-white text-center">$1000 OpenAI Credits</h1>
                            {/* <p className="text-white text-center">Leverage cutting-edge AI to build smart solutions .</p> */}

                        </div>
                    </div>

                </div>

            </div>


////////////////////////////

            <div className="flex justify-center lg:hidden md:hidden ms-10">
                
<Carousel className="w-full max-w-xs">
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        {slides.map((items,index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className={'bg-[#0D0A1A] border border-[#7a56d6] w-[300px] h-[350px]'}>
                <CardContent className="flex aspect-square items-center justify-center">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <div className="flex justify-center items-center ">
                        <div className="">
                            <div className="flex justify-center">
                            <img src={items.image}></img></div>
                            <h1 className="text-white text-center">{items.title}</h1>
                            <h2 className="text-white text-center">{items.title2}</h2>
                        </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={''}/>
      <CarouselNext className={'me-6'}/>
    </Carousel>
            </div>

/////////////////////////////////////////////

            <div className="flex justify-center items-center mt-30">
                <div>
                    <h1 className="text-xl sm:text-3xl text-white text-3xl font-[700] text-center">Ongoing Startupathon Challenges</h1>

                    <h1 className="text-lg sm:text-xl text-[#b7b3b2] text-xl font-[700] text-center">Start your journey -- tackle live challenges, earn equity, and lead the future</h1>
                </div>

            </div>



            <div className="flex justify-center items-center mt-15 flex-wrap">

                {data.map((item) => (
                    
                        item.status == 1 ? (
                            




                            <div className="w-[340px] h-[550px] md:w-[400px] md:h-[470px] border border-[#7A56D6] rounded-2xl px-20 mt-10 mx-5 pt-4 bg-[#8774b726] hover:bg-[black]">
                                <div className="flex justify-center">
                                    <div className="ps-10 pe-10 pb-30">
                                        <div className="flex justify-center">
                                            <img src={item.url}></img></div>

                                        <h1 className="text-white text-center text-2xl font-[700]">{item.title}</h1>

                                        <h1 className="text-[#7A56D6] text-center text-xl font-[600]">Initial Funding offered: ${item.funding}</h1>

                                        <p className="text-white text-center mt-7">{item.Description}</p>

                                        <h1 className="text-[#7A56D6] text-center text-xl font-[600] mt-10">Deadline approaching! Apply by {item.deadline}!</h1>

                                        {/* <button className="w-full "></button> */}
                                        <button className="w-[280px] h-[40px] md:w-[320px] h-[40px]  bg-gray-900 text-lg font-medium applyforfellowship rounded-sm mb-[30px]">View Challenge Details</button>

                                    </div>
                                </div>
                            </div>

                        ) : null
                    
                ))}

            </div>


{/* 
            
    <div className="bg-[#0D0A1A] text-white font-sans p-6 flex justify-center min-h-screen">
      <div className="max-w-3xl text-center">
        <h1 className="text-2xl font-bold">
          Found an idea that matches your skills?
        </h1>
        <p className="text-gray-400 italic mt-2">
          Here’s a simple guide on how the Startupathon process works once you
          find a project idea that suits your skills.
        </p>

        <div className="flex items-center justify-between mt-12 relative">
        
          <div className="w-1/3 text-left">
            <h2 className="text-lg font-semibold text-gray-300">
              Dive into the Challenge Details Video
            </h2>
          </div>

         
          <div className="relative flex flex-col items-center w-1/6">
            <div className="w-10 h-10 bg-purple-500 flex items-center justify-center rounded-full text-white text-lg">
              ▶
            </div>
            <div className="w-1 bg-gray-600 h-24"></div>
            <div className="w-10 h-10 bg-purple-700 flex items-center justify-center rounded-full text-white">
              🎬
            </div>
          </div>

          
          <div className="w-1/3 text-left">
            <h2 className="text-lg font-semibold text-purple-400">
              It all starts here!
            </h2>
            <p className="text-gray-300 mt-2">
              Receive an exciting task—your startup idea—with a detailed video
              to spark creativity and clarify our vision.
            </p>
            <p className="text-sm text-yellow-300 mt-2">
              💡 <span className="font-bold">Pro Tip:</span> Pay attention—it’s
              more than just instructions. It’s your roadmap to success!
            </p>
          </div>
        </div>
      </div>
    </div> */}

<div className="flex justify-center mt-20">
<div>
<h1 className="text-2xl font-bold text-white text-center">
          Found an idea that matches your skills?
        </h1>
        <p className="text-gray-400 italic mt-2 text-center">
          Here’s a simple guide on how the Startupathon process works once you
          find a project idea that suits your skills.
        </p>
        </div>
</div>


<div className="timeline">
    <div className="container left-container">
        <div className="text-box">
            <h2 className="text-4xl font-[900]">
            Dive into the Challenge Details Video
            </h2>

        </div>
    </div>

    <div className="container right-container">
        <div className="text-box">
            <h2 className="text-2xl font-[700] text-[#7a56d6] font-[600]">It all starts here!</h2>
            <p className="text-xl font-[600]">Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.</p>
        </div>
    </div>

    <div className="container left-container"> 
        <div className="text-box">
            
        <h2 className="text-4xl font-[900]">
        Build, Submit & Shine

            </h2>
      
        </div>
    </div>




    <div className="container right-container">
        <div className="text-box">
            {/* <h2 className="text-2xl font-[700] text-[#7a56d6]">It all starts here!</h2> */}
            <p className="text-xl font-[600]">
            Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most.</p>
            <small className="text-sm mt-2 font-[600]">Stay ahead: Submit on time or early to show your dedication!</small>
        </div>
    </div>


    <div className="container left-container"> 
        <div className="text-box">
        <h2 className="text-4xl font-[900]">
        Get Feedback, Level Up!
            </h2>
        </div>
    </div>


    <div className="container right-container">
        <div className="text-box">
            {/* <h2 className="text-2xl font-[700] text-[#7a56d6]">It all starts here!</h2> */}
            <p className="text-xl font-[600]">
            Three days after submission, we review your work. If it stands out, you're in! If not, we'll share feedback on how to improve. The cycle continues until we find the perfect fit.</p>
            <small className="text-sm mt-2 font-[600]">Pro Tip : This feedback is gold. Use it to sharpen your submission or learn what it takes to win!</small>
        </div>
    </div>


    <div className="container left-container"> 
        <div className="text-box">
        <h2 className="text-4xl font-[900] ">
        Claim Your Crown
            </h2>
        </div>
    </div>



    <div className="container right-container">
        <div className="text-box">
            <h2 className="text-2xl font-[700] text-[#7a56d6] font-[600]">Ace the challenge to become the project leader.</h2>
            <p className="text-xl font-[600]">Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy ownership, 20% equity, and a competitive salary. Turn vision into impact with top-tier talent!</p>
        </div>
    </div>
    


</div>



        </>
    )
}


export default Homepage