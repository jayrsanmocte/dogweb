import React from 'react'

function Home() {

    


  return (
    <>
        <div className="container mt-2">
            <section>
                <div className="row mt-5">
                    <div className="first py-5 col-6 ">
                        <p className='digital'>Digital Content For <span style={{color:'rgba(252,176,66,255)'}}>Dog Lover`s</span></p>
                        <p>As a dog lover, there is a wealth of digital content available that can cater to your interests. One option is to explore dog-related blogs and websites, where you can find informative articles on dog care, training tips, breed profiles, health advice, and inspiring stories about dogs.</p>
                        <div className='py-5'>
                            <button className='btn btn-warning'>Get In Touch</button>
                            <button id="expandButton" className='btn btn-outline-warning ms-4'>Read More</button>
                        </div>
                    </div>
                    <div className="dogsPictureBox  align-items-center" >
                        <img id='dogsPicture' src="Images/dogWebsite.png" alt="Dogs" srcset="" />
                    </div>
                </div>
            </section>
        </div>

        <div className="container">
            <section>
                <div className="Interesting py-5">
                    <p> What`s Interesting About <span style={{color:'rgba(252,176,66,255)'}}>Dogs?</span></p>
                </div>
                <div className="row">
                   
                   
                    <div className='col-4'>
                        <div className="target">
                            <div className='interestingIconsBox pt-5'>
                                <img src='Images/DogIcons/big.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                            </div>
                        </div>
                        <span className='trivia py-4'><label style={{color:'rgba(252,176,66,255)'}}>Biggest &nbsp;</label> Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                    
                    <div className='col-4'>
                    <div className="target">
                        <div className="interestingIconsBox pt-5">
                                <img src='Images/DogIcons/faster.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div>
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Fastest &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                    <div className='col-4'>
                    <div className="target">
                        <div className='interestingIconsBox pt-5'>
                                <img src='Images/DogIcons/many.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div>  
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Many &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                   </div>

                   <div className="row">
                    <div className='col-4'>
                    <div className="target">
                        <div className='interestingIconsBox pt-5'>
                                <img src='Images/DogIcons/moral.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div> 
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Moral &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                    <div className='col-4'>
                    <div className="target">
                        <div className='interestingIconsBox pt-5'>
                                <img src='Images/DogIcons/small.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div>
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Smallest &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                    <div className='col-4'>
                    <div className="target">
                        <div className='interestingIconsBox pt-5'>
                            <img src='Images/DogIcons/strong.png' className="fas hvr-icon-buzz-out interestingIcons"></img>
                        </div>
                    </div>
                        <span className='trivia py-4'><span style={{color: 'rgba(252,176,66,255)'}}>Strongest &nbsp;</span>Dogs</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque debitis, temporibus eius id ipsum magnam sed. At excepturi dolorum fugiat sunt ipsum nesciunt impedit, delectus, quam ad ab quaerat.</p>
                    </div>
                </div>
            </section>
        </div>


    </>
  )
}

export default Home